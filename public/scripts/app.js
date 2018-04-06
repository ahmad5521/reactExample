"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp() {
    _classCallCheck(this, IndecisionApp);

    return _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).apply(this, arguments));
  }

  _createClass(IndecisionApp, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(Header, null),
        React.createElement(Action, null),
        React.createElement(OptionsList, null)
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

var Header = function (_React$Component2) {
  _inherits(Header, _React$Component2);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          "Indecision App"
        ),
        React.createElement(
          "h2",
          null,
          "Put your live in your hand"
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var Action = function (_React$Component3) {
  _inherits(Action, _React$Component3);

  function Action() {
    _classCallCheck(this, Action);

    return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
  }

  _createClass(Action, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "button",
        null,
        "what shold i do"
      );
    }
  }]);

  return Action;
}(React.Component);

var OptionsList = function (_React$Component4) {
  _inherits(OptionsList, _React$Component4);

  function OptionsList() {
    _classCallCheck(this, OptionsList);

    return _possibleConstructorReturn(this, (OptionsList.__proto__ || Object.getPrototypeOf(OptionsList)).apply(this, arguments));
  }

  _createClass(OptionsList, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "ol",
          null,
          React.createElement(
            "li",
            null,
            "option 1"
          ),
          React.createElement(
            "li",
            null,
            "option 1"
          ),
          React.createElement(
            "li",
            null,
            "option 1"
          ),
          React.createElement(
            "li",
            null,
            "option 1"
          )
        ),
        React.createElement(AddOptionForm, null)
      );
    }
  }]);

  return OptionsList;
}(React.Component);

var AddOptionForm = function (_React$Component5) {
  _inherits(AddOptionForm, _React$Component5);

  function AddOptionForm() {
    _classCallCheck(this, AddOptionForm);

    return _possibleConstructorReturn(this, (AddOptionForm.__proto__ || Object.getPrototypeOf(AddOptionForm)).apply(this, arguments));
  }

  _createClass(AddOptionForm, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "form",
        { onSubmit: onSubmit },
        React.createElement("input", { name: "option", type: "text" }),
        React.createElement(
          "button",
          null,
          "add option"
        )
      );
    }
  }]);

  return AddOptionForm;
}(React.Component);

var onSubmit = function onSubmit(e) {
  e.preventDefault();

  alert(e.target.elements.option.value);
  e.target.elements.option.value = '';
};

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
