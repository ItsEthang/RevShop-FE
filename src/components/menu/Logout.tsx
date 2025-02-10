import { Button, Text } from "@radix-ui/themes";
import useSignOut from "react-auth-kit/hooks/useSignOut";
import { FiLogOut } from "react-icons/fi";

const Logout = () => {
  const signOut = useSignOut();
  return (
    <Button color="ruby" onClick={() => signOut()}>
      <Text weight="bold" as="span">
        Logout
      </Text>
      <FiLogOut />
    </Button>
  );
};

export default Logout;
