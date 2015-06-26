var num;
var num_str;
var result = '';

// check args
if (process.argv.length < 3) { // sample value
  num = Math.floor(Math.random() * 1000000000) + 1;
} else {
  num = process.argv[2];
}
console.log('input: ' + num);

num_str = Number(num).toString();

while (num_str.length > 0) {
  var three_digits = num_str.slice(-3); // get 3 digits
  result = three_digits + result;

  num_str = num_str.slice(0, -3);	// remove 3 digits
  if (num_str.length >= 1) {
    result = ',' + result;
  }
}

console.log(result);
