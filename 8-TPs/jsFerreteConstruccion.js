/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
   var largo = parseFloat(document.getElementById("Largo").value);
   var ancho = parseFloat(document.getElementById("Ancho").value);
   var perimetro = largo * 2 + ancho * 2;
   var alambre = perimetro * 3;
   
   if (isNaN(alambre))
   {
       alert ("Error");
   }
   else{
   alert ("Se necesitan " + alambre + " metros de alambre");
   }
}
function Circulo () 
{
   var radio = parseFloat(document.getElementById("Radio").value);
   var perimetro = 2 * Math.PI * radio;
   var alambre = perimetro * 3;
    if (isNaN(alambre))
   {
       alert ("Error");
   }
   else{
   alert ("Se necesitan " + alambre.toFixed(2) + " metros de alambre");
   }
}
function Materiales () 
{
	var largo = parseFloat(document.getElementById("Largo").value);
   var ancho = parseFloat(document.getElementById("Ancho").value);
   var superficie = largo * ancho;
   var cemento = superficie * 2;
   var cal = superficie * 3;
   if (isNaN(superficie))
   {
       alert ("Error");
   }
   else{
   alert ("Se necesitan " + cemento + " bolsas de cemento y " + cal + " bolsas de cal");
   }
}