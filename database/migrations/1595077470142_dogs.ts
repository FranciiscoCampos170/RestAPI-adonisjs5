import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Dogs extends BaseSchema {
  protected tableName = 'dogs'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name')
      table.string('breed')
      table.string('description')
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
