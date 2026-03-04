'use strict';

/**
 * Migration: 20240125080042_vvfnsebdslovomr
 * Description: Add column
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('ralozdmzht', function(table) {
    table.text('vctoqrkcfu');
    table.text('yfzeidgqay');
    table.float('yeeeimskmw');
  });
  await knex.schema.alterTable('jqwlldywpj', function(table) {
    table.bigInteger('zeooubzpjr');
    table.float('nmfvftybxj');
    table.timestamp('iedsqxjnep');
    table.bigInteger('jbtuzipbsw');
    table.boolean('evsdfryyuf');
    table.float('jsnvrqfffg');
    table.string('lsleqdhrlw');
    table.string('dsmyoissxr');
    table.json('crlctkzcqy');
    table.boolean('pcdgbdpsmv');
  });
  await knex.schema.alterTable('qvjaflntvz', function(table) {
    table.boolean('snmhwxkias');
    table.float('fmbtlgjpbb');
    table.bigInteger('jxvmidglab');
    table.string('mamusripkx');
    table.float('nspaechszs');
    table.bigInteger('ugjhphonfv');
    table.boolean('gjepbtxqyd');
  });
  await knex.schema.alterTable('wrhxjmqpce', function(table) {
    table.boolean('xjlqgsffkb');
    table.json('ossajlxdmf');
    table.float('wgefupfxnj');
    table.timestamp('wzjmdgzzyf');
  });
  await knex.schema.alterTable('xfickxyuli', function(table) {
    table.string('xfscdvzvwz');
    table.text('qrneemqaxa');
    table.integer('cqeffreqbg');
    table.boolean('ygdgqhgcpl');
    table.string('zsaduubjse');
    table.json('mvqeobopci');
    table.json('gyoiujcbaj');
    table.string('jqwgghqsuk');
    table.json('ueidnyrlfj');
  });
  await knex.schema.alterTable('gpnepqbrhw', function(table) {
    table.float('wntoapmnbl');
    table.string('yfivfsvjbq');
    table.string('demctxheug');
  });
  await knex.schema.alterTable('jkzhevhunk', function(table) {
    table.bigInteger('lylbzvrqwz');
    table.string('tbwlfssnpk');
    table.timestamp('vabdxqusyy');
    table.integer('sxxritjfmk');
    table.json('xhsuoreicq');
    table.boolean('wziawqzmwx');
  });
  await knex.schema.alterTable('saybyzhxal', function(table) {
    table.string('chxgdmwumt');
    table.boolean('bpfvcmnmtq');
    table.float('wzaegrctpv');
    table.timestamp('dxckjztsxa');
    table.text('banpychcaq');
    table.timestamp('wczqduawaq');
    table.string('viddjuemth');
    table.boolean('xjjwdnazwy');
    table.json('vpvrdigtla');
    table.bigInteger('bzwtjldbuz');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};