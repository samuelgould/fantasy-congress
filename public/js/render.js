/* global $ */
'use strict';

class Render {
  
  constructor(store, api) {
    this.store = store;
    this.api = api;
  }

  generateCandidateElement(candidate) {
    return `
    <li class="js-candidate-id-element" data-candidate-id="${candidate.id}" data-candidate-chamber="${candidate.chamber}" data-candidate-party="${candidate.party}" data-candidate-incumbent="${candidate.imcumbent}">
      <div class="candidate-name">${candidate.firstName} ${candidate.lastName} (${candidate.party})</div> 
      <div>${candidate.chamber}: ${candidate.state} ${candidate.district}<div>
    </li>`;
  }

  candidateList() {
    const listOfCandidates = this.store.data.map((candidate) => this.generateCandidateElement(candidate));
    $('.js-candidate-list').html(listOfCandidates.join(''));
  }
}