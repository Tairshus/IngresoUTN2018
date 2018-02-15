function Mostrar()
{
//tomo el mes 
var mesDelAño = document.getElementById('mes').value;

switch (mesDelAño)
{
    case "Julio" : 
    case "Agosto" : alert ("Abrigate que hace frio")
     break;
     
    case "Septiembre" : 
    case "Octubre" :
    case "Noviembre" : 
    case "Diciembre" : alert ("Ya paso el frio, ahora hace calor")
     break;
    
    default : alert ("Aun falta para el invierno")
     break;
}



}//FIN DE LA FUNCIÓN