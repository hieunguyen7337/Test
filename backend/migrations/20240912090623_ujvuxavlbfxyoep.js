'use strict';

/**
 * Migration: 20240912090623_ujvuxavlbfxyoep
 * Description: Please work this time
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('ctjbgkbqlf', function(table) {
    table.string('lqeykwvwvm');
    table.boolean('fpxzpxaghb');
    table.bigInteger('zoucvdwvpk');
    table.float('qbplczkxle');
    table.boolean('avlrlotedy');
    table.integer('xsnxuiyvmx');
    table.boolean('nmoeqzkony');
    table.float('lxsgmqkzvu');
    table.timestamp('wacudkstky');
  });
  await knex.schema.alterTable('qiipngifpr', function(table) {
    table.text('fbowzqdynj');
    table.timestamp('zysmfofihy');
    table.integer('wtdfgishaw');
    table.bigInteger('luqgoilabk');
    table.boolean('ywfsnzcthe');
    table.float('jitzdcdguf');
    table.bigInteger('tzjtqykcug');
  });
  await knex.schema.alterTable('mbowbiixgd', function(table) {
    table.integer('tqwulhoilh');
    table.boolean('mlbvlfkqgt');
    table.timestamp('abtlvzfdez');
    table.string('yzxibnzeaw');
  });
  await knex.schema.alterTable('xmpfinlmzp', function(table) {
    table.bigInteger('japzyjyjww');
    table.timestamp('hqmmflxlcv');
    table.json('wgffwssnlz');
    table.text('gwxhgycgsz');
    table.integer('asssmmhnmi');
    table.integer('hcknkupzou');
    table.bigInteger('ckjwqbixco');
    table.integer('tsgszigyxd');
    table.json('uiuwjcbzbg');
  });
  await knex.schema.alterTable('dctqedpuxy', function(table) {
    table.json('wkbrbikgzk');
    table.float('libkrjdueb');
    table.timestamp('kcooxuicwb');
    table.string('yyrkhqkrhb');
    table.bigInteger('jngzswuvdq');
    table.string('oawbxzjops');
    table.integer('vpwimaatzt');
    table.bigInteger('ntljmhafui');
    table.timestamp('glxtxyzojo');
  });
  await knex.schema.alterTable('nvdwxflipn', function(table) {
    table.float('saiguxdari');
    table.integer('nbakfniafu');
    table.json('hobloynksw');
    table.bigInteger('txrpddjsgr');
    table.json('ioxdvdbwlv');
  });
  await knex.schema.alterTable('hqvpazzydh', function(table) {
    table.string('atitvjbclk');
    table.string('epqmkkvmqf');
    table.integer('xorgaffcsj');
    table.boolean('rxmjyvzhyo');
    table.integer('jlsfbupvwg');
    table.bigInteger('eniguounty');
    table.bigInteger('hpcpazzwoe');
    table.float('ldyajjbzbd');
    table.integer('lacpmguhcz');
    table.text('lxtuwcfzjv');
  });
  await knex.schema.alterTable('lcluklkhaf', function(table) {
    table.integer('nbjbrdrfli');
    table.integer('ppnevtvycy');
    table.float('akceedawfd');
    table.text('eorzgtkibz');
    table.integer('lssujvvukw');
    table.float('thfazdkxpr');
  });
  await knex.schema.alterTable('wijntqejcg', function(table) {
    table.bigInteger('xtaqvpnltl');
    table.float('oqrnrmfixk');
    table.integer('vgbzfgxyci');
    table.text('jxkcpxbkra');
    table.float('ciutjebwkm');
    table.string('mbgsrgfrya');
    table.boolean('rqkowxlgyo');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};