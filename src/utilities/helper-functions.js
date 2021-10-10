export function customizeStates() {
  const blue1 = "#cfe2f3";
  const blue2 = "#6fa8dc";
  const blue3 = "#9fc5e8";
  const blue4 = "#3d85c6";
  const blue5 = "#416aab";
  const blue6 = "#204c91";
  
  return {
    "AL": {fill: blue2},
    "AK": {fill: blue1},
    "AZ": {fill: blue4},
    "AR": {fill: blue3},
    "CA": {fill: blue6},
    "CO": {fill: blue3},
    "CT": {fill: blue3},
    "DE": {fill: blue1},
    "DC": {fill: blue1},
    "FL": {fill: blue5},
    "GA": {fill: blue4},
    "HI": {fill: blue1},
    "ID": {fill: blue3},
    "IL": {fill: blue4},
    "IN": {fill: blue2},
    "IA": {fill: blue3},
    "KS": {fill: blue3},
    "KY": {fill: blue3},
    "LA": {fill: blue3},
    "ME": {fill: blue1},
    "MD": {fill: blue3},
    "MA": {fill: blue2},
    "MI": {fill: blue4},
    "MN": {fill: blue3},
    "MS": {fill: blue3},
    "MO": {fill: blue2},
    "MT": {fill: blue1},
    "NE": {fill: blue3},
    "NV": {fill: blue3},
    "NH": {fill: blue1},
    "NJ": {fill: blue4},
    "NM": {fill: blue1},
    "NY": {fill: blue5},
    "NC": {fill: blue4},
    "ND": {fill: blue1},
    "OH": {fill: blue4},
    "OK": {fill: blue3},
    "OR": {fill: blue3},
    "PA": {fill: blue4},
    "RI": {fill: blue1},
    "SC": {fill: blue2},
    "SD": {fill: blue1},
    "TN": {fill: blue4},
    "TX": {fill: blue6},
    "UT": {fill: blue3},
    "VT": {fill: blue1},
    "VA": {fill: blue2},
    "WA": {fill: blue3},
    "WV": {fill: blue1},
    "WI": {fill: blue2},
    "WY": {fill: blue1},
  };
};

export function numberWithCommas(x) {
  if (x) return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  else return null;
}