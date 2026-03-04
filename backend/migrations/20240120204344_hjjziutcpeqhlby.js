'use strict';

/**
 * Migration: 20240120204344_hjjziutcpeqhlby
 * Description: Redo the undo
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('rklfodylmm', function(table) {
    table.float('wnajuiaens');
    table.boolean('jginmiyaxo');
    table.string('lspeosbfmg');
    table.json('wambcouhez');
    table.timestamp('wsoboxjlaw');
  });
  await knex.schema.alterTable('ysaaocjgtg', function(table) {
    table.timestamp('wuvfowvwnn');
    table.timestamp('etsgcjjfbt');
    table.bigInteger('klhzirapsx');
    table.timestamp('zftvnmzhyh');
    table.text('gsafghesnm');
  });
  await knex.schema.alterTable('rqxutfygrz', function(table) {
    table.bigInteger('stdpjcgrtd');
    table.float('wdzhmxlsoo');
    table.integer('sxlpmaxdxr');
    table.text('xggsjjkiqb');
    table.json('kbjkvyjngt');
  });
  await knex.schema.alterTable('aicvdimwgs', function(table) {
    table.json('zfjlzygvng');
    table.string('bqabcdxfff');
    table.string('iapjxfycaw');
    table.float('ixigkyajhs');
  });
  await knex.schema.alterTable('bwpbqrlhhp', function(table) {
    table.string('souzkhtqqp');
    table.text('gckoeehhmh');
    table.float('wvzojrvght');
    table.string('xzxrsdwjsg');
    table.boolean('cecwdlsdff');
    table.text('xglqwqjszo');
    table.string('rxfdvjiuwu');
    table.bigInteger('krcemkdeyw');
    table.timestamp('xxuwcjxxzy');
  });
  await knex.schema.alterTable('tpnftyizld', function(table) {
    table.integer('bcshcrvsao');
    table.integer('kedxxpbeys');
    table.bigInteger('wdsazrkibg');
    table.integer('fsdjoyopgw');
  });
  await knex.schema.alterTable('uvwxuvzfnr', function(table) {
    table.bigInteger('nubjmgaear');
    table.text('whxmhhwifx');
    table.integer('solkahicrk');
  });
  await knex.schema.alterTable('adnlogeqgv', function(table) {
    table.text('idwweotaua');
    table.boolean('huqkzypogg');
    table.bigInteger('buxwfnenoq');
    table.json('nnpmhtuvuo');
  });
  await knex.schema.alterTable('kvsznyelmc', function(table) {
    table.integer('fheikedzuu');
    table.boolean('xralynfkrk');
    table.boolean('zovqowaieu');
    table.bigInteger('iyfqtiavuz');
    table.string('fdvpgftgqw');
    table.string('xcnaxexgqu');
    table.float('bfkhmpydty');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};