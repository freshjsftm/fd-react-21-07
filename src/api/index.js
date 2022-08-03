import queryString from "query-string";
import config from "../configs";
/**
 *
 * @param {object} options
 * @param {number} options.page
 * @param {number} options.results
 * @param {string} options.seed
 * @param {string} options.nat
 * @param {string} options.gender
 * @param {string} options.inc
 * @returns
 */
export const getRandomUsers = (options = {}) => {
  const defaultOption = {
    page: 1,
    results: config.DEFAULT_AMOUNT,
    seed: config.API_KEY,
    nat: "gb",
    gender: "male",
    inc:config.DEFAULT_USER_PROP,
  };
  const finallyOptions = { ...defaultOption, ...options };
  const queryOptions = queryString.stringify(finallyOptions);
  return fetch(`${config.API_BASE_URL}?${queryOptions}`).then((response) =>
    response.json()
  );
};
