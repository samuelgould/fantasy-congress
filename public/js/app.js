/* global $ Api Store Render */
'use strict';

const api = new Api('/candidates');
const store = new Store();
const render = new Render(store, api);

$(() => {
  api.search({}, response => {
    store.data = response;
    store.unfilteredData = response;
    render.candidateList();
  });
});

// Event Listeners

$('#js-search-button').click(function(event){
  event.preventDefault();
  const searchResult = $('#search').val().toLowerCase();
  const candidates = store.findByName(searchResult);
  store.data = candidates;
  render.candidateList();
  store.data = store.unfilteredData;
});

$('#js-filter-button').click(function(event){
  event.preventDefault();
  
  const partyFilter = $('#party').val();
  const chamberFilter = $('#chamber').val();
  const incumbentCheckbox = document.getElementById('incumbent');

  $('.js-candidate-id-element').show();

  if (partyFilter === 'democrat'){
    $('.R').hide();
    $('.I').hide();
  } else if (partyFilter === 'republican'){
    $('.D').hide();
    $('.I').hide();
  } else if (partyFilter === 'independent'){
    $('.D').hide();
    $('.R').hide();
  }

  if (chamberFilter === 'house'){
    $('.Senate').hide();
  } else if (chamberFilter === 'senate'){
    $('.House').hide();
  }
  
  if (incumbentCheckbox.checked){
    $('.challenger').hide();
  }
});