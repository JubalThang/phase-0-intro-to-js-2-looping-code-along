// Code your solutions in this file
function writeCards(names, msg) {
    let array = [];
    for (let i=0; i<names.length; i++) {
        array.push(`Thank you, ${names[i]}, for the wonderful ${msg} gift!`);
    }
    return array;
}

function countDown(n) {
    while(n >= 0) {
        console.log(n);
        n--;
    }
}