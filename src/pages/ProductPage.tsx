import { Box } from "@radix-ui/themes";
import SideMenu from "../components/menu/SideMenu";

const ProductPage = () => {
  return (
    <>
      <SideMenu />
      <Box className="ml-45">
        <Box className="bg-slate-200 h-20">Navbar</Box>{" "}
        <Box className="bg-black">Content</Box>
      </Box>
    </>
  );
};

export default ProductPage;
