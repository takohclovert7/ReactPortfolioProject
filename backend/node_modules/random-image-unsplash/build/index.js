'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FetchImage = undefined;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FetchImage = exports.FetchImage = function FetchImage(data) {
  return _axios2.default.get('https://source.unsplash.com/' + data.width + 'x' + data.height + '/?' + data.type).then(function (res) {
    if (res.request.status === 200) return res.request.responseURL;else return '';
  });
};