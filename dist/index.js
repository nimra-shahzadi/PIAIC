"use strict";
var sum = 0;
var result = [];
for (let i = 1; 1 <= 100; i++) {
    if (i % 2 == 0) {
        sum = sum + i;
        result.push(i);
    }
}
console.log(sum);
console.log(result);
