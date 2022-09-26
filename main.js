let Fahrenheit = document.getElementById("Fahrenheit");
let Celsius = document.getElementById("Celsius");

Fahrenheit.oninput=()=>{
  let output = (parseFloat(Fahrenheit.value)*9/5)+32;
  Celsius.value = parseFloat(output.toFixed(2));

};
Celsius.oninput=()=>{
  let output = (parseFloat(Celsius.value)-32)*5/9;
  Fahrenheit.value = parseFloat(output.toFixed(2));
  console.log(output);

};