import { Flex, Select, Button } from "@radix-ui/themes";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Product } from "../../dto/Dto";

const AddToCart = ({ product }: { product: Product }) => {
  const quantities = Array.from(
    { length: product.stockQuantity + 1 },
    (_, i) => i
  );

  const [selectQuantity, setSelectQuantity] = useState("0");

  return (
    <Flex
      justify={{ initial: "between", lg: "center" }}
      direction={{ lg: "column" }}
      gap="3"
    >
      <Select.Root onValueChange={setSelectQuantity}>
        <Select.Trigger placeholder="Quantity" variant="soft" color="gray" />
        <Select.Content position="popper" className="max-h-10">
          {quantities.map((quantity) => (
            <Select.Item key={quantity} value={quantity.toString()}>
              {quantity > 0 ? quantity : "Quantity"}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
      <Button
        disabled={+selectQuantity === 0}
        onClick={() => console.log(`Adding ${product.name} to cart`)}
      >
        <FaShoppingCart />
        Add to Cart
      </Button>
    </Flex>
  );
};

export default AddToCart;
