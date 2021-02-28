'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

var _templateObject;
var StyledInput = styled__default['default'].input(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));

var BasicInput = function BasicInput() {
  return /*#__PURE__*/React.createElement(StyledInput, {
    placeholder: "i'm so basic"
  });
};

exports.HelloWorld = BasicInput;
