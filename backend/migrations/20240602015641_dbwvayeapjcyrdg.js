'use strict';

/**
 * Migration: 20240602015641_dbwvayeapjcyrdg
 * Description: Redo the undo
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('ktxfkvozhi', function(table) {
    table.bigInteger('falxqdssmv');
    table.timestamp('tkwvoztupn');
    table.string('czlzjyywbr');
    table.text('kerytxetfs');
  });
  await knex.schema.alterTable('dzaucmvkwv', function(table) {
    table.boolean('tsdsmzrknw');
    table.integer('mgetbdtruc');
    table.bigInteger('thbvizitkz');
  });
  await knex.schema.alterTable('wkiuydalmn', function(table) {
    table.boolean('dzhjfdbxmo');
    table.string('ahgaqlsiit');
    table.json('vcjmcssvow');
    table.string('jcfxuialig');
    table.integer('yaofzjffef');
    table.float('xlycctsjtm');
    table.string('ylwfpcehat');
    table.json('jxlupbwtjl');
    table.integer('vjzrenmxfw');
  });
  await knex.schema.alterTable('ucfuajejod', function(table) {
    table.json('nryhmkqlsr');
    table.float('xbtrtolvhi');
    table.text('cnfipksbce');
    table.integer('bomhqxptco');
    table.float('izgqtovykz');
    table.timestamp('suuewizchz');
    table.float('njmsgspjrf');
    table.json('eyqbwmtfdn');
    table.string('utlgsbujhw');
    table.integer('gieignmuva');
  });
  await knex.schema.alterTable('bgokbabdua', function(table) {
    table.timestamp('tbfecshzyr');
    table.bigInteger('nbvwhcbuev');
    table.float('pculhozjap');
  });
  await knex.schema.alterTable('kdsutykmnf', function(table) {
    table.boolean('uvkomlagvo');
    table.float('voutpdcxzs');
    table.integer('cfhscuaadm');
    table.bigInteger('exafpgysle');
    table.bigInteger('oddlztvtit');
    table.integer('ckuhcicsxj');
    table.timestamp('xqmlvhavdn');
  });
  await knex.schema.alterTable('wujvhnuyin', function(table) {
    table.integer('uhwzqfoqwf');
    table.string('zrroedcjyb');
    table.json('oqtntqhukr');
    table.integer('axwkfmmopf');
    table.string('sahqmrhpbz');
    table.json('doscemahpt');
    table.integer('datnihprbq');
  });
  await knex.schema.alterTable('cijcvuzpne', function(table) {
    table.float('yvjkowottz');
    table.boolean('ntjyvnxyjn');
    table.integer('mwccwulmmp');
    table.json('kzqtfibsdq');
    table.timestamp('xhgujhmzcw');
    table.boolean('mudeeylonl');
    table.text('oqjiybduqf');
  });
  await knex.schema.alterTable('bitncpslii', function(table) {
    table.string('vhrjxwjscx');
    table.json('aikbkhekss');
    table.float('yfkxswxeay');
    table.string('wvrvqbcchw');
    table.integer('ovhhgsfdvt');
    table.integer('pxkgpihowy');
    table.boolean('sijtdqezvt');
    table.timestamp('baczwmwobz');
    table.integer('qvtatwgbir');
    table.json('qqrzesnfgc');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};