function Mostrar()
{
var numero;
var contDivisores = 0;
var i;

numero = parseInt(prompt("Ingrese un numero"));

for (i=1 ; i <= numero ; i++)
{
 
    if (numero % i == 0){

    console.log (i);
    contDivisores++
    }
}

console.log ("Se encontraron " + contDivisores + " numero divisores de " + numero);

}//FIN DE LA FUNCIÓN