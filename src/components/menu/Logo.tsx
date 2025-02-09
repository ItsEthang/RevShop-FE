import { Flex, Avatar, Text } from "@radix-ui/themes";
import logo from "../../assets/jiik-shop-logo.webp";

const Logo = () => {
  return (
    <Flex
      align="center"
      gap="3"
      className="border-b-2 border-black border-solid pb-3"
    >
      <Avatar src={logo} fallback="JS" />
      <Text className="font-bold text-lg hidden md:block">Jiik Shop</Text>
    </Flex>
  );
};

export default Logo;
