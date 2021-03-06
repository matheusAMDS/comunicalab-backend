/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Equipment = use('App/Models/Equipment');
/**
 * Resourceful controller for interacting with equipment
 */
class EquipmentController {
  /**
   * Show a list of all equipment.
   * GET equipment
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    try {
      const data = await Equipment.query()
        .where('is_deleted', false)
        .fetch();

      return response.status(200).send(data);
    } catch (error) {
      return response.status(error.status).send({ message: error });
    }
  }

  /**
   * Create/save a new equipment.
   * POST equipment
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    try {
      const data = request.only([
        'brand',
        'allocated_at',
        'acquired_at',
        'asset_tag',
        'equip_category_id',
        'laboratory_id',
        'specification_id',
      ]);

      data.is_deleted = false;

      const equipment = await Equipment.create(data);

      return response.status(201).send(equipment);
    } catch (error) {
      return response.status(error.status).send({ message: error });
    }
  }

  /**
   * Display a single equipment.
   * GET equipment/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    try {
      const equipment = await Equipment.query()
        .where('id', params.id)
        .where('is_deleted', false)
        .fetch();

      const equipmentJSON = equipment.toJSON();

      if (Object.keys(equipmentJSON).length === 0) {
        return response.status(404).send({ message: 'Not Found' });
      }

      return response.status(200).send(equipmentJSON[0]);
    } catch (error) {
      return response.status(error.status).send({ message: error });
    }
  }

  /**
   * Update equipment details.
   * PUT or PATCH equipment/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    try {
      const data = request.post();

      const equipment = await Equipment.query()
        .where('id', params.id)
        .where('is_deleted', false)
        .update(data);

      if (equipment === 0) {
        return response.status(404).send({ message: 'Not Found' });
      }

      const equipmentUpdate = await Equipment.findOrFail(params.id);

      return response.status(200).send(equipmentUpdate);
    } catch (error) {
      return response.status(error.status).send({ message: error });
    }
  }

  /**
   * Delete a equipment with id.
   * DELETE equipment/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    try {
      const equipment = await Equipment.query()
        .where('id', params.id)
        .where('is_deleted', false)
        .update({ is_deleted: true });

      if (equipment === 0) {
        return response.status(404).send({ message: 'Not Found' });
      }

      const equipmentUpdate = await Equipment.findOrFail(params.id);

      return response.status(200).send(equipmentUpdate);
    } catch (error) {
      return response.status(error.status).send({ message: error });
    }
  }
}
/**/
module.exports = EquipmentController;
