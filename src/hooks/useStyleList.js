import { useQuery } from "@tanstack/react-query";
import { getStyleList } from "../api/getStyleList";

/**
 * useStyleList
 *
 * Fetches the logo styles from the server using React Query.
 *
 * @returns {{
 *   data: Array<{ id: string, label: string }> | undefined,
 *   isLoading: boolean,
 *   isError: boolean,
 *   error: any,
 * }}
 */
export const useStyleList = () => {
  return useQuery({
    queryKey: ["styles"],
    queryFn: getStyleList,
  });
};
