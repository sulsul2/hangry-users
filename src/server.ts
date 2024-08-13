import { createServer } from "http";
import { router } from "./router";

const PORT = 3000;

const server = createServer((req, res) => {
  router(req, res);
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
