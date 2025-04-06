import { Command } from "commander";
import { registerGetCommand } from "./get";
import { registerPostCommand } from "./post";
import { registerPutCommand } from "./put";
import { registerDeleteCommand } from "./delete";
import { registerListCommand } from "./list";

export function registerReqCommand(program: Command) {
  const req = program.command("req");
  req.description("Send HTTP/HTTPS requests.");
  registerGetCommand(req);
  registerPostCommand(req);
  registerPutCommand(req);
  registerDeleteCommand(req);
  registerListCommand(req);
}
