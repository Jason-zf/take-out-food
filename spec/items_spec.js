const inputTransferToItems = require('../src/items');

describe('Items input', () => {
  it('should return one item when user input just for one item', function () {
    let input = ["ITEM0013 x 4"];
    let expected = [{
      id: 'ITEM0013',
      name: '肉夹馍',
      price: 6.00,
      count: 4
    }];
    expect(inputTransferToItems(input)).toEqual(expected);
  });
});
