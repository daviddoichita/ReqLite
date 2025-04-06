import { Command } from "commander";
import { requestDB } from "../utils";
import { writeFile } from "fs/promises";

export function exportCommand(opts: any) {
  const requestsJSON = JSON.stringify(
    requestDB.data,
    null,
    opts.minify ? 0 : 2,
  );

  if (opts.output) {
    (async () => {
      await writeFile(opts.output, requestsJSON, "utf-8");
    })();
  } else {
    process.stdout.write(requestsJSON);
  }
}

export function registerExportCommand(): Command {
  return new Command("export")
    .description("Export all requests to a file or to stdout")
    .option("-m, --minify", "Minify the JSON output")
    .option("-o, --output <filename>", "Write requests to file")
    .action(exportCommand);
}
