// #!/usr/bin/env node
import Beefy from "./Beefy";
import { CliInterface } from "./CliInterface";

console.log("~~~ Beefy The Robot ~~~");
console.log("type help for a list of commands\n");

const beefy = new Beefy();
let getInput = true;
while (getInput) {
	getInput = CliInterface(beefy);
}
