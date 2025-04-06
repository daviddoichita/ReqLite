import { Command } from "commander";
import { JSONFileSyncPreset } from "lowdb/node";
import { registerGetSecretCommand } from "./get";
import { registerSetSecretCommand } from "./set";

const secretDBData = {} as { [key: string]: string };
export const secretDB = JSONFileSyncPreset(".reqlite/secret.json", {
  secrets: secretDBData,
});

export function registerSecretCommand(): Command {
  const secret = new Command("secret");
  secret.description("Manage secrets, such as auth tokens, keys, passwords...");
  registerGetSecretCommand(secret);
  registerSetSecretCommand(secret);
  return secret;
}
