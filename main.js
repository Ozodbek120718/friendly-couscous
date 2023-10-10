
// let output = document.querySelector('#output');
// let input = document.getElementById('input');

// // let body = document.body;

// // body.addEventListener('input', function (event) {
// //     console.log(event.target);
// // });
// // let isPodrostok = age > 18 ? true : false;
// console.log(input);
// input.addEventListener("input", function (event) {

//     let age = event.target.value;
//     output.innerHTML = 'тебе ' + age + ' лет <br>';
//     if (age >= 18) {
//         output.innerHTML += 'ты можешь гулять сколько хочешь';
//         console.log('ты можешь гулять сколько хочешь');
//     } else {
//         output.innerHTML += 'нельзя гулять после 8';
//         console.log('нельзя гулять после 8');
//     }
// });
// console.log(output);

// console.log(document.querySelector('.cell'));
const cells = document.querySelectorAll('.cell');


let isFirstPlayerMove = true;
let board = {
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null,
    9: null,
};

let index = 1;
for (const cell of cells) {
    ((i) => {
        cell.addEventListener('click', (event) => onClickHandler(event, i));
    })(index);
    index++;
}

const onClickHandler = (event, index) => {
    if (checkWinner()) {
        return;
    }
    if (!!board[index]) {
        return;
    }

    board[index] = event.target.innerHTML = isFirstPlayerMove ? 'x' : 'o';
    isFirstPlayerMove = !isFirstPlayerMove;
};



function checkWinner() {
    console.log(Object.groupBy(Object.entries(board), (item) => item[1]));
}