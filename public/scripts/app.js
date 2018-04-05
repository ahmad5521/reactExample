'use strict';

var myarrowFunction = function myarrowFunction(x) {
    return x.split(' ')[0];
};

console.log(myarrowFunction('ahmad asiri'));

var multiplier = {
    numbers: [1, 2, 3, 4, 5, 6],
    multplyBy: function multplyBy() {
        return this.numbers.map(function (r) {
            return r * r;
        });
    },
    multplyByNumber: function multplyByNumber(x) {
        return this.numbers.map(function (r) {
            return r * x;
        });
    }
};

console.log(multiplier.multplyBy());
console.log(multiplier.multplyByNumber(2));

var app = {
    title: 'React Fun',
    subtitle: 'i like it',
    options: ['one', 'two']
};
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    app.options && app.options.length > 0 ? React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            app.options[0]
        ),
        React.createElement(
            'li',
            null,
            app.options[1]
        )
    ) : 'no options'
);

var user = {
    name: 'Ahmad Asiri',
    age: 30,
    location: ''
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            'h3',
            null,
            'location : ',
            location
        );
    } else {
        return React.createElement(
            'h3',
            null,
            'location : Unknown'
        );
    }
}

var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'name : ',
        user.name ? user.name : 'unknown'
    ),
    user.age >= 18 && React.createElement(
        'h2',
        null,
        'age : ',
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
