'use strict';

/**
 * Migration: 20240203102636_hdmgmezjfgfyjlh
 * Description: Remove column
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('kigmmaageh', function(table) {
    table.string('bxlksyojil');
    table.integer('phwgwemhii');
    table.bigInteger('xhahthdpmp');
    table.timestamp('rfgrjifrri');
    table.bigInteger('byiszytuyr');
    table.text('obsvmyvjzt');
    table.bigInteger('lpubnwmbmp');
    table.string('eeopsrlfvs');
  });
  await knex.schema.alterTable('ikbqwlkccg', function(table) {
    table.float('daiwsuwavb');
    table.timestamp('ebrsrqhnha');
    table.boolean('lemhqaawuh');
    table.boolean('ypkmchtisy');
    table.integer('hgaynvsfck');
    table.text('rhecnfbnmv');
    table.boolean('gecsyynwfl');
  });
  await knex.schema.alterTable('njdqcsqfii', function(table) {
    table.boolean('yvyodckysy');
    table.float('kyjyhtefgy');
    table.string('khlchiirve');
    table.string('wlfojimwnp');
    table.timestamp('yuwkfaowhs');
    table.float('hrkomwwwoh');
    table.boolean('jtfmjoicoa');
  });
  await knex.schema.alterTable('zlcbbdtxch', function(table) {
    table.string('onlzdkzbrv');
    table.boolean('dnyfuyzxmu');
    table.integer('zypgrsjdyg');
    table.boolean('rfdszzqifi');
    table.json('pffnrpzquh');
    table.float('kajcwwpiij');
    table.integer('vykytpeimn');
  });
  await knex.schema.alterTable('zssznucyab', function(table) {
    table.boolean('bndbdmsmko');
    table.bigInteger('jtxytcapfo');
    table.bigInteger('rxbpskrpyr');
    table.timestamp('aodoamempg');
    table.json('fhfcwuxuvi');
    table.text('rzsadpbrnw');
    table.boolean('qvrxcgrjpf');
    table.float('sjolocrhvq');
    table.float('wetlqayzik');
  });
  await knex.schema.alterTable('ckzcyckond', function(table) {
    table.integer('utegrbebtd');
    table.float('doprefqchz');
    table.bigInteger('goliezmeuh');
    table.boolean('wnxdrdpvuc');
    table.timestamp('srvczjzzuj');
    table.json('vsebzrpfuv');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};