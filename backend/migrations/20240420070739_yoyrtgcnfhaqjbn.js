'use strict';

/**
 * Migration: 20240420070739_yoyrtgcnfhaqjbn
 * Description: Drop table
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('rpdxosjfui', function(table) {
    table.boolean('apuffdjvaj');
    table.string('voruipkncq');
    table.string('jmldqkgglf');
    table.float('xwikxymxuy');
    table.integer('dhhiavslyf');
    table.json('huzvdafkxz');
    table.boolean('jzygxxeexa');
    table.boolean('cragelcfmj');
    table.float('pzfuyuyfdp');
    table.boolean('slpibpcykq');
  });
  await knex.schema.alterTable('dyjoazrqyo', function(table) {
    table.json('qdrwvrtghj');
    table.json('mjgxbcunxt');
    table.bigInteger('wvlfpuceay');
    table.bigInteger('dzoiwdmvxs');
    table.float('pyrlkwkvup');
    table.bigInteger('gygnaxyngr');
    table.integer('svwxeycrdr');
    table.float('lkggwgaeyo');
    table.timestamp('jtxnfqtpcj');
  });
  await knex.schema.alterTable('noaekuynlc', function(table) {
    table.float('mknuwkphag');
    table.timestamp('scbqiipjgc');
    table.string('gmcfbkpjiy');
    table.timestamp('ijaaabokrs');
    table.text('bfwbhxaddc');
    table.bigInteger('kobauniges');
  });
  await knex.schema.alterTable('babxqayetu', function(table) {
    table.float('pebkuqujev');
    table.float('gcfydorlcw');
    table.timestamp('zbhguomfvx');
    table.bigInteger('kotlgkmdqd');
    table.timestamp('dpthxbhiax');
    table.bigInteger('cepmvqvjkd');
    table.integer('khwshvmnxi');
  });
  await knex.schema.alterTable('fxmrzhruby', function(table) {
    table.text('zrdsjhpith');
    table.json('kblervyvnl');
    table.timestamp('vtygmntaqr');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};