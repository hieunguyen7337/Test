'use strict';

/**
 * Migration: 20240214172451_nkgaqwsgbftfllz
 * Description: Please work this time
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('hsfdrouqag', function(table) {
    table.text('dujwebnsnt');
    table.string('eeeylzvbwz');
    table.string('ycaoqybpyj');
  });
  await knex.schema.alterTable('wbjeiuxoey', function(table) {
    table.text('scgsjxeupl');
    table.bigInteger('ncfddherbh');
    table.timestamp('wmprkddwlz');
    table.text('yhgztoirjn');
    table.integer('vgozgjsdud');
    table.text('vnjkrcczxm');
    table.string('dbhfvaoquf');
    table.boolean('upczugwswn');
    table.boolean('pdkjbxoikz');
  });
  await knex.schema.alterTable('eqhvemnsni', function(table) {
    table.integer('lvzbsrfdjk');
    table.integer('fuwoztrphm');
    table.float('etzizncwfx');
    table.integer('dxkwyiajfv');
    table.float('iamldbgvfb');
    table.integer('nygytfqwpn');
    table.float('zxfadwcges');
    table.bigInteger('qyvgvydbwt');
  });
  await knex.schema.alterTable('vailnahwad', function(table) {
    table.json('rruzcozanc');
    table.json('pixhevxvho');
    table.float('afmvrminsv');
  });
  await knex.schema.alterTable('whjivmiumo', function(table) {
    table.bigInteger('fjmqogpzkq');
    table.string('wyrjvioipy');
    table.timestamp('hroxmfcvog');
    table.bigInteger('dzlcigpkan');
    table.json('dweonlueyv');
  });
  await knex.schema.alterTable('rebtnujjoa', function(table) {
    table.bigInteger('zroaxjwmrj');
    table.text('usvwzlklap');
    table.float('iszdrqgohi');
    table.float('tglngsxakk');
    table.bigInteger('znmofrgajz');
  });
  await knex.schema.alterTable('hjnvppgguz', function(table) {
    table.json('rzdymwreak');
    table.string('neasecizys');
    table.float('jdlefxjqbq');
    table.text('thhvitzgwv');
    table.string('iisehkljcf');
    table.float('sjsxinbepk');
    table.bigInteger('joavbxuloe');
  });
  await knex.schema.alterTable('fwyddafjqw', function(table) {
    table.json('ssvvwdfltd');
    table.text('giamihqliw');
    table.integer('bfrhpmqxyq');
    table.string('xsocfylioo');
    table.boolean('qktfjiwqoh');
  });
  await knex.schema.alterTable('qujbvclges', function(table) {
    table.float('xdysokhhwy');
    table.integer('fdazwweicc');
    table.float('bbxrifctlb');
    table.bigInteger('xembmvycww');
  });
  await knex.schema.alterTable('xgqqgwvell', function(table) {
    table.boolean('isorgtwjzs');
    table.string('rwgykoutou');
    table.bigInteger('brkgbcdlgh');
    table.integer('rnvrflucee');
  });
  await knex.schema.alterTable('qeokrhgjxb', function(table) {
    table.bigInteger('fvbbidbbjc');
    table.json('noexuqcumf');
    table.text('rrdvfcoejz');
    table.text('yzfgutwmws');
    table.float('sbmttpuguv');
    table.boolean('uiewmlpvmk');
    table.text('cjqvkcxtqi');
    table.boolean('ljtaqjkotl');
    table.float('kaebstmthi');
    table.string('sgdaeyuhpz');
  });
  await knex.schema.alterTable('bhysomuybc', function(table) {
    table.float('vmmodwnspt');
    table.text('odxpjqhpjk');
    table.integer('qmzhjoomzl');
    table.json('dhlsevbpnq');
    table.string('ipiuohlmnu');
  });
  await knex.schema.alterTable('icsxhgtdkv', function(table) {
    table.bigInteger('otdjruuxut');
    table.integer('mhvvccqzqc');
    table.timestamp('cfhkshabpg');
    table.boolean('itlqtcrksi');
    table.json('xksdqjdizs');
  });
  await knex.schema.alterTable('ivywhvcwxq', function(table) {
    table.string('efwrvcyazu');
    table.json('utrwlzbtkl');
    table.timestamp('vvfffgufcr');
    table.json('bqhmpuihfc');
  });
  await knex.schema.alterTable('dhnkhukxcy', function(table) {
    table.integer('rnqhghucco');
    table.boolean('vehcagtbqt');
    table.boolean('pjxxvjtbgk');
    table.integer('kwuajfvytt');
    table.text('gmhootollg');
    table.text('nygegnplah');
  });
  await knex.schema.alterTable('whndeizbpy', function(table) {
    table.bigInteger('pljqnlcbnv');
    table.boolean('rcuybbjeun');
    table.integer('ayzzqntmgz');
    table.json('fkzmepzrku');
    table.float('onihaglisl');
  });
  await knex.schema.alterTable('jzxfwwfhmn', function(table) {
    table.boolean('deziwmxmqm');
    table.text('iklakdcbbw');
    table.float('gomfaosmgp');
    table.bigInteger('ukrtfwmycc');
    table.timestamp('tshmngebax');
    table.bigInteger('uhvcpgmjmj');
    table.integer('wwtqzowpik');
    table.json('legcpqmgjo');
  });
  await knex.schema.alterTable('ehboubsohw', function(table) {
    table.json('chqofqwkzd');
    table.json('kndrolsksi');
    table.json('whdoqfmowk');
    table.float('wclvdscrth');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};