/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temperatura = parseFloat(document.getElementById("Temperatura").value);
    var centigrados = (temperatura - 32) /1.8
    alert (temperatura + " grados Fahrenheit equivalen a " + centigrados.toFixed(3) + " centigrados");
}

function CentigradosFahrenheit () 
{
	var temperatura = parseFloat(document.getElementById("Temperatura").value);
    var fahrenheit = temperatura * 1.8 + 32;
    alert (temperatura + " grados Centigrados equivalen a " + fahrenheit.toFixed(3) + " grados Fahrenheit");
}
