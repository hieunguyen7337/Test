'use strict';

/**
 * Migration: 20241221191543_hrkdmqyeffcbtmx
 * Description: Redo the undo
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('bmixmiwnsh', function(table) {
    table.float('isggjxmfmv');
    table.json('ifuztfcfck');
    table.integer('ikctwajksj');
    table.text('vgdvepzvha');
    table.string('replvakmwr');
    table.json('iwztwptvyn');
    table.timestamp('amcjfoglre');
    table.text('elxpebkbvf');
    table.boolean('bbblriuowx');
    table.text('pxknftarpm');
  });
  await knex.schema.alterTable('udykgnwtpk', function(table) {
    table.string('ytsixbnokz');
    table.integer('immfdqdstn');
    table.float('hdmdmfxkie');
    table.integer('abphuivial');
  });
  await knex.schema.alterTable('xqbgxguzlj', function(table) {
    table.json('yzliqxwycr');
    table.integer('leneomjjyy');
    table.timestamp('rmqpyiosmk');
    table.json('mgelbsgjar');
    table.integer('klirbamkhn');
    table.float('mtamghrafr');
    table.bigInteger('yrgroesjil');
  });
  await knex.schema.alterTable('zjrzrlnywj', function(table) {
    table.text('unloozjzcl');
    table.json('yrivlozcad');
    table.json('ateerdcrxl');
    table.bigInteger('uzoixrirka');
    table.json('iaszugfbnu');
    table.bigInteger('auuwsjfbzv');
    table.float('qfncravtwz');
    table.string('obqzpuatff');
  });
  await knex.schema.alterTable('yiibeanqcj', function(table) {
    table.boolean('uyjlgmidqp');
    table.text('zkvuequkwq');
    table.integer('idsroivbsy');
    table.text('qiyronetwf');
    table.json('xlagpcpyzw');
    table.bigInteger('omwozotjxm');
    table.string('vpfbpacflf');
    table.timestamp('cipfiyhoim');
    table.integer('ocujwbxdkm');
    table.bigInteger('lgftufwujy');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};