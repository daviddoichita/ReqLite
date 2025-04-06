import { Command } from "commander";
import { varDB } from "./var";

export function setVarCommand(name: string, value: string) {
  varDB.update(({ vars }) => {
    vars[name] = value;
  });
}

export function registerSetVarCommand(envvar: Command) {
  envvar
    .command("set")
    .description(
      "Set a an environment variable in the local .reqlite/var.json file",
    )
    .argument("<name>")
    .argument("<value>")
    .action(setVarCommand);
}
