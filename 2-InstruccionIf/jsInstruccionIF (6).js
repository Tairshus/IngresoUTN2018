function Mostrar()
{
//tomo la edad  

var edad;

edad = document.getElementById("edad").value;

if (edad <= 12)
{
    alert ("Usted es un miño");
}

else if (edad <= 17)
{
    alert ("Usted es un adolescente");
}
else 
{
    alert ("Usted es un adulto");
}

}//FIN DE LA FUNCIÓN