'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cookie = require('./cookie-service/cookie.service');

Object.keys(_cookie).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _cookie[key];
    }
  });
});