'use strict';

/**
 * Migration: 20240115102748_kiostqqgylbsivz
 * Description: Add index
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('qkfkqjberd', function(table) {
    table.timestamp('ajtokbxjzd');
    table.bigInteger('vbuecqdwqk');
    table.timestamp('zwmleycukc');
    table.text('fmbjrtfwxh');
    table.float('etpysulrcx');
    table.json('hfjeasempm');
    table.timestamp('arcsabfmxg');
    table.string('ocugbmwkpe');
    table.text('clqnixvjnl');
  });
  await knex.schema.alterTable('dffbidsrgk', function(table) {
    table.text('nqkdtbcebd');
    table.boolean('hgebmmmbfi');
    table.text('pnvbsqidkx');
    table.json('lqwrmnalfn');
    table.string('ghrfdhgaup');
    table.text('niypsjkebc');
    table.integer('csjvaphuez');
    table.timestamp('biotfqkomn');
  });
  await knex.schema.alterTable('zrrvpgielz', function(table) {
    table.float('rltcpbwhaz');
    table.boolean('znswjurqde');
    table.string('icgopillnc');
    table.json('nhuhgzyjtw');
    table.integer('cqbkpjhufz');
    table.bigInteger('dmqbpwosdc');
  });
  await knex.schema.alterTable('mfnvdanycj', function(table) {
    table.boolean('cdhhukiisx');
    table.integer('zponzguglx');
    table.boolean('vvongltbtm');
    table.bigInteger('qcnmdnylxz');
    table.string('xwpyyaufma');
  });
  await knex.schema.alterTable('odfjzujlng', function(table) {
    table.boolean('vhveopqadv');
    table.integer('voazlsirnl');
    table.integer('ysjydpukaw');
    table.string('gmuaqiufef');
    table.float('zcfwguznwa');
  });
  await knex.schema.alterTable('wjshkufehv', function(table) {
    table.float('gdzdvpnxei');
    table.text('qtkhtahdpv');
    table.string('oxlqzdsrel');
    table.boolean('sxvpbjqkxg');
    table.timestamp('niiaiceiae');
    table.timestamp('xudnqpqtak');
    table.integer('ifrdmpcxaz');
    table.string('dhljpoaxix');
  });
  await knex.schema.alterTable('ruqgxxhpbl', function(table) {
    table.timestamp('yolhzmnlwx');
    table.json('bdbgtfdfrp');
    table.bigInteger('jfwyzkjbau');
    table.boolean('vawolubfwp');
    table.json('wpfwpwzjqv');
    table.text('yimflxtlgv');
    table.text('qxafeycgkb');
  });
  await knex.schema.alterTable('vuzcnsgcne', function(table) {
    table.float('fwzmlckcwf');
    table.integer('lahaxtsqxz');
    table.timestamp('weefbmanof');
    table.timestamp('qktysopuot');
    table.timestamp('fasvmgjsyr');
    table.text('seaxqkzquo');
    table.text('tgcbekfoua');
    table.text('hsfecedsqd');
    table.integer('thnuefsqpb');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};