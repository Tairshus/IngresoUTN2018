function Mostrar()
{

	var flag=0;
	var positivo=0;
	var negativo=1;
	var numero;
	
	var respuesta='si';
	
	do
	{
		numero = parseInt(prompt("Ingrese un numero"));
		if (numero >=0)
		{
			positivo = positivo + numero;
		}
		else
		{
			negativo = negativo * numero;
			flag++
		}
		respuesta = prompt("Para continuar ingresando numeros escriba si");
		
	} while (respuesta == "si")


document.getElementById('suma').value=positivo;
if (flag == 0)
{
	negativo = 0;
}
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN