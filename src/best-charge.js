const inputTransferToItems = require('../src/items');

let total = 0;

function bestCharge(selectedItems) {
  let items = inputTransferToItems(selectedItems);
  return printHeader() + printItems(items) + printMiddle() + overThirtyMinusSixDiscount() + printTotal(total) + printFooter();
}

const print = (items) => {
  return printHeader() + printItems(items) + printMiddle() + printTotal(total) + printFooter();
}

const printItems = (items) => {
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

const overThirtyMinusSixDiscount = () => {
  if (total < 30) {
    return "";
  }
  let res = "使用优惠:\n满30减6元，省6元\n-----------------------------------\n";
  total -= Math.round(total / 30) * 6;
  return res;
}

module.exports = bestCharge;
