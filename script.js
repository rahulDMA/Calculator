
console.log(numOne)
var answer = 0;
function sumNum(){
  var numTwo = document.getElementById("f").value;
  var numOne = document.getElementById("d").value;
  var ans = ((parseInt(numOne)) + (parseInt(numTwo)))
  var showSum = document.getElementById('show').innerHTML = ans
}

function subNum(){
  var numTwo = document.getElementById("f").value;
  var numOne = document.getElementById("d").value;
  var ans = ((parseInt(numOne)) - (parseInt(numTwo)))
  var showSum = document.getElementById('show').innerHTML = ans
}
function multNum(){
  var numTwo = document.getElementById("f").value;
  var numOne = document.getElementById("d").value;
  var ans = ((parseInt(numOne)) * (parseInt(numTwo)))
  var showSum = document.getElementById('show').innerHTML = ans
}
function divNum(){
  var numTwo = document.getElementById("f").value;
  var numOne = document.getElementById("d").value;
  var ans = ((parseInt(numOne)) / (parseInt(numTwo)))
  var showSum = document.getElementById('show').innerHTML = ans
}
//parseInt converts it from a string to a number because it is made as a string in the HTML

