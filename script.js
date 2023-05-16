function highAndLow(numbers) {
  var numArray = numbers.split(' ').map(Number);
  var max = Math.max(...numArray);
  var min = Math.min(...numArray);
  return max + ' ' + min;
}
