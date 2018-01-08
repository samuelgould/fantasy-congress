'use strict';

class Store {

  constructor() {
    this.data = null;
    this.unfilteredData = null;
    this.view = null;
    this.query = null;
  }

  findByName(query) {
    return this.data.filter(candidate => `${candidate.firstName.toLowerCase()} ${candidate.lastName.toLowerCase()}`.includes(query));
  }
}