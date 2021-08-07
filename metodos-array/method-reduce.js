const qualifications = [10, 8, 9, 8, 7, 9];
const messages = ['Hello', 'to', 'the', 'curse', 'JavaScript'];

/*
    - method reduce()
    - allows us to take each of the values of the array and perform an operation.
    - at the end accumulate it in a single value.
*/

// example with qualifications.
const suma = qualifications.reduce( (accumulator, value) => {
    return accumulator = accumulator + value;
}, 0 )

console.log(suma);

// example with messages
const joinMessage = messages.reduce(function(accumulator, value){
    return accumulator += value + "-";
});

console.log(joinMessage);
