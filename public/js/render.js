/* global $ */
'use strict';

class Render {
  
  constructor(store, api) {
    this.store = store;
    this.api = api;
  }

  generateCandidateElement(candidate) {
    return `
    <li class="js-candidate-id-element" data-candidate-id="${candidate.id}">
      <input name="candidate" value="${candidate.firstName}"></input>
    </li>`;
  }

  candidateList() {
    console.log('I am trying to render');
    const listOfCandidates = this.store.data.map((candidate) => this.generateCandidateElement(candidate));
    $('.js-candidate-list').html(listOfCandidates.join(''));
  }
}