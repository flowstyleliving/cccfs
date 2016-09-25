console.log("The fslCalculator is functioning...");

var btnPress = false;

function addDigit(n) {
  // console.log(n);
  //console.log("btnPress= " + btnPress);
  if(btnPress == false){
    var digits = document.getElementById('btnScreen').innerHTML += n;
  } else if (btnPress == true){
    clearScr();
    btnPress = false;
    document.getElementById('btnScreen').innerHTML += n;
  }
}

function addOp(op) {
  // console.log(op);
  if (op == "+") {
    document.getElementById('btnScreen').innerHTML += "+";
  }
  else if (op == "-") {
    document.getElementById('btnScreen').innerHTML += "-";
  }
  else if (op == "*") {
    document.getElementById('btnScreen').innerHTML += "*";
  }
  else if (op == "/") {
    document.getElementById('btnScreen').innerHTML += "/";
  }
  btnPress = false;
}

function clearScr() {
  document.getElementById('btnScreen').innerHTML = "";
}

function dot() {
  document.getElementById('btnScreen').innerHTML += ".";
}

function solve() {
  var equation = document.getElementById('btnScreen').textContent;
  // console.log(equation);
    if(equation){
      var theEnd = eval(equation);
      console.log(equation);
      console.log(theEnd);
      document.getElementById('btnScreen').innerHTML = theEnd;
      btnPress = true;
    } else if (equation == "undefined" || equation == "" || equation == undefined) {
      clearScr();
      console.log("Nah bro.");
    } else {
      console.log("Nah bro.");
    }
}
