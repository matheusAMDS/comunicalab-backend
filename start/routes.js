/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' };
});

Route.resource('software', 'SoftwareController')
  .apiOnly()
  .validator(
    new Map([
      [['software.store'], ['Software']],
      [['software.update'], ['Software']],
    ])
  );

Route.resource('laboratory', 'LaboratoryController')
  .apiOnly()
  .validator(
    new Map([
      [['Laboratory.store'], ['Laboratory']],
      [['Laboratory.update'], ['Laboratory']],
    ])
  );

Route.resource('called', 'SpecificationItemController')
  .apiOnly()
  .validator(
    new Map([
      [['called.store'], ['Called']],
      [['called.update'], ['Called']],
    ])
  );

Route.resource('equipment', 'EquipmentController')
  .apiOnly()
  .validator(
    new Map([
      [['equipment.store'], ['Equipment']],
      [['equipment.update'], ['Equipment']],
    ])
  );

Route.resource('installed', 'InstalledController')
  .apiOnly()
  .validator(
    new Map([
      [['installed.store'], ['Installed']],
      [['installed.update'], ['Installed']],
    ])
  );
Route.resource('softCategory', 'SoftCategoryController')
  .apiOnly()
  .validator(
    new Map([
      [['softCategory.store'], ['SoftCategory']],
      [['softCategory.update'], ['SoftCategory']],
    ])
  );
Route.resource('equipCategory', 'EquipCategoryController')
  .apiOnly()
  .validator(
    new Map([
      [['equipCategory.store'], ['EquipCategory']],
      [['equipCategory.update'], ['EquipCategory']],
    ])
  );

Route.resource('specification_item', 'SpecificationItemController')
  .apiOnly()
  .validator(
    new Map([
      [['specification_item.store'], ['SpecificationItem']],
      [['specification_item.update'], ['SpecificationItem']],
    ])
  );

Route.resource('specification', 'SpecificationController')
  .apiOnly()
  .validator(
    new Map([
      [['specification.store'], ['Specification']],
      [['specification.update'], ['Specification']],
    ])
  );
