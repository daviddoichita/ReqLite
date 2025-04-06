import { Command } from "commander";
import { secretDB } from "./secret";

export function setSecretCommand(name: string, value: string) {
  secretDB.update(({ secrets }) => {
    secrets[name] = value;
  });
}

export function registerSetSecretCommand(secret: Command) {
  secret
    .command("set")
    .description("Set a secret in the local .reqlite/secret.json file")
    .argument("<name>")
    .argument("<value>")
    .action(setSecretCommand);
}
