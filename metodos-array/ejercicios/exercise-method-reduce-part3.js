// ¿Cómo funciona el método reduce()?

let almuerzo = [
    {principal : 'arepa', postre : 'helado'},
    {principal : 'ceviche', postre : 'limón'},
    {principal : 'pizza', postre : 'quesillo'},
    {principal : 'chifa', postre : 'guisito'},
    {principal : 'ceviche', postre : 'cangrejo'},
];

let cantidadCeviche = 0;

// manera convencional - parte 01
for (let i = 0; i < almuerzo.length; i++) {
    if (almuerzo[i].principal === 'ceviche') {
        cantidadCeviche++;
    }
}
console.log(`cantidad de pedido (ceviche) es ${cantidadCeviche}\n`);

// manera convencional - parte 02
cantidadCeviche = 0;
for (const i of almuerzo) {
    if (i.principal === 'ceviche') {
        cantidadCeviche++;
    }
}
console.log(`cantidad de pedido (ceviche) es ${cantidadCeviche}\n`);

// manera convencional - parte 3
cantidadCeviche = 0;
almuerzo.forEach((item) => {
    if (item.principal === 'ceviche') return cantidadCeviche++;
});
console.log(`cantidad de pedido (ceviche) es ${cantidadCeviche}\n`);

// manera con el método reduce()
let cantidadCeviche2 = almuerzo.reduce(function(contador, almuerzo){
    if (almuerzo.principal === 'ceviche') return contador + 1;
    else return contador;
}, 0);
console.log(`cantidad de pedido (ceviche) es ${cantidadCeviche2}\n`);


// ver: https://www.youtube.com/watch?v=9xqJsJ3O8bw