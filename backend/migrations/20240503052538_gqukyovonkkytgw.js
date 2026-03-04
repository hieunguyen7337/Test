'use strict';

/**
 * Migration: 20240503052538_gqukyovonkkytgw
 * Description: Remove column
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('sljifrghyu', function(table) {
    table.float('jkjaktevfu');
    table.string('pcqfzgoqiq');
    table.string('jmygxzgipa');
    table.string('ytkqqzlxeu');
    table.timestamp('lmjkgkdamk');
  });
  await knex.schema.alterTable('wxiwgzxczj', function(table) {
    table.json('imdpuzurjs');
    table.string('yfxeojryzz');
    table.text('phliczufur');
    table.boolean('orxejsxplz');
    table.json('lxfleabuqh');
    table.bigInteger('idduagirnu');
    table.json('snypcgedia');
    table.json('ivvqvsggvs');
    table.float('mrqyfevztt');
  });
  await knex.schema.alterTable('odnvxpmesc', function(table) {
    table.json('bgkvljihdc');
    table.timestamp('inxzitdcyi');
    table.bigInteger('ogapxnnelk');
  });
  await knex.schema.alterTable('wslgmjcqvo', function(table) {
    table.string('azzyxvonph');
    table.text('dzdpnhrabg');
    table.boolean('ordxeunbip');
    table.string('yogdkohhpz');
  });
  await knex.schema.alterTable('niujjrqkod', function(table) {
    table.bigInteger('qeczivwbvi');
    table.integer('pisqzftezl');
    table.bigInteger('cltozuzpnw');
    table.integer('xjtmxjtybj');
    table.json('hgodnpwyky');
  });
  await knex.schema.alterTable('qbctociyvx', function(table) {
    table.timestamp('iqokfajxdv');
    table.integer('qgbetdmmgx');
    table.text('jxtxmtcgpd');
    table.integer('neqarxaeup');
    table.json('hqbawamsiw');
    table.string('sdbvacgjxd');
  });
  await knex.schema.alterTable('urualhvzth', function(table) {
    table.integer('mhbuwpzgez');
    table.float('oqjevufzby');
    table.text('rywytvjdcf');
    table.text('pmabwywjho');
    table.timestamp('tbpucrgsuf');
  });
  await knex.schema.alterTable('taazklzida', function(table) {
    table.string('cvigmicxvy');
    table.string('zxlnzjekvl');
    table.text('ejfxinmzyp');
    table.float('edvaolniaz');
    table.json('kucbhzhwdg');
    table.string('okbdngfppu');
    table.integer('dmmcdrqjzm');
    table.string('heaplrzxem');
  });
  await knex.schema.alterTable('vifcqypyxt', function(table) {
    table.json('bsyjxzmsie');
    table.bigInteger('hiuljovrgc');
    table.text('ruypmjbqao');
    table.boolean('jxulbvsghb');
    table.text('potmkvbviu');
    table.boolean('pywkjiynyo');
    table.integer('ckejjsaiie');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};