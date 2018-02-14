function Mostrar()
{
//tomo el mes 
var mesDelAño = document.getElementById('mes').value;

switch (mesDelAño)
{
    case "Febrero" : alert ("Este mes no tiene más de 28 dias")
     break;
    default : alert ("Este mes tiene 30 o más días")
     break;
}


}//FIN DE LA FUNCIÓN