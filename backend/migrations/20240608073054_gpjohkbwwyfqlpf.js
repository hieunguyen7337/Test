'use strict';

/**
 * Migration: 20240608073054_gpjohkbwwyfqlpf
 * Description: Add column
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('cylzjgfepn', function(table) {
    table.integer('jgzhjxzkzd');
    table.float('bfjqaatzuz');
    table.text('fncrlevdtf');
    table.integer('masjztzdxj');
    table.timestamp('gnjffvcrdb');
    table.string('ijvnjhxoga');
    table.string('lqdbwyljsh');
    table.string('sxvaevqayy');
    table.string('rsegkrnckt');
    table.json('nbyxopzygz');
  });
  await knex.schema.alterTable('bvbselfisw', function(table) {
    table.integer('wbfacxmlqw');
    table.json('oeyztsbrtn');
    table.float('acdedhqlrd');
    table.bigInteger('topkqlstoe');
    table.integer('dkewgrsvep');
    table.bigInteger('hhnmvabsrp');
    table.timestamp('pszbmhvekv');
    table.json('zpadqzyxab');
    table.string('croepksizw');
    table.boolean('gfazbofsun');
  });
  await knex.schema.alterTable('teatsqjwqv', function(table) {
    table.integer('kwmywyoddg');
    table.boolean('rpocfcqjfc');
    table.json('wmixqxauth');
  });
  await knex.schema.alterTable('dimmrqqjip', function(table) {
    table.boolean('hvkeuchabk');
    table.integer('sijpgksclk');
    table.json('haaumnsgxy');
    table.timestamp('smifjckrlf');
    table.string('ntejwmousa');
    table.text('adtgcbxsvc');
    table.boolean('cfngxfrhxf');
    table.timestamp('iuaytcnkqt');
  });
  await knex.schema.alterTable('mgazclegom', function(table) {
    table.integer('uqtptmwfkp');
    table.string('leoytbsxjq');
    table.string('crjjivgept');
  });
  await knex.schema.alterTable('umddngrlhg', function(table) {
    table.float('vdtiujcnko');
    table.timestamp('myzwzzjgsu');
    table.text('exetttyxhh');
    table.text('kqhbfkdzls');
    table.integer('tyosaqkcbh');
    table.float('wpanfeqdwv');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};