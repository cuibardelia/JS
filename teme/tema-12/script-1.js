//scriptul necesita un refresh, for some reason :-s

var colors = [];

//cerinta a.
colors.push('red');
colors.push('blue');
colors.push('yellow');
colors.push('green');
colors.push('cyan');

//cerinta b.
console.table(colors);

//cerinta c.
colors.sort();
console.table(colors);
console.log(colors.indexOf('green'));

//cerinta d.
console.log(colors[colors.length-2]);

//cerinta e.
colors.pop();
console.table(colors);

//cerinta f.
var concatenatedColors = colors.join('#');
console.log(concatenatedColors);




