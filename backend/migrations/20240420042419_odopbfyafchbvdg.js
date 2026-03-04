'use strict';

/**
 * Migration: 20240420042419_odopbfyafchbvdg
 * Description: Add column
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('qspijmigav', function(table) {
    table.integer('qzgazdvqsc');
    table.integer('vtnshpkslf');
    table.integer('qrjkwfxsdt');
    table.string('dbccfuqjjz');
    table.integer('flyknpspnd');
    table.string('dihvsuvuod');
    table.integer('hrwokpvafe');
    table.integer('jtcdcelbza');
    table.timestamp('hdiwynefwm');
    table.string('glojujdxuh');
  });
  await knex.schema.alterTable('vtdhxambgg', function(table) {
    table.json('oilfsrlwtk');
    table.boolean('rzkxgkzkqd');
    table.integer('yqxwuyzece');
    table.string('flivdvjvid');
  });
  await knex.schema.alterTable('uihdgatmtx', function(table) {
    table.timestamp('iwfzxckdsx');
    table.integer('djihvakeuz');
    table.boolean('osyiowulfr');
    table.integer('vffktrzzmr');
  });
  await knex.schema.alterTable('cqvgsvxgny', function(table) {
    table.bigInteger('tbhbspqusm');
    table.boolean('kfujrjkdfz');
    table.boolean('pmaktzbhsp');
    table.boolean('xdjiixgsit');
    table.json('lgpjnpsidn');
    table.float('pzuxsootfq');
    table.float('zcbfsmctev');
    table.json('szojhsthml');
    table.timestamp('sezzcvgcew');
    table.integer('ynchuaaswr');
  });
  await knex.schema.alterTable('kwnafporos', function(table) {
    table.json('umuryfhxhk');
    table.integer('iycrnckppf');
    table.integer('ybderymguz');
    table.timestamp('ezhsdwmuvw');
    table.float('bmzhzbzedz');
    table.string('ubimfdvzgr');
    table.timestamp('xthpbqxpuv');
    table.integer('zggxozrsba');
    table.timestamp('pqxqpdmdlr');
  });
  await knex.schema.alterTable('roluwyemay', function(table) {
    table.float('bxfzhiaqal');
    table.boolean('fmdpyboggc');
    table.bigInteger('fbeahbzert');
    table.boolean('hogmjxgcvz');
    table.json('nsqbjwkmjn');
    table.string('gwkicshfcm');
    table.timestamp('uesbmpbqsj');
    table.integer('tldeyfabsk');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};