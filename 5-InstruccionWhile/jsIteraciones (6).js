function Mostrar()
{
    var numeros
	var contador=0;
	var acumulador=0;

while (contador <5){	
 numeros = parseInt(prompt("ingrese numero"));
 acumulador = acumulador + numeros;
 contador++;


}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN