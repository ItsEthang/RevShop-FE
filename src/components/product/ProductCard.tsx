import { Box, Flex, Text } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import { Product } from "../../dto/Dto";
import ProductStockBadge from "./ProductStockBadge";
import AddToCart from "./AddToCart";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Box
      key={product.id}
      className="bg-foyellow-700 rounded-lg p-5 border-1 border-solid border-black"
    >
      <Flex direction="column" gap="3">
        <ProductStockBadge
          stock={product.stockQuantity}
          threshold={product.lowStockThreshold}
        />

        <Box
          position="relative"
          width="100%"
          height={{ initial: "300px", md: "250px", lg: "200px" }}
        >
          <Link to={`/products/${product.id}`} className="block">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="object-cover h-50 w-full rounded-md border-1 border-solid border-black"
            />
          </Link>
        </Box>
        <Text
          as="div"
          align="center"
          className="overflow-hidden text-ellipsis whitespace-nowrap"
        >
          {product.name.toUpperCase()}
        </Text>
        <Flex justify="between">
          <Text as="div">Price: </Text>
          <Text as="div">$ {product.price}</Text>
        </Flex>

        <AddToCart product={product} />
      </Flex>
    </Box>
  );
};

export default ProductCard;
