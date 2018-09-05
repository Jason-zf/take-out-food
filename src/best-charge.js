const inputTransferToItems = require('../src/items');

let total = 0;

function bestCharge(selectedItems) {
  let items = inputTransferToItems(selectedItems);
  return print(items);
}

const print = (items) => {
  return printHeader() + printItems(items) + printMiddle() + printTotal(total) + printFooter();
}

const printItems = (items) => {
  let res = '';
  for (let i = 0; i < items.length; i++) {
    let subTotal = items[i].price * items[i].count;
    res += items[i].name + ' x ' + items[i].count + ' = ' + subTotal + '元' + '\n';
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
  return '总计：' + total + '元';
}

const printFooter = () => {
  return "===================================\n";
}


module.exports = bestCharge;
