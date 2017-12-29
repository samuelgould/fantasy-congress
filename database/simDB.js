'use strict';

const simDB = {
  create: function (newItem) {
    newItem.id = this.nextVal++;
    this.data.unshift(newItem);
    return newItem;
  },
  
  initialize: function(data) {
    this.nextVal = 1000;
    this.data = data.map(item => {
      item.id = this.nextVal++;
      return item;
    });
    return this;
  }
};

module.exports = Object.create(simDB);