import { Flex } from "@radix-ui/themes";
import UserOptions from "./UserOptions";

const Navbar = () => {
  return (
    <Flex className="bg-blue-400 h-20 px-5" align="center" justify="between">
      <UserOptions />
    </Flex>
  );
};

export default Navbar;
