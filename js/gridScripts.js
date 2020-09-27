
let walk = 4;
let cycle = 1;
let car = 3;

let i = 0;

document.querySelectorAll('.walkBox').forEach((walkBox) => {
    if (walk > 0) {
        walkBox.classList.add('blueBackground')
        walk--;
    } else {
        walkBox.classList.remove('blueBackground')
    }
});

document.querySelectorAll('.cycleBox').forEach((cycleBox) => {
    if (cycle > 0) {
        cycleBox.classList.add('yellowBackground')
        cycle--;
    } else {
        cycleBox.classList.remove('yellowBackground')
    }
});

document.querySelectorAll('.carBox').forEach((carBox) => {
    if (car > 0) {
        carBox.classList.add('redBackground')
        car--;
    } else {
        carBox.classList.remove('redBackground')
    }
});
