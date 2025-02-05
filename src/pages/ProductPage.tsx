import { Box } from "@radix-ui/themes";
import SideMenu from "../components/menu/SideMenu";
import Navbar from "../components/navbar/Navbar";
import CategoryFilter from "../components/category/CategoryFilter";

const ProductPage = () => {
  return (
    <>
      <SideMenu />
      <Box className="ml-45">
        <Navbar />
        <Box className="p-10">
          <CategoryFilter />
        </Box>
      </Box>
    </>
  );
};

export default ProductPage;
