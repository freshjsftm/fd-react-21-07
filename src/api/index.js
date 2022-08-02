export const getRandomUsers = (options = {}) => {
  const {page, results=5} = options;
  return fetch(
    `https://randomuser.me/api/?page=${page}&results=${results}&seed=fd20221&nat=gb`
  ).then((response) => response.json());
};
