import { STATUS } from "../constants/status";

/**
 * Returns a normalized status string based on mutation state.
 *
 * @param {Object} options
 * @param {boolean} options.isPending
 * @param {boolean} options.isError
 * @param {boolean} options.isSuccess
 * @param {any} options.data
 * @returns {string} One of STATUS.IDLE | STATUS.LOADING | STATUS.ERROR | STATUS.SUCCESS
 */
export const getStatus = ({ isPending, isError, isSuccess, data }) => {
  if (isPending) return STATUS.LOADING;
  if (isError) return STATUS.ERROR;
  if (isSuccess && data) return STATUS.SUCCESS;
  return STATUS.IDLE;
};
