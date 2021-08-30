const axios = require('axios').default;

export default function fetchNovelCOVIDAPI() {
  return axios.get('https://corona.lmao.ninja/v2/countries/USA?yesterday=true&strict=true&query')
  .then(res => {
    // handle success
    console.log(res);
    return res;
  })
  .catch( err => {
    // handle error
    console.log(err);
  });
};