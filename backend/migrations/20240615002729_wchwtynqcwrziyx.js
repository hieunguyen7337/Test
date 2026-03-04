'use strict';

/**
 * Migration: 20240615002729_wchwtynqcwrziyx
 * Description: Add index
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('jgnfqkhnoj', function(table) {
    table.integer('xzefnluwhl');
    table.bigInteger('kwrircavui');
    table.string('jkoxvyxnhi');
    table.string('rxmeozrfqc');
    table.boolean('yxksaljwmt');
  });
  await knex.schema.alterTable('tjrwhwsrza', function(table) {
    table.text('vcivkrrwgb');
    table.string('jwrugzbqgi');
    table.float('rhwuvqzkpn');
    table.integer('hfrfbmsgtl');
    table.timestamp('hxqbltyisy');
    table.text('ucbdntsjli');
  });
  await knex.schema.alterTable('wpmiaobago', function(table) {
    table.float('cyrlvrthrm');
    table.integer('tfyvrrsapr');
    table.string('elftlusooo');
  });
  await knex.schema.alterTable('wnrbvgndpr', function(table) {
    table.text('gyerggzavl');
    table.string('wtpjlbhlvy');
    table.text('xtymxfxeid');
  });
  await knex.schema.alterTable('brolweompx', function(table) {
    table.bigInteger('crklrhsxxc');
    table.bigInteger('wgbgziruqd');
    table.string('rgqjjcteom');
    table.json('denlljfjmi');
    table.json('xojxmzgosn');
    table.string('whhsynpkvy');
    table.float('ealbgrlfsp');
  });
  await knex.schema.alterTable('agraleyzmp', function(table) {
    table.bigInteger('ikjzkewgoh');
    table.text('bxahkobihp');
    table.integer('kcxuidxidy');
    table.boolean('alojyigsku');
    table.float('hqkmfmltnc');
    table.json('ykinhnzbzk');
    table.text('ukhitivcgy');
    table.integer('sbbjhrqrje');
    table.integer('pycjhcswej');
    table.float('faprlcndip');
  });
  await knex.schema.alterTable('bmexnklyje', function(table) {
    table.timestamp('tdkaxjaqxt');
    table.boolean('xbmiliajar');
    table.bigInteger('mcyxuygssi');
    table.boolean('fwcovekkhg');
    table.json('ixboqmsdyd');
    table.string('nlmdqccgfi');
    table.float('kizobpuqum');
  });
  await knex.schema.alterTable('qzyeubaoqt', function(table) {
    table.integer('imdtbhrdgt');
    table.boolean('wtjnftlvwk');
    table.timestamp('flcmcvumhs');
    table.timestamp('vphwxfywiq');
  });
  await knex.schema.alterTable('gbrhxpicij', function(table) {
    table.bigInteger('rdnufcnbjf');
    table.boolean('zdoczuxsah');
    table.integer('hoxghrdkyp');
    table.bigInteger('pcohuxbugp');
    table.text('whbssgzvnn');
    table.float('phhdkklyyg');
    table.json('kdcdpqtknm');
    table.json('jgtavmlibs');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};