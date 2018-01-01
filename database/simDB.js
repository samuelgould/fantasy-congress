'use strict';

const simDB = {
  create: function (newItem) {
    newItem.id = this.nextVal++;
    this.data.unshift(newItem);
    return newItem;
  },

  find: function (query = {}) {
    return this.data.filter(item => Object.keys(query).every(key => item[key] === query[key]));
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