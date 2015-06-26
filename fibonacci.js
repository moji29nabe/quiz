var max = 10;     // max of the last number
var arr = [0, 1]; // the second last number, the last number

var fibonacci = function(second, last) {
  if (last <= max) {
    arr.push(second + last);
    return fibonacci(last, second + last);
  } else {
    console.log(arr.toString());
  }
};

// check args
if (process.argv.length === 3) {
  max = process.argv[2];
}
console.log('max of the last number: ' + max);

fibonacci(arr[0], arr[1]);
