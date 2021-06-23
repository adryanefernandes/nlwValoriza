import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors"

import "./database";

import { router } from "./routes";

const app = express();
app.use(express.json());

app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).send({ message: err.message });
  }

  return res.status(500).send({ message: "Internal Server Error" });
});

app.listen(3003, () => {
  console.log("Servis is running in http://localhost:3003");
});
