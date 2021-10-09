const axios = require('axios').default;

export function test() {
  return 2+2;
}

export function getUSData() {
  axios.get('https://corona.lmao.ninja/v2/countries/USA?yesterday=true&strict=true&query')
  .then(res => {
    return res.data;
  })
  .catch(err => {
    console.log(err);
  });
};


export function getAllStatesData() {
  axios.get('https://corona.lmao.ninja/v2/states?sort&yesterday')
  .then(res => {
    return res.data;
  })
  .catch(err => {
    console.log(err);
  });
};

export function getStateData(name) {
  axios.get(`https://corona.lmao.ninja/v2/states/${name}?sort&yesterday`)
  .then(res => {
    return res.data;
  })
  .catch(err => {
    console.log(err);
  });
};