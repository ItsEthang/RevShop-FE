import { Flex } from "@radix-ui/themes";
import Logo from "./Logo";
import Logout from "./Logout";
import Options from "./Options";

const SideMenu = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="between"
      className="h-screen w-45 fixed bg-blue-300 py-6"
    >
      <Logo />
      <Options />
      <Logout />
    </Flex>
  );
};

export default SideMenu;
