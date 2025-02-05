import { Grid } from "@radix-ui/themes";

const ProductGrid = () => {
  return (
    <Grid columns={{ initial: "1", xs: "2", md: "3", lg: "5" }} gap="5"></Grid>
  );
};

export default ProductGrid;
