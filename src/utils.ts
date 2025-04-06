import chalk from "chalk";
import { JSONFilePreset, JSONFileSyncPreset } from "lowdb/node";

export function statusCheck(status: number): string {
  if (status >= 200 && status < 300) {
    return chalk.gray("Status: ") + chalk.green("Success ") + status;
  } else if (status >= 400 && status < 500) {
    return chalk.gray("Status: ") + chalk.red("Client Error ") + status;
  } else if (status >= 500 && status < 600) {
    return chalk.gray("Status: ") + chalk.red("Server Error ") + status;
  } else {
    return chalk.gray("Status: ") + status;
  }
}

export function getFormattedDate(): string {
  const now = new Date();

  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const year = now.getFullYear();

  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}

export type ReqLiteRequest = {
  method: string;
  url: string;
  data: any;
  delay: number;
  date: string;
};

const requestDBdata: ReqLiteRequest[] = [];
export const requestDB = JSONFileSyncPreset(".reqlite/requests.json", {
  requests: requestDBdata,
});

export function saveRequest(
  method: string,
  url: string,
  data: any,
  response_time: number,
) {
  requestDB.update(({ requests }) =>
    requests.push({
      method: method,
      url: url,
      data: data,
      delay: response_time,
      date: getFormattedDate(),
    }),
  );
}
