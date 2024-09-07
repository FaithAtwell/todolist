// pages/api/tasks.js
let tasks = [];

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(tasks);
  } else if (req.method === 'POST') {
    const { text } = req.body;
    const newTask = { text, completed: false };
    tasks.push(newTask);
    res.status(201).json(newTask);
  } else if (req.method === 'DELETE') {
    const { index } = req.body;
    tasks = tasks.filter((_, i) => i !== index);
    res.status(204).end();
  }
}
