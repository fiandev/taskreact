import fs from "fs";
import path from "path";
import App from "./core/App.js";
import { pwd } from "./contants/path.js";

const app = new App(pwd);
app.start();