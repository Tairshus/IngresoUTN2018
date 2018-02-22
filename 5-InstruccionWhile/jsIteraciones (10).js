function Mostrar()
{

	var contadorPos=0;
	var numPos = 0;
	var numNeg = 0;
	var numero;
	var contadorNeg=0;
	var contadorCeros=0;
	var promedioPos;
	var promedioNeg;
	var diferencia;
	
	//declarar contadores y variables 
	
	var respuesta="si";

	while(respuesta!="no")
	{
		numero = parseInt(prompt("Ingrese un numero"));
		if (numero > 0)
		{
			numPos = numero + numPos;
			contadorPos++;
		}
	    else if (numero < 0)
		{
			numNeg = numero + numNeg;
			contadorNeg++;
		}
		else if (numero == 0)
		{
			contadorCeros++
		}
	 respuesta = prompt("Desea seguir ingresando numeros?");
	}
	promedioPos = numPos / contadorPos;
	promedioNeg = numNeg / contadorNeg;
	diferencia = numPos - numNeg;

	document.write ("Suma de numeros negativos " + numNeg + " Suma de numeros positivos " + numPos + " Cantidad de numeros positivos ingresados " + contadorPos + 
	" Cantidad de numeros negativos ingresados " + contadorNeg + " Cantidad de ceros " + contadorCeros + " Promedio de numeros positivos " + promedioPos 
     + " Promedio de numeros negativos " + promedioNeg + " Diferencia entre numero positivo y negativo " + diferencia);




}//FIN DE LA FUNCIÓN