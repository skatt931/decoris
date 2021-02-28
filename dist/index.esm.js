import styled from 'styled-components';

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
var StyledInput = styled.input(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));

var BasicInput = function BasicInput() {
  return /*#__PURE__*/React.createElement(StyledInput, {
    placeholder: "i'm so basic"
  });
};

export { BasicInput as HelloWorld };
