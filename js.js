// Написати цикли, які роблять наступне:

// Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
// Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
// Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
// Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).
// Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).

let result = "";
for (let i = 20; i <= 30; i += 0.5) {
  result += `${i} `;
}
console.log(result);

for (let i = 10; i <= 100; i += 10) {
  console.log(`${i} доларів - ${i * 27} гривень`);
}

let input,
  result2 = "";
do {
  input = prompt("Введіть ціле число");
  if (input < 0) {
    result2 = "Введене число замале";
  }
} while (input === null || input.trim() === "" || !Number.isInteger(+input));

for (let num = 1; num ** 2 <= input; num++) {
  result2 += num + " ";
}
console.log(result2);

let input2,
  flag = true;

do {
  input2 = prompt("Введіть ціле число");
} while (input2 === null || input2.trim() === "" || !Number.isInteger(+input2));

for (let i = 2; i < input2; i++) {
  if (input2 % i === 0) {
    console.log("не є простим");
    flag = !flag;
    break;
  }
}
if (flag) {
  console.log(input2 > 1 ? "є простим" : "не просте і не составне");
}

let input3,
  flag2 = true;

do {
  input3 = prompt("Введіть деяке число");
} while (!input3?.trim() || !Number.isInteger(+input3));

for (let i = 0; i < input3; i++) {
  if (3 ** i === +input3) {
    console.log(`Ваше число можна одержати шляхом зведення числа 3 у ${i} ступінь`);
    flag2 = !flag2;
    break;
  }
}
if (flag2) {
  console.log("Ваше число не можна одержати шляхом зведення числа 3 у деякий ступінь");
}
