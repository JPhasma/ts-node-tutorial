import { RequestHandler } from 'express';

import { Todos } from '../models/todos';

export const createTodo: RequestHandler = async (req, res, next) => {
  let todos = await Todos.create({ ...req.body });
  return res.status(200).json({ message: 'Todo created ok', data: todos });
};

export const deleteTodo: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const deleteTodo: Todos | null = await Todos.findByPk(id);

  await Todos.destroy({ where: { id } });

  return res.status(200).json({ message: 'Todo deleted ok', data: deleteTodo });
};

export const getAllTodos: RequestHandler = async (req, res, next) => {
  const allTodos: Todos[] = await Todos.findAll();

  return res.status(200).json({ message: 'Todo fetched ok', data: allTodos });
};

export const getTodoById: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const todos: Todos | null = await Todos.findByPk(id);
  return res.status(200).json({ message: 'Todo fetched ok', data: todos });
};

export const updateToDo: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  await Todos.update({ ...req.body }, { where: { id } });
  const updatedToDos: Todos | null = await Todos.findByPk(id);
  return res
    .status(200)
    .json({ message: 'Todo updated ok', data: updatedToDos });
};
