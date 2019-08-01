import { app } from "electron";
import * as pino from "pino";
import rfs from "rotating-file-stream";

const isProd = process.env.NODE_ENV === "production";

let stream: pino.DestinationStream;

if (isProd) {
    stream = rfs("main.log", {
        path: app.getPath("logs"),
        maxFiles: 1,
        size: "10M",
        interval: "7d"
    });
}


const config: pino.LoggerOptions = {
    prettyPrint: !isProd && {
        colorize: true
    },
    base: null,
    level: isProd ? "info" : "debug"
}

export type LoggerInstance = pino.Logger;

export namespace Logger {
    export function createLogger(name: string): LoggerInstance {
        return pino({
            ...config,
            name: name,
            base: { name },
        }, stream)
    }

    export function defaultLogger(): LoggerInstance {
        return pino({
            ...config,
        }, stream)
    }
}
