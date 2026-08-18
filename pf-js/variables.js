/**
* En javascript hay 3 formas de declarar variables
* !Existe una forma que ya no se recomienda usar 
* !var
* Al proceso de crear una variable y darle un valor se le llama asigacion
* las variables que pueden ser reasignadas pueden cambiar en un futuro  el valor que tienen se declaran:
*? let nombreVariable = valor;

* *el operador = se conoce como operador de asignacion
*Una vez creada una variable podemos usarla en otros lugares del codigo utilizando su nombre las variables al ser utilizadas no llevan comillas
*
*Las variables que no pueden ser reasignadas (que su valor no puede cambiar) se declaran:
*!Const nombreVariable = valor;

*Nota:
*Palabras reservadas: Son palabras que se utilizan para el lenguaje de programacion y si intentamas usarlas en otro lado pueden generar errores
*/
let nombre = "Brenda";
let name = "Alejandro";
console.log(nombre); //Tipo String

const birthYear = 1993; //Tipo numero
console.log(birthYear);

/** reasignando una variable (cambiando su valor)
 * Cuando reasignamos una variable (una variable ya creada)
 * ! Ya no es necesario poner let
 */
nombre = "Josue";
console.log(nombre);
console.log(name);

/** Seccion de prueba
*birthYear = 1995;

Concatenar: nos permite pegar el valor de una variable a un texto
*/

console.log( "Hola " + nombre + " y estoy en generation con " + name + " naci en el año " + birthYear );

