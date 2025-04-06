import chalk from "chalk";
import { Command } from "commander";
import { varDB } from "./var";

export function getVarCommand(name: string) {
  const envvar = varDB.data.vars[name];
  console.log(
    chalk.gray(`Var ${chalk.blue(name)}: `),
    envvar ? envvar : chalk.red("undefined"),
  );
}

export function registerGetVarCommand(envvar: Command) {
  envvar
    .command("get")
    .description(
      "Get an environment variable from the local .reqlite/var.json file",
    )
    .argument("<var_name>")
    .action(getVarCommand);
}
