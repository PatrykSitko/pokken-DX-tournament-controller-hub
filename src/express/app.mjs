import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";
import usbRoute from "./routes/usb.mjs";

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/usb", usbRoute);
export default app;
