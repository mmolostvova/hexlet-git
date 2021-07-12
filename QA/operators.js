// 1. Если а – четное посчитать а*б, иначе а+б

const fnc = (a, b) => a % 2 === 0 ? a * b : a + b;

// 2. Определить какой четверти принадлежит точка с координатами (х,у)

const getQuadrant = (x, y) => {
  if (x > 0 && y > 0) {
    return 1;
  }
  if (x < 0 && y > 0) {
    return 2;
  }
  if (x < 0 && y < 0) {
    return 3;
  }
  if (x > 0 && y < 0) {
    return 4;
  }
  return 0;
}

// 3. Найти суммы только положительных из трех чисел

const sumOfPositiveInt = (x, y, z) => {
  let acc = 0;

  if ( x > 0 ) {
    acc += x;
  }
  if (y > 0) {
    acc += y;
  }
  if (z > 0) {
    acc += z;
  }

  return acc;
}

// 4. Посчитать выражение макс(а*б*с, а+б+с)+3

const calculate = (a, b, c) => Math.max(a*b*c, a+b+c) + 3;

const calculate2 = (a, b, c) => {
  const x = a + b + c;
  const y = a * b * c;
  return Math.max(x, y) + 3;
}

// 5. Написать программу определения оценки студента по его рейтингу

const estimate = (grade) => {
  if (grade >=0 && grade < 20) {
  return 'F';
  } else if (grade >= 20 && grade < 40) {
    return 'E';
    } else if (grade >=40 && grade < 60) {
      return 'D';
      } else if (grade >=60 && grade < 75) {
        return 'C';
        } else if (grade >=75 && grade < 90) {
          return 'B';
          } else if (grade >=90 && grade <= 100) {
            return 'F';
            };
};