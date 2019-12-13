exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("project_resources")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("project_resources").insert([
        { proj_id: 1, resource_id: 2 },
        { proj_id: 2, resource_id: 3 },
        { proj_id: 3, resource_id: 1 }
      ]);
    });
};
