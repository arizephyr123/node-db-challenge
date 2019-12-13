exports.up = function(knex) {
  return (
    knex.schema
      //01-Projects
      .createTable("projects", tbl => {
        tbl.increments();
        tbl
          .string("name", 255)
          .notNullable()
          .unique();
        tbl.string("description");
        tbl
          .boolean("proj_completed")
          .notNullable()
          .defaultTo(false);
      })

      //02-Tasks
      .createTable("tasks", tbl => {
        tbl.increments();
        tbl.string("description", 255).notNullable();
        tbl.string("notes", 255);
        tbl
          .boolean("task_completed")
          .notNullable()
          .defaultTo(false);
        tbl
          .integer("proj_id")
          .notNullable()
          .unsigned()
          .references("id")
          .inTable("projects")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
      })

      //03-Resources
      .createTable("resources", tbl => {
        tbl.increments();
        tbl
          .string("name", 255)
          .notNullable()
          .unique();
        tbl.string("description", 255);
      })

      //04-Project-Resources
      .createTable("project_resources", tbl => {
        tbl
          .integer("proj_id")
          .notNullable()
          .unsigned()
          .references("id")
          .inTable("projects")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
        tbl
          .integer("resource_id")
          .notNullable()
          .unsigned()
          .references("id")
          .inTable("resources")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
      })
  );
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("project_resources")
    .dropTableIfExists("resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("projects");
};
