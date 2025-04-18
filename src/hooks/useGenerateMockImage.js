import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../api";

/**
 * useGenerateMockImage
 *
 * Sends a POST request to generate a mock image based on the user's prompt.
 * Returns mutation states and methods from React Query.
 *
 * @returns {{
 *   mutate: Function,
 *   isPending: boolean,
 *   isSuccess: boolean,
 *   isError: boolean,
 *   error: any,
 *   data: any,
 * }}
 */
export const useGenerateMockImage = () => {
  return useMutation({
    mutationFn: async ({ prompt }) => {
      const response = await axiosInstance.post("/generateMockImage", {
        prompt,
      });
      return response.data;
    },
  });
};
