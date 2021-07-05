export function add(content) {
    return {
        type: "ADD",
        payload: content
    }
}
export function remove(key) {
    return {
        type: "REMOVE",
        payload: key
    }
}
export function clean() {
    return {
        type: "CLEAN"
    }
}