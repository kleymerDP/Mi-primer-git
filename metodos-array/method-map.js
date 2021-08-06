const messages = ['Hello', 'to', 'the', 'curse', 'JavaScript'];

/* method map()
    está función hace un recorrido del array/objeto-iterador y nos retorna otro array.
    podemos hacer
    este tipo de función son los que trabajan a travez de una función flecha/anonima/declarada.
    that funcion passed as a parameter receives only two arguments (item, index)
    - item : are the object elements/value
    - index[optional] : are the element indexes
*/

// example 1 - named function
const savedEachMessages = function(item, index) {
    return `value = ${item}, id-value${index}`;
}
console.log('example with named function');
const showMessages = messages.map(savedEachMessages);
console.log(showMessages);


// example 2 = anonymous function
console.log('\nexample with anonymous function');
let a = 0
// let b = {};
const showNewMessages = messages.map(function(item, _){
    // return {value : item};
    return {[`value ${++a}`] : item};
    // b[`value ${++a}`] = item;
    // return b
});
console.log(showNewMessages);

// example 3 - arrow function
console.log('\nexample with arrow function');
let newObject = {}, n = 0;
const showOtherMessage = messages.map(item => {
    newObject["value " + `${++n}`] = item;
    return newObject;
});
console.log(showOtherMessage);