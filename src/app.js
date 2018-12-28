import React from 'react';
import ReactDOM from 'react-dom';

import IndecisionApp from './components/IndecisionApp';
 
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

class OldSyntax {
    constructor() {
        this.name = 'Arun';

        // ES6/ES5 function syntax needs 'this' binding
        this.greeting = this.greeting.bind(this);
    }

    greeting() {
        console.log(`Hi from ${this.name}`);
    }
}

const oldSyntax = new OldSyntax();
console.log(oldSyntax);

const myOldGreet = oldSyntax.greeting;
myOldGreet();

class NewSyntax {
    name = 'Rishi';

    // ES6 property syntax with anon function automatically carries the parent context
    // No extra bind step requried
    greeting = () => {
        console.log(`Hi from ${this.name}`);
    }
}

const newSyntax = new NewSyntax();
console.log(newSyntax);

const myNewGreet = newSyntax.greeting;
myNewGreet();
