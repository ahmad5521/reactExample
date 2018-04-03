'use strict';

// JSX - javascript XML
var template = React.createElement(
  'h1',
  null,
  'this is JSX from app.js!'
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
