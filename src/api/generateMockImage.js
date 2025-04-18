import axiosInstance from "./index";

/**
 * Sends a POST request to generate a mock image based on the prompt.
 *
 * @param {Object} params
 * @param {string} params.prompt - The user input to generate the image
 * @returns {Promise<Object>} - Returns a response containing id, status, imageUrl
 */
export const generateMockImage = async ({ prompt }) => {
  const { data } = await axiosInstance.post("/generateMockImage", { prompt });
  return data;
};
