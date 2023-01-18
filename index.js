let arr = [
  { team: "India", pts: 18, NRR: 1.657 },
  { team: "Aus", pts: 8, NRR: 1.567 },
  { team: "NZ", pts: 8, NRR: 1.876 },
];
let ans = arr.sort((a, b) => {
  if (a.pts > b.pts) {
    return -1;
  }
  if (a.pts == b.pts) {
    if (a.NRR > b.NRR) {
      return -1;
    }
    if (a.NRR == b.NRR) {
      return 0;
    }
    if (a.NRR < b.NRR) {
      return 1;
    }
  }
  if (a.pts < b.pts) {
    return 1;
  }
});
console.log(ans);
