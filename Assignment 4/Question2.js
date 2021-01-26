function calTotal(){
var ele1 = document.getElementById('num1').value;
var ele2 = document.getElementById('num2').value;
var Total = parseInt(ele1) + parseInt(ele2);
document.getElementById('tot').innerHTML = Total;
}