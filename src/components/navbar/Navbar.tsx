import { Flex } from "@radix-ui/themes";
import UserOptions from "./UserOptions";
import Cart from "./Cart";

const Navbar = () => {
  return (
    <Flex className="bg-blue-400 h-15 px-7" align="center" justify="between">
      <UserOptions />
      <Cart />
    </Flex>
  );
};

export default Navbar;
