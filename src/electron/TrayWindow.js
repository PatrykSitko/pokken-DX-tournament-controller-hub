/* eslint-disable no-cond-assign */
const { BrowserWindow, screen, Tray, Menu } = require("electron");
const path = require("path");

function checkPercentage(widthPercentage, heightPercentage) {
  return [
    // eslint-disable-next-line no-nested-ternary
    widthPercentage > 100 ? 100 : widthPercentage < 0 ? 0 : widthPercentage,
    // eslint-disable-next-line no-nested-ternary
    heightPercentage > 100 ? 100 : heightPercentage < 0 ? 0 : heightPercentage,
  ];
}

function findPosition(windowWidth, windowHeight) {
  let x = 0;
  let y = 0;
  const screenSize = screen.getPrimaryDisplay().size;
  const { workArea } = screen.getPrimaryDisplay();
  let taskbarTop = false;
  let taskbarLeft = false;
  let taskbarRight = false;
  let taskbarBottom = false;
  const taskbarDimensions = {};
  if ((taskbarTop = workArea.y > 0)) {
    x = screenSize.width - windowWidth;
    y = workArea.y;
    taskbarDimensions.x = 0;
    taskbarDimensions.width = screenSize.width;
    taskbarDimensions.y = 0;
    taskbarDimensions.height = workArea.y;
  } else if ((taskbarLeft = workArea.x > 0)) {
    x = workArea.x;
    y = screenSize.height - windowHeight;
    taskbarDimensions.x = 0;
    taskbarDimensions.width = workArea.x;
    taskbarDimensions.y = 0;
    taskbarDimensions.height = screenSize.height;
  } else if ((taskbarRight = workArea.width !== screenSize.width)) {
    x = workArea.width - windowWidth;
    y = screenSize.height - windowHeight;
    taskbarDimensions.x = workArea.width;
    taskbarDimensions.width = screenSize.width;
    taskbarDimensions.y = 0;
    taskbarDimensions.height = screenSize.height;
  } else if ((taskbarBottom = workArea.height !== screenSize.height)) {
    x = screenSize.width - windowWidth;
    y = workArea.height - windowHeight;
    taskbarDimensions.x = 0;
    taskbarDimensions.width = screenSize.width;
    taskbarDimensions.y = workArea.height;
    taskbarDimensions.height = screenSize.height;
  }
  return { x, y, taskbarDimensions };
}

function windowDimentions(widthPercentage, heightPercentage) {
  const [wPercentage, hPercentage] = checkPercentage(
    widthPercentage,
    heightPercentage,
  );
  const screenOrientation =
    screen.getPrimaryDisplay().rotation === 0 ? "HORIZONTAL" : "VERTICAL";
  const [width, height] = [
    (screen.getPrimaryDisplay().size.width / 100) *
      (screenOrientation === "HORIZONTAL" ? wPercentage : hPercentage),
    (screen.getPrimaryDisplay().size.height / 100) *
      (screenOrientation === "HORIZONTAL" ? hPercentage : wPercentage),
  ];
  const { x, y, taskbarDimensions } = findPosition(width, height);
  return { x, y, width, height, taskbarDimensions };
}

class TrayWindow extends BrowserWindow {
  constructor(
    indexHtmlPath,
    trayIconPath,
    widthPercentage,
    heightPercentage,
    args = {},
  ) {
    const { x, y, width, height } = windowDimentions(
      widthPercentage,
      heightPercentage,
    );
    super({
      x,
      y,
      width,
      height,
      webPreferences: {
        nodeIntegration: true,
        preload: path.join(__dirname, "preload.js"),
      },
      frame: false,
      resizable: false,
      alwaysOnTop: true,
      skipTaskbar: true,
      ...args,
    });
    super.loadURL(
      process.env.ELECTRON_START_URL ||
        url.format({
          pathname: indexHtmlPath,
          protocol: "file:",
          slashes: true,
        }),
    );
    this.tray = new Tray(trayIconPath);
    this.contextMenu = [];
    this.on("blur", () => {
      const { taskbarDimensions } = windowDimentions(
        widthPercentage,
        heightPercentage,
      );
      const { x: cursorX, y: cursorY } = screen.getCursorScreenPoint();
      const inBounds = () =>
        cursorX >= taskbarDimensions.x &&
        cursorX <= taskbarDimensions.width &&
        cursorY >= taskbarDimensions.y &&
        cursorY <= taskbarDimensions.height;
      if (!inBounds() && this.isVisible()) {
        // this.hide();
      }
      super.webContents.openDevTools();
    });
    this.tray.on("click", (e) => {
      if (this.isVisible()) {
        // this.hide();
      } else {
        this.show();
      }
    });
    this.addContextMenuEntry({
      label: "exit",
      role: process.platform === "darwin" ? "close" : "quit",
    });
    this.interval = setInterval(() => {
      this.setBounds(windowDimentions(widthPercentage, heightPercentage));
    }, 100);
  }

  addContextMenuEntry(entry = {}, index = undefined) {
    if (typeof index === "number") {
      this.contextMenu.splice(index, 0, entry);
    } else {
      this.contextMenu.push(entry);
    }
    this.tray.setContextMenu(Menu.buildFromTemplate(this.contextMenu));
  }

  removeContextMenuEntry(index) {
    this.contextMenu.splice(index, 1);
    this.tray.setContextMenu(Menu.buildFromTemplate(this.contextMenu));
  }
}

module.exports = TrayWindow;
