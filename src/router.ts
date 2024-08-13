import { IncomingMessage, ServerResponse } from "http";
import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from "./controller";

export const router = (req: IncomingMessage, res: ServerResponse) => {
  const [_, resource, id] = req.url?.split("/") || [];

  if (resource === "users") {
    switch (req.method) {
      case "GET":
        if (id) {
          getUser(req, res, id);
        } else {
          getUsers(req, res);
        }
        break;
      case "POST":
        createUser(req, res);
        break;
      case "PUT":
        if (id) {
          updateUser(req, res, id);
        }
        break;
      case "DELETE":
        if (id) {
          deleteUser(req, res, id);
        }
        break;
      default:
        res.writeHead(405, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Method not allowed" }));
    }
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Not found" }));
  }
};
