function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var num

	num = Math.floor(Math.random() *10)+1;

	if (num >= 9)
	{
		alert ("Excelente " + num);
	}
	else if (num >= 4)
	{
		alert ("Aprobo " + num);
	}
	else
	{
		alert ("Vamos que la proxima se puede " + num);
	}

}//FIN DE LA FUNCIÓN