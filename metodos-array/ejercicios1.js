// vamos a recrear un metodo map()

const planets = ['Mercury','Venus','Earth','Mars','Jupiter','Saturn','Uranus','Neptune'];
const saludo = "Hola";

console.log('\nMEJORADO:');

function _thorw(m){
    throw(m);
}

function newMap(obj) {
    const getObject = obj;

    // const conditionObj = Array.isArray(getObject) || _thorw("No es un objeto");
    const conditionObj = (Array.isArray(getObject) ? (function(value) {
        let getI = "";
        for(const i of value) getI += i + "\n";
        return getI;
    })(getObject) 
    : 
    _thorw("No es un array"));
    conditionObj
    return conditionObj;
}

try {
    const showNewMap = newMap(planets);
    console.log(showNewMap);
} catch (error) {
    console.error(error);
};

// forma2

function newMap2(obj) {
    const getObject = obj;

    (Array.isArray(getObject) ? getObject.forEach(function(value) { console.log(value) }) : _thorw("No es un array"));
}

try {
    newMap(planets);
} catch (error) {
    console.error(error);
}




// https://www.javascripttutorial.net/javascript-array-foreach/
// https://stackoverflow.com/questions/9370606/javascript-error-handling-can-i-throw-an-error-inside-a-ternary-operator
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw
