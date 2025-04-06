#!/usr/bin/env node

import { program } from "commander";
import { registerReqCommand } from "./cmd/req/req";
import fs from "fs";
import chalk from "chalk";

program
  .name("reql")
  .description("A lightweight CLI to test HTTP/HTTPS APIs")
  .version("0.0.1");

registerReqCommand(program);

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
