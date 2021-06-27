export function add(content, key){
    return {
        type: "ADD",
        payload: content,
        key: key
    }
}
export function remove(key){
    return{
        type: "REMOVE",
        payload: key
    }
}