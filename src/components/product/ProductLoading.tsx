import { Grid, Flex } from "@radix-ui/themes";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductLoading = () => {
  const skeletonCount = 10;
  return (
    <Grid columns={{ initial: "1", md: "3", lg: "5" }} gap="5">
      {Array.from({ length: skeletonCount }).map((_, index) => (
        <Flex
          key={index}
          direction="column"
          gap="3"
          className="border-solid border-2 border-zinc-200 rounded-lg p-5"
        >
          <Skeleton />
          <Skeleton height="15rem" />
          <Skeleton />
          <Flex justify="between">
            <Skeleton width="5rem" />
            <Skeleton width="5rem" />
          </Flex>
        </Flex>
      ))}
    </Grid>
  );
};

export default ProductLoading;
