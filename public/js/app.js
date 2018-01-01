/* global $ Api Store Render */
'use strict';

const api = new Api('/items');
const store = new Store();
const render = new Render(store, api);

$(() => {

  api.search({}, response => {
    store.data = response;
    render.shoppingList();
  });
});