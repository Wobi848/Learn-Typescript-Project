var number = 1;
let count = 2;
var i;

function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }

    console.log('Finally: ' + i);
}