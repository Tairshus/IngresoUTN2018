function Mostrar()
{
var numero;
var i;
var contPares = 0;

numero = parseInt(prompt("Ingrese un numero"));

for (i=1 ; i <= numero ; i++)
{
  if ( i % 2 == 0)
  {
    contPares++;
    console.log(i);
  }
  
   
  
}

console.log ("Se encontraron " + contPares + " numeros pares"); 
}//FIN DE LA FUNCIÓN