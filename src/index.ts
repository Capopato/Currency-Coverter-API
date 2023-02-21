import express from "express";
import router from "./routes/currency.routes";
import config from "./config/config";

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use("/currency", router);

app.listen(config.port, () => console.log(`App is running at ${config.port}`));
