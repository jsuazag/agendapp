import { REDIRECT, REDIRECT_DONE } from "./redirectTypes"

export const redirect = (path = '') => {
    return (dispacth) => {
        dispacth(redirectAction(path))
    }
}

export const redirectDone = () => {
    return (dispacth) => {
        dispacth(redirectDoneAction());
    }
}

export const redirectAction = (path) => {
    return {
        type: REDIRECT,
        payload: path
    }
}

export const redirectDoneAction = () => {
    return {
        type: REDIRECT_DONE
    }
}
