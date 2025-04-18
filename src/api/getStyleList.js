import axiosInstance from "./index";

/**
 * Fetches the list of available logo styles from the server.
 *
 * @returns {Promise<Array<{id: string, label: string}>>} - Style list
 */
export const getStyleList = async () => {
  const { data } = await axiosInstance.get("/getStyleList");
  return data;
};
