import { Box } from "@radix-ui/themes";
import SideMenu from "../components/menu/SideMenu";
import Navbar from "../components/navbar/Navbar";

const ProductPage = () => {
  return (
    <>
      <SideMenu />
      <Box className="ml-45">
        <Navbar />
        <Box className="bg-black">Content</Box>
      </Box>
    </>
  );
};

export default ProductPage;
