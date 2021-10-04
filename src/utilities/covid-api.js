export default function getStateData() {
  axios.get('https://corona.lmao.ninja/v2/states?sort&yesterday')
  .then(res => {
    setApiData(res.data);
  })
  .catch(err => {
    console.log(err);
  });
};

export default function getCountyData() {
  axios.get('https://corona.lmao.ninja/v2/states?sort&yesterday')
  .then(res => {
    setApiData(res.data);
  })
  .catch(err => {
    console.log(err);
  });
};