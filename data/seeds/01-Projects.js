exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          id: 1,
          name: "name1",
          description: "Description here...",
          proj_completed: false
        },
        {
          id: 2,
          name: "name2",
          description: "Description here...",
          proj_completed: false
        },
        {
          id: 3,
          name: "name3",
          description: "Description here...",
          proj_completed: true
        }
      ]);
    });
};
