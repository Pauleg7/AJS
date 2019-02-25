'use stict';

const prices = [200, 550, 4000, 23, 58, 5000, 485, 711];
const controlPrice = 10000;

const getDiscount = (prices, control) => {
  let totalPrice = 0;

  for (let price of prices) {
    totalPrice += price;
  }

  let bonus = totalPrice - control;
  
  if (bonus > 0) {
    return Math.round(bonus * 0.05);
  } else {
    return 'Нет бонуса';
  }
}

console.log (`Ваш бонус составил: ${getDiscount(prices, controlPrice)}`);