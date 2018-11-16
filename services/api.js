// const fetch = require("isomorphic-fetch");
const axios = require("axios");

const fetchRepos = () => {
  return axios
    .get("https://api.github.com/users/conkerX/repos")
    .then(data => {
      // console.log("data --->", data.data);
      return data.data;
    })
    .catch(err => {
      console.log(err);
      return null;
    });
};

// const fetchRepos = () => {
//   return fetch("https://api.github.com/users/conkerX/repos")
//     .then(data => {
//       console.log("data -->", data);
//       return data;
//     })
//     .catch(err => console.log(err));
// };

export default fetchRepos;
