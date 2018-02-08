/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var num1;
    var num2;
    var suma;
    num1 = parseInt (document.getElementById("numeroUno").value);
    num2 = parseInt (document.getElementById("numeroDos").value);
    suma = (num1 + num2);
    alert ("El resultado de la suma es " + suma);
}

function restar()
{
	var num3;
    var num4;
    var resta
    num3 = parseInt(document.getElementById("numeroUno").value);
    num4 = parseInt(document.getElementById("numeroDos").value);
    resta = (num3 - num4);
    alert ("El resultado de la resta es " + resta);
}

function multiplicar()
{ 
	var num5;
    var num6;
    var mult;
    num5 = parseInt(document.getElementById("numeroUno").value);
    num6 = parseInt(document.getElementById("numeroDos").value);
    mult = (num5 * num6);
    alert ("El resultado de la multiplicacion es " + mult);
}

function dividir()
{
	var num7;
    var num8;
    var division;

    num7 = parseInt(document.getElementById("numeroUno").value);
    num8 = parseInt(document.getElementById("numeroDos").value);
    division = num7 / num8;
    alert ("El resultado de la divion es " + division);
}

