'use strict';

/**
 * Migration: 20240823215217_dxnbdhgzivskrmz
 * Description: Please work this time
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('yrvyxtrwbw', function(table) {
    table.float('tcivyghuye');
    table.float('daukriboyf');
    table.boolean('yxrmecaghx');
    table.boolean('asrhvsynxe');
    table.bigInteger('mxbfgajxjg');
    table.integer('jgptzovyhr');
    table.boolean('heobvutaeg');
    table.boolean('nffavpfonv');
    table.string('sqxsjsgnlq');
    table.text('pjmgyvjqmt');
  });
  await knex.schema.alterTable('rhyjlqesgo', function(table) {
    table.integer('lbfyyylbuk');
    table.integer('bexcpkfshn');
    table.timestamp('dmervcxenv');
    table.float('bzjnptdbdo');
    table.integer('pnkwclbrtt');
  });
  await knex.schema.alterTable('kugbdvxrzt', function(table) {
    table.string('smmtnwrgil');
    table.boolean('geqmxmijfo');
    table.boolean('tnqtybdiuc');
    table.text('upprudeklh');
    table.float('lzluwmtjgq');
    table.boolean('cjwpvvydjd');
    table.text('meaxfkqwwy');
  });
  await knex.schema.alterTable('voslrggcrx', function(table) {
    table.text('lblzkdalhs');
    table.bigInteger('fzhhxkensu');
    table.json('xdehvvcryt');
    table.float('xpxgqxrarf');
    table.string('xoqghdgczt');
    table.integer('njshcxhpee');
    table.text('lquaszrhih');
    table.string('opzkyjxeaa');
  });
  await knex.schema.alterTable('ghrwetmalc', function(table) {
    table.timestamp('ahztqecdxd');
    table.float('zqqoaxfabh');
    table.timestamp('qjntbpzkcy');
    table.float('qritquvzuh');
    table.float('hikwirorwq');
    table.json('xmufmfoqvg');
    table.timestamp('ulkzgqwfll');
    table.boolean('dtmbfudohd');
    table.float('ugapbuvxef');
  });
  await knex.schema.alterTable('kibwhaehjs', function(table) {
    table.float('uypsquvarv');
    table.float('dfftzalgmr');
    table.boolean('radgapvbuw');
    table.json('invbguunbr');
    table.timestamp('rbtoayelje');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};