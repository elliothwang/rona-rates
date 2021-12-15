useEffect(() => {
  function getUSChartData() {
    axios
      .get('https://corona.lmao.ninja/v2/historical/USA?lastdays=30')
      .then((res) => {
        const apiDataArr = Object.entries(res.data).map(([stat, val]) => ({
          stat,
          val,
        }));
        setChartData([
          ...chartData,
          Object.values(apiDataArr[2].val.cases),
          Object.values(apiDataArr[2].val.deaths),
        ]);
        setChartLabels([...chartLabels, Object.keys(apiDataArr[2].val.cases)]);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  getUSChartData();
}, [chartData, chartLabels]);
