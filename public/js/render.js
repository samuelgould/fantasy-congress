/* global $ */
'use strict';

class Render {

  constructor(store, api) {
    this.store = store;
    this.api = api;
  }

  generateCandidateElement(candidate) {
    return `
    <li class="js-candidate-id-element ${candidate.id} ${candidate.chamber} ${candidate.party} ${candidate.incumbent}">
      <div class="candidate-name">${candidate.firstName} ${candidate.lastName} (${candidate.party})</div> 
      <div>${candidate.chamber}: ${candidate.state} ${candidate.district}<div>
    </li>`;
  }

  candidateList() {
    const listOfCandidates = this.store.data.map((candidate) => this.generateCandidateElement(candidate));
    $('.js-candidate-list').html(listOfCandidates.join(''));
  }
}