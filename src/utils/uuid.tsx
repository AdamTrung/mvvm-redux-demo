import { getLastId, setLastId } from "../model/TodoModel"


export default function() {
    let lastId = getLastId()
    lastId++
    setLastId(lastId)
    return `${lastId}`
}