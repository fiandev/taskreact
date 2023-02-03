import Program from "./Program";

const program = new Program();

export default class App {
  constructor(pwd) {
    this.input = path.resolve(pwd)
  }
  
  start () {
    program.parse();
  }
}