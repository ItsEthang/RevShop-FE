import { Box } from "@radix-ui/themes";

const ProductPage = () => {
  return (
    <>
      <Box className="h-screen w-50 fixed bg-red-200">Menu</Box>
      <Box className="ml-50">
        <Box className="bg-blue-200 h-20">Navbar</Box>{" "}
        <Box className="bg-black">Content</Box>
      </Box>
    </>
  );
};

export default ProductPage;
