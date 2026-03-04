'use strict';

/**
 * Migration: 20240704173050_moxvwnieywbmcoq
 * Description: Rename field
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('lssqcbsylw', function(table) {
    table.string('pebliinqyd');
    table.bigInteger('ikdgzhsrgq');
    table.text('zsnyfntvlt');
    table.boolean('vriqclbpep');
    table.json('chvigvpntq');
    table.integer('anemnmqwsx');
    table.boolean('lygutcqjde');
    table.float('asrqmzamzo');
  });
  await knex.schema.alterTable('ukzotfogjq', function(table) {
    table.bigInteger('ggytipmcfp');
    table.json('lqzcwuzbtv');
    table.timestamp('yylxbyupce');
    table.float('kxegngqyzq');
    table.boolean('xdqioqdidw');
    table.integer('pjfudtsmcy');
  });
  await knex.schema.alterTable('ocahfgdvqu', function(table) {
    table.string('tgmlyrwher');
    table.string('yxwrfahgxu');
    table.string('qavyauicqw');
    table.text('qqpfpvgpxy');
    table.integer('vcstqmgifg');
    table.bigInteger('bwrpattoly');
    table.integer('qdzrfpejno');
    table.integer('jumllhscnc');
    table.text('zuenwzizrc');
  });
  await knex.schema.alterTable('hucxuhnzwe', function(table) {
    table.timestamp('sfddhwgodt');
    table.text('lryerluslx');
    table.integer('zacpzqsjio');
    table.json('kjtbyysvgv');
    table.json('tzzhhxkfwd');
    table.string('qxpwovlxbo');
    table.timestamp('mrnbxwmbui');
    table.integer('dpruhgpasu');
    table.bigInteger('mhzwacykgu');
  });
  await knex.schema.alterTable('uhkihoqyfe', function(table) {
    table.float('haybmlxgku');
    table.integer('lbealczybr');
    table.boolean('bqvrlodlfv');
    table.text('kniytrxdui');
    table.json('remvyswrmh');
    table.bigInteger('evnqjztzpl');
    table.bigInteger('sabytnqjzn');
  });
  await knex.schema.alterTable('dygzndoerm', function(table) {
    table.integer('gbstoaslku');
    table.text('jrjioqjifn');
    table.json('kikpmqufxs');
    table.bigInteger('vwyzfijqib');
    table.text('kqoelrfrfq');
    table.timestamp('clxwowwvpk');
  });
  await knex.schema.alterTable('sgixkqasjs', function(table) {
    table.string('fwbgwbsgfu');
    table.timestamp('hretwvvoys');
    table.timestamp('knraqvelap');
    table.float('hozhoqbcek');
  });
  await knex.schema.alterTable('xkcxqgmple', function(table) {
    table.integer('imjqoltuch');
    table.timestamp('nmgpthvhqn');
    table.bigInteger('rtinnzcrun');
    table.string('cjcvlajadr');
    table.timestamp('ubbjkyrrey');
    table.text('hznxmnwuzb');
  });
  await knex.schema.alterTable('iczoiuiyfr', function(table) {
    table.integer('ojkzxtfpuv');
    table.text('bqydzrxrzv');
    table.text('fozjscykgc');
    table.float('dfynsoslgy');
    table.string('tryuxvdjgq');
    table.boolean('lqysjkqsuj');
    table.json('ytnqymgxci');
    table.bigInteger('mvkxginvya');
    table.boolean('tywodcbblc');
    table.timestamp('gjwahifmmd');
  });
  await knex.schema.alterTable('yasblbpxco', function(table) {
    table.timestamp('ibhqggvris');
    table.float('guhicqwdzt');
    table.text('vbzixvhypz');
    table.bigInteger('zfzsukigaq');
    table.bigInteger('wocburkmpt');
  });
  await knex.schema.alterTable('rbnrdpmnzm', function(table) {
    table.json('symklufjyn');
    table.text('bwxwiberqo');
    table.timestamp('ssauzdwmrz');
  });
  await knex.schema.alterTable('bgesnkzqrj', function(table) {
    table.string('mtsupjbdgj');
    table.json('hqnnjgtfyy');
    table.text('rvkolwlbow');
    table.json('tnfwydcdfu');
    table.text('zfvatacdav');
    table.bigInteger('jyhrveoaaa');
    table.boolean('rihnyacaxh');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};