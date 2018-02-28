/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precio1 = parseFloat(document.getElementById("PrecioUno").value);
    var precio2 = parseFloat(document.getElementById("PrecioDos").value);
    var precio3 = parseFloat(document.getElementById("PrecioTres").value);
    var suma = precio1 + precio2 + precio3;
    
    if (isNaN(suma))
    {
        alert ("Error");
    }
    else{
      alert ("La suma es: " + suma);
    }
    
}
function Promedio () 
{
	var precio1 = parseFloat(document.getElementById("PrecioUno").value);
    var precio2 = parseFloat(document.getElementById("PrecioDos").value);
    var precio3 = parseFloat(document.getElementById("PrecioTres").value);
    var suma = precio1 + precio2 + precio3;
    var promedio = suma / 3;
    if (isNaN(promedio))
    {
        alert (error);
    }
    else{
alert ("El promedio es: " + promedio.toFixed(2));
    }
}
function PrecioFinal () 
{
	var precio1 = parseFloat(document.getElementById("PrecioUno").value);
    var precio2 = parseFloat(document.getElementById("PrecioDos").value);
    var precio3 = parseFloat(document.getElementById("PrecioTres").value);
    var suma = precio1 + precio2 + precio3;
    var iva = suma * 0.21;
    var precioFinal = suma + iva;

    if (isNaN(precioFinal))
    {
        alert ("Error");
    }
    else{
        alert ("El precio final mas iva es: " + precioFinal);
    }
}