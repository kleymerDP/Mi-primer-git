// usamos la función reduce para reaelizar operaciones a cada uno de los elementos
// de un arreglo de tal forma que está función nos devuelva
// un valor unico.

// llega a aceptar hasta dos parametros diferentes
// el primer parametro : callbackFn
// segundo parametro : valor inicial, (indicar por que valor va a empezar o inizializar las operaciones)
//                      OJO, si no se inicializa el valor inicial, por defecto el acumulador va a tomar el valor del primer elemento de mi arreglo, a tal forma que la iteración va a empezar del elemento en este caso 2.

const numbers = [2, 4, 5, 7, 9, 6];

const res = numbers.reduce( (accumulator, item, index, arr) => {
    return accumulator = accumulator + item;
});

console.log(res);


// https://stackoverflow.com/questions/31427117/difference-between-element-item-and-entry-when-it-comes-to-programming#:~:text=Element%3A%20a%20part%20or%20aspect,that%20is%20essential%20or%20characteristic.&text=Item%3A%20an%20individual%20article%20or,list%2C%20collection%2C%20or%20set.&text=Entry%3A%20an%20item%20written%20or,%2C%20ledger%2C%20or%20reference%20book.