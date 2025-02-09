import { Box, Button, Flex, Text } from "@radix-ui/themes";
import { AiOutlineProduct } from "react-icons/ai";
import { GrFavorite } from "react-icons/gr";
import { MdOutlineHistory } from "react-icons/md";

const Options = () => {
  return (
    <Flex direction="column" align="center" gap="5">
      <Flex direction="column" align="center">
        <Button variant="solid">
          <Box className="px-4">
            <AiOutlineProduct />
          </Box>
        </Button>
        <Text weight="bold">Products</Text>
      </Flex>
      <Flex direction="column" align="center">
        <Button>
          <Box className="px-4">
            <MdOutlineHistory />
          </Box>
        </Button>
        <Text weight="bold">History</Text>
      </Flex>
      <Flex direction="column" align="center">
        <Button>
          <Box className="px-4">
            <GrFavorite />
          </Box>
        </Button>
        <Text weight="bold">Favorites</Text>
      </Flex>
    </Flex>
  );
};

export default Options;
