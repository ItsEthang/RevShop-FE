import { Flex } from "@radix-ui/themes";
import UserOptions from "./UserOptions";
import Cart from "./Cart";

const Navbar = () => {
  return (
    <Flex
      className="bg-foyellow-500 h-15 px-7 border-2 border-solid border-black"
      align="center"
      justify="between"
    >
      <UserOptions />
      <Cart />
    </Flex>
  );
};

export default Navbar;
