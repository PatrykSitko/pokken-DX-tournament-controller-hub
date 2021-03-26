const { app } = require("electron");
const url = require("url");
const path = require("path");
const TrayWindow = require("./electron/TrayWindow");

app.on("ready", () => {
  const trayWindow = new TrayWindow(
    path.join(__dirname, "/../public/index.html"),
    path.join(__dirname, "/../public/logo192.png"),
    35,
    35,
    { transparent: true },
  );
});
