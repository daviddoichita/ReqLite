import { Command } from "commander";
import { registerGetCommand } from "./get";
import { registerPostCommand } from "./post";
import { registerPutCommand } from "./put";
import { registerDeleteCommand } from "./delete";
import { registerListCommand } from "./list";

export function registerReqCommand(): Command {
  const req = new Command("req");
  req.description("Send HTTP/HTTPS requests.");
  registerGetCommand(req);
  registerPostCommand(req);
  registerPutCommand(req);
  registerDeleteCommand(req);
  registerListCommand(req);
  return req;
}
