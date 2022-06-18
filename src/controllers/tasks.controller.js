import { v4 as uuid } from "uuid";
import { getConnection } from "../database.js";

export const getTasks = (req, res) => {
  const tasks = getConnection().data.tasks;
  res.json(tasks);
};

export const createTask = async (req, res) => {
  const newTask = {
    id: uuid(),
    name: req.body.name,
    description: req.body.description,
  };

  try {
    const db = getConnection();
    db.data.tasks.push(newTask);
    await db.write();

    res.json(newTask);
  } catch (error) {
    return res.status(500).send({
      message: error.message,
    });
  }
};
export const getTask = (req, res) => {
  const task = getConnection().data.tasks.find(
    (task) => task.id == req.params.id
  );

  console.log(req.params.id);

  if (task === undefined) {
    res.status(404).json({
      message: "No se encontraron coincidencias",
    });
  }

  res.json(task);
};
export const updateTask = (req, res) => {
  res.send("updating task");
};
export const deleteTask = (req, res) => {
  res.send("deleting task");
};
export const countTasks = (req, res) => {
  res.send("counting task");
};
