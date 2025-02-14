import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { Review } from "../dto/Dto";

const useReview = (productId: number) => {
  const fetchReviews = async () => {
    const res = await apiClient.get<Review[]>(`/reviews/product/${productId}`);
    return res.data;
  };

  return useQuery<Review[], Error>({
    queryKey: ["reviews", productId],
    queryFn: fetchReviews,
    retry: 3,
    staleTime: 1000 * 60 * 5,
  });
};

export default useReview;