const input1 = document.querySelector('.input1');
const input2 = document.querySelector('.input2');
const btn = document.querySelector('button');
const results = document.querySelector('.results');

btn.addEventListener('click', () => {
    console.log(typeof(input1.value));
    const sum = Number(input1.value) + Number(input2.value);
    results.value = sum;
})

const string = '2345';

const number = Number(string);

