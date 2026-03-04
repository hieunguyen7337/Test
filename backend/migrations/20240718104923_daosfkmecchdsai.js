'use strict';

/**
 * Migration: 20240718104923_daosfkmecchdsai
 * Description: Drop table
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('yktdooutdn', function(table) {
    table.text('kmbqinshad');
    table.text('tbuuagftdm');
    table.json('ieaelifuuq');
  });
  await knex.schema.alterTable('zlzgxfpptg', function(table) {
    table.json('howpmlsmeg');
    table.json('jyeytpyezl');
    table.float('olbwuutfqu');
    table.string('rbufdpkyiu');
    table.float('oxceiahcqg');
  });
  await knex.schema.alterTable('jfcgvvxkwz', function(table) {
    table.timestamp('sqodgwgxba');
    table.integer('rsxffmamrl');
    table.text('pgtxgmypji');
    table.text('nlqkcvqila');
    table.timestamp('infnqvcbpe');
    table.json('keewzbshdr');
    table.boolean('vsqkwfepgn');
  });
  await knex.schema.alterTable('qgucupoplu', function(table) {
    table.bigInteger('mcxlwjngmu');
    table.json('ytywqverhd');
    table.text('ezzaihobcw');
    table.timestamp('guwghkyisk');
    table.timestamp('nmjynwxgnm');
  });
  await knex.schema.alterTable('nqunmsyleg', function(table) {
    table.string('hcyqlktxkg');
    table.boolean('staamhdtyc');
    table.text('yqpnlmaddi');
    table.string('jbcgukabef');
    table.boolean('ifwygwbfnl');
    table.string('cjmoqhdult');
    table.json('qtjhzjmreo');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};