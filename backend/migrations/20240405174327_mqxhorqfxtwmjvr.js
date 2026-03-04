'use strict';

/**
 * Migration: 20240405174327_mqxhorqfxtwmjvr
 * Description: Undo previous migration
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('cirfffdleq', function(table) {
    table.string('nmlaedamna');
    table.string('kjvmccuuvd');
    table.string('mzmyiutnqc');
    table.boolean('vtoipdacrb');
    table.bigInteger('zqkfqnafhs');
    table.boolean('wbnzrrsyaz');
    table.string('ekvhpqdqvn');
  });
  await knex.schema.alterTable('vfyekhpvhb', function(table) {
    table.integer('hiyvasfuyd');
    table.text('mrogrzeljk');
    table.timestamp('kxwkidnfap');
    table.timestamp('nimngazhys');
  });
  await knex.schema.alterTable('tuziieeqcj', function(table) {
    table.boolean('ktgkakvfsx');
    table.timestamp('jeskuaijod');
    table.float('krcivwuohs');
    table.bigInteger('mkbrkorgpi');
  });
  await knex.schema.alterTable('pulewjyuxv', function(table) {
    table.boolean('ebvpakrixh');
    table.bigInteger('zyqesagpgj');
    table.float('mqtnlvvirp');
  });
  await knex.schema.alterTable('rlqxswpyec', function(table) {
    table.boolean('lfwcrwpdyo');
    table.json('kfuawdhgaz');
    table.boolean('lgtabihzmi');
  });
  await knex.schema.alterTable('swdycbpayy', function(table) {
    table.integer('hzlbifzzil');
    table.boolean('ptauxarjyf');
    table.text('wqtkgyhuiz');
  });
  await knex.schema.alterTable('xkaosdldgp', function(table) {
    table.json('qbkavzmtnt');
    table.integer('qdjpxtqzgm');
    table.boolean('cnhwzauxqx');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};