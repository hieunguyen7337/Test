'use strict';

/**
 * Migration: 20240926112639_esbgqqsvgfcjstl
 * Description: Add index
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('kpvftmogsq', function(table) {
    table.json('sigvuplcul');
    table.boolean('iepxzgzarf');
    table.integer('oeglkuwovv');
  });
  await knex.schema.alterTable('kenuqmempa', function(table) {
    table.bigInteger('uvvgbzpqnj');
    table.json('zaaxjpvutw');
    table.string('cxohxohiho');
  });
  await knex.schema.alterTable('njvgmhomcv', function(table) {
    table.float('yimvoohkxv');
    table.bigInteger('uelumunvzm');
    table.timestamp('gbokodwkvw');
    table.boolean('ugpwfgwrjc');
  });
  await knex.schema.alterTable('sptpwomwys', function(table) {
    table.json('cjojskfgkc');
    table.json('lgrxpjkyqb');
    table.boolean('luqzlszcdt');
    table.boolean('pmfoknswnu');
    table.integer('ewguagmptd');
    table.string('ctxanvhdwq');
    table.string('nyrnzlpqgd');
  });
  await knex.schema.alterTable('gnueuzsggh', function(table) {
    table.bigInteger('dpccmsnimb');
    table.json('lmefsljhbg');
    table.string('lsgqvyaofx');
    table.json('gfvkwngblg');
  });
  await knex.schema.alterTable('rdsuxmlewn', function(table) {
    table.boolean('otormpdcji');
    table.bigInteger('ujcreelsym');
    table.string('lubnffivwm');
    table.float('xqsulxyjci');
    table.text('cjhitgmsed');
    table.float('skluakvhjd');
    table.bigInteger('zuhubztmql');
    table.bigInteger('uisdbqezoa');
  });
  await knex.schema.alterTable('gxvpneeofr', function(table) {
    table.timestamp('pwyhvimaxt');
    table.float('cwvwhwruhc');
    table.string('lkmgoxmlhk');
  });
  await knex.schema.alterTable('xwzhomrjjr', function(table) {
    table.timestamp('qarbpgxzkz');
    table.json('tcdhhvyynd');
    table.string('wtphgwmrem');
    table.string('uosxfanvgq');
    table.boolean('dhhpeuprhg');
    table.boolean('sqvbjqlrsw');
    table.text('nprkveskbg');
  });
  await knex.schema.alterTable('nowekjsaji', function(table) {
    table.boolean('ubxeykryzw');
    table.boolean('dnexkhzill');
    table.float('mndjaujbzw');
    table.boolean('ubxugliwol');
    table.json('evxcrigrik');
    table.json('tfiikctvtp');
    table.bigInteger('dcbchgnuwg');
    table.float('ftepqyizjz');
    table.timestamp('ajpohikhyp');
    table.timestamp('nxqadxioff');
  });
  await knex.schema.alterTable('xrgpthgqha', function(table) {
    table.boolean('gzkzupxzrx');
    table.text('xiaobgbduq');
    table.string('ybexkerdyg');
    table.bigInteger('mqivctavtc');
    table.boolean('lvqtckvptx');
    table.float('nzxyvcveuy');
    table.timestamp('hpqgrcbohq');
    table.text('klyzflkwkg');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};