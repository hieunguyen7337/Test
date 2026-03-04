'use strict';

/**
 * Migration: 20240324193742_upqnncaqmqlsdru
 * Description: Undo previous migration
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('jehdsavwhu', function(table) {
    table.timestamp('idtxcdirjv');
    table.json('plyrgwofaf');
    table.integer('zpehifejzk');
    table.integer('ymarhwzdrp');
    table.integer('dveyrvhfrm');
  });
  await knex.schema.alterTable('bggptktjxc', function(table) {
    table.float('zxxdaqemtu');
    table.text('yiegebmvki');
    table.text('bastmqoiqj');
    table.integer('orqbgklumc');
    table.timestamp('zfmprsustk');
    table.integer('rlasqyikkm');
    table.boolean('sbqvjohtus');
  });
  await knex.schema.alterTable('pcxuejtcsg', function(table) {
    table.text('ankegtreud');
    table.timestamp('kzffqtrffp');
    table.integer('xljftpvnzm');
    table.bigInteger('mszsqkcdpq');
    table.text('yiauvnifem');
    table.bigInteger('syiahmrbap');
    table.string('syaucqwuyn');
  });
  await knex.schema.alterTable('ulltvxehat', function(table) {
    table.integer('xshjyhtwbb');
    table.text('vcqugdaazl');
    table.boolean('uvaytonxpt');
    table.integer('vxjimqfhjf');
    table.bigInteger('madrwxdiah');
  });
  await knex.schema.alterTable('oksraptuhb', function(table) {
    table.text('reqbwfhcqw');
    table.bigInteger('shfgnlrjal');
    table.text('smrwdzvxta');
    table.json('dhfajzxdvl');
    table.timestamp('sbnwlsedtg');
  });
  await knex.schema.alterTable('ldeivhkrse', function(table) {
    table.text('ghdqlirbkv');
    table.text('ejosljurcy');
    table.bigInteger('iohblklhfy');
    table.integer('lhamxfeibf');
    table.string('klkgwubham');
  });
  await knex.schema.alterTable('kvhkqmpfll', function(table) {
    table.timestamp('ierxcrsyjl');
    table.boolean('ceqiznssdm');
    table.timestamp('elequaymin');
    table.text('sfryzmihsx');
    table.boolean('xigudgdwhq');
    table.boolean('trdflslcmf');
  });
  await knex.schema.alterTable('cbqgtknzvy', function(table) {
    table.integer('ryufovguzo');
    table.float('afuixgndbw');
    table.text('rsmvmqvlze');
    table.bigInteger('vybirklgul');
    table.integer('hjrssdtrnq');
    table.bigInteger('tebwfaunby');
  });
  await knex.schema.alterTable('jbfspiwpie', function(table) {
    table.boolean('bsnjwxguew');
    table.timestamp('zqtxcaoeho');
    table.text('lmuepipbzd');
    table.text('hrqwiwlepr');
  });
  await knex.schema.alterTable('ztfsuniybh', function(table) {
    table.string('kjxzgvccjc');
    table.string('lloyxwmchz');
    table.json('ccxhrexvpp');
    table.text('njeujttgpb');
    table.timestamp('kezoygwedy');
    table.string('puuzznrlzl');
    table.text('qbqrsefhub');
  });
  await knex.schema.alterTable('ypapqmujyb', function(table) {
    table.integer('vwlwutfeax');
    table.boolean('vlqtmbyvuh');
    table.integer('oiocppxbnw');
    table.integer('thzmofrmdl');
    table.boolean('qgpvzsusds');
    table.boolean('mgiifawgcc');
    table.string('jvipmvnrgk');
  });
  await knex.schema.alterTable('ueudamnpnu', function(table) {
    table.float('lwoflcakkb');
    table.json('dkynrkccbh');
    table.text('vouhcgdqae');
  });
  await knex.schema.alterTable('whzeiojcdh', function(table) {
    table.integer('smcprhwxco');
    table.float('wfrujrfyxr');
    table.bigInteger('qjyrkovesd');
    table.json('wawspmfjkr');
    table.timestamp('asckudpxye');
    table.integer('rzfxoeywfv');
    table.integer('ghoviiyofa');
    table.json('ufppmwwfdw');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};