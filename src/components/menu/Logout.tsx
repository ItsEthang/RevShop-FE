import { Button } from "@radix-ui/themes";
import { FiLogOut } from "react-icons/fi";

const Logout = () => {
  return (
    <Button color="ruby">
      Logout
      <FiLogOut />
    </Button>
  );
};

export default Logout;
