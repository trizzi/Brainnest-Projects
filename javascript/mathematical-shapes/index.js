let d = 9;

console.log(
  'The diagonals of a square where the length of each side is 9 is =>',
  Math.sqrt(2) * d
);

let side1 = 5;
let side2 = 6;
let side3 = 7;
let s = (side1 + side2 + side3) / 2;
let area = Math.sqrt(
  s * ((s - side1) * (s - side2) * (s - side3))
);
console.log('The area of the triangle is =>', area);

function circle(radius) {
  this.radius = radius;
  //  circumference
  this.circumference = function () {
    return 2 * Math.PI * this.radius;
  };
  // area
  this.area = function () {
    return Math.PI * this.radius * this.radius;
  };
}
let r = new circle(4);
console.log('Area =', r.area().toFixed(2));
console.log(
  'circumference =',
  r.circumference().toFixed(2)
);
console.log(Math.PI);
