'use strict';

/**
 * Migration: 20240801090929_soqgtaypbljfuse
 * Description: Create table
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('qebzfsdltt', function(table) {
    table.float('rpbsymuyif');
    table.integer('biueggekfu');
    table.boolean('efpfcazvbw');
    table.timestamp('qcxcuaiode');
    table.bigInteger('ezxtufmjiq');
    table.string('qayqftxyac');
  });
  await knex.schema.alterTable('nannkxlepp', function(table) {
    table.json('sigcubiymn');
    table.string('lhnkhnhrhi');
    table.json('rmrvifpoyn');
    table.string('fyszshmela');
    table.float('cautjtbcwl');
    table.boolean('bwqelbrlqo');
    table.text('xjgqpyccdr');
    table.timestamp('klmpkvvcuy');
    table.timestamp('fjerjteshf');
    table.bigInteger('twijhquxzp');
  });
  await knex.schema.alterTable('ucgsqteota', function(table) {
    table.float('ubxvmkuthq');
    table.integer('dpauxvmrnp');
    table.text('tlqssglqlj');
    table.timestamp('iiwhywbmjd');
    table.bigInteger('bstkctqwen');
    table.string('eniprjqdag');
    table.bigInteger('eoecluammg');
    table.integer('eekcdihukr');
    table.string('egskagowok');
    table.timestamp('yibkzoqmgp');
  });
  await knex.schema.alterTable('tyihnfgflz', function(table) {
    table.bigInteger('dfranmwlzt');
    table.integer('mvjaxxnnxi');
    table.integer('blxcmavzgi');
    table.float('ohjiotudky');
    table.float('eernnyemdn');
    table.timestamp('njeesuezeg');
    table.json('xvrrrhanob');
    table.timestamp('pevokpznea');
    table.text('uutuarawlo');
  });
  await knex.schema.alterTable('zupeagumnf', function(table) {
    table.float('yfjcprtddm');
    table.float('xrcinyhsyo');
    table.boolean('qifnesaiuk');
    table.integer('nhcmnbuvdf');
  });
  await knex.schema.alterTable('iqjvmbdbzn', function(table) {
    table.text('ttkxdmcrpc');
    table.boolean('gqwwmowsfu');
    table.json('mpdtbyknou');
    table.timestamp('pkcgyjwzki');
    table.timestamp('zmvgvsyoec');
    table.text('undcxywowp');
    table.integer('spybroujrs');
    table.float('uptigkriaw');
    table.integer('enolyocyyu');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};