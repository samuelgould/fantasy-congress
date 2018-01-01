/* global $ */
'use strict';

class Api {

  constructor(path, baseUrl = window.location.origin) {
    this.baseUrl = baseUrl;
    this.path = path;
  }

  _buildUrl(path, query = {}) {
    var url = new URL(path, this.baseUrl);

    const queryKeys = Object.keys(query);
    queryKeys.forEach(key => url.searchParams.set(key, query[key]));
    return url;
  }

  search(query, success) {
    const url = this._buildUrl(this.path, query);
    return $.ajax({
      type: 'GET',
      url: url,
      data: query,
      success: success
    });
  }
}