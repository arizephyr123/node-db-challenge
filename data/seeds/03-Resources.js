exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("resources").insert([
        {
          id: 1,
          name: "resource1",
          description: "1 Description here..."
        },
        {
          id: 2,
          name: "resource2",
          description: "2 Description here..."
        },
        {
          id: 3,
          name: "resource3",
          description: "3 Description here..."
        }
      ]);
    });
};
