import React from 'react';
import ReactDOM from 'react-dom';

import IndecisionApp from './components/IndecisionApp';
 
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

class OldSyntax {
    constructor() {
        this.name = 'Arun';
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

    greeting = () => {
        console.log(`Hi from ${this.name}`);
    }
}

const newSyntax = new NewSyntax();
console.log(newSyntax);

const myNewGreet = newSyntax.greeting;
myNewGreet();
