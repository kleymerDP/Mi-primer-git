const qualifications = [10, 8, 9, 8, 7, 9];

/* method forArch()
    este tipo de función son los que trabajan a travez de una función flecha/anonima/declarada.
    función solo nos permite hacer un recorrido de todo nuestro array.
    that funcion passed as a parameter receives only two arguments (item, index)
    - item : are the object elements
    - index[optional] : are the element indexes
*/

// example 1 - Named funcition
function showEachQualifications (item) {
    console.log(item);
}
console.log('with named function:');
qualifications.forEach(showEachQualifications);

// example 2 - Anonymous function
console.log('\nwith anonymous function:');
qualifications.forEach(function(item, _){
    console.log(item);
});

// example 3 - Arrow function
console.log('\nwith arrow function:');
qualifications.forEach((item, index) => console.log(item, index));


