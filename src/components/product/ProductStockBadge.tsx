import { Badge } from "@radix-ui/themes";

interface Props {
  stock: number;
  threshold: number;
}

const ProductStockBadge = ({ stock, threshold }: Props) => {
  const badgeColor =
    stock >= threshold ? "green" : stock > 0 ? "orange" : "red";
  const badgeText =
    stock >= threshold ? "In Stock" : stock > 0 ? "Low Stock" : "Out of Stock";
  return (
    <Badge color={badgeColor} className="w-max">
      {badgeText}
    </Badge>
  );
};

export default ProductStockBadge;
