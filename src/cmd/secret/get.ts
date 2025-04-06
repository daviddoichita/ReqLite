import chalk from "chalk";
import { Command } from "commander";
import { secretDB } from "./secret";

export function getSecretCommand(name: string) {
  const secret = secretDB.data.secrets[name];
  console.log(
    chalk.gray(`Secret ${chalk.blue(name)}: `),
    secret ? secret : chalk.red("undefined"),
  );
}

export function registerGetSecretCommand(secret: Command) {
  secret
    .command("get")
    .description("Get a secret from the local .reqlite/secret.json file")
    .argument("<secret_name>")
    .action(getSecretCommand);
}
