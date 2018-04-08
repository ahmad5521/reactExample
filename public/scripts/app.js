'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_React$Component) {
  _inherits(Counter, _React$Component);

  function Counter(props) {
    _classCallCheck(this, Counter);

    var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

    _this.addOne = _this.addOne.bind(_this);
    _this.minusOne = _this.minusOne.bind(_this);
    _this.reset = _this.reset.bind(_this);
    _this.state = {
      count: props.x
    };
    return _this;
  }

  _createClass(Counter, [{
    key: 'addOne',
    value: function addOne() {
      this.setState(function (previosState) {
        return {
          count: previosState.count + 1
        };
      });
    }
  }, {
    key: 'minusOne',
    value: function minusOne() {
      this.setState(function (previosState) {
        return {
          count: previosState.count - 1
        };
      });
    }
  }, {
    key: 'reset',
    value: function reset() {
      var _this2 = this;

      this.setState(function () {
        return {
          count: _this2.props.x
        };
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prvProps, prvState) {
      if (this.state.count !== prvState.count) {
        var Json = JSON.stringify(this.state.count);
        localStorage.setItem('count', Json);
        console.log(localStorage.getItem('count'));
      }
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var count = JSON.parse(localStorage.getItem('count'));
      this.setState(function () {
        return { count: count };
      });
      console.log(localStorage.getItem('count'));
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Count: ',
          this.state.count
        ),
        React.createElement(
          'button',
          { onClick: this.addOne },
          '+1'
        ),
        React.createElement(
          'button',
          { onClick: this.reset },
          'reset'
        ),
        React.createElement(
          'button',
          { onClick: this.minusOne },
          '-1'
        )
      );
    }
  }]);

  return Counter;
}(React.Component);

Counter.defaultProps = {
  x: 0
};

ReactDOM.render(React.createElement(Counter, { x: '0' }), document.getElementById('app'));
