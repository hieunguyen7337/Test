'use strict';

/**
 * Migration: 20240910190717_bnvzrxgsdpxjock
 * Description: Create table
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('vrxevungbn', function(table) {
    table.boolean('qmyoueqyjs');
    table.integer('sbrsnnfmgv');
    table.boolean('dynucbkdwu');
  });
  await knex.schema.alterTable('liktlzlkzp', function(table) {
    table.bigInteger('esiajxqogu');
    table.json('pullkblood');
    table.bigInteger('ztiwdprcyn');
    table.text('adnjrydxsk');
  });
  await knex.schema.alterTable('aiyvoonjtp', function(table) {
    table.timestamp('vyhycadfwd');
    table.json('rqsdefrhoe');
    table.bigInteger('fpzjhzweml');
    table.float('mfbrvbwnav');
    table.float('bbkuonnago');
    table.text('lwyiexcxlc');
    table.integer('bvigfvyuug');
    table.bigInteger('psbiuxqcxn');
    table.integer('uzvjyntriy');
    table.string('rlnumqmrsg');
  });
  await knex.schema.alterTable('hnhgaceysq', function(table) {
    table.timestamp('djrpnegzdf');
    table.string('zdkpdwdqna');
    table.bigInteger('zcjhmawypv');
    table.bigInteger('kxgdpxdrhz');
    table.bigInteger('xwduqkxivh');
    table.bigInteger('wxixnlzrao');
    table.string('rbwvrwuobr');
    table.float('xhnevqstnc');
    table.bigInteger('izeluwdzev');
  });
  await knex.schema.alterTable('zspsgjiing', function(table) {
    table.boolean('klkphmpkap');
    table.string('yfzahftsfa');
    table.bigInteger('ytnckftatr');
    table.timestamp('kgzuvdxjtf');
    table.float('bwgctvhzbz');
  });
  await knex.schema.alterTable('gfapezembn', function(table) {
    table.string('pydfzfijcd');
    table.float('yalvwwbbkx');
    table.integer('hsufyibeot');
    table.json('yvzusuvhmt');
    table.bigInteger('pkcdsntpjl');
    table.bigInteger('clyrntotkq');
    table.text('ekajxnavvn');
    table.bigInteger('fqfolgowhf');
  });
  await knex.schema.alterTable('djjspjviev', function(table) {
    table.timestamp('zulukkpwop');
    table.timestamp('qbbdcueqqk');
    table.timestamp('nqayeoveea');
    table.float('fksdmtrtbh');
    table.json('muecpymvls');
    table.boolean('onqkhefpjh');
  });
  await knex.schema.alterTable('ptejjdjigr', function(table) {
    table.bigInteger('guvtrgvopu');
    table.bigInteger('fcxuvoabdh');
    table.text('xhpwiqtbyy');
  });
  await knex.schema.alterTable('xblkdyyzgg', function(table) {
    table.text('zvnnkddaap');
    table.string('qhcdyomlny');
    table.integer('bhjnsmtznm');
    table.string('jvahqkvmpt');
    table.json('fzihowwqaf');
    table.integer('yxjlepqekt');
    table.integer('exzohakkbe');
  });
  await knex.schema.alterTable('sywndjrhhv', function(table) {
    table.integer('lhfqnhruhb');
    table.text('jofwadnplx');
    table.timestamp('utaqwjlwda');
    table.bigInteger('wunwaqthxx');
    table.bigInteger('ipasunzmgr');
    table.string('zhfkdnxgdx');
    table.timestamp('vjtogaehrh');
    table.text('juwzsgfpvb');
  });
  await knex.schema.alterTable('wynrkvprsc', function(table) {
    table.bigInteger('lrtgmsezpy');
    table.string('axqifyixto');
    table.boolean('rkccpjnjtx');
    table.timestamp('rjfaacqiia');
    table.string('dxnvibngae');
    table.bigInteger('vgyrummzjt');
    table.text('qxhxyjdakg');
  });
  await knex.schema.alterTable('bsmptufxfj', function(table) {
    table.string('izpbjqohcg');
    table.json('mzuthzppjf');
    table.bigInteger('pcdhzpobgx');
    table.string('tfywurxqpb');
    table.integer('rhyhqnubau');
  });
  await knex.schema.alterTable('lfebekhzai', function(table) {
    table.integer('gqlkajvefc');
    table.timestamp('njijvgqwxb');
    table.timestamp('xqxxwijdqi');
  });
  await knex.schema.alterTable('ufhyeudjax', function(table) {
    table.json('bczhxctfcv');
    table.string('mbyuifnfzb');
    table.string('vukenunbfi');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};