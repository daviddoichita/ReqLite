import { Command } from "commander";
import { readFileSync } from "fs";
import { ReqLiteRequest, requestDB } from "../utils";

export function importCommand(filename: string) {
  let importedJSON_raw;
  importedJSON_raw = readFileSync(filename, "utf-8");
  const importedJSON = JSON.parse(importedJSON_raw);
  importedJSON.requests.forEach((element: ReqLiteRequest) => {
    requestDB.update(({ requests }) => {
      requests.push(element);
    });
  });
}

export function registerImportCommand(): Command {
  return new Command("import")
    .description("Import requests from a JSON file")
    .argument("<filename>")
    .action(importCommand);
}
