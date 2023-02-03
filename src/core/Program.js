import path from "path";
import { Command } from "commander";
import { pwd } from "../constants/path.js";
import Task from "./TaskHandler.js";
import pkg from "../constants/initial.js";
/* initilize */
const program = new Command();

export default class Program () {
  constructor () {
    program
    .name(pkg.name)
    .usage("<command> [options]")
    .argument("<command>", "command to execute")
    .version(pkg.version, "-v, --version", "show app version")
    .showSuggestionAfterError()
    .helpOption("-h, --help", "show help menu");
    
    program
    .command("make")
      .command("atoms")
        .usage("<command> <name> [options]")
        .description("create commands")
        .argument("<name>", "name atoms")
        .action((name, options) => {
          this.taskAtom({
            prosedur: "create",
            name: name,
            options: options
          })
        })
    
    program
    .command("molecules")
      .usage("<command> <name> [options]")
      .description("create commands")
      .argument("<name>", "name atoms")
      .action((name, options) => {
        this.taskAtom({
          prosedur: "create",
          name: name,
          options: options
        })
      })
    
    return program;
  }
  
  taskAtom ({ prosedur, name, options }) {
    Task.setPathfile(`./src/atoms/${ name }`);
    Task.setCommand("atom");
    if (prosedur === "create") Task.createFile();
    if (prosedur === "delete") Task.deleteFile();
  }
}