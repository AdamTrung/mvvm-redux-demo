const key = 'todoList'
const lastIdKey = "lastId"

const setTodo = (data) => {
    localStorage.setItem(key, JSON.stringify(data))
}

const getTodo = () => {
    const data = localStorage.getItem(key)
    const parsedData = JSON.parse(data!)
    return parsedData ? parsedData : []
}

const setLastId = (id) => {
    localStorage.setItem(lastIdKey, JSON.stringify(id))
}

const getLastId = () => {
    const data = localStorage.getItem(lastIdKey)
    const parsedData = JSON.parse(data!)
    return parsedData ? parsedData : 0;
}

export { setTodo , getTodo, setLastId, getLastId }