// #!/usr/bin/env node
import { CliInterface } from "./CliInterface";

console.log("~~~ Beefy The Robot ~~~");
console.log("type help for a list of commands\n");

let getInput = true;
while (getInput) {
	getInput = CliInterface();
}
