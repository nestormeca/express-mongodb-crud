"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _expressHandlebars = require("express-handlebars");

var _path = _interopRequireDefault(require("path"));

var _index = _interopRequireDefault(require("./routes/index.routes"));

var _morgan = _interopRequireDefault(require("morgan"));

var app = (0, _express["default"])();
app.set("views", _path["default"].join(__dirname, "views"));
var exphbs = (0, _expressHandlebars.create)({
  extname: ".hbs",
  layoutsDir: _path["default"].join(app.get("views"), "layouts"),
  defaultLayout: "main"
});
app.engine("hbs", exphbs.engine);
/*app.engine(
  ".hbs",
  exphbs({
    layoutsDir: path.join(app.get("views"), "layouts"),
    //partialsDir: path.join(app.get("views"), "partials"),
    defaulLayout: "main",
    extname: ".hbs",
  })
);*/

app.set("view engine", ".hbs"); //middleware

app.use((0, _morgan["default"])("dev")); //te convierte a json lo que recives en req.body

app.use(_express["default"].urlencoded({
  extended: false
})); //Routes

app.use(_index["default"]); //Stacic files

app.use(_express["default"]["static"](_path["default"].join(__dirname, "public")));
var _default = app;
exports["default"] = _default;