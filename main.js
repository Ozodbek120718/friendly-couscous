
let output = document.querySelector('#output');
let input = document.getElementById('input');

// let body = document.body;

// body.addEventListener('input', function (event) {
//     console.log(event.target);
// });
// let isPodrostok = age > 18 ? true : false;
console.log(input);
input.addEventListener("input", function (event) {

    let age = event.target.value;
    output.innerHTML = 'тебе ' + age + ' лет <br>';
    if (age >= 18) {
        output.innerHTML += 'ты можешь гулять сколько хочешь';
        console.log('ты можешь гулять сколько хочешь');
    } else {
        output.innerHTML += 'нельзя гулять после 8';
        console.log('нельзя гулять после 8');
    }
});
console.log(output);