// console.log(global);
global.setTimeout(() => {
  console.log("in the timeout");
  clearInterval(int);
}, 3000);

const int = setInterval(() => {
  console.log("in the interval");
}, 1000);

// here the seInterval is goig untill you reach 3 second ni the settimeout where you clearInterval
// and in the timeout is printed
