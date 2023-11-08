import path from "path";

export function getTrayIcon() {
  switch (process.platform) {
    case "darwin":
      return path.join(__dirname, "../assets/16x16.png");
    default:
      return path.join(__dirname, "../assets/tray.png");
  }
}
