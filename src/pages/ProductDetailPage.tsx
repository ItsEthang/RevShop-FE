import { useParams } from "react-router-dom";
import { Box, Flex, Text, Heading, Separator, Button, Select, TextArea } from "@radix-ui/themes";
import { useState } from "react";
import { FaShoppingCart, FaStar, FaRegStar } from "react-icons/fa";
import useProduct from "../hooks/useProduct";
import useReview from "../hooks/useReview";
import { Product, Review } from "../dto/Dto";
import ProductStockBadge from "../components/product/ProductStockBadge";
import Navbar from "../components/navbar/Navbar";
import SideMenu from "../components/menu/SideMenu";
import apiClient from "../services/api-client";
import useBuyer from "../hooks/useBuyer";
import Cookies from "js-cookie";

const ProductDetailPage = () => {
  const { id } = useParams();
  const buyerId = useBuyer();
  const token = Cookies.get("_auth") ?? "";

  const { data: products, isLoading, error } = useProduct();
  const { data: reviews, isLoading: reviewsLoading, error: reviewsError, refetch } = useReview(Number(id));

  const [selectedQuantity, setSelectedQuantity] = useState("1");
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState("1");
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (isLoading || reviewsLoading) {
    return <Heading as="h2">Loading...</Heading>;
  }
  if (error || reviewsError) {
    return <Heading as="h2">Error fetching data</Heading>;
  }

  const product: Product | undefined = products.find((p) => p.id === Number(id));
  if (!product) {
    return <Heading as="h2">Product not found</Heading>;
  }

  const quantities = Array.from({ length: product.stockQuantity }, (_, i) => i + 1);

  const handleSubmitReview = async () => {
    if (!reviewText.trim()) return;

    if (!buyerId) {
      console.error("Error: Buyer ID is missing.");
      return;
    }

    setIsSubmitting(true);
    try {
      await apiClient.post(
        `/reviews/add?buyerId=${buyerId}`,
        {
          productId: product.id,
          rating: Number(rating),
          comment: reviewText,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );
      setReviewText("");
      setRating("5");
      refetch();
    } catch (error) {
      console.error("Error submitting review", error);
    }
    setIsSubmitting(false);
  };

  const renderStars = (rating: number) => (
    <Flex>
      {[...Array(5)].map((_, i) =>
        i < rating ? <FaStar key={i} className="text-yellow-500" /> : <FaRegStar key={i} className="text-gray-500" />
      )}
    </Flex>
  );

  return (
    <>
      <SideMenu />
      <Box className="ml-45 bg-foblue-300 min-h-screen">
        <Navbar />
        <Box className="p-10">
          <Box className="bg-foyellow-700 border-2 border-black rounded-lg p-5 max-w-4xl mx-auto">
            <Flex gap="10">
              <Box className="w-1/2 flex justify-center">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-[350px] h-[350px] object-cover rounded-lg border-2 border-black"
                />
              </Box>
              <Box className="w-1/2">
                <Heading>{product.name.toUpperCase()}</Heading>
                <Separator size="4" className="my-3" />
                <Text className="text-gray-700">{product.description}</Text>
                <Separator size="4" className="my-3" />
                <Flex justify="between">
                  <Text>Original Price:</Text>
                  <Text className="line-through">${product.price.toFixed(2)}</Text>
                </Flex>
                <Flex justify="between">
                  <Text>Discounted Price:</Text>
                  <Text className="text-red-500">${product.discountedPrice.toFixed(2)}</Text>
                </Flex>
                <Separator size="4" className="my-3" />
                <ProductStockBadge stock={product.stockQuantity} threshold={product.lowStockThreshold} />
                <Separator size="4" className="my-3" />
                <Flex gap="4" align="center">
                  <Select.Root onValueChange={setSelectedQuantity} defaultValue="1">
                    <Select.Trigger placeholder="Quantity" variant="soft" color="gray" />
                    <Select.Content position="popper" className="max-h-40">
                      {quantities.map((quantity) => (
                        <Select.Item key={quantity} value={quantity.toString()}>{quantity}</Select.Item>
                      ))}
                    </Select.Content>
                  </Select.Root>
                  <Button disabled={product.stockQuantity === 0} onClick={() => console.log(`Adding ${selectedQuantity} of ${product.name} to cart`)}>
                    <FaShoppingCart />
                    Add to Cart
                  </Button>
                </Flex>
              </Box>
            </Flex>
          </Box>

          <Box className="mt-10 max-w-4xl mx-auto">
  <Flex gap="6" justify="between" align="start">
    
    <Box className="w-1/2 bg-foyellow-700 border-2 border-black rounded-lg p-5">
      <Heading as="h3">Reviews</Heading>
      <Separator size="4" className="my-3" />
      {reviews.length > 0 ? (
        reviews.map((review: Review) => (
          <Box key={review.id} className="border-2 border-black rounded-lg p-5 my-3 bg-white">
            <Flex justify="between">
              <Text weight="bold">User {review.buyerId}</Text>
              {renderStars(review.rating)}
            </Flex>
            <Text className="text-sm text-gray-500">{new Date(review.reviewDate).toLocaleString()}</Text>
            <Separator size="2" className="my-2" />
            <Text>{review.comment}</Text>
          </Box>
        ))
      ) : (
        <Text>No reviews for this product yet.</Text>
      )}
    </Box>

    <Box className="w-2/5 bg-foyellow-700 border-2 border-black rounded-lg p-5 self-start"
         style={{ alignSelf: "start" }}>
      <Heading as="h4">Leave a Review</Heading>
      <Separator size="2" className="my-3" />

      <Flex gap="3" align="center" className="mb-3">
        <Text>Rating:</Text>
        <Flex>
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => setRating(star.toString())}
              className="text-yellow-500 text-xl"
            >
              {star <= Number(rating) ? <FaStar /> : <FaRegStar />}
            </button>
          ))}
        </Flex>
      </Flex>

      <TextArea value={reviewText} onChange={(e) => setReviewText(e.target.value)} placeholder="Write your review..." />

      <Flex justify="end" className="mt-3">
        <Button onClick={handleSubmitReview} disabled={isSubmitting || !reviewText.trim()}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </Flex>
      
    </Box>

  </Flex>
</Box>
        </Box>
      </Box>
    </>
  );
};

export default ProductDetailPage;