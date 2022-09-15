import { createStore } from "./core.js";
import reducer from "./reducer.js";
<<<<<<< HEAD
import withLogger from "./logger.js"

const {attach, connect, dispatch} = createStore(withLogger(reducer))
// withlogger đã đc gọi 1 lần ==> sẽ có 1 log cho sẵn
=======

const {attach, connect, dispatch} = createStore(reducer)

>>>>>>> 569f2b183acdbf23ff799a79bd91af8de0af4e8b
window.dispatch = dispatch

export {
    attach,
    connect
}