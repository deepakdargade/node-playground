const EventEmitter = require('events');
const { default: substituteResponsiveAtRules } = require('tailwindcss/lib/lib/substituteResponsiveAtRules');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorials', () => {
    console.log('tutorials event called');
})

eventEmitter.on('sum', (num1, num2) => {
    console.log(num1 + num2);
})

eventEmitter.emit('tutorials');
eventEmitter.emit('sum', 1, 2);


class Person extends EventEmitter {
    constructor(name) {
        super()
        this._name = name;
    }

    get name() {
        return this._name;
    }
}

deepak = new Person('deepak');
deepak.on('name', () => {
    console.log('my name is ' + deepak.name);
})
deepak.emit('name');

nima = new Person('nima');
nima.on('name', () => {
    console.log('my name is ' + nima.name);
})
nima.emit('name');


// events are executed synchronously