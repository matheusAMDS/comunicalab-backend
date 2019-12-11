/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class EquipmentOsImageSchema extends Schema {
  up() {
    this.create('equipment_os_images', table => {
      table.increments();
      table
        .integer('equipment_id')
        .unsigned()
        .references('id')
        .inTable('softwares')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
        .notNullable();
      table
        .integer('os_image_id')
        .unsigned()
        .references('id')
        .inTable('os_images')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
        .notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('equipment_os_images');
  }
}

module.exports = EquipmentOsImageSchema;