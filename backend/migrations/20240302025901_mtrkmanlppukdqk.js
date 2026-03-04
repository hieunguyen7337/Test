'use strict';

/**
 * Migration: 20240302025901_mtrkmanlppukdqk
 * Description: Undo previous migration
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('qypxgifpva', function(table) {
    table.float('isuntcpnnz');
    table.float('qhpgdpcdbw');
    table.json('lyehcnxcdi');
    table.float('lqzbkiutkb');
    table.text('egkltesdqq');
  });
  await knex.schema.alterTable('amvelgqarj', function(table) {
    table.boolean('cpjmpdqjdb');
    table.timestamp('bvaxhficwv');
    table.bigInteger('uzvrgusskb');
    table.integer('dogkzyzhpm');
    table.boolean('ziciakntwg');
    table.float('jhrozvtxvd');
    table.float('aqgfvabjzv');
  });
  await knex.schema.alterTable('nvxcspuetu', function(table) {
    table.float('ivuivcjtnr');
    table.text('ifdesmxczh');
    table.boolean('tcfjkqewga');
    table.float('binpvzrdpb');
    table.float('kechdesuqi');
    table.json('vlvuyiekur');
    table.text('nhonhmnhly');
  });
  await knex.schema.alterTable('jpiqagvhth', function(table) {
    table.json('oeohrxdaen');
    table.float('dpfwrudbif');
    table.text('asmzfpltko');
  });
  await knex.schema.alterTable('azpanzcztv', function(table) {
    table.bigInteger('nbtfhanbma');
    table.text('zaixtrbwbp');
    table.json('wjolcaawjm');
  });
  await knex.schema.alterTable('cebbmcrspa', function(table) {
    table.boolean('kytundngwe');
    table.integer('jacdqffivt');
    table.integer('fpaeodmfyc');
    table.json('elkeyvdjrq');
    table.timestamp('svvscghfms');
  });
  await knex.schema.alterTable('fiwmmhunvd', function(table) {
    table.timestamp('iwdkviivtk');
    table.bigInteger('focuwqotqg');
    table.integer('qexdqoiaob');
    table.timestamp('uehrgbarbh');
  });
  await knex.schema.alterTable('nywlkbrnfu', function(table) {
    table.integer('drqdtesucz');
    table.text('afpitairaf');
    table.timestamp('igpeyfhgtg');
    table.string('esqaslxlce');
    table.boolean('wpvmwxagaj');
    table.float('yubcjsxtci');
    table.integer('lmapwrkvgp');
  });
  await knex.schema.alterTable('vsfeeonfxb', function(table) {
    table.json('awucymozhu');
    table.text('fuykseykux');
    table.bigInteger('vkxwlycroj');
    table.string('ovjplvdvbf');
    table.string('ulfcmbwuzr');
  });
  await knex.schema.alterTable('gbzqntuecz', function(table) {
    table.integer('hsjalechov');
    table.bigInteger('wotgegoquc');
    table.text('qoxqunhopo');
    table.float('omxxqfouyv');
    table.string('lmwwklaczv');
    table.integer('tqydrnyfcd');
    table.boolean('nxhgbvqble');
    table.json('fvesomxbwn');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};