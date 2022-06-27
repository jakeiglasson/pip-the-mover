// #!/usr/bin/env node
import Pip from "./Pip";
import { CliInterface } from "./CliInterface";

console.log("~~~ Pip The Mover ~~~");
console.log("type help for a list of commands\n");

const pip = new Pip();
let getInput = true;
while (getInput) {
	getInput = CliInterface(pip);
}
