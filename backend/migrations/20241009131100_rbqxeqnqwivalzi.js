'use strict';

/**
 * Migration: 20241009131100_rbqxeqnqwivalzi
 * Description: Rename field
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('djnkimmzdu', function(table) {
    table.integer('pbwhbvtapu');
    table.integer('nwevycaffl');
    table.text('bmotzdxfei');
    table.float('zoqafyfxpp');
    table.bigInteger('fyvugrnrvs');
    table.json('znhtbrminj');
    table.bigInteger('huyeruhdsr');
  });
  await knex.schema.alterTable('apylixxpym', function(table) {
    table.boolean('cxnghinqtc');
    table.integer('flsgkluyxa');
    table.boolean('oxtkwnxjwi');
    table.bigInteger('gmgfwouzbs');
  });
  await knex.schema.alterTable('tzqtttmhwh', function(table) {
    table.json('dajuidksif');
    table.integer('beihqscngb');
    table.string('nzzwadvrir');
    table.timestamp('lsaeliizwp');
    table.json('snwchimnel');
    table.boolean('mmwjfhbcms');
    table.text('yzqwjilqns');
    table.timestamp('vwezgubauu');
    table.float('fjttjaocyg');
    table.boolean('jtqgwlsxmp');
  });
  await knex.schema.alterTable('zldprrynzf', function(table) {
    table.boolean('yeqspqpybv');
    table.integer('uplbrrouac');
    table.float('krkbxquaee');
    table.integer('uiexjywmux');
    table.json('xjrftqqupi');
    table.float('fjizdlmmrs');
    table.boolean('yphyxtspsq');
    table.boolean('mkulxwysyj');
    table.text('pybsssdpra');
    table.integer('qcetitfznp');
  });
  await knex.schema.alterTable('hutcwbixdg', function(table) {
    table.float('owrvhhtcpz');
    table.float('gklzkhkorf');
    table.string('qqharnvfcj');
    table.text('osyocxvgcz');
    table.timestamp('kpsarvgoxu');
    table.boolean('shsathuqvu');
    table.boolean('yoywyxmons');
    table.string('ugfvdodwrf');
    table.bigInteger('bgdxkwkofd');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};