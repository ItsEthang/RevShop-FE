import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { Product } from "../dto/Dto";
import ms from "ms";

const useProduct = () => {
  const getProduct = async () => {
    const res = await apiClient.get<Product[]>(`/products/all`);
    return res.data;
  };
  return useQuery<Product[], Error>({
    queryKey: ["products"],
    queryFn: getProduct,
    retry: 3,
    staleTime: ms("3m"),
  });
};

export default useProduct;
