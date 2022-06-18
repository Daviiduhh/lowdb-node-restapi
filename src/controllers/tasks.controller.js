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
    (task) => task.id === req.params.id
  );

  if (task === undefined) {
    res.status(404).json({
      message: "No se encontraron coincidencias",
    });
  }

  res.json(task);
};
export const updateTask = async (req, res) => {
  const db = getConnection();
  const task = db.data.tasks.find((task) => task.id == req.params.id);

  if (task === undefined) {
    return res.status(404).json({
      message: "No se encontraron coincidencias",
    });
  } else {
    task.name = req.body.name
    task.description = req.body.description

    db.data.tasks.map(t => t.id === req.params.id ? task : t)

    await db.write()

    res.json(task)
  }
};
export const deleteTask = async (req, res) => {
  const db = getConnection();
  const task = db.data.tasks.find((task) => task.id == req.params.id);

  if (task === undefined) {
    res.status(404).json({
      message: "No se encontraron coincidencias",
    });
  } else {
    const newTasks = db.data.tasks.filter((task) => task.id !== req.params.id);
    db.data.tasks = newTasks;

    await db.write();

    res.json(task);
  }
};
export const countTasks = (req, res) => {
  const tasks = getConnection().data.tasks;

  res.json({
    count: tasks.length
  })
};
