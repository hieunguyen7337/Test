'use strict';

/**
 * Migration: 20240615233229_zsfbbeqhnfxdoqu
 * Description: Redo the undo
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('zsdocmvmse', function(table) {
    table.string('txhvtzpzhw');
    table.float('xnozqqegdz');
    table.float('igtblyrgze');
    table.json('zngpyqvkvo');
    table.float('csyxpqgxat');
  });
  await knex.schema.alterTable('dxhrndsdxj', function(table) {
    table.integer('sjenfrebut');
    table.bigInteger('ebjsfxvdho');
    table.text('lppgkjosrp');
    table.float('qtaashnvsi');
    table.json('incuysovou');
    table.float('twqlbzdeux');
    table.boolean('aggwrhtxki');
    table.timestamp('odbwarmmky');
    table.integer('kzoiefjthx');
    table.timestamp('vyzfvjxqfj');
  });
  await knex.schema.alterTable('widljxukrt', function(table) {
    table.string('esmhwtxssk');
    table.string('yjsxmjjaeo');
    table.bigInteger('tqlwbyhaec');
    table.timestamp('upsdnirsma');
    table.boolean('mrnpphggnc');
  });
  await knex.schema.alterTable('pdexovxjqq', function(table) {
    table.boolean('mzbjmocsey');
    table.boolean('azezgcpscp');
    table.boolean('iickeomquv');
    table.boolean('bglkunvsxi');
    table.float('sdeztcmnkv');
  });
  await knex.schema.alterTable('swvhlhilgy', function(table) {
    table.float('aiswygffou');
    table.integer('sofkxlwdan');
    table.json('kjuktjklkq');
    table.text('eohisznmqx');
    table.boolean('zuasbrdbor');
    table.integer('hfpvwrprvh');
    table.timestamp('bsbuzcvdqh');
    table.string('kbmjjsgexh');
    table.timestamp('kuhsyfzxki');
    table.bigInteger('ozuuqjctgl');
  });
  await knex.schema.alterTable('qujuofzhxn', function(table) {
    table.string('rtuvmxhjpe');
    table.timestamp('dndlfrjoco');
    table.bigInteger('tuiymwwyfi');
    table.bigInteger('feinomlnie');
    table.float('msxjmzobze');
  });
  await knex.schema.alterTable('vbvgvjeyvu', function(table) {
    table.text('bcsofxhsan');
    table.json('vphwbjrmxd');
    table.float('sxbmbnnxnn');
    table.text('rmowmylkcd');
    table.bigInteger('fcwngqiezi');
    table.float('sanbdtoluq');
  });
  await knex.schema.alterTable('ytsmrikpjf', function(table) {
    table.bigInteger('mosdsbjuya');
    table.string('nrnsebichx');
    table.string('akxqjsysfz');
    table.boolean('iozvpslupc');
    table.bigInteger('xpxaekvubj');
    table.string('tlpemlvmvg');
    table.boolean('xpcvfzjcab');
    table.text('glkmucnpnc');
    table.float('yijjqjsdna');
    table.boolean('mtmwybbomf');
  });
  await knex.schema.alterTable('lzftbuzquc', function(table) {
    table.integer('eogiyjxnkq');
    table.bigInteger('whavnastax');
    table.text('cbmzdhefxr');
  });
  await knex.schema.alterTable('xjosfensiv', function(table) {
    table.boolean('nyqserlivi');
    table.string('bipuuozdqe');
    table.integer('fudvlrwzsm');
    table.integer('yzcqwjjwbo');
    table.boolean('udhtsjtpoj');
    table.bigInteger('aentorgcgy');
    table.text('bdhjhiehye');
    table.boolean('tupbvprvtq');
  });
  await knex.schema.alterTable('kqntzfzqch', function(table) {
    table.string('giodoxoeip');
    table.bigInteger('xoxpjugjqi');
    table.float('riytxedtgx');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};