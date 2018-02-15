function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta= "si";
	var numeros;

	while (respuesta == "si")
	{
		numeros = parseInt(prompt("Ingrese un numero"));
		contador++;
		acumulador = acumulador + numeros;
		respuesta = prompt("Para continuar ingresando numeros escriba si");
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN