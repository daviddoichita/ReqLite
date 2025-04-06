import { Command } from "commander";
import { JSONFileSyncPreset } from "lowdb/node";
import { registerGetVarCommand } from "./get";
import { registerSetVarCommand } from "./set";

const varDBData = {} as { [key: string]: string };
export const varDB = JSONFileSyncPreset(".reqlite/var.json", {
  vars: varDBData,
});

export function registerVarCommand(): Command {
  const envvar = new Command("var");
  envvar.description(
    "Manage environment variables, such as usernames or other data",
  );
  registerGetVarCommand(envvar);
  registerSetVarCommand(envvar);
  return envvar;
}
