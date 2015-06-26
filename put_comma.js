var num;
var result;

var getIntegerDecimalPart = function(num) {
   var integer = Math.floor(num);
   var decimal = (num - integer).toFixed(5); // temporarily, 5 digits to appear after the decimal point
   var str_decimal = ('0.00000' != decimal) ? decimal.slice(1) : '';
   return {integer: integer.toString(), decimal: str_decimal};
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
  num = Math.floor(Math.random() * 1000000000) + 1;
} else {
  num = process.argv[2];
}
console.log('input: ' + num);

var obj_num = getIntegerDecimalPart(Number(num));
result = obj_num.decimal;
result = getCommaDelimitedIntegerPart(obj_num.integer) + result;

console.log(result);
