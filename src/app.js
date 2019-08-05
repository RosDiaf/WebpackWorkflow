require("./index.html");
import { showAlert } from './message.js';
import './styles/styles.scss';
import './img/dog.jpg';

document.getElementById("btn-alert")
    .addEventListener('click', showAlert);

var myFunc = async args => {
    const { a, b } = args
    await console.log("Hello from the future!", a, b);
    console.log("Done");
}

myFunc({a:1, b:1});

console.log(`Environment is ${process.env.NODE_ENV}`);

const globalVar = true;
const something = function(someArgument) {
    const logVariableName = someArgument;
    const result = function(logVariableName) {
        return longVariableName * logVariableName + globalVar
    }
    console.log(result);
}

something();