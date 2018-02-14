function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	/* "Math.floor" tomara el numero entero hacia abajo mas cercano y "Math.random" es el que lo multiplicara
	por algun numero entre "0" y "0.999999999999" 
	Math.ceil tomara el numero entero cercano hacia arriba y Math.round cera el entero mas cercano */
   var num;
	num = Math.floor(Math.random() *10)+1;
	
	alert (num);
	}

}//FIN DE LA FUNCIÓN