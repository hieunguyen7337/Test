'use strict';

/**
 * Migration: 20240112213845_favhpxvuwmdzeah
 * Description: Please work this time
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('bddlztehau', function(table) {
    table.string('achicvxmgw');
    table.json('mgiqnljfps');
    table.json('pqrmekvftr');
    table.text('wddryhejve');
  });
  await knex.schema.alterTable('qvbdpcziyi', function(table) {
    table.text('avkeryaomy');
    table.integer('tvqnemyvht');
    table.integer('mpdlebosqc');
    table.boolean('isfkjhames');
    table.bigInteger('csgfccesgp');
    table.integer('xxjpeerfei');
    table.float('gacqagahde');
    table.timestamp('cpvpcoyqlg');
    table.integer('zabnlncxfv');
    table.text('ixhxsrgwdp');
  });
  await knex.schema.alterTable('gojkfnvist', function(table) {
    table.string('jngsimtjxs');
    table.string('ypyfuyrmai');
    table.string('ujvygepehi');
    table.integer('lrbxvrddba');
  });
  await knex.schema.alterTable('wcuhazpkwv', function(table) {
    table.text('nnbhdjuaio');
    table.float('klznplorzy');
    table.string('zmsuwtiqtk');
    table.string('cfnwyubhrj');
    table.timestamp('ydckdurdpu');
    table.json('gaucyhqthe');
  });
  await knex.schema.alterTable('krrvuujrtt', function(table) {
    table.text('ravnisbxjy');
    table.string('ndjjnwcneq');
    table.text('gposdwecqx');
    table.integer('feujzldgzh');
  });
  await knex.schema.alterTable('nqwfgxcmqm', function(table) {
    table.json('rpswqgojul');
    table.string('gbozwrjffb');
    table.integer('hfyzmkzxcr');
    table.json('dngxhlbsxd');
    table.string('nyhvuxtvrb');
    table.timestamp('troxqixkwl');
    table.bigInteger('gqhfhxpxlr');
    table.integer('jtddzbnuko');
    table.string('nvnghbplcb');
    table.integer('looqyyvizz');
  });
  await knex.schema.alterTable('cvvvouqpmo', function(table) {
    table.string('kpaegyiqsq');
    table.bigInteger('cgswfkuolm');
    table.bigInteger('yrfyodahpt');
    table.json('ttsavmgyfm');
    table.timestamp('gbavkvcutx');
  });
  await knex.schema.alterTable('kebuplrtss', function(table) {
    table.integer('jyczrnpnyl');
    table.string('eyhlcwcbey');
    table.timestamp('emwyijuhkr');
    table.float('uyzupwjaxr');
  });
  await knex.schema.alterTable('khrognbdnb', function(table) {
    table.bigInteger('tuicjasisj');
    table.string('zzgkzikbbj');
    table.string('bzooxcogcq');
    table.timestamp('ujyybotenv');
    table.text('aqhjeraaue');
    table.timestamp('surtnarycg');
    table.integer('hgiumsnkhv');
    table.string('mrhdiowzqt');
  });
  await knex.schema.alterTable('tzzvmtebpd', function(table) {
    table.json('hbwgtgheix');
    table.boolean('nahaoshuyb');
    table.string('krthnhhrbe');
    table.integer('hoaidrgyod');
    table.text('koctavkfzu');
    table.bigInteger('zxnxaganbe');
  });
  await knex.schema.alterTable('tnlujybpjv', function(table) {
    table.bigInteger('iqlzvlmlvs');
    table.json('pyphnignlv');
    table.string('lxdzucjmth');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};