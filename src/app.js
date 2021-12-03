import express from "express";
import { create } from "express-handlebars";
import path from "path";
import indexRoutes from "./routes/index.routes";
import morgan from "morgan";

const app = express();

app.set("views", path.join(__dirname, "views"));

const exphbs = create({
  extname: ".hbs",
  layoutsDir: path.join(app.get("views"), "layouts"),
  defaultLayout: "main",
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
app.set("view engine", ".hbs");

//middleware
app.use(morgan("dev"));

//te convierte a json lo que recives en req.body
app.use(express.urlencoded({ extended: false }));

//Routes
app.use(indexRoutes);

//Stacic files
app.use(express.static(path.join(__dirname, "public")));

export default app;
