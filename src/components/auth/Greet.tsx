import { Flex, Heading, Separator, Text } from "@radix-ui/themes";
import { FaCartShopping } from "react-icons/fa6";
import { MdSell } from "react-icons/md";
import Logo from "../menu/Logo";

const Greet = () => {
  return (
    <Flex
      direction="column"
      align="center"
      className="h-screen bg-foyellow-500 py-6 border-2 border-solid border-black"
    >
      <Logo />
      <Heading as="h2" mt="150px">
        Tell us about yourself!
      </Heading>
      <Flex direction="column" gap="5" mt="9">
        <Flex
          align="center"
          gap="3"
          className="bg-foblue-300 p-6 rounded-lg hover:bg-foblue-500 cursor-pointer"
          width="350px"
        >
          <FaCartShopping />
          <Text>I am a shopper!</Text>
        </Flex>
        <Separator size="4" />
        <Flex
          align="center"
          gap="3"
          className="bg-foblue-300 p-6 rounded-lg hover:bg-foblue-500 cursor-pointer"
          width="350px"
        >
          <MdSell />
          <Text>I am a seller!</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Greet;
