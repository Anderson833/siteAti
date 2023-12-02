
function calcular(){

var num1= document.getElementById("n1").value;   
var num2=document.getElementById("n2").value;

const rst=document.getElementById("resultado");
let numero1=parseFloat(num1);
let numero2=parseFloat(num2);
const total=parseFloat(numero1+numero2);
rst.innerHTML=total;
}
