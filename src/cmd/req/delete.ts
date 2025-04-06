import axios from "axios";
import chalk from "chalk";
import { Command } from "commander";
import { saveRequest, statusCheck } from "../../utils";

export async function deleteCommand(url: string) {
  const start_time = Date.now();
  let end_time;

  try {
    const response = await axios.delete(url);

    end_time = Date.now();
    const delay = end_time - start_time;

    console.log(statusCheck(response.status));
    console.log(chalk.gray("Response time: ") + chalk.blue(`${delay}ms`));
    saveRequest("DELETE", url, response.data, delay);
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

export function registerDeleteCommand(req: Command) {
  req
    .command("delete")
    .description("Send a DELETE request.")
    .argument("<url>", "Target URL")
    .action(deleteCommand);
}
