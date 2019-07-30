import express from "express";
import path from "path";

const server = express();

const webpack = require("webpack");
const config = require("../../webpack.dev.js");
const compiler = webpack(config);
const webpackDevMiddleware = require("webpack-dev-middleware")(
    compiler,
    config.devServer
);
const webpackHotMiddleware = require("webpack-hot-middleware")(compiler);

server.use(webpackDevMiddleware);
server.use(webpackHotMiddleware);

const staticMiddleware = express.static("build");

server.use(staticMiddleware);

server.listen(8000, () => {
    console.log("Server is listening");
})