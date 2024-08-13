import { IncomingMessage, ServerResponse } from "http";
import { v4 as uuidv4 } from "uuid";
import { users, User } from "./user";

//read
export const getUsers = (req: IncomingMessage, res: ServerResponse) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(users));
};

export const getUser = (
  req: IncomingMessage,
  res: ServerResponse,
  id: string
) => {
  const user = users.find((user) => user.id === id);
  if (user) {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(user));
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "User not found" }));
  }
};

//create
export const createUser = (req: IncomingMessage, res: ServerResponse) => {
  let body = "";
  req.on("data", (chunk) => {
    body += chunk.toString();
  });

  req.on("end", () => {
    const { name, email, dateOfBirth } = JSON.parse(body);
    const newUser: User = {
      id: uuidv4(),
      name,
      email,
      dateOfBirth,
    };
    users.push(newUser);
    res.writeHead(201, { "Content-Type": "application/json" });
    res.end(JSON.stringify(newUser));
  });
};

//update
export const updateUser = (
  req: IncomingMessage,
  res: ServerResponse,
  id: string
) => {
  let body = "";
  req.on("data", (chunk) => {
    body += chunk.toString();
  });

  req.on("end", () => {
    const { name, email, dateOfBirth } = JSON.parse(body);
    const index = users.findIndex((user) => user.id === id);
    if (index !== -1) {
      users[index] = { id, name, email, dateOfBirth };
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(users[index]));
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "User not found" }));
    }
  });
};

//delete
export const deleteUser = (
  req: IncomingMessage,
  res: ServerResponse,
  id: string
) => {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    users.splice(index, 1);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "User deleted" }));
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "User not found" }));
  }
};
