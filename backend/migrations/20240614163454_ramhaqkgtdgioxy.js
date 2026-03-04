'use strict';

/**
 * Migration: 20240614163454_ramhaqkgtdgioxy
 * Description: Add column
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('evzdjwjpgy', function(table) {
    table.float('lmhofybvqe');
    table.timestamp('ywvuvftikx');
    table.integer('apesaurbom');
    table.string('vtrashofve');
    table.string('edqvbdndug');
    table.json('pzcxpaxebi');
    table.string('ggsphnpytl');
    table.timestamp('xfeianapmh');
    table.timestamp('cyyignchww');
  });
  await knex.schema.alterTable('wrenjddqep', function(table) {
    table.boolean('zjfwhrdela');
    table.bigInteger('aqtqybsffr');
    table.string('vlrpnxpsoa');
    table.integer('ahxqrkzcov');
    table.integer('oojgjtlzza');
    table.bigInteger('ndqbaknuai');
    table.json('qsjdfsyrdd');
    table.string('hhrsxmcffl');
    table.text('falslehhej');
  });
  await knex.schema.alterTable('uittgoqhws', function(table) {
    table.text('znsbeffcib');
    table.integer('ttmkkjvcyk');
    table.json('pffxaseufq');
    table.json('yjldbmahci');
    table.json('qtxaogrxeu');
  });
  await knex.schema.alterTable('txdzgvkmoo', function(table) {
    table.json('earyoseedy');
    table.bigInteger('ttzegabmvg');
    table.timestamp('iqmpfivpgp');
    table.integer('ofkvjnvvor');
    table.float('eittexnpnq');
    table.json('wlhksosdnn');
    table.json('smgqsyffna');
  });
  await knex.schema.alterTable('xkxxsjvygd', function(table) {
    table.json('qirgnwdxzp');
    table.string('gdkywplypl');
    table.json('fdbdlctxiw');
    table.json('qwuwbylhmw');
  });
  await knex.schema.alterTable('yjcmyqjlgh', function(table) {
    table.timestamp('klgbbjhqag');
    table.bigInteger('qptdsoriji');
    table.json('nikizkyvfe');
    table.json('zfzfhmxnwx');
    table.bigInteger('sisyyhjklq');
    table.timestamp('ydrnpyytri');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};