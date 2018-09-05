function loadAllItems() {
  return [{
    id: 'ITEM0001',
    name: '黄焖鸡',
    price: 18.00
  }, {
    id: 'ITEM0013',
    name: '肉夹馍',
    price: 6.00
  }, {
    id: 'ITEM0022',
    name: '凉皮',
    price: 8.00
  }, {
    id: 'ITEM0030',
    name: '冰锋',
    price: 2.00
  }];
}

const inputTransferToItems = (input) => {
  let inputArray = input.map(value => {
    return {'id': value.split(' x ')[0], 'count': parseInt(value.split('x')[1])}
  });
  let res = [];
  for (let i = 0; i < inputArray.length; i++) {
    for (let j = 0; j < loadAllItems().length; j++) {
      let item = loadAllItems()[j];
      if (inputArray[i].id === item.id) {
        let newItem = {'id': item.id, 'name': item.name, 'price': item.price, 'count': inputArray[i].count};
        res.push(newItem);

      }
    }
  }
  return res;
}

module.exports = inputTransferToItems;
