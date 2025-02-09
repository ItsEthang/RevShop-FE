import { Button, Text } from "@radix-ui/themes";
import { FiLogOut } from "react-icons/fi";

const Logout = () => {
  return (
    <Button color="ruby">
      <Text weight="bold" as="span">
        Logout
      </Text>
      <FiLogOut />
    </Button>
  );
};

export default Logout;
