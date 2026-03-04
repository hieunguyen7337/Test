'use strict';

/**
 * Migration: 20240324105252_kfzfxnngdmnpzgv
 * Description: Drop table
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('rmwhgsifpj', function(table) {
    table.float('gpmxdhyxdd');
    table.timestamp('mpyfykvqon');
    table.integer('lkjjsfcbjz');
    table.float('wtbppyubmh');
  });
  await knex.schema.alterTable('fkclntsslw', function(table) {
    table.text('buiwdigxeg');
    table.integer('iiqwxbdktl');
    table.timestamp('ttnchuqbae');
    table.integer('vztblirtsr');
    table.bigInteger('mbgdtqmxzr');
    table.timestamp('ngzzewfrvl');
    table.string('ksnfzfqycq');
    table.string('xekmgxwyew');
    table.string('wkqntypgze');
  });
  await knex.schema.alterTable('axcqbiukqw', function(table) {
    table.float('wozlpvscxe');
    table.float('krfnkvpmis');
    table.float('uvfdvgbdao');
    table.string('kkxjljljvv');
    table.float('ofxyfllaca');
  });
  await knex.schema.alterTable('kyblrvrpoy', function(table) {
    table.boolean('mwcqxjzdmu');
    table.bigInteger('yffywcbpco');
    table.bigInteger('zkfrmqmssk');
    table.integer('gnvelevrfu');
  });
  await knex.schema.alterTable('duzfwdikfs', function(table) {
    table.boolean('kackmbqofd');
    table.timestamp('khihkpiuzr');
    table.bigInteger('asfslmnfmq');
    table.integer('wsursvvebx');
  });
  await knex.schema.alterTable('aupbjdvjqm', function(table) {
    table.timestamp('jamsmhwlzk');
    table.text('yxdaihxncb');
    table.timestamp('pkssaknvqn');
  });
  await knex.schema.alterTable('zdlnuaogpc', function(table) {
    table.json('vvpssddhhx');
    table.integer('aqhpmfmqos');
    table.string('igiawaquox');
    table.float('zbgxshugya');
  });
  await knex.schema.alterTable('msxcevbhkq', function(table) {
    table.text('crazmdbuor');
    table.float('ewhcxwwjel');
    table.text('qtipbhqqrw');
    table.boolean('zjamiynzcq');
  });
  await knex.schema.alterTable('ohsjzdmyri', function(table) {
    table.json('sehjxtqhae');
    table.string('yfbhvxtpux');
    table.bigInteger('nemgaajxau');
    table.json('lgfhpxoevg');
  });
  await knex.schema.alterTable('xmaimhkqfo', function(table) {
    table.boolean('shozhnmddk');
    table.float('osmraaevie');
    table.timestamp('wyuhkvdnmw');
    table.json('xkivogyduz');
    table.timestamp('rvfxjejtuy');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};