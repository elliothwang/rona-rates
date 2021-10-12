const axios = require('axios').default;

export function getUSData() {
  axios.get('https://corona.lmao.ninja/v2/countries/USA?yesterday=true&strict=true&query')
  .then(res => {
    const usData = Object.entries(res.data).map(([stat, num]) => ({[stat]: num}));
    return usData;
  })
  .catch(err => {
    console.log(err);
  });
};


export function getAllStatesData() {
  axios.get('https://corona.lmao.ninja/v2/states?sort&yesterday')
  .then(res => {
    
    console.log(res.data);
  })
  .catch(err => {
    console.log(err);
  });
};

export function getStateData(name) {
  axios.get(`https://corona.lmao.ninja/v2/states/${name}?sort&yesterday`)
  .then(res => {
    const stateData = Object.entries(res.data).map(([stat, num]) => ({[stat]: num}));
    return stateData;
  })
  .catch(err => {
    console.log(err);
  });
};