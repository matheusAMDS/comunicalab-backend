/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class TicketLaboratorySchema extends Schema {
  up() {
    this.create('ticket_laboratories', table => {
      table.increments();
      table
        .integer('ticket_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ticket')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
        .notNullable();
      table
        .integer('laboratory_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('laboratory')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
        .notNullable();
      table
        .integer('lab_problem_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('lab_problem')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
        .notNullable();
      table
        .boolean('is_deleted')
        .notNullable()
        .defaultTo(false);
      table.timestamps();
    });
  }

  down() {
    this.drop('ticket_laboratories');
  }
}

module.exports = TicketLaboratorySchema;
