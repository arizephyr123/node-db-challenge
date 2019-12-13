const express = require("express");

const Projects = require("./projects-model.js");

const router = express.Router();

/*
adding resources.
retrieving a list of resources.
adding Projects.
retrieving a list of Projects.
adding tasks.
retrieving a list of tasks. The list of tasks should include the project name and project description.
When returning project or task information, the completed property should be true or false.
*/

//✅
//get all projects
router.get("/api/projects", (req, res) => {
  Projects.findProjects()
    .then(projects => {
      res.json(projects);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get projects" });
    });
});

//✅
//create new project
router.post("/api/projects", (req, res) => {
  const newProj = req.body;

  Projects.addProject(newProj)
    .then(proj => {
      res.status(201).json(proj);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Failed to create new project" });
    });
});

//
//get all tasks for project
router.get("/api/projects/:id", (req, res) => {
  const { id } = req.params;

  Projects.findTasks(id)
    .then(tasks => {
      if (tasks) {
        res.json(tasks);
      } else {
        const { id } = req.params;
        res
          .status(404)
          .json({ message: `Could not find tasks for project with id ${id}.` });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get project tasks" });
    });
});

//
//create new task
router.post("/api/projects/:id", (req, res) => {
  const newTask = req.body;

  Projects.addTask(newTask)
    .then(task => {
      res.status(201).json(task);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Failed to create new task" });
    });
});

//get all resources
router.get("/api/resources", (req, res) => {
  Projects.findResources()
    .then(resources => {
      if (resources) {
        res.json(resources);
      } else {
        res.status(404).json({ message: "Could not find resources" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get resources" });
    });
});

//create a new resource
router.post("/api/resources", (req, res) => {
  const newResource = req.body;

  Projects.addResource(newResource)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Failed to create new resource" });
    });
});

/*
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Projects.findById(id)
  .then(scheme => {
    if (scheme) {
      Projects.update(changes, id)
      .then(updatedScheme => {
        res.status(200).json(updatedScheme);
      });
    } else {
      res.status(404).json({ message: 'Could not find scheme with given id' });
    }
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to update scheme' });
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  Projects.remove(id)
  .then(deleted => {
    if (deleted) {
      res.json({ removed: deleted });
    } else {
      res.status(404).json({ message: 'Could not find scheme with given id' });
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to delete scheme' });
  });
});



// function validateId(req, res, next){
//   const { id } = req.params;
//   Projects.findById(id)
//   .then(scheme => {
//     console.log("In validateId", scheme);
//     if (scheme) {
//       req.body.id;
//       next();
//       } else {
//       res.status(404).json({ message: 'Could not find scheme with given id' });
//     }
//   })
// };

*/

module.exports = router;
