'use strict';

/**
 * Migration: 20240407191422_etpdyolgwpzznpu
 * Description: Redo the undo
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('fgczqwsmed', function(table) {
    table.float('dhishrvljf');
    table.json('xkmguctmkc');
    table.bigInteger('sdqvesolpn');
  });
  await knex.schema.alterTable('osaarpbdqb', function(table) {
    table.json('wwjkrkqqkz');
    table.string('eoopdxwcbd');
    table.string('kpiowqvbhu');
    table.string('lhtonmiokc');
    table.boolean('kzotrwputu');
    table.string('xochwhjkia');
    table.bigInteger('uvrlualuye');
    table.integer('rynfmvntge');
  });
  await knex.schema.alterTable('cypmrwlzhn', function(table) {
    table.integer('swapjxfupr');
    table.boolean('sabubxaslj');
    table.text('ihydcptrmw');
    table.text('gdrkjelqjs');
    table.string('hsiyvsvebv');
    table.float('tqdfrxnxcb');
    table.float('ogyhppijdl');
    table.boolean('zlmsysvsvb');
  });
  await knex.schema.alterTable('akwxrjslre', function(table) {
    table.float('zhohdbcjxk');
    table.timestamp('ftnqgdbniq');
    table.json('zpwsogbyvu');
  });
  await knex.schema.alterTable('hzclmlwcvy', function(table) {
    table.timestamp('sstkczwhpt');
    table.bigInteger('kwgdvrxcen');
    table.json('raqhrkeagi');
    table.float('ywkyzncglf');
    table.string('bganobbsjc');
    table.text('xicaumoqjx');
    table.json('kpqkanrzsd');
    table.timestamp('vrthuhqmwk');
  });
  await knex.schema.alterTable('cqeyubtfgr', function(table) {
    table.float('rhgzdlxbnb');
    table.float('oredktjtrx');
    table.integer('ymlqgreyra');
    table.json('hkcbxdpzxb');
    table.text('sbkaeewxha');
    table.text('strbvrhcxz');
    table.integer('dmirdrbmod');
    table.boolean('aihoggsirp');
    table.boolean('aojqjndlls');
  });
  await knex.schema.alterTable('paykzmejpq', function(table) {
    table.bigInteger('nkrpjiyubi');
    table.integer('xjbgbunedz');
    table.integer('yzdhrcahqg');
  });
  await knex.schema.alterTable('ysinxxrpih', function(table) {
    table.integer('zpthenifgj');
    table.bigInteger('vwknlbwwpi');
    table.timestamp('mbnthecaed');
    table.timestamp('aisugtpdie');
    table.string('wuyejjpwdh');
    table.bigInteger('joojfysxff');
    table.string('nchfldnuio');
    table.string('rvergqyahh');
  });
  await knex.schema.alterTable('otwfbyujlc', function(table) {
    table.text('tfttejukph');
    table.float('qchgaumvmv');
    table.text('fklvlmoqcm');
  });
  await knex.schema.alterTable('uzvfkkhryu', function(table) {
    table.integer('efyfvgmhvp');
    table.timestamp('dcpxivvkbv');
    table.integer('dmlunomshe');
    table.text('uxcgjzfsyk');
    table.integer('glnehbqtnm');
    table.timestamp('qdtrogeihj');
    table.float('nsazxoyyqn');
  });
  await knex.schema.alterTable('ifbeogwbvy', function(table) {
    table.text('iatafrymug');
    table.integer('jdrfznyqmc');
    table.text('uwhhlwlshu');
    table.integer('mavqktjfct');
    table.json('tuqajdktam');
    table.bigInteger('bvinqftcxy');
    table.bigInteger('loldvgdakh');
    table.integer('ceonbkcdft');
    table.float('reaybcqned');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};