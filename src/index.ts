import "reflect-metadata";
import { AppDataSource } from "./data-source";
import express from "express";
import { router as userRouter } from "./routes/User";

const app = express();
const PORT = 3000;

app.use(express.json());

AppDataSource.initialize()
  .then(async () => {
    app.use(userRouter);

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => console.log(error));
