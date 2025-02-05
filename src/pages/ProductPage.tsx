import { Box, Separator } from "@radix-ui/themes";
import SideMenu from "../components/menu/SideMenu";
import Navbar from "../components/navbar/Navbar";
import CategoryFilter from "../components/category/CategoryFilter";
import ProductGrid from "../components/product/ProductGrid";

const ProductPage = () => {
  return (
    <>
      <SideMenu />
      <Box className="ml-45">
        <Navbar />
        <Box className="p-10 bg-amber-100">
          <CategoryFilter />
          <Separator size="4" className="my-5" />
          <ProductGrid />
        </Box>
      </Box>
    </>
  );
};

export default ProductPage;
