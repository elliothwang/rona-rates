const axios = require('axios').default;

export default function fetchNovelCOVIDAPI() {
  axios.get('https://corona.lmao.ninja/v2/countries/USA?yesterday=true&strict=true&query')
  .then(res => {
    console.log(res.data);
    return res.data;
  })
  .catch(err => {
    console.log(err);
  });
};