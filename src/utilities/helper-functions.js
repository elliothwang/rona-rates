export function customizeStates() {
  const blue1 = "#cfe2f3";
  const blue2 = "#9fc5e8";
  const blue3 = "#6fa8dc";
  const blue4 = "#3d85c6";
  const blue5 = "#416aab";
  const blue6 = "#204c91";
  
  return {
    "AL": {fill: blue3},
    "AK": {fill: blue1},
    "AZ": {fill: blue4},
    "AR": {fill: blue2},
    "CA": {fill: blue6},
    "CO": {fill: blue2},
    "CT": {fill: blue2},
    "DE": {fill: blue1},
    "DC": {fill: blue1},
    "FL": {fill: blue5},
    "GA": {fill: blue4},
    "HI": {fill: blue1},
    "ID": {fill: blue2},
    "IL": {fill: blue4},
    "IN": {fill: blue4},
    "IA": {fill: blue2},
    "KS": {fill: blue2},
    "KY": {fill: blue2},
    "LA": {fill: blue3},
    "ME": {fill: blue1},
    "MD": {fill: blue2},
    "MA": {fill: blue3},
    "MI": {fill: blue4},
    "MN": {fill: blue3},
    "MS": {fill: blue2},
    "MO": {fill: blue3},
    "MT": {fill: blue1},
    "NE": {fill: blue2},
    "NV": {fill: blue2},
    "NH": {fill: blue1},
    "NJ": {fill: blue4},
    "NM": {fill: blue1},
    "NY": {fill: blue5},
    "NC": {fill: blue4},
    "ND": {fill: blue1},
    "OH": {fill: blue4},
    "OK": {fill: blue2},
    "OR": {fill: blue2},
    "PA": {fill: blue4},
    "RI": {fill: blue1},
    "SC": {fill: blue3},
    "SD": {fill: blue1},
    "TN": {fill: blue4},
    "TX": {fill: blue6},
    "UT": {fill: blue2},
    "VT": {fill: blue1},
    "VA": {fill: blue3},
    "WA": {fill: blue2},
    "WV": {fill: blue1},
    "WI": {fill: blue3},
    "WY": {fill: blue1},
  };
};

export function addCommas(x) {
  if (x) return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  else return null;
}
