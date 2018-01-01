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
}