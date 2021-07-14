// 1. Найти сумму четных чисел и их количество в диапазоне от 1 до 99
const sumAndCountOfEqualNums = () => {
  let sum = 0;
  let amount = 0;
  for (let i = 1; i < 100; i++) {
    if (i%2 === 0) {
      sum += i;
      amount += 1;
    }
  }
  return {
    sumOfEquals: sum,
    amountOfEquals: amount
  }
}

// 2. Проверить простое ли число? (число называется простым, если оно делится только
// само на себя и на 1)

const isPrime = (n) => {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

// 3. Найти корень натурального числа с точностью до целого (рассмотреть вариант
// последовательного подбора и метод бинарного поиска)

// Последовательный подбор
const calcSqRoot = (num) => {
  let res;
  for (let i = 1; i < num; i ++) {
    if (i ** 2 === num) {
      res = i;
    }
    if (i ** 2 > num) {
      return i - 1;
    }
  };
  return res;
}

// Бинарный поиск
const calcSqRoot2 = (num) => {
  let min = 0;
  let max = num;
  let temp;
  for (; ;) {
    let mid = Math.floor((min + max) / 2);
    if (mid ** 2 === num || mid === temp) {
      return mid;
    } else if (mid ** 2 > num) {
      max = mid;
    } else {
      min = mid;
    }
    temp = mid;
  }
}

// 4. Вычислить факториал числа n. n! = 1*2*…*n-1*n;!
const calcFactorial = (n) => {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

// 5. Посчитать сумму цифр заданного числа
const sumOfDigits = (num) => {
  let sum = 0;
  while (num != 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
  }
  return sum;
}

// 6. Вывести число, которое является зеркальным отображением последовательности
// цифр заданного числа, например, задано число 123, вывести 321.

const flip = (num) => {
  let res = [];
  let nums = num.toString().split('');
  for (const n of nums) {
    res.unshift(n)
  }
  return Number(res.join(''));
}

