'use strict';

class Store {

  constructor() {
    this.data = null;
    this.view = null;
    this.query = null;
  }

  findById(id) {
    return this.data.find(item => item.id === Number(id));
  }

  findByIdAndUpdate(id, update) {
    let item = this.findById(Number(id));
    if (item) {
      Object.assign(item, update);
    }
    return item;
  }

}