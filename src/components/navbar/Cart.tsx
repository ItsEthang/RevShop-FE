import { Button, Text } from "@radix-ui/themes";
import { TiShoppingCart } from "react-icons/ti";

const Cart = () => {
  return (
    <Button variant="ghost" color="gray" size="3">
      <Text weight="bold">Cart </Text>
      <TiShoppingCart />
    </Button>
  );
};

export default Cart;
