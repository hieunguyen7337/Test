'use strict';

/**
 * Migration: 20241216204107_mypuunweljxdfse
 * Description: Please work this time
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('tgqeoyslpy', function(table) {
    table.integer('eyjvgzxosc');
    table.text('owoywdnipa');
    table.text('hxhokczdpc');
    table.boolean('ewhjcgkuqp');
    table.timestamp('qldiidibor');
    table.text('plsuuonhns');
    table.string('kpgzuidcoc');
    table.boolean('wsbxntpmfb');
    table.bigInteger('jrdzsxhxls');
  });
  await knex.schema.alterTable('pogtnxcwsg', function(table) {
    table.string('zosldgnsfc');
    table.json('buxuuopodr');
    table.text('eumilcqaev');
    table.string('wssfjvtzlm');
    table.float('tuytatfzjq');
    table.bigInteger('oqodkhojvl');
    table.text('sphffkpfyo');
    table.json('ndxwpkarnk');
    table.timestamp('xauiyybbcg');
    table.text('bfvkwgpgwa');
  });
  await knex.schema.alterTable('aojfitynsn', function(table) {
    table.json('wzezlrcwar');
    table.timestamp('xjoqkyupmp');
    table.string('pgezqtjodj');
    table.boolean('kbhpgrddvr');
  });
  await knex.schema.alterTable('rbhghtmsiw', function(table) {
    table.string('trrfndrzcn');
    table.integer('gdczavfrrv');
    table.bigInteger('axowidhqsk');
    table.string('zehtzqdkaw');
    table.float('fwcrnubhjs');
    table.json('ltqcxqadre');
  });
  await knex.schema.alterTable('oagenusski', function(table) {
    table.json('ukvwahlnej');
    table.text('vhaxubjhoe');
    table.integer('rytlrhbewm');
    table.integer('icgrwrlvvq');
    table.text('suuswseeah');
    table.boolean('wovkptdusw');
    table.boolean('hmwypffxnd');
  });
  await knex.schema.alterTable('vhziefkyxr', function(table) {
    table.timestamp('jbpysjlsgh');
    table.bigInteger('tcexzagusf');
    table.float('fxyctnfjcd');
    table.string('kkarrvuedd');
    table.float('xcgpvxcuds');
    table.bigInteger('sreghqhkwq');
    table.float('mwoxaapjel');
    table.boolean('abdesbkzfb');
  });
  await knex.schema.alterTable('wmjlgrxaxc', function(table) {
    table.bigInteger('cwsjdirmhf');
    table.boolean('zwxqlmmdcn');
    table.integer('mneajtbrxa');
    table.string('nhynbytudn');
    table.boolean('iydspxbmqz');
    table.boolean('muiajbfoqf');
    table.string('lovmnmhrno');
    table.boolean('ntspbuwrqy');
    table.text('obsunjrjst');
    table.json('nehbjofzcr');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};