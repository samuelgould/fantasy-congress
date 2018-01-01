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
      <div class="candidate-name">${candidate.firstName} ${candidate.lastName} (${candidate.party})</div> 
      <div>${candidate.state} ${candidate.district}<div>
    </li>`;
  }

  candidateList() {
    const listOfCandidates = this.store.data.map((candidate) => this.generateCandidateElement(candidate));
    $('.js-candidate-list').html(listOfCandidates.join(''));
  }
}