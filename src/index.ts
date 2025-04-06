#!/usr/bin/env node
import { program } from "commander";
import { registerReqCommand } from "./cmd/req/req";
import { registerExportCommand } from "./cmd/export";
import fs from "fs";
import chalk from "chalk";
import { registerImportCommand } from "./cmd/import";
import { registerSecretCommand } from "./cmd/secret/secret";
import { registerVarCommand } from "./cmd/var/var";

program
  .name("reql")
  .description("A lightweight CLI to test HTTP/HTTPS APIs")
  .version("0.0.1");

program.addCommand(registerReqCommand());
program.addCommand(registerExportCommand());
program.addCommand(registerImportCommand());
program.addCommand(registerSecretCommand());
program.addCommand(registerVarCommand());

if (!fs.existsSync(".reqlite")) {
  fs.mkdir("./.reqlite", { recursive: true }, (err) => {
    if (err) {
      console.log(
        chalk.red(`Could not create directory .reqlite: ${err.message}`),
      );
    }
  });
}

program.parse(process.argv);
