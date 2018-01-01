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
      ${candidate.firstName} ${candidate.lastName}
    </li>`;
  }

  candidateList() {
    const listOfCandidates = this.store.data.map((candidate) => this.generateCandidateElement(candidate));
    $('.js-candidate-list').html(listOfCandidates.join(''));
  }
}