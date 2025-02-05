import { Flex, Heading, Spinner } from "@radix-ui/themes";

const CategoryLoading = () => {
  const spinners = [1, 2, 3, 4, 5];
  return (
    <>
      <Heading as="h2">Categories</Heading>
      <Flex gap="3" align="center">
        {spinners.map((spinner) => (
          <Spinner key={spinner} size="3" />
        ))}
      </Flex>
    </>
  );
};

export default CategoryLoading;
