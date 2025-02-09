import { Avatar, Flex, Heading } from "@radix-ui/themes";
import useCategory from "../../hooks/useCategory";
import CategoryLoading from "./CategoryLoading";
import { FaArrowRight } from "react-icons/fa";

const CategoryFilter = () => {
  const { data: categories, isLoading, error } = useCategory();
  if (isLoading) {
    return <CategoryLoading />;
  }
  if (error) {
    return <Heading as="h2">Categories Error: {error.message}</Heading>;
  }
  return (
    <>
      <Flex align="center" gap="3" className="mb-4">
        <Heading as="h2">Categories</Heading>
        <FaArrowRight />
      </Flex>
      <Flex gap="6" align="center">
        {categories.map((category) => (
          <Avatar
            className="border-1 border-solid border-slate-black"
            key={category.id}
            size="4"
            radius="full"
            src="https://images.unsplash.com/photo-1472141521881-95d0e87e2e39?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            fallback={category.name}
          />
        ))}
      </Flex>
    </>
  );
};

export default CategoryFilter;
