function Mostrar()
{
    var contador;
	// declarar variables
	var numeroMayor;
    var numeroMenor;
	var respuesta="si";
	var numero;
	var flag = 0;

	do 
	{
		numero = parseInt(prompt("Ingrese un numero"));
		
		if (numero > numeroMayor || flag == 0)
		{
		  numeroMayor = numero;
		}
		if (numero < numeroMenor || flag == 0)
		{
			numeroMenor = numero;
			flag++
		}
		respuesta = prompt("Para seguir ingresando numeros escriba si");
	
	} while (respuesta != "no")

	document.getElementById("maximo").value = numeroMayor;
	document.getElementById("minimo").value = numeroMenor;




}//FIN DE LA FUNCIÓN

