"use strict"

let someVar = 0;
++someVar;

if (someVar) {
	console.log(someVar);
}

for (let i=1; i<=10; ++i){
   console.log(`Пункт №${i}`);
   // console.log("Пункт №"+i);
}


// console.log(2 * 20 <= 10 || 30 / 2 < 5 && 10 <= "10" || 20 === "20")

if (2 * 20 <= 10 || 30 / 2 < 5 && 10 <= "10" || 20 === "20") {
	console.log('000');
}

function calcFunc(a, b) {
   const updateValue = (a) => (isNaN(a) || !Number.isFinite(a) ? 1 : a)
   // if (b == 0) {return "Lілення на 0"}
   const updateValue0 = (b) => ( b == 0 ? 1 : b)
   a = updateValue(a)
   b = updateValue0(updateValue(b))
   return a / b
}
//  function showMessage(someText = "Результат ділення: ") { }
// console.log("a: " + 10)
// console.log("b: " + Infinity)
// console.log("Результат ділення: " + calcFunc(10, Infinity));
// console.log("a: " + NaN)
// console.log("b: " + NaN)
// console.log("Результат ділення: " + calcFunc(NaN, NaN));
// console.log("a: " + 0)
// console.log("b: " + 1)
// console.log("Результат ділення: " + calcFunc(0, `1`));
// console.log("a: " + 5)
// console.log("b: " + 0)
// console.log("Результат ділення: " + calcFunc(`5`, 0));
// console.log("Результат ділення: " + calcFunc());

// console.log(!parseFloat(0))

function showMessage(result){
   return console.log(`Результат ділення: ${result}`)
}
// showMessage(calcFuncDiv(`15px`, 5))
// showMessage(calcFuncDiv(`15px`, 0))

function calcFuncDiv(a, b) {

// console.log(`a `+a)
// console.log(`b `+b)
// console.log((parseFloat(a) / parseFloat(b)))
// console.log(isFinite((parseFloat(a) / parseFloat(b))))
// console.log(Number.isFinite((parseFloat(a) / parseFloat(b))))


// if ( (!+parseFloat(a) || a === true || !+parseFloat(b) || b === true) && !(a === 0) ) {
//    return "обчислити неможливо"
// }
}
// showMessage(calcFuncDiv(`15px`, 5))
// showMessage(calcFuncDiv(`15px`, 0))

function calcFuncAB(a, b) {

const resultAB = (parseFloat(a) / parseFloat(b))

   if ((!resultAB || resultAB == Infinity) && !(a === 0 && (resultAB || resultAB == !Infinity))) {
      return "обчислити неможливо"
   }
      return resultAB
}

function showMessageAB(a, b){
   return console.log(`Результат ділення (${a} на ${b}): ${calcFuncAB(a, b)}`)
}

showMessageAB(100, 5)
showMessageAB(`15px`, 5)
showMessageAB(`15px`,`3px`)
showMessageAB(`p15px`, 5)
showMessageAB(`15px`, 0)
showMessageAB(`15px`, NaN)
showMessageAB(NaN, 5)
showMessageAB(`15px`, Infinity)
showMessageAB(Infinity, `15px`)
showMessageAB(false, 5)
showMessageAB(5, true)
showMessageAB()
showMessageAB(1)
showMessageAB(0, true)
showMessageAB(0, 5)

let usersNames = ["Вася", "Петро", 10, "Жека", true];
console.log(usersNames)
usersNames.forEach((userName, index) => {
if (userName === 10) {
   return console.log(`число 10 було знайдено в комірці під номером [${index}]`)
}
   });

