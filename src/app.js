require("babel-runtime/regenerator");
require("webpack-hot-middleware/client?reload=true");
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