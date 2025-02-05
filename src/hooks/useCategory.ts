import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { Category } from "../dto/Dto";
import ms from "ms";

const useCategory = () => {
  const getCategory = async () => {
    const res = await apiClient.get<Category[]>(`/category/all`);
    return res.data;
  };
  return useQuery<Category[], Error>({
    queryKey: ["category"],
    queryFn: getCategory,
    retry: 3,
    staleTime: ms("1h"),
  });
};

export default useCategory;
