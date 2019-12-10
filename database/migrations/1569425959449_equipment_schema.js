/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class EquipmentSchema extends Schema {
  up() {
    this.create('equipments', table => {
      table.increments();
      table.string('brand');
      table.date('allocated_at');
      table.date('acquired_at');
      table.string('asset_tag', 10);
      table
        .integer('equip_category_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('equip_categories')
        .onUpdate('CASCADE');
      table
        .integer('laboratory_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('laboratories')
        .onUpdate('CASCADE');
      table
        .integer('specification_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('specifications')
        .onUpdate('CASCADE');
      table.boolean('is_deleted').notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('equipments');
  }
}

module.exports = EquipmentSchema;
