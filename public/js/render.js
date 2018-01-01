/* global $ */
'use strict';

class Render {
  
  constructor(store, api) {
    this.store = store;
    this.api = api;
  }

  page() {
    $('.js-page-view').hide();
    $('#' + this.store.view).show();
  }

  generateItemElement(candidate) {
    return `
    <li class="js-candidate-id-element" data-candidate-id="${candidate.id}">
      <input name="candidate" value="${candidate.firstName} ${candidate.lastName}"></input>
    </li>`;
  }

  shoppingList() {
    const listOfCandidates = this.store.data.map((item) => this.generateItemElement(item));
    $('.js-candidate-list').html(listOfCandidates.join(''));
  }
}