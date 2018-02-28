function Mostrar()
{

var numero;
var i;
var contPrimos = 0;

numero = parseInt(prompt("Ingrese un numero primo"));

for (i = 1 ; i <= numero ; i++){



  if (numero % i == 0)
  {
     contPrimos++
  }
  if (contPrimos > 2)
  {
      break;
  }
}
if (contPrimos != 2)
{
    alert ("No es un numero primo")
}
else {
    alert ("Numero aceptado");
}

}//FIN DE LA FUNCIÓN