"use strict";

const markFunds = 0;
const operations = [-2, 10, -11, 0];

// вьебать редьюсом в одну строчку
const calcTotalBalance = (initialBalance, operations) => {
  let sum = initialBalance;

  for (const index of operations) {
    sum += index;
  }

  return sum;
};

const logIfNegativeBalance = (initialBalance, operations) => {
  let sum = initialBalance;

  for (let index = 0; index < operations.length; index++) {
    // const element = (sum += operations[index]);

    sum += operations[index];

    if (sum < 0) {
      console.log(false);
    }
  }
};

const calcAvgIncomeAndExpense = (operations) => {
  let avgIncome = [];
  let avgExpense = [];

  for (let index = 0; index < operations.length; index++) {
    const element = operations[index];
    element < 0 ? avgExpense.push(element) : avgIncome.push(element);
  }

  const avgIncomeReduce = avgIncome.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );

  const avgExpenseReduce = avgExpense.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );

  return [
    "avgIncome = " + avgIncomeReduce / avgIncome.length,
    "avgExpense = " + avgExpenseReduce / avgExpense.length,
  ];
};

console.log(calcTotalBalance(markFunds, operations));
console.log(logIfNegativeBalance(markFunds, operations));
console.log(calcAvgIncomeAndExpense(operations));
