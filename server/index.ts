// server.js
import path from "path";
require("dotenv").config({ 
  path: path.resolve(__dirname, `../.env.${process.env.NODE_ENV}.local`) 
});

import express from "express";
import next from "next";
import { db } from "./db/conn";
import { dev, port, hostname, mongoURI } from "./config/keys";
import api from "./routes/api/index";

import { createServer } from "http";
import { parse } from "url";

// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  if (db) console.log("DB connection established.");

  server.use("/api", api);

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err?: Error) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});