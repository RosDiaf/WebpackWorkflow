require("babel-runtime/regenerator");

/* 
    - Needed alog with loader-html for server reloading 
    - CSS not reloading because MiniCssExtractPlugin.loader is in use instead of style-loader    
*/
require("webpack-hot-middleware/client?reload=true");
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