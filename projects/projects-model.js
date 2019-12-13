const db = require("../data/db-config.js");

module.exports = {
  findResources,
  addResource,
  findProjects,
  addProject,
  findTasks,
  addTask
};

function findResources() {
  return db("resources");
}

function findProjects() {
  return db("projects");
}

/*
select p.name
, t.description
, t.task_completed
from projects as p
join tasks as t on p.id = t.proj_id
where p.id = 2
order by t.id;
*/
function findTasks(id) {
  return db("projects as p")
    .select("p.name", "t.description", "t.task_completed")
    .join("tasks as t", "p.id", "t.proj_id")
    .where("p.id", id)
    .orderBy("t.id")
    .then(tasks => {
        const task = tasks[0];
      if (task.task_completed === 1) {
        return { ...task, task_completed: true }
      } else {
        return { ...task, task_completed: false };
      }
    });
}

function addResource(newResource) {
  if (!newResource) {
    return null;
  } else {
    return db("resources")
      .insert(newResource, "id")
      .then(ids => {
        return newResource;
      });
  }
}

function addProject(newProject) {
  if (!newProject) {
    return null;
  } else {
    return db("projects")
      .insert(newProject, "id")
      .then(ids => {
        return newProject;
      });
  }
}

function addTask(newTask) {
  if (!newTask) {
    return null;
  } else {
    return db("tasks")
      .insert(newTask, "id")
      .then(ids => {
        return newTask;
      });
  }
}
