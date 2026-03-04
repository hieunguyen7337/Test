'use strict';

/**
 * Migration: 20240216070834_lqdmafmiewblqna
 * Description: Add column
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('ckttblrdxn', function(table) {
    table.timestamp('ptehbxzoni');
    table.json('czkdhwkerm');
    table.boolean('suyucmpdeu');
    table.bigInteger('tlbbpwdmnw');
    table.text('xlhspdestm');
  });
  await knex.schema.alterTable('oumoeguqsq', function(table) {
    table.timestamp('ufkzzonzej');
    table.integer('qmtzzclkht');
    table.integer('bfcxmmlvbo');
    table.integer('kspggmfthc');
    table.float('vdyeauygcl');
  });
  await knex.schema.alterTable('ijkcwmzpoc', function(table) {
    table.text('slcclnkszy');
    table.integer('cluvkzisow');
    table.text('napxubyoam');
    table.float('fjpfewqdgv');
    table.float('cqrqiedjyl');
    table.json('qwmbcutfvl');
  });
  await knex.schema.alterTable('vcwidoinvg', function(table) {
    table.text('xtqfleujau');
    table.boolean('blpkeyxwtq');
    table.json('wvaztfuede');
    table.integer('nimprtbmzk');
  });
  await knex.schema.alterTable('xfqxwizbxv', function(table) {
    table.float('mwzwtdpfep');
    table.bigInteger('lmcnfmeocw');
    table.string('vwjuatkqqy');
  });
  await knex.schema.alterTable('pyfvhbdsxt', function(table) {
    table.boolean('zgsuhngbxy');
    table.float('fsjfzcmybm');
    table.text('oiefbcvjkb');
  });
  await knex.schema.alterTable('peumtwozqe', function(table) {
    table.float('jdmwktaaqn');
    table.integer('bmsghhprqe');
    table.string('zftvxdiexm');
    table.bigInteger('nnyigqgkms');
    table.timestamp('exvzlorkio');
    table.boolean('ukxassjxmh');
    table.float('kewsuyjmkg');
    table.json('uevzrcvyop');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};