var input;
var operator = false;

function displayButtonName(x){
	operator=false;
 	input=document.getElementById('display');
 	//alert(input.value);
 	if (isNumber(input.value)==true){
		//alert(input.value + " este numar!");
		input.value=x;
 	}else{
 		//alert(input.value + " nu este numar!");
 		input.value+=x;
 	}
}
 
 function isNumber(nr){
 	return (nr >=0 && nr <=10);//aici daca e nr iti retunreaza true daca nu e false
 	 
 }
 function displayResult(){
	input=document.getElementById('display');
	x=input.value;
	x=eval(x);
	input.value=x;
}

function backspace(){
	input=document.getElementById('display');
	var oldNumber=input.value;
	var len=oldNumber.length-1;
	var newNumber=oldNumber.substring(0,len);
	input.value=newNumber;
}

function clean(){
	input=document.getElementById('display');
	input.value='0';
}

function setNegativeNb(){
	input=document.getElementById('display');
	var nb=input.value;
	nb=nb*(-1);
	input.value=nb;
}

function displayPi(){
	input=document.getElementById('display');
	input.value=Math.PI;
}

function power(y){
	input.value=Math.pow(document.getElementById('display').value,y);
}

var f = [];
function factorial (n) {
  if (n == 0 || n == 1)
    return 1;
  if (f[n] > 0)
    return f[n];
  return f[n] = factorial(n-1) * n;
}

function factorialOfNumber(){
	input=document.getElementById('display');
	x=input.value;
    input.value=factorial(x);
}