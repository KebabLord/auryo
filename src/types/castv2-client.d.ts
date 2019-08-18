export class Application {
  constructor(client: any, session: any);
  session: any;
  connection: any;
  addListener(type: any, listener: any): any;
  close(): void;
  createController(...args: any[]): any;
  emit(type: any, args: any): any;
  eventNames(): any;
  getMaxListeners(): any;
  listenerCount(type: any): any;
  listeners(type: any): any;
  off(type: any, listener: any): any;
  on(type: any, listener: any): any;
  once(type: any, listener: any): any;
  prependListener(type: any, listener: any): any;
  prependOnceListener(type: any, listener: any): any;
  rawListeners(type: any): any;
  removeAllListeners(type: any, ...args: any[]): any;
  removeListener(type: any, listener: any): any;
  setMaxListeners(n: any): any;
}
export class Client {
  connection: any;
  heartbeat: any;
  receiver: any;
  addListener(type: any, listener: any): any;
  close(): void;
  connect(options: any, callback: any): void;
  createController(...args: any[]): any;
  emit(type: any, args: any): any;
  eventNames(): any;
  getAppAvailability(appId: any, callback: any): void;
  getMaxListeners(): any;
  getSessions(callback: any): void;
  getStatus(callback: any): void;
  getVolume(callback: any): void;
  join(session: any, Application: any, callback: any): void;
  launch(Application: any, callback: any): void;
  listenerCount(type: any): any;
  listeners(type: any): any;
  off(type: any, listener: any): any;
  on(type: any, listener: any): any;
  once(type: any, listener: any): any;
  prependListener(type: any, listener: any): any;
  prependOnceListener(type: any, listener: any): any;
  rawListeners(type: any): any;
  removeAllListeners(type: any, ...args: any[]): any;
  removeListener(type: any, listener: any): any;
  setMaxListeners(n: any): any;
  setVolume(volume: any, callback: any): void;
  stop(application: any, callback: any): void;
}
export class ConnectionController {
  constructor(client: any, sourceId: any, destinationId: any);
  addListener(type: any, listener: any): any;
  close(): void;
  connect(): void;
  disconnect(): void;
  emit(type: any, args: any): any;
  eventNames(): any;
  getMaxListeners(): any;
  listenerCount(type: any): any;
  listeners(type: any): any;
  off(type: any, listener: any): any;
  on(type: any, listener: any): any;
  once(type: any, listener: any): any;
  prependListener(type: any, listener: any): any;
  prependOnceListener(type: any, listener: any): any;
  rawListeners(type: any): any;
  removeAllListeners(type: any, ...args: any[]): any;
  removeListener(type: any, listener: any): any;
  send(data: any): void;
  setMaxListeners(n: any): any;
}
export class Controller {
  constructor(client: any, sourceId: any, destinationId: any, namespace: any, encoding: any);
  channel: any;
  addListener(type: any, listener: any): any;
  close(): void;
  emit(type: any, args: any): any;
  eventNames(): any;
  getMaxListeners(): any;
  listenerCount(type: any): any;
  listeners(type: any): any;
  off(type: any, listener: any): any;
  on(type: any, listener: any): any;
  once(type: any, listener: any): any;
  prependListener(type: any, listener: any): any;
  prependOnceListener(type: any, listener: any): any;
  rawListeners(type: any): any;
  removeAllListeners(type: any, ...args: any[]): any;
  removeListener(type: any, listener: any): any;
  send(data: any): void;
  setMaxListeners(n: any): any;
}
export class DefaultMediaReceiver {
  static APP_ID: string;
  constructor(client: any, session: any, ...args: any[]);
  media: any;
  addListener(type: any, listener: any): any;
  close(): void;
  createController(...args: any[]): any;
  emit(type: any, args: any): any;
  eventNames(): any;
  getMaxListeners(): any;
  getStatus(callback: any, ...args: any[]): void;
  listenerCount(type: any): any;
  listeners(type: any): any;
  load(media: any, options: any, callback: any, ...args: any[]): void;
  off(type: any, listener: any): any;
  on(type: any, listener: any): any;
  once(type: any, listener: any): any;
  pause(callback: any, ...args: any[]): void;
  play(callback: any, ...args: any[]): void;
  prependListener(type: any, listener: any): any;
  prependOnceListener(type: any, listener: any): any;
  queueInsert(items: any, options: any, callback: any, ...args: any[]): void;
  queueLoad(items: any, options: any, callback: any, ...args: any[]): void;
  queueRemove(itemIds: any, options: any, callback: any, ...args: any[]): void;
  queueReorder(itemIds: any, options: any, callback: any, ...args: any[]): void;
  queueUpdate(items: any, callback: any, ...args: any[]): void;
  rawListeners(type: any): any;
  removeAllListeners(type: any, ...args: any[]): any;
  removeListener(type: any, listener: any): any;
  seek(currentTime: any, callback: any, ...args: any[]): void;
  setMaxListeners(n: any): any;
  stop(callback: any, ...args: any[]): void;
}
export class HeartbeatController {
  constructor(client: any, sourceId: any, destinationId: any);
  pingTimer: any;
  timeout: any;
  intervalValue: any;
  addListener(type: any, listener: any): any;
  close(): void;
  emit(type: any, args: any): any;
  eventNames(): any;
  getMaxListeners(): any;
  listenerCount(type: any): any;
  listeners(type: any): any;
  off(type: any, listener: any): any;
  on(type: any, listener: any): any;
  once(type: any, listener: any): any;
  ping(): void;
  prependListener(type: any, listener: any): any;
  prependOnceListener(type: any, listener: any): any;
  rawListeners(type: any): any;
  removeAllListeners(type: any, ...args: any[]): any;
  removeListener(type: any, listener: any): any;
  send(data: any): void;
  setMaxListeners(n: any): any;
  start(intervalValue: any): void;
  stop(): void;
}
export class JsonController {
  constructor(client: any, sourceId: any, destinationId: any, namespace: any);
  addListener(type: any, listener: any): any;
  close(): void;
  emit(type: any, args: any): any;
  eventNames(): any;
  getMaxListeners(): any;
  listenerCount(type: any): any;
  listeners(type: any): any;
  off(type: any, listener: any): any;
  on(type: any, listener: any): any;
  once(type: any, listener: any): any;
  prependListener(type: any, listener: any): any;
  prependOnceListener(type: any, listener: any): any;
  rawListeners(type: any): any;
  removeAllListeners(type: any, ...args: any[]): any;
  removeListener(type: any, listener: any): any;
  send(data: any): void;
  setMaxListeners(n: any): any;
}
export class MediaController {
  constructor(client: any, sourceId: any, destinationId: any);
  currentSession: any;
  addListener(type: any, listener: any): any;
  close(): void;
  emit(type: any, args: any): any;
  eventNames(): any;
  getMaxListeners(): any;
  getStatus(callback: any): void;
  listenerCount(type: any): any;
  listeners(type: any): any;
  load(media: any, options: any, callback: any): void;
  off(type: any, listener: any): any;
  on(type: any, listener: any): any;
  once(type: any, listener: any): any;
  pause(callback: any): void;
  play(callback: any): void;
  prependListener(type: any, listener: any): any;
  prependOnceListener(type: any, listener: any): any;
  queueInsert(items: any, options: any, callback: any): void;
  queueLoad(items: any, options: any, callback: any): void;
  queueRemove(itemIds: any, options: any, callback: any): void;
  queueReorder(itemIds: any, options: any, callback: any): void;
  queueUpdate(items: any, options: any, callback: any): void;
  rawListeners(type: any): any;
  removeAllListeners(type: any, ...args: any[]): any;
  removeListener(type: any, listener: any): any;
  request(data: any, callback: any): void;
  seek(currentTime: any, callback: any): void;
  send(data: any): void;
  sessionRequest(data: any, callback: any): void;
  setMaxListeners(n: any): any;
  stop(callback: any): void;
}
export class PlatformSender {
  connection: any;
  heartbeat: any;
  receiver: any;
  addListener(type: any, listener: any): any;
  close(): void;
  connect(options: any, callback: any): void;
  createController(...args: any[]): any;
  emit(type: any, args: any): any;
  eventNames(): any;
  getAppAvailability(appId: any, callback: any): void;
  getMaxListeners(): any;
  getSessions(callback: any): void;
  getStatus(callback: any): void;
  getVolume(callback: any): void;
  join(session: any, Application: any, callback: any): void;
  launch(Application: any, callback: any): void;
  listenerCount(type: any): any;
  listeners(type: any): any;
  off(type: any, listener: any): any;
  on(type: any, listener: any): any;
  once(type: any, listener: any): any;
  prependListener(type: any, listener: any): any;
  prependOnceListener(type: any, listener: any): any;
  rawListeners(type: any): any;
  removeAllListeners(type: any, ...args: any[]): any;
  removeListener(type: any, listener: any): any;
  setMaxListeners(n: any): any;
  setVolume(volume: any, callback: any): void;
  stop(application: any, callback: any): void;
}
export class ReceiverController {
  constructor(client: any, sourceId: any, destinationId: any);
  addListener(type: any, listener: any): any;
  close(): void;
  emit(type: any, args: any): any;
  eventNames(): any;
  getAppAvailability(appId: any, callback: any): void;
  getMaxListeners(): any;
  getSessions(callback: any): void;
  getStatus(callback: any): void;
  getVolume(callback: any): void;
  launch(appId: any, callback: any): void;
  listenerCount(type: any): any;
  listeners(type: any): any;
  off(type: any, listener: any): any;
  on(type: any, listener: any): any;
  once(type: any, listener: any): any;
  prependListener(type: any, listener: any): any;
  prependOnceListener(type: any, listener: any): any;
  rawListeners(type: any): any;
  removeAllListeners(type: any, ...args: any[]): any;
  removeListener(type: any, listener: any): any;
  request(data: any, callback: any): void;
  send(data: any): void;
  setMaxListeners(n: any): any;
  setVolume(options: any, callback: any): void;
  stop(sessionId: any, callback: any): void;
}
export class RequestResponseController {
  constructor(client: any, sourceId: any, destinationId: any, namespace: any);
  lastRequestId: any;
  addListener(type: any, listener: any): any;
  close(): void;
  emit(type: any, args: any): any;
  eventNames(): any;
  getMaxListeners(): any;
  listenerCount(type: any): any;
  listeners(type: any): any;
  off(type: any, listener: any): any;
  on(type: any, listener: any): any;
  once(type: any, listener: any): any;
  prependListener(type: any, listener: any): any;
  prependOnceListener(type: any, listener: any): any;
  rawListeners(type: any): any;
  removeAllListeners(type: any, ...args: any[]): any;
  removeListener(type: any, listener: any): any;
  request(data: any, callback: any): void;
  send(data: any): void;
  setMaxListeners(n: any): any;
}
