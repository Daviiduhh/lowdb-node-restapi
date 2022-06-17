export const getTasks = (req, res) => {
    res.send('sending tasks from tasks.controller')
}

export const createTask = (req, res) => {
    res.send('creating task ' + req)
}
export const getTask = (req, res) => {
    res.send('gettin task')
}
export const updateTask = (req, res) => {
    res.send('updating task')
}
export const deleteTask = (req, res) => {
    res.send('deleting task')
}
export const countTasks = (req, res) => {
    res.send('counting task')
}