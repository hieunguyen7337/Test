'use strict';

/**
 * Migration: 20240110124032_odlrpudowjkskcv
 * Description: Add column
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('ndddvihnjd', function(table) {
    table.boolean('cjsnbabnxc');
    table.timestamp('dgvzrjlhwr');
    table.boolean('spwqndpkrp');
    table.timestamp('syjkxjkfdb');
    table.string('mrunwptcys');
    table.float('btvcbqhzhl');
  });
  await knex.schema.alterTable('rtzorrvjsl', function(table) {
    table.float('mcscrwgvwg');
    table.bigInteger('tumplmuukm');
    table.timestamp('wchntvjgys');
  });
  await knex.schema.alterTable('myhuxhbhsa', function(table) {
    table.string('ztjkzqfsxd');
    table.text('bspdlrpdfb');
    table.bigInteger('vrvzjfzndr');
    table.text('oosqydiveb');
    table.text('vmuiojjiff');
    table.boolean('nnuqhkfigy');
  });
  await knex.schema.alterTable('mmsaliqoqu', function(table) {
    table.text('crylasdbyb');
    table.float('nkebjdemef');
    table.timestamp('ceharixxin');
  });
  await knex.schema.alterTable('eyhzlwacwg', function(table) {
    table.boolean('cymubgzhyl');
    table.bigInteger('plcoeddryd');
    table.text('ejhohszskg');
    table.text('stywhrgsgf');
    table.integer('uxlzgsjwww');
    table.boolean('gaqniuysjg');
    table.boolean('ukdcbuqpej');
    table.float('hlxyahcrkh');
    table.float('ifwrzjfkuq');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};