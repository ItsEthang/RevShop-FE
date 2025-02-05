import { Box, Button, Flex } from "@radix-ui/themes";
import { AiOutlineProduct } from "react-icons/ai";
import { GrFavorite } from "react-icons/gr";
import { MdOutlineHistory } from "react-icons/md";

const Options = () => {
  return (
    <Flex direction="column" align="center" gap="5">
      <Flex direction="column" align="center">
        <Button>
          <Box className="px-4">
            <AiOutlineProduct />
          </Box>
        </Button>
        Products
      </Flex>
      <Flex direction="column" align="center">
        <Button>
          <Box className="px-4">
            <MdOutlineHistory />
          </Box>
        </Button>
        History
      </Flex>
      <Flex direction="column" align="center">
        <Button>
          <Box className="px-4">
            <GrFavorite />
          </Box>
        </Button>
        Favorites
      </Flex>
    </Flex>
  );
};

export default Options;
