import "@common/sentryReporter";
import { app } from "electron";
import { Logger } from "./utils/logger";

if (process.env.NODE_ENV !== "production") {
	process.on("uncaughtException", err => {
		Logger.defaultLogger().error(err);
	});

	process.on("unhandledRejection", err => {
		Logger.defaultLogger().error(err);
	});
}
import { Auryo } from "./app";
import { configureStore } from "./store";

if (process.env.TOKEN) {
	process.env.ENV = "test";
}

if (process.argv.some(arg => arg === "--development") || process.argv.some(arg => arg === "--dev")) {
	process.env.ENV = "development";
}

const store = configureStore();

const auryo = new Auryo(store);

// Quit when all windows are closed
app.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
		app.quit();
	}
});

app.on("activate", () => {
	if (auryo.mainWindow) {
		auryo.mainWindow.show();
	} else {
		// Something went wrong
		app.quit();
	}
});

// This method will be called when Electron has done everything
// initialization and ready for creating browser windows.
app.on("ready", async () => {
	try {
		if (process.env.NODE_ENV === "development") {
			const {
				default: installExtension,
				REACT_DEVELOPER_TOOLS,
				REDUX_DEVTOOLS
			} = require("electron-devtools-installer");

			await installExtension([REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS], true);
		}

		await auryo.start();
	} catch (err) {
		Logger.defaultLogger().error(err);
	}
});
