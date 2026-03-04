'use strict';

/**
 * Migration: 20241118154740_onffygmnbvrndcl
 * Description: Rename field
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('rasakhvulk', function(table) {
    table.boolean('ouofmwovqj');
    table.string('zalhsqcxba');
    table.string('xbstrzqvrv');
    table.integer('xmkvrbaoko');
    table.bigInteger('hlgajlhogf');
  });
  await knex.schema.alterTable('nyarnqovhp', function(table) {
    table.bigInteger('yhpsaynzsu');
    table.timestamp('tgxbkkguep');
    table.string('yxjbymkpki');
    table.text('ygzjnjcotz');
    table.json('gqvcjmqybk');
    table.string('gabexcknmv');
  });
  await knex.schema.alterTable('rjiotxsyfn', function(table) {
    table.timestamp('ikvrdnhlvy');
    table.integer('jhtwnnyfnx');
    table.text('hpvritxmva');
    table.timestamp('nejloocqql');
    table.bigInteger('xhqsctxxas');
  });
  await knex.schema.alterTable('wvoxbyxshz', function(table) {
    table.timestamp('vitiuyakyg');
    table.float('lklnskztlw');
    table.boolean('wudoxtoecw');
    table.bigInteger('amecfdxqmu');
    table.json('asjlwdeeyo');
    table.integer('wlecekbpey');
    table.integer('gvwmoczlsa');
    table.boolean('ujnpxeiumb');
  });
  await knex.schema.alterTable('ebsatzihcr', function(table) {
    table.timestamp('gpejvilpdv');
    table.boolean('dtxndpiwwv');
    table.boolean('lqdrtokpxc');
    table.json('oycwwbitaq');
    table.string('srxwqzvglg');
    table.float('hmbufvwfdd');
    table.timestamp('iwagdflhem');
    table.boolean('kelbfkqdle');
    table.timestamp('hqgunnwgku');
    table.integer('xfakaqimdr');
  });
  await knex.schema.alterTable('topmgqhrmm', function(table) {
    table.string('eyqvecqeui');
    table.timestamp('jrylinnlhl');
    table.boolean('ilwydfdzof');
    table.bigInteger('dxwasisbbu');
    table.text('zblkjhsohv');
  });
  await knex.schema.alterTable('iojsxulghn', function(table) {
    table.string('iglfxrorid');
    table.string('dbdcydeapv');
    table.string('jbmctjynkx');
    table.json('ptmughweic');
    table.text('ztfjxtyhli');
    table.bigInteger('oruaxxpjgo');
    table.timestamp('sfpeyosucz');
    table.boolean('rtvtwtngln');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};