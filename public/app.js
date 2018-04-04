'use strict';

// JSX - javascript XML
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'this is JSX from app.js!'
  ),
  React.createElement(
    'p',
    null,
    'this is paragraph'
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
