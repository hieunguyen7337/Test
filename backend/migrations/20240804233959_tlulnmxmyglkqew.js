'use strict';

/**
 * Migration: 20240804233959_tlulnmxmyglkqew
 * Description: Remove column
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('eegcjaygiy', function(table) {
    table.text('oqhygazbpq');
    table.integer('vlquchbbml');
    table.integer('fpxzujyhvu');
    table.json('ixkirlnsfd');
    table.timestamp('vsstsotrkq');
  });
  await knex.schema.alterTable('rbidhjlwuk', function(table) {
    table.timestamp('odtlvrlqxc');
    table.boolean('xljktfsvmb');
    table.bigInteger('yyqcemyawc');
    table.string('urqvhkltbj');
    table.json('jnatvdcmvx');
    table.float('rdfoibklbp');
    table.timestamp('fgmltclruq');
    table.integer('oakwuecifh');
    table.float('repnmnqxsm');
  });
  await knex.schema.alterTable('pndnczvgzj', function(table) {
    table.timestamp('rbhazlilaw');
    table.text('bpbwozkulv');
    table.boolean('yszzaznocc');
    table.text('nmsintnedz');
  });
  await knex.schema.alterTable('hxqowyswkm', function(table) {
    table.timestamp('nigvtzmzeu');
    table.boolean('hlioautxha');
    table.float('gqzrtrxmoy');
    table.timestamp('acmvkrvzxn');
    table.string('dxmiyxspac');
  });
  await knex.schema.alterTable('gifuwieyzr', function(table) {
    table.integer('cxjoyctmvz');
    table.boolean('ihklpdagni');
    table.json('tmefsxrhtc');
    table.string('brphemzoxu');
    table.float('zjgtypvjfe');
  });
  await knex.schema.alterTable('dhepfgupjj', function(table) {
    table.boolean('xoyjtegvtj');
    table.integer('fgmqerzyyu');
    table.json('tfiuqalysz');
    table.integer('hfdcerqfwt');
    table.timestamp('evivasovsr');
  });
  await knex.schema.alterTable('zxeeejzilq', function(table) {
    table.json('gpgmmwstgd');
    table.text('xqcwnmjpfs');
    table.bigInteger('ikmuhnrtbv');
    table.string('awfwprmhpe');
    table.json('debghgpvgy');
    table.integer('nkzxanmycb');
  });
  await knex.schema.alterTable('qsvacgvzuw', function(table) {
    table.string('jphmoksday');
    table.bigInteger('ndcelywnmt');
    table.json('tgukgvmtti');
    table.integer('bsyzxcpddp');
  });
  await knex.schema.alterTable('wsrjcitsyx', function(table) {
    table.text('mthhdkrehn');
    table.json('kxlikpqwic');
    table.text('vajisimmvz');
    table.float('ksjjuxffxw');
    table.text('nswiqlrtqd');
    table.bigInteger('hnftrrgrgx');
    table.bigInteger('fsaefpiuhd');
    table.json('xqwqdrqonz');
    table.text('jlqawgwkjt');
    table.bigInteger('eqigivdofh');
  });
  await knex.schema.alterTable('clxvuedpgx', function(table) {
    table.bigInteger('rivazkbfgy');
    table.float('rdekhijxgm');
    table.string('qioqhbjgka');
    table.bigInteger('ynsthzazpi');
    table.boolean('npldrebvan');
    table.bigInteger('ylocfgtzpg');
    table.string('djasqwoxur');
    table.boolean('qtacpwmeli');
    table.timestamp('znjqgksbav');
    table.string('wubcrereed');
  });
  await knex.schema.alterTable('fntoujjnhj', function(table) {
    table.float('bgrlycjifx');
    table.float('xertjgucxm');
    table.json('cflvzlsitc');
    table.text('iwqfsvygyo');
    table.float('mkkqijmmlh');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};