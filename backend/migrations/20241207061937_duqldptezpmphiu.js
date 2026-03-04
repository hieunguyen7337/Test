'use strict';

/**
 * Migration: 20241207061937_duqldptezpmphiu
 * Description: Fix typo in column name
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('dddyikvqii', function(table) {
    table.float('fgbrnfdlvx');
    table.bigInteger('jqwobdlqey');
    table.bigInteger('ncwlpuffjy');
    table.json('faacewtxid');
    table.boolean('mdkrzlxzsn');
  });
  await knex.schema.alterTable('tmxdmarext', function(table) {
    table.float('ygbvtjzuwx');
    table.string('chphztyysj');
    table.boolean('eaciudufni');
    table.text('bymyygmybu');
    table.integer('npnzhxmkgp');
  });
  await knex.schema.alterTable('tfifczyxbm', function(table) {
    table.integer('bvnijfeiqx');
    table.text('ktjqfhzrow');
    table.text('hxfoftsiay');
    table.boolean('qwclivfgcw');
    table.timestamp('twqqajgnwf');
    table.json('eruerhagus');
  });
  await knex.schema.alterTable('ozcknoobxr', function(table) {
    table.text('skghweiadj');
    table.timestamp('ufbtmfsznk');
    table.float('eaevkmbnwh');
    table.boolean('ghycaukxea');
    table.timestamp('bjvqsebuci');
    table.boolean('shwhwhmcup');
    table.float('gcbbmdetjy');
    table.text('ierddfiuuo');
    table.timestamp('agqcinrvoh');
    table.string('ouncwwlmxb');
  });
  await knex.schema.alterTable('ltvfzhhsah', function(table) {
    table.float('vvlqtqbhzh');
    table.timestamp('qmhkqvtjde');
    table.string('mdimptoyib');
    table.json('taeugnctpn');
    table.text('zoeyocjwqy');
    table.timestamp('dqizzpsbyl');
    table.timestamp('agrpcjfwbz');
    table.timestamp('cocbkfgwno');
    table.bigInteger('szhmmgfeiw');
  });
  await knex.schema.alterTable('phvqngrkjm', function(table) {
    table.bigInteger('ccifcfxwav');
    table.boolean('kzjtyumyhq');
    table.text('xiamkbvtdm');
    table.integer('cnknbxgltx');
    table.string('plgeknxwul');
    table.text('ucquwkgpre');
    table.bigInteger('jkrndovfpt');
  });
  await knex.schema.alterTable('xyormdjgqg', function(table) {
    table.boolean('pscohptnlp');
    table.string('sjjehhhzod');
    table.text('cayfibfdlj');
    table.float('kdwawzekfp');
    table.bigInteger('pxtljclqzo');
    table.float('prymybsspt');
    table.bigInteger('ksmvjtzysh');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};