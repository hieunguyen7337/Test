'use strict';

/**
 * Migration: 20240225114204_voxvkceuyxoffev
 * Description: Fix typo in column name
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('jnkqxjwbyj', function(table) {
    table.integer('qlntrwjrhs');
    table.json('eoujqsiyrc');
    table.integer('omasdtpxlb');
    table.float('xkdxjzzofk');
  });
  await knex.schema.alterTable('aljbhttjjw', function(table) {
    table.integer('dnyoxualso');
    table.json('wknzioyvkk');
    table.float('rutsdvenpr');
    table.bigInteger('luxgyqwdpn');
    table.integer('bfcpozjalc');
  });
  await knex.schema.alterTable('gbovfohiug', function(table) {
    table.string('zuylcfyyfs');
    table.boolean('sytoitxpqp');
    table.json('anbinylhik');
  });
  await knex.schema.alterTable('zahrmofcbi', function(table) {
    table.bigInteger('ktcnnxqpzd');
    table.text('ynmrxqfzqd');
    table.float('rwuxnmzpmc');
    table.string('jbblhziyfq');
  });
  await knex.schema.alterTable('icwysogana', function(table) {
    table.bigInteger('jyjwziozdf');
    table.json('nzkulrujng');
    table.timestamp('hcofsbpmuc');
    table.text('qpfrzdibck');
    table.bigInteger('slbivxyzdl');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};