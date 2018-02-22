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
	var numPares = 0;
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
		if (numero % 2 == 0)
		{
			numPares++
		}
	 respuesta = prompt("Desea seguir ingresando numeros?");
	}
	promedioPos = numPos / contadorPos;
	promedioNeg = numNeg / contadorNeg;
	
	if (contadorNeg != 0 && contadorPos != 0)
	{diferencia = numPos - numNeg;

	}
	else if (contadorNeg == 0 && contadorPos == 0)
	{
      diferencia = "No se han ingresado numeros";
	}
	else if (contadorNeg == 0)
	{
		diferencia = "No se han ingresado negativos";
	}
	else {
		diferencia = "No se han ingresado positivos";
	}

	document.write ("Suma de numeros negativos: " + numNeg +  "<br/>" + "Suma de numeros positivos: "  + numPos + "<br/>" + "Cantidad de numeros positivos ingresados: " + contadorPos + 
	"<br/>" + "Cantidad de numeros negativos ingresados: " + contadorNeg + "<br/>" + "Cantidad de ceros: " + contadorCeros + "<br/>" + "Promedio de numeros positivos: " + promedioPos 
     + "<br/>"  +"Promedio de numeros negativos: " + promedioNeg + "<br/>" + "Diferencia entre numero positivo y negativo: " + diferencia + "<br/>" + "Cantidad de numeros pares " + numPares);




}//FIN DE LA FUNCIÓN

