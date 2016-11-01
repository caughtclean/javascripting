for (var num = 100; num <= 200; num++) {
  var output = "";

  if (num % 3 === 0) {
    output += "Loopy";
  }
  if (num % 4 === 0) {
    output += "Lighthouse";
  }
  console.log(output === "" ? num : output);
}