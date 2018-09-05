const inputTransferToItems = require('../src/items');

let total = 0;
const discountItems = ['黄焖鸡', '凉皮'];

function bestCharge(selectedItems) {
  let items = inputTransferToItems(selectedItems);
  return printHeader() + calculatePrice(items) + printMiddle() + discountCompare(items) + printTotal(total) + printFooter();
}

const calculatePrice = (items) => {
  let res = '';
  total = 0;
  for (let i = 0; i < items.length; i++) {
    let subTotal = items[i].price * items[i].count;
    res += items[i].name + " x " + items[i].count + " = " + subTotal + "元\n";
    total += subTotal;
  }
  return res;
}

const printHeader = () => {
  return "============= 订餐明细 =============\n";
}

const printMiddle = () => {
  return "-----------------------------------\n";
}

const printTotal = (total) => {
  return "总计：" + total + "元\n";
}

const printFooter = () => {
  return "===================================\n";
}

const reductionDiscount = () => {
  if (total < 30) {
    return 0;
  }
  return Math.floor(total / 30) * 6;
}

const halfPriceDiscount = (items) => {
  let dis = 0;
  for (let i = 0; i < items.length; i++) {
    if (discountItems.includes(items[i].name))
      dis += items[i].price / 2 * items[i].count;
  }
  return dis;
}

const discountCompare = (items) => {
  if (halfPriceDiscount(items) === 0 && reductionDiscount(total) === 0) {
    return "";
  }
  if (halfPriceDiscount(items) < reductionDiscount(total)) {
    console.log(halfPriceDiscount(items));
    total -= reductionDiscount(total);
    return "使用优惠:\n满30减6元，省6元\n-----------------------------------\n";
  }
  total -= halfPriceDiscount(items);
  return "使用优惠:\n指定菜品半价(黄焖鸡，凉皮)，省13元\n-----------------------------------\n";
}

module.exports = bestCharge;
