'use strict';

class Store {

  constructor() {
    this.data = null;
    this.view = null;
    this.query = null;
  }

  // findById(id) {
  //   return this.data.find(item => item.id === Number(id));
  // }

  // findByIdAndRemove(id) {
  //   const index = this.data.findIndex(item => item.id === Number(id));
  //   if (index !== -1) {
  //     return this.data.splice(index, 1).length;
  //   } else {
  //     return 0;
  //   }
  // }

  // findByIdAndUpdate(id, update) {
  //   let item = this.findById(Number(id));
  //   if (item) {
  //     Object.assign(item, update);
  //   }
  //   return item;
  // }

}