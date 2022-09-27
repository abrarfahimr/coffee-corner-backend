exports.up = function (knex) {
  // create table for products data
  return knex.schema
    .createTable('products', (table) => {
      table.uuid('id').primary().defaultTo(knex.raw('(UUID())'));
      table.string('product_name').notNullable();
      table.string('product_id').notNullable();
      table.string('stock').notNullable();
      table.string('price').notNullable();
      table.string('sales').notNullable();
      table
        .string('image')
        .notNullable()
        .defaultTo('http://localhost:8080/image01.png');
      table.string('description').notNullable();
      table.string('roast').notNullable();
      table.string('type').notNullable();
      table.string('body').notNullable();
      table.string('acidity').notNullable();

      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
    // create table for transaction data
    .createTable('transactions', (table) => {
      table.string('tracking_id').primary();
      table.string('products').notNullable();
      table.string('customer').notNullable();
      table.string('date').notNullable();
      table.string('amount').notNullable();
      table.string('payment').notNullable();
      table.string('status').notNullable();

      table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
    
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('products').dropTable('transactions');
};
