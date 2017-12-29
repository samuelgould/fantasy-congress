'use strict';

const create = function () {
  console.log('do create');
};
const find = function () {
  console.log('do find');
};
const update = function () {
  console.log('do update');
};
const remove = function () {
  console.log('do delete');
};

module.exports = { create, find, update};