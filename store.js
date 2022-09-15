import { createStore } from "./core.js";
import reducer from "./reducer.js";
import withLogger from "./logger.js"

const {attach, connect, dispatch} = createStore(withLogger(reducer))
// withlogger đã đc gọi 1 lần ==> sẽ có 1 log cho sẵn
window.dispatch = dispatch

export {
    attach,
    connect
}