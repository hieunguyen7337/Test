'use strict';

/**
 * Migration: 20240119160246_engkonmifpbcrsw
 * Description: Rename field
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('xotuzdewvv', function(table) {
    table.json('xjdhaipxbk');
    table.string('tvkjrvlqpc');
    table.float('ydvjlogwig');
    table.bigInteger('ihaucmggmd');
    table.json('oiucrjwcti');
    table.float('taejxwtqtl');
    table.text('jqjqesquce');
    table.integer('zpgfecpivk');
    table.boolean('wdfwzgvipj');
  });
  await knex.schema.alterTable('mnwynnuiqv', function(table) {
    table.float('ijgtmicuxd');
    table.boolean('vgtimzftiv');
    table.float('smpqyhdqos');
    table.timestamp('xugjzcapix');
    table.string('auhrzyrfzb');
    table.text('idjvdcdlvw');
  });
  await knex.schema.alterTable('agmxhsrjke', function(table) {
    table.integer('xdlwrgsawl');
    table.integer('zeegcfmaru');
    table.boolean('uunqfublud');
    table.integer('lvtgchmfzw');
    table.integer('urzspwxduv');
    table.boolean('muvrdsokcw');
    table.string('kahgondehk');
    table.float('fibttmyjlh');
    table.json('abtukztdob');
  });
  await knex.schema.alterTable('zdhjtfjpyb', function(table) {
    table.json('nykzyimplm');
    table.boolean('zbzsuekyze');
    table.text('kqtkarezfb');
  });
  await knex.schema.alterTable('oeqtxhcskw', function(table) {
    table.string('enhfyqwsfm');
    table.text('pkqyavsafm');
    table.text('twvnrzsgbi');
    table.boolean('nrmkcofnsc');
    table.string('ocyziwfmsf');
    table.integer('ekcewbeudj');
    table.text('yjvqqevdpd');
  });
  await knex.schema.alterTable('cmmiuhhixv', function(table) {
    table.integer('gtjousqwkd');
    table.integer('zqfyrwzift');
    table.float('dhtxrfzqip');
    table.boolean('oobrfluuyy');
    table.boolean('kautmzpqvf');
    table.timestamp('qjovodqgxg');
    table.integer('tlizvbyykl');
    table.timestamp('xxkafimegq');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};