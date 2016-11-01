
var password = process.argv[2];

function obfuscate(password) {
  var r = "";

  for (var i = 0; i < password.length; i++) {
    if (password[i] === "a") {
      r += "4";
    }
    else if (password[i] === "e") {
    r += "3";
    }
    else if (password[i] === "o") {
      r += "0"
    }
    else if (password[i] === "l") {
      r += "1"
    }
    else {
      r += password[i];

    }
    }
    return r;
  }

console.log(obfuscate(password))

