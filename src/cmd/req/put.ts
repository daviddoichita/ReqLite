import chalk from "chalk";
import { Command } from "commander";
import { saveRequest, statusCheck } from "../../utils";
import axios from "axios";

export async function putCommand(url: string, data: any, opts: any) {
  const parse_as_json = opts.json ? true : false;
  const start_time = Date.now();
  let end_time;

  try {
    const response = await axios.put(
      url,
      parse_as_json ? JSON.parse(data) : data,
    );

    end_time = Date.now();
    const delay = end_time - start_time;

    console.log(statusCheck(response.status));
    console.log(chalk.gray("Data: "), response.data);
    console.log(chalk.gray("Response time: ") + `${chalk.blue(delay)}ms`);
    saveRequest("PUT", url, response.data, delay);
  } catch (error: any) {
    end_time = Date.now();
    const delay = end_time - start_time;

    if (error.response) {
      console.log(statusCheck(error.response.status));
      console.log(chalk.blue("Error: "), error.response.statustext);
    } else if (error.request) {
      console.log(chalk.gray("Status: ") + chalk.blue("No response received"));
    } else {
      console.log(chalk.red("Error: ") + error.message);
    }
    console.log(chalk.gray("Response time: ") + chalk.blue(`${delay}ms`));
  }
}

export function registerPutCommand(req: Command) {
  req
    .command("put")
    .description("Send a PUT request.")
    .option("--json", "Parse data as JSON")
    .argument("<url>", "Target URL")
    .argument("<data>", "Data to send with the request")
    .action(putCommand);
}
