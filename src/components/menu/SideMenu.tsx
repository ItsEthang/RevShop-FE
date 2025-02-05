import { Flex } from "@radix-ui/themes";
import Logo from "./Logo";
import Options from "./Options";

const SideMenu = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="between"
      className="h-screen w-50 fixed bg-blue-200"
    >
      <Logo />
      <Options />
    </Flex>
  );
};

export default SideMenu;
