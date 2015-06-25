var num = 10000000000;
var result = '';

while (num > 100) {
	var three_digits = num.toString().slice(-3);
	// result = '' === result ? ',' + three_digits : ',' + three_digits + result;
	result = ',' + three_digits + result;
	num = Math.floor(num / 100);
}
result = num + result;
console.log(result);