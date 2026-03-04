'use strict';

/**
 * Migration: 20240809140717_ebmllxaaxysrmvb
 * Description: Please work this time
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('ybrlwtccia', function(table) {
    table.text('hqnejwvnzn');
    table.bigInteger('jjelchpeyo');
    table.boolean('omhjmhsqrl');
    table.boolean('rugaemrrro');
  });
  await knex.schema.alterTable('cpxthpybug', function(table) {
    table.json('mfsswgghqn');
    table.text('teaoxsyoha');
    table.float('lyhuflpyov');
    table.string('gumrifyptt');
    table.integer('rhsgmbvstn');
    table.json('izcsxlqsmk');
    table.float('wpukpbjhnx');
    table.timestamp('huxczhwkze');
    table.string('hqwvgpmwao');
  });
  await knex.schema.alterTable('snspjedteo', function(table) {
    table.float('ydrezkmhkf');
    table.text('bnfuqjpsux');
    table.string('tyagprreac');
    table.bigInteger('fddxgzzpwp');
    table.timestamp('hankbdzspv');
    table.bigInteger('rgdcihnylc');
  });
  await knex.schema.alterTable('wwwtlisyif', function(table) {
    table.float('uswmxhmmvh');
    table.integer('kgwxgafbkb');
    table.float('wfsiukuvjd');
    table.string('kdebqkpfoa');
    table.bigInteger('sqojmbpbtx');
    table.bigInteger('zgrlybsiwe');
    table.timestamp('ttjriiogsr');
    table.integer('likuxomhdw');
  });
  await knex.schema.alterTable('wrbjpkujtb', function(table) {
    table.string('plxwbnaljd');
    table.boolean('rkwwksloiq');
    table.bigInteger('wkkdmpjvdd');
    table.boolean('spebfexcgp');
    table.boolean('jxshwvhmqy');
    table.text('imuqmtcslg');
  });
  await knex.schema.alterTable('pvcpofsong', function(table) {
    table.timestamp('zqupgoxoyf');
    table.integer('xskobdgxud');
    table.string('pyaorktzmt');
  });
  await knex.schema.alterTable('mydituifss', function(table) {
    table.string('nxvdioguur');
    table.integer('vknwashmkr');
    table.timestamp('xdtuiylimk');
  });
  await knex.schema.alterTable('dnpfxllrxa', function(table) {
    table.timestamp('izjxewqjxe');
    table.bigInteger('tbmricgsuj');
    table.float('tdbfubysci');
    table.bigInteger('pyoxerlpyj');
  });
  await knex.schema.alterTable('iiqlgdjjdz', function(table) {
    table.string('hebqhfdrpy');
    table.text('nwewpfusql');
    table.integer('pqivwcrabu');
    table.timestamp('cmjurcstcq');
    table.float('ucqthmzlpx');
    table.bigInteger('rabhukfhqc');
    table.json('dkrhjgepmb');
    table.json('ziabnchswa');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};