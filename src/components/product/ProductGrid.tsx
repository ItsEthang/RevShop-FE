import { Grid, Heading } from "@radix-ui/themes";
import useProduct from "../../hooks/useProduct";
import ProductLoading from "./ProductLoading";
import ProductCard from "./ProductCard";

const ProductGrid = () => {
  const { data: products, isLoading, error } = useProduct();
  if (isLoading) {
    return <ProductLoading />;
  }
  if (error) {
    return <Heading as="h2">Error fetching products</Heading>;
  }
  return (
    <Grid columns={{ initial: "1", xs: "2", md: "3", lg: "5" }} gap="5">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Grid>
  );
};

export default ProductGrid;
