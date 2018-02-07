/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function Mostrar()
{	
	var Nombre;
    var Edad;
    Nombre = document.getElementById("elNombre").value;
    Edad = document.getElementById("laEdad").value;
    //Para poder concatenar elementos debemos usar al +
    alert("Su nombre es " + Nombre + " y su edad es " + Edad);
}

