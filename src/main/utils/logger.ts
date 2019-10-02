import * as pino from "pino";
import rfs from "rotating-file-stream";
import { Utils } from "./utils";

const isProd = true;//process.env.NODE_ENV === "production";

let stream: pino.DestinationStream;

if (isProd) {
    stream = rfs("main.log", {
        path: Utils.getLogDir(),
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
        if (!isProd) {
            config.name = name;
        }
        
        return pino({
            ...config,
            base: isProd ? {} : { name },
        }, stream)
    }

    export function defaultLogger(): LoggerInstance {
        return pino({
            ...config,
        }, stream)
    }
}
