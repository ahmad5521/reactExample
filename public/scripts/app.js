"use strict";

var count = 0;

var template2 = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Count: ",
        count
    ),
    React.createElement(
        "button",
        { className: "btn" },
        "+1"
    )
);

console.log(template2);

var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);
