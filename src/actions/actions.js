import { CHANGE_TEXT } from './actionConstants'

export function changeText(text) {
    return {
        type: CHANGE_TEXT,
        text
    }
}