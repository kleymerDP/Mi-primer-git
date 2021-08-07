// reduce() -> hace una comparación de todos los elementos.

const planets = ['Eearth','Mars','Jupiter','Saturn'];

let contador = 0;
const res = planets.reduce( (acc, item) => {
    
    if(acc === 'Jupiter') {
        console.log(acc);
    }
    return acc;

});

console.log(res);


// parte 2
const numbers = [10, 5, 1056, 465, 4, 654, 5, 45];
const respuesta = numbers.reduce( function(acc, item) {
    console.log(acc, item + "\n");
    return Math.max(acc, item);
});
console.log(respuesta);