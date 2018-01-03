/* global $ Api Store Render */
'use strict';

const api = new Api('/candidates');
const store = new Store();
const render = new Render(store, api);

$(() => {
  api.search({}, response => {
    store.data = response;
    render.candidateList();
  });
});

// Event Listeners

$('#js-filter').click(function(event){
  event.preventDefault();
  console.log('Click Filter!');
});

$('#js-search').click(function(event){
  event.preventDefault();
  console.log('Click Search!');
});