'use strict';

/**
 * Migration: 20241217184227_ytujynrrsmzqibp
 * Description: Fix typo in column name
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('qrdvprhfrb', function(table) {
    table.string('aluposqkvf');
    table.integer('baldoaiybk');
    table.float('gqrxqqpppw');
  });
  await knex.schema.alterTable('alfndhhnkc', function(table) {
    table.bigInteger('lscbqudvii');
    table.timestamp('ctsjtvlxqs');
    table.bigInteger('inlofmgefq');
    table.json('hgkyzghorj');
    table.integer('oqechdaajj');
    table.float('hcbifghycf');
  });
  await knex.schema.alterTable('qmrkckujcx', function(table) {
    table.text('trrkzknbkq');
    table.integer('oozpxmgopf');
    table.text('dvyoppcomb');
    table.integer('bctxishpxf');
  });
  await knex.schema.alterTable('dqaapfenpe', function(table) {
    table.float('nhgivsxqkv');
    table.json('bekbgiknrq');
    table.boolean('hjvrcjodtm');
    table.boolean('pxxpcybjme');
  });
  await knex.schema.alterTable('zbsobmqzvs', function(table) {
    table.float('cyuyhutzak');
    table.text('xqsmdvupju');
    table.bigInteger('zwkwfgwhyq');
    table.boolean('amhkbfkbaf');
    table.timestamp('uzwwzmnazm');
    table.text('naxochwdiv');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};