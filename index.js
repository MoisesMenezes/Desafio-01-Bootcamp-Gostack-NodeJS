const express = require("express");
const server = express();

server.use(express.json());

const projects = [];

// Middleware
function checkProjectExists(req, res, next) {
  const { id } = req.params;
  const project = projects.find(p => p.id == id);

  if (!project) return res.status(400).json({ error: "Project not Found" });

  return next();
}

server.get("/projects", (req, res) => {
  return res.json(projects);
});

server.post("/projects", (req, res) => {
  const { id, title } = req.body;

  const project = {
    id,
    title,
    task: []
  };

  projects.push(project);
  return res.json(project);
});

server.put("/projects/:id", checkProjectExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(p => p.id == id);
  project.title = title;

  return res.json(project);
});

server.delete("/projects/:id", checkProjectExists, (req, res) => {
  const { id } = req.params;

  const project = projects.find(p => p.id == id);
  projects.splice(project, 1);

  return res.send();
});

server.put(
  "/projects/:id/tasks",
  checkProjectExists,
  (req,
  res => {
    const { id } = req.params;
    const { title } = req.body;

    const project = projects.find(p => p.id == id);

    project.task.push(title);
    return res.json(project);
  })
);

server.listen(3200);
