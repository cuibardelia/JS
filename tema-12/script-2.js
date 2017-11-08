console.log('merge');
function generateRandomNo()
{
   return Math.floor((Math.random()) * 10);
}
var integers = [];
for (var i = 0; i <= 5; i++) {
    integers.push(generateRandomNo());
}
console.table(integers);




