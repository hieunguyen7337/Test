'use strict';

/**
 * Migration: 20240815093658_dcttbdavpzsdooo
 * Description: Add index
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('zlfqcedkew', function(table) {
    table.integer('eqlwoguvsi');
    table.float('dymutrvyuw');
    table.boolean('exsowdtgld');
  });
  await knex.schema.alterTable('adkglhbuju', function(table) {
    table.bigInteger('cmgszcmelb');
    table.bigInteger('veenqmquuq');
    table.bigInteger('ryebkoifka');
    table.json('qbpgfntqoo');
    table.boolean('xhsktdrsug');
    table.float('xuvyiqwoan');
    table.timestamp('mjkuhlalpe');
    table.float('jiozmxwdhd');
  });
  await knex.schema.alterTable('wsnidtewvw', function(table) {
    table.boolean('wjpmufvxkk');
    table.text('jgfomjdbud');
    table.text('ejkihjbmme');
    table.text('cyfnvzgkjc');
    table.timestamp('seoignwwic');
    table.json('ypecvznjzd');
  });
  await knex.schema.alterTable('tkhvdinrtp', function(table) {
    table.bigInteger('jjnjdktnmg');
    table.bigInteger('uipdsfxdwf');
    table.text('cjbnfvtkfv');
    table.integer('arsmotpjjq');
    table.text('ooclvrshda');
    table.integer('kitysxukzn');
    table.timestamp('eatbqsschx');
    table.boolean('gmwdikclzs');
  });
  await knex.schema.alterTable('mqebqdpsjw', function(table) {
    table.bigInteger('loztpzejmn');
    table.boolean('bkyzysqyev');
    table.text('hrivgtxgwh');
    table.bigInteger('fiajkasllz');
    table.string('ewlkavpnei');
    table.timestamp('pdfyflqqjw');
    table.bigInteger('noqfwgekmf');
  });
  await knex.schema.alterTable('pswczxzibc', function(table) {
    table.timestamp('jbdmqtznyc');
    table.json('kfsjawyqyn');
    table.json('ulgflhsrlu');
    table.float('snihiyjfbe');
    table.json('ystawunahi');
    table.float('esolkbebqw');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};