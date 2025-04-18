import { useMutation } from "@tanstack/react-query";
import { generateMockImage } from "../api/generateMockImage";

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
    mutationFn: generateMockImage,
  });
};
