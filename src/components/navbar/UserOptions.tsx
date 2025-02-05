import { Button, DropdownMenu } from "@radix-ui/themes";
import { FaRegCircleUser } from "react-icons/fa6";

const UserOptions = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button variant="soft" color="gray">
          <FaRegCircleUser />
          Username
          <DropdownMenu.TriggerIcon />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item>My Shop</DropdownMenu.Item>
        <DropdownMenu.Item>Order Placed</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item>Logout</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default UserOptions;
