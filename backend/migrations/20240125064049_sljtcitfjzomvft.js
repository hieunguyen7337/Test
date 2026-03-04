'use strict';

/**
 * Migration: 20240125064049_sljtcitfjzomvft
 * Description: Drop table
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('ekjfkrthvc', function(table) {
    table.float('lrxorgwnas');
    table.bigInteger('bcsecfdkic');
    table.boolean('nbdkpbkter');
    table.json('yiychlwpxk');
  });
  await knex.schema.alterTable('nouftebkkj', function(table) {
    table.bigInteger('iffhskcuip');
    table.boolean('efexxnrkng');
    table.float('ltdddubjbm');
    table.timestamp('oufhccwula');
    table.bigInteger('jasyudassw');
    table.bigInteger('pkxdvnwhjl');
    table.timestamp('nkkrwkwfcf');
    table.json('hvlajagrdu');
    table.json('rswdmmelzr');
  });
  await knex.schema.alterTable('trmrvwdkig', function(table) {
    table.float('plankwjobt');
    table.integer('nucvkoxuei');
    table.integer('albhdchpio');
    table.string('dyetzfehvh');
  });
  await knex.schema.alterTable('aebfbtdpwz', function(table) {
    table.text('tllpwphdch');
    table.json('rlthdeylwb');
    table.bigInteger('vodnerxauj');
    table.boolean('cnmrqhratc');
    table.boolean('mcxudrttmo');
    table.bigInteger('ljkxrvldnp');
  });
  await knex.schema.alterTable('ywqfopplyr', function(table) {
    table.float('yiwwunlfhe');
    table.float('uofjiyqfoo');
    table.integer('kvyvocvemx');
  });
  await knex.schema.alterTable('dnytpluoyk', function(table) {
    table.string('fznvzxumxc');
    table.string('cbcpojmfnz');
    table.integer('qauyavktff');
    table.timestamp('tgcnnyxscu');
    table.string('qhnhxugluq');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};