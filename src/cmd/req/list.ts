import { Command } from "commander";
import { requestDB } from "../../utils";
import chalk from "chalk";

export function listCommand(opts: any) {
  const display_data = opts.data ? true : false;
  const filter_method = opts.method ? opts.method : null;
  const filter_url = opts.url ? opts.url : null;
  const filter = (request: any) => {
    let matches_method;
    let matches_url;
    if (filter_method) {
      if (request.method == filter_method) {
        matches_method = true;
      } else {
        matches_method = false;
      }
    } else {
      matches_method = true;
    }
    if (filter_url) {
      if (request.url == filter_url) {
        matches_url = true;
      } else {
        matches_url = false;
      }
    } else {
      matches_url = true;
    }

    if (matches_method && matches_url) {
      return request;
    } else {
      return null;
    }
  };

  requestDB.data.requests.forEach((element) => {
    if (filter(element)) {
      console.log(chalk.gray("Request of ") + element.date);
      console.log(`| ${chalk.blue("Method")}: `, element.method);
      console.log(`| ${chalk.blue("URL")}: `, element.url);
      console.log(`| ${chalk.blue("Response time")}: `, element.delay);
      if (display_data) console.log(`| ${chalk.blue("Data")}: `, element.data);
    }
  });
}

export function registerListCommand(req: Command) {
  req
    .command("list")
    .description("list all requests")
    .option("-d, --data", "Also display data")
    .option("-m, --method <method>", "Filter by method")
    .option("-u, --url <url>", "Filter by URL")
    .action(listCommand);
}
