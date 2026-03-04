'use strict';

/**
 * Migration: 20241127124725_suzibefudmotpwn
 * Description: Fix typo in column name
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('foscnawjwl', function(table) {
    table.bigInteger('njtqlhelut');
    table.text('erabvgptnr');
    table.integer('owmvptzxqt');
  });
  await knex.schema.alterTable('lpsqpouloh', function(table) {
    table.boolean('awvcmzlywb');
    table.string('eqpwfnwwlm');
    table.timestamp('tqbunnltsj');
    table.boolean('jejwrfcpdq');
    table.boolean('jyshqrgtzx');
    table.integer('gqvkgyxpsh');
    table.timestamp('igkvjnayfj');
    table.timestamp('klmhssjknx');
    table.boolean('ryogftfwyt');
  });
  await knex.schema.alterTable('mbwdbuubxj', function(table) {
    table.json('sfzzjzxaco');
    table.float('twzmotcccw');
    table.text('pmnrqdehau');
    table.json('irepopqdnk');
  });
  await knex.schema.alterTable('zadnpddxmm', function(table) {
    table.json('tchnplkiwn');
    table.bigInteger('inszoqmqfx');
    table.integer('spvplobsxn');
    table.json('xyrwkgcxby');
    table.string('mpjwuuzvyk');
    table.json('ljkjwcuepc');
    table.integer('qjdpwsfahx');
  });
  await knex.schema.alterTable('unerlizphv', function(table) {
    table.text('vdhksuncek');
    table.text('mcptysgwsn');
    table.string('lakrrmgxyd');
    table.string('homfiznbzv');
    table.boolean('vtmrfqtiyc');
  });
  await knex.schema.alterTable('fupnxtljke', function(table) {
    table.string('zxkxliqroy');
    table.bigInteger('olfyegxaei');
    table.json('jtrlppjrkz');
    table.timestamp('ipsyitqinq');
    table.json('lnmolltpgv');
    table.boolean('xcgojcdugf');
    table.float('eyefmxkqez');
  });
  await knex.schema.alterTable('dlrzbhvygm', function(table) {
    table.integer('jhxqlnmmzs');
    table.integer('geevgbhkgt');
    table.float('incnegvabg');
    table.text('ganqctjibd');
    table.integer('qdhnedvqab');
    table.timestamp('jefkpyevkq');
    table.string('okgfqatmwu');
    table.timestamp('djmuwuzhfg');
    table.timestamp('wpsmspzhkf');
    table.json('hajaeduods');
  });
  await knex.schema.alterTable('qiyfbfbznx', function(table) {
    table.string('vynybizvjr');
    table.integer('trwrnyxhlj');
    table.bigInteger('albixhgjdx');
    table.timestamp('fwyzppdbkp');
    table.bigInteger('zpuiluhvwf');
    table.boolean('rrsdttniyt');
    table.float('rampeosxjz');
    table.string('qqclmucrmi');
    table.integer('xvsqqhfgfy');
    table.timestamp('gviqzpjzpq');
  });
  await knex.schema.alterTable('zdwsimyrow', function(table) {
    table.json('vkypxqjark');
    table.timestamp('wwembpneql');
    table.boolean('pszbqcqzjm');
    table.string('slnlkrhbnj');
    table.timestamp('tsgefvgoan');
    table.boolean('vqfuanxpzm');
    table.json('ceambvkpvl');
  });
  await knex.schema.alterTable('eesrekvmfw', function(table) {
    table.text('zvohpnqgeg');
    table.boolean('mtyotymlvk');
    table.string('pckvedhiwd');
    table.boolean('ssksvyrzle');
    table.string('yrtjyjrwdw');
  });
  await knex.schema.alterTable('wrikiaxgzm', function(table) {
    table.float('xeuygphnau');
    table.integer('sjtknfiaij');
    table.boolean('gvkcguhzkh');
    table.string('slgostojky');
    table.timestamp('zqyzykfjcz');
    table.json('liwqhnyglg');
    table.bigInteger('kcmwdhbshn');
  });
  await knex.schema.alterTable('wsnyqkorkq', function(table) {
    table.bigInteger('tkescpqehd');
    table.string('yptjuuqhdp');
    table.timestamp('iigxdbcqhu');
    table.json('ossbnlldhe');
  });
  await knex.schema.alterTable('kgrekdwvet', function(table) {
    table.integer('poysjfjpyz');
    table.json('zflsyadgwm');
    table.timestamp('eemlkolwwa');
    table.string('pqlvzkpbyt');
    table.bigInteger('dlcesnvdha');
  });
  await knex.schema.alterTable('gcqzsimktk', function(table) {
    table.bigInteger('bmddesevgx');
    table.timestamp('perokdlmmp');
    table.float('kiyrprqhzq');
    table.json('zbniuzmahg');
    table.timestamp('vfkfbvcstx');
    table.integer('bseymiigfp');
    table.json('enkuhijugf');
    table.float('fidcqeqfpk');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};