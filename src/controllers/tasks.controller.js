import { v4 as uuid } from "uuid";
import { getConnection } from "../database.js";

export const getTasks = (req, res) => {
  res.send("sending tasks from tasks.controller");
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
        message: error.message
    });
  }
};
export const getTask = (req, res) => {
  res.send("gettin task");
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
