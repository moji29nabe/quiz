var num;
var result;

var getParts = function(num) {
  var re = /(\+|-)?(\d+)(\.\d+)?/;
  var found = num.match(re);
  var decimal = found[3] ? found[3] : '';
  return {
    sign: found[1],
    integer: found[2],
    decimal: decimal
  };
};

var getCommaDelimitedIntegerPart = function(str_integer) {
  var out = '';
  while (str_integer.length > 0) {
    var three_digits = str_integer.slice(-3); // get 3 digits
    out = three_digits + out;

    str_integer = str_integer.slice(0, -3);	// remove 3 digits
    if (str_integer.length >= 1) {
      out = ',' + out;
    }
  }
  return out;
}

// check args
if (process.argv.length < 3) { // sample value
  num = (Math.random() * 1000000000) + 1;
  num = num.toString();
} else {
  num = process.argv[2];
}
console.log('input: ' + num);

var obj_num = getParts(num);
result = obj_num.decimal;
result = getCommaDelimitedIntegerPart(obj_num.integer) + result;
result = obj_num.sign ? obj_num.sign + result : result;

console.log(result);
