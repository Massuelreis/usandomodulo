const {circleArea, squareaArea} = require('./shape-area.js');

lado = process.agrv[2];
raio = process.agrv[3];

const areaofCircle = circleArea(raio);
const areaofSquare = squareArea(lado);

console.log('lado do quadrado e are do circulo');
console.log('a area do circulo e ${areaofCircle}. area do quadrado e ${squareArea(areaofCircle)}');