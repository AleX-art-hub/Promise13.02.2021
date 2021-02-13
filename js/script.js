/*const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('result'), 2000);
});

promise1
    .then((value) => alert(value))
    .catch(error => alert(error))
    .finally(() => alert('Promise over'));
};
*/

//-----------------------------------------------------------

//Zadacha 1
/*for (let i = 1; i <= 20; i++) {
    setTimeout(() => {
        console.log(i)
    }, 1000)
}*/

//to zhe samoe chto i vishe tolko s setInterval
/*let from = 1;
let to = 20;
const intId = setInterval(() => {
    from <= to ? console.log(from++) : clearInterval(intId);
}, 100)*/


/*let i = 1;
let intervalId = setInterval(() => {
    console.log(i++);
    if (i == 21) clearInterval(intervalId);
}, 1000);*/

/*
let i = 1;
setTimeout(function run() {
    console.log(i++);
    if (i < 21) {
        setTimeout(run, 100);
    }
}, 100);*/

//---------------------------------------------------------

//Zadacha 2
//2.1Sozdat promise dlya kazhdogo tipa (number, boolean, string,symbol, null, undefined, object)

/*const numPromise = Promise.resolve(5);
console.log('numPromise', numPromise);
const booleanPromise = Promise.resolve(true);
console.log('numPromise', booleanPromise);
const stringPromise = Promise.resolve('Hello!');
console.log('numPromise', stringPromise);
const symbolPromise = Promise.resolve(Symbol('MySymbol'));
console.log('numPromise', symbolPromise);
const nullPromise = Promise.resolve(null);
console.log('numPromise', nullPromise);
const undefinedPromise = Promise.resolve(undefined);
console.log('numPromise', undefinedPromise);
const objectPromise = Promise.resolve({ id: 21 });
console.log('numPromise', objectPromise);


numPromise.then((result) => {
    console.log('result', result)
});

//2.2 Sozdat asynhronnost function dlya ih  console.log

promiseLogger(stringPromise);

async function promiseLogger(loggerValue) {
    console.log('loggerValue', await loggerValue);
}*/

//Zadacha 3
/*
function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('result');
        }, ms);
    });
}
delay(1000).then(() => alert('Hello!'));
*/

//-------------------------------------------------------

//Kruzhochek dinamicheski menyaet cvet
//Var 1
/*const figure = document.getElementById('figure');
function chengeColor(elem){
    setInterval(()=>(elem.style.backgroundColor="blue"),2000);
}
chengeColor(figure);
*/
//Var 2
/*const figure = document.getElementById('figure');
console.log(figure);
setInterval(changeFigureColor, 200);
function changeFigureColor() {
    if (figure.style.backgroundColor == 'red') {
        figure.style.backgroundColor = 'blue';
        figure.style.backgroundColor = 'green';
    } else {
        figure.style.backgroundColor = 'red';
    }
}*/
/*
const figure = document.getElementById('figure');
setInterval(changeFigureColor, 20);
let colorIndex = 0;
function changeFigureColor() {
    figure.style.backgroundColor = `rgb(${colorIndex++ % 256},0,0)`;
}*/