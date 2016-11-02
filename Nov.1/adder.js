// get all arguments

var numbers = process.argv.slice(2);

var sum = 0;

function add(numbers) {
for(var i = 0; i < numbers.length; i += 1) {
  number = Number(numbers[i]);
  debugger;
  if ( !Number.isNaN(number) ) {
  sum = sum + number;
}
}
  return sum;

}
console.log(add(numbers))
