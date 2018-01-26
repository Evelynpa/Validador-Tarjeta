/*
-preguntar por numero de targeta*
-pasar los numeros a un array en orden inverso*
-aplicar la operacion a los numeros de las prosiciones pares
-sumar los digitos y nuevos digitos
-comprobar si es una targeta valida
*/

function isValidCard() {
  var tarjeta = prompt('Ingrese numero de tarjeta');
  var separador = tarjeta.split('');// separa con comas el string
  var numbTarget = JSON.parse('[' + separador + ']');// lo convierte en array
  var arrInvert = []; 
  var nuevoNumtarget = [];// impares
  var valorMayorDiez = [];// multiply
  var valorCifra = [];//
  var sumaDosDigitos = [];
  var total = 0;
  var numeros = /[0-9]/;
  if (numbTarget === undefined || !numeros.test(numbTarget)) {// primero verifica si se ingresa numero o si la variable esta vacia
    alert('Debe ingresar numeros!');
    // return false;
  } else {
    for (var i = 0; i < numbTarget.length; i++) {// el array creado se invierte 
      arrInvert = numbTarget.pop();// quita cada valor comenzando desde el ultimo
      numbTarget.splice(i, 0, arrInvert);// agrega cada valor sin remover ninguno(0)
    }
    for (var i = 1; i < numbTarget.length + 1; i++) {// se cuenta la posicion de los valores
      if (i % 2 === 0) {// si la posicion es par
        valorMayorDiez.push(numbTarget[i - 1] * 2);// se multiplica el valor de la posicion par
        delete numbTarget[i - 1];// se elimina el valor de el array (este deja en la posicion un 'empty x 1')
      } else {
        nuevoNumtarget.push(numbTarget[i - 1]);// se agregan en el nuevo array los valores de posiciones impares
      }
    }
    for (var j = 0; j < valorMayorDiez.length; j++) {// se cuenta la posicion de los valores
      if (valorMayorDiez[j] >= 10) {// verifica si el valor es mayor a 10
        sumaDosDigitos.push(valorMayorDiez[j] - 10 + 1);// suma dos digitos entre si
        delete valorMayorDiez[j];// se elimina el valor de el array (este deja en la posicion un 'empty x 1')
      } else {
        valorCifra.push(valorMayorDiez[j]);// se agregan en el nuevo array los valores menores a 10
      }
    }
    var arrfinal = nuevoNumtarget.concat(valorCifra, sumaDosDigitos);// se unen los nuevos arreglos creados
    for (var i = 0; i < arrfinal.length; i++) {// se itera cada elemento del gran arreglo
      total += arrfinal[i];// se suma cada valor del array
    }

    if (total % 10 === 0) {// se realiza la formula con el modulo 10 si el resultado es 0
      document.write('Número de targeta ' + tarjeta + ' es válida');// si el resultado es true
    } else {
      document.write('Número de targeta ' + tarjeta + ' no es válida');// si el resultado es false
    }
  }
}

isValidCard();