'use strict';

/**
 * Migration: 20240916044153_zuzjduaikwkelqw
 * Description: Please work this time
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('qjsfclclgp', function(table) {
    table.boolean('wpzvtullpv');
    table.text('yvoslzrgrj');
    table.float('dxjjbybcpj');
  });
  await knex.schema.alterTable('ypoioorrgp', function(table) {
    table.float('zsxwyufgis');
    table.float('nwhfmjgqzn');
    table.text('ieohsxfdgt');
    table.json('jleasvrldv');
    table.string('rtaizyskiw');
    table.json('xxygspeorv');
    table.integer('lwbywtfdkp');
  });
  await knex.schema.alterTable('gxcyrolpnn', function(table) {
    table.timestamp('pspcondazu');
    table.integer('ximrblqfge');
    table.boolean('fpihfoigrs');
    table.float('kpydtemxlu');
    table.json('qivctbjaea');
    table.timestamp('bjphgtlvfu');
  });
  await knex.schema.alterTable('zreylvleyj', function(table) {
    table.timestamp('wrqqrvkuva');
    table.text('ofjlxctlab');
    table.boolean('inrayboelm');
    table.json('mzvtmuxlok');
    table.json('obmpzzpwbf');
  });
  await knex.schema.alterTable('hmvqcdzkxc', function(table) {
    table.json('dhmdeougfy');
    table.json('ygcececgcf');
    table.integer('beehlthbkj');
    table.integer('nvbvfowogr');
    table.text('aidifhchra');
  });
  await knex.schema.alterTable('uyzkumcoao', function(table) {
    table.json('xxrtxzlukq');
    table.json('onphrwbkzi');
    table.float('kenofpxwsi');
    table.float('iumdfjtatt');
    table.integer('royphmythd');
    table.integer('ehesehywvr');
  });
  await knex.schema.alterTable('ffboyolanz', function(table) {
    table.json('qhjztfvvql');
    table.timestamp('fghxpojlee');
    table.json('cfxvtfzvip');
    table.boolean('ihbfzlogee');
    table.json('zymixmordl');
    table.json('matamfajrn');
    table.text('dlqavvpiks');
    table.timestamp('sjhzvpbqgi');
    table.string('rqvfksvbsx');
  });
  await knex.schema.alterTable('xyfnclsmac', function(table) {
    table.float('duhzilmhiu');
    table.timestamp('nubvkuguzb');
    table.float('qgxvdgyxoz');
    table.bigInteger('pvwetoiyka');
    table.string('cmfgxvhlun');
    table.timestamp('nhkpxkoceo');
    table.bigInteger('ggdypmpbam');
    table.integer('nsbdhfpcac');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};