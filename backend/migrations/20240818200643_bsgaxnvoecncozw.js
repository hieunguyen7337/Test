'use strict';

/**
 * Migration: 20240818200643_bsgaxnvoecncozw
 * Description: Create table
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('wismdznrxu', function(table) {
    table.integer('tdewiacshq');
    table.string('sccilqvpwo');
    table.timestamp('ugnoqpekxq');
    table.bigInteger('lukzlpodaf');
  });
  await knex.schema.alterTable('pkscirihhg', function(table) {
    table.integer('baxjcibnft');
    table.text('jkqseiqajr');
    table.bigInteger('lkmzxyuajz');
    table.timestamp('yuzqclsjcq');
    table.integer('exfgasdusc');
    table.string('ijigfawppa');
    table.float('mfzddguucs');
    table.string('itktdwatyt');
  });
  await knex.schema.alterTable('efjtrvrnbd', function(table) {
    table.text('ychmjaxuqd');
    table.float('wakbxzvjvz');
    table.text('oyjvhofaov');
    table.bigInteger('xvxtgsywkt');
  });
  await knex.schema.alterTable('nzevczmnol', function(table) {
    table.json('msdwniaptf');
    table.boolean('jewklvfzfr');
    table.integer('njjtyueogn');
    table.string('ajqzbdnwuw');
    table.text('iwrcxfxjqv');
    table.boolean('fssgafdfbi');
    table.float('nddhwilzcr');
    table.json('njuuhpkbfi');
  });
  await knex.schema.alterTable('aneetobfav', function(table) {
    table.text('cogdpaxqaa');
    table.string('sqrtxplzqn');
    table.json('hzzmfdsycb');
    table.integer('dwbtczcitn');
    table.bigInteger('pqoyzukudp');
    table.timestamp('ymqaqjhnnw');
    table.string('brbuyuvjbl');
  });
  await knex.schema.alterTable('wznsvufvqv', function(table) {
    table.string('bgqeufbdtv');
    table.bigInteger('fukbozsmow');
    table.integer('calndzfgll');
    table.json('gjsnfncsub');
    table.timestamp('xukeovksia');
    table.timestamp('nomzeyvdld');
    table.timestamp('xiaoidkqqe');
    table.string('uykgrtcbns');
    table.integer('qlhnxehlne');
    table.text('ascocdwraa');
  });
  await knex.schema.alterTable('mmarsmysdl', function(table) {
    table.text('xgbgjpqkgo');
    table.string('bapsamhrwa');
    table.bigInteger('isdgqmbddd');
    table.float('ectixyzwrq');
    table.float('kqllphebex');
    table.json('cazyjvjenb');
    table.text('rzlcpwzitu');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};