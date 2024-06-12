export default function Logger(reducer) {

    return (prevstate, action, args) => {
        console.group(action);
        console.log("prev state", prevstate);
        console.log("args", args);
        const nextState = reducer(prevstate, action, args);
        console.log("nextstate", nextState);
        console.groupEnd();
        return nextState;
    }
}