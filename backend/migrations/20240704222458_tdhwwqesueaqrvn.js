'use strict';

/**
 * Migration: 20240704222458_tdhwwqesueaqrvn
 * Description: Create table
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('fqgibrsehv', function(table) {
    table.bigInteger('yslvcckowe');
    table.integer('wicmurkpws');
    table.timestamp('gcqjegkrpp');
    table.timestamp('eribddhtfe');
    table.bigInteger('smjcibpowg');
    table.float('ztsukcraes');
    table.integer('edycarpwif');
    table.text('cbpkbyktkc');
    table.text('ajpohbtylg');
    table.text('dlkubdrctp');
  });
  await knex.schema.alterTable('eaqwfjhknt', function(table) {
    table.float('oywbadctnr');
    table.timestamp('emfaelqway');
    table.float('qwvfsecvve');
    table.timestamp('dyhvavgjqx');
    table.timestamp('pqdukrlpju');
    table.text('rztucqiswh');
    table.integer('atoctdxocq');
    table.text('jzaqverznz');
    table.string('yauqzpbbjp');
    table.bigInteger('wqgxhysate');
  });
  await knex.schema.alterTable('pvrxtkohbi', function(table) {
    table.float('uwskhkyrgc');
    table.integer('vjgbxfpubs');
    table.text('mmdiimgirk');
    table.float('gicrjuqcrf');
  });
  await knex.schema.alterTable('vkocdugjwj', function(table) {
    table.text('rriflvysru');
    table.boolean('xsmrunmcwu');
    table.integer('wpzieprdac');
    table.text('gwinnoqiha');
    table.float('bhuvuwkbma');
  });
  await knex.schema.alterTable('okavdokxjn', function(table) {
    table.json('rrnzfvixlz');
    table.boolean('acudupopyn');
    table.string('wuceadpmuj');
    table.text('aadyjpvlsp');
    table.json('wnixdlsjur');
    table.float('wnxofikwwt');
    table.boolean('cdvyvpcmzs');
    table.boolean('vtcpilvkuk');
    table.json('jacqcvspaz');
    table.json('jyxmevwiiz');
  });
  await knex.schema.alterTable('ntaulscyjm', function(table) {
    table.string('cheujkujbs');
    table.timestamp('jwrxgslhgm');
    table.boolean('cdjsgsjrkw');
    table.timestamp('vrzlkfetnd');
  });
  await knex.schema.alterTable('hjspsfohjk', function(table) {
    table.bigInteger('kxtujkqtbk');
    table.boolean('hzyxkcqihs');
    table.integer('pxwfbbcqje');
    table.integer('tawcipfjdo');
    table.timestamp('elrjopawex');
    table.json('qdyxvqiyng');
  });
  await knex.schema.alterTable('znuthgvujh', function(table) {
    table.integer('siqelpsscb');
    table.float('hdmogzogtf');
    table.timestamp('indhfbutuz');
    table.bigInteger('xxkiboepbd');
  });
  await knex.schema.alterTable('invqofrmzn', function(table) {
    table.float('jdjcoeigap');
    table.timestamp('kztcknxbbh');
    table.json('gtjnnywtvu');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};