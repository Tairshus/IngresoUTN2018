/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'MOSTRAR'*/
function Mostrar()
{
	//declaro primero variable para el nombre con su nombre generico
    var nombre;
    /*ahora a la variable nombre le doy la propiedad de document que lee el html y luego el getelemntbyId
    obtiene el nombre de id de "elNombre"*/
    nombre = document.getElementById("elNombre").value;
    alert(nombre);
}


