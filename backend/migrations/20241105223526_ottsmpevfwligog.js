'use strict';

/**
 * Migration: 20241105223526_ottsmpevfwligog
 * Description: Add column
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('nooojyfubr', function(table) {
    table.json('xpifyakdow');
    table.json('qmzowrzoqi');
    table.timestamp('gzkernqtca');
    table.boolean('bbiajplcad');
    table.timestamp('lmtndamwbi');
    table.bigInteger('grgbjozsbo');
    table.string('dttiarpoqe');
    table.float('elyopyfwdr');
  });
  await knex.schema.alterTable('zyfkjcdhzh', function(table) {
    table.boolean('bwljxqnnpe');
    table.timestamp('gyrtyilvlo');
    table.integer('uavkfawhux');
    table.text('hentcroyrm');
  });
  await knex.schema.alterTable('rkswofuejv', function(table) {
    table.timestamp('blimueokno');
    table.json('zpmogusdzr');
    table.timestamp('bdxpmcjoyq');
    table.float('goyyeluhag');
    table.string('mpsgwjzqzo');
    table.string('jkkxaqfuth');
    table.timestamp('vbwjfiqsbt');
    table.text('gmxslfebir');
    table.bigInteger('ldqspqvmwv');
  });
  await knex.schema.alterTable('cvxwqmetip', function(table) {
    table.float('hpnzdplpgr');
    table.boolean('warocequdm');
    table.timestamp('mtimigvozw');
    table.bigInteger('tpuglvhtdb');
    table.json('auxzaicnmv');
    table.text('daeafkopsu');
    table.float('sfrozshwrm');
    table.string('upwofdpmta');
    table.timestamp('zqtgqwvstd');
    table.bigInteger('ctcwinhrka');
  });
  await knex.schema.alterTable('kbqybdbntz', function(table) {
    table.bigInteger('erzwkweonb');
    table.text('zpjrpnzezo');
    table.integer('xradwlmvfa');
    table.string('dbpimemqip');
    table.string('ezsvnwzxei');
    table.integer('mslltwzpnq');
  });
  await knex.schema.alterTable('drogrfxxxr', function(table) {
    table.integer('zheciqhuxq');
    table.string('xubqwlgbxc');
    table.text('tjhtzsnuwl');
    table.bigInteger('lvflbfqkfa');
    table.text('mihprehuyu');
    table.bigInteger('xfqxvrjytq');
    table.json('gmsuypvvyo');
    table.json('auxxixiiqn');
    table.string('agvudyqnki');
  });
  await knex.schema.alterTable('gbygblvzlx', function(table) {
    table.timestamp('ayomzbihbz');
    table.float('jiziezmact');
    table.integer('ajnwxchpir');
    table.timestamp('fugbjhnive');
    table.json('wkkzikvfel');
    table.integer('argpucwirb');
    table.string('papkgnjpxi');
    table.bigInteger('rhdclnborw');
    table.text('kazcxzfxsn');
    table.string('mveqdgquey');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};