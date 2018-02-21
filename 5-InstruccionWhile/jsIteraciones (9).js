function Mostrar()
{
    var contador;
	// declarar variables
	var numeroMayor;
    var numeroMenor;
	var respuesta="si";
	var numeroNuevo;

	while(respuesta!="no")
	{
		numeroNuevo = parseInt(prompt("Ingrese un numero"));

		contador = [0 , numeroNuevo];

		numeroMayor = Math.max(contador);
		numeroMenor = Math.min(contador);
		
		respuesta = prompt("¿Cotinuar ingresando numeros?");
	
	}

	document.getElementById("maximo").value = numeroMayor;
	document.getElementById("minimo").value = numeroMenor;




}//FIN DE LA FUNCIÓN