'use strict';

/**
 * Migration: 20240806222204_npipmkomtuatpkn
 * Description: Add index
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('hkxvgksjih', function(table) {
    table.integer('qzvbtsdrtx');
    table.string('xkgomhryqy');
    table.bigInteger('koypyviaji');
    table.float('ioqqcmvsjh');
    table.boolean('ddkbpjkmxc');
    table.bigInteger('fxlcjbpwpq');
    table.float('dqbhiewire');
    table.timestamp('qsubipgbeb');
    table.boolean('mmfvmmxmfx');
  });
  await knex.schema.alterTable('ztbfsreqty', function(table) {
    table.integer('hdhdljslhx');
    table.bigInteger('wgmynmkcsz');
    table.json('bqckyavagw');
    table.timestamp('chplxnybwi');
    table.integer('siltcocfxj');
    table.boolean('hwbhcgetjw');
    table.float('cjqxunklmn');
    table.boolean('xbpmklgcwa');
  });
  await knex.schema.alterTable('nghwypuzks', function(table) {
    table.timestamp('manesonsmg');
    table.integer('oqkzxmebov');
    table.timestamp('kerfmpidby');
    table.bigInteger('mabyxgssif');
    table.boolean('vuxwrzfvaa');
    table.bigInteger('yslckuogml');
    table.boolean('gmwqfteiou');
    table.timestamp('eusorvovmk');
  });
  await knex.schema.alterTable('udzlxsesxx', function(table) {
    table.json('dusxwzukyg');
    table.timestamp('bcwwztoett');
    table.string('bqtjnjplpz');
  });
  await knex.schema.alterTable('nqpowekxbi', function(table) {
    table.boolean('ieuvczjqhh');
    table.json('tsvwbrwwct');
    table.bigInteger('fniefjpwle');
    table.integer('kovbswywjp');
    table.integer('agauvhocku');
    table.json('itpttvjktr');
    table.boolean('vagrxgvepg');
    table.integer('yxereqisrl');
  });
  await knex.schema.alterTable('nfwbdxqqgp', function(table) {
    table.integer('zqipsastbd');
    table.timestamp('aobeezkhgo');
    table.text('ugwrorkzwa');
  });
  await knex.schema.alterTable('ydkvylefir', function(table) {
    table.boolean('bzgxikkqqg');
    table.integer('fmkgfhiplp');
    table.bigInteger('cvenimmtxt');
    table.boolean('rxpoalizvj');
    table.string('nsehktwdcm');
    table.timestamp('wduajfsyma');
    table.integer('ozrwdxidjl');
    table.bigInteger('mxlrmfhfig');
    table.text('gkipznfagm');
    table.boolean('jtodytzpgg');
  });
  await knex.schema.alterTable('gjyrufaofa', function(table) {
    table.text('gjowzceswe');
    table.text('pyxfdrgzkv');
    table.boolean('gthdorritz');
    table.integer('bfkvtqiyzo');
    table.string('jdljngjqjd');
    table.text('chqenkqgtf');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};