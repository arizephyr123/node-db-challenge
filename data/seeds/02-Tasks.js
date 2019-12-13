exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          id: 1,
          description: "task1",
          notes: "1 Description here...",
          task_completed: false,
          proj_id: 2
        },
        {
          id: 2,
          description: "task2",
          notes: "2 Description here...",
          task_completed: false,
          proj_id: 3
        },
        {
          id: 3,
          description: "task3",
          notes: "3 Description here...",
          task_completed: true,
          proj_id: 1
        }
      ]);
    });
};
