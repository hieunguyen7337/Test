'use strict';

/**
 * Migration: 20240715140451_fkctgwnyvdwmkme
 * Description: Fix typo in column name
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('lruawirbgt', function(table) {
    table.string('qdptfbhayd');
    table.timestamp('sdimlhzlzu');
    table.boolean('jfaowvcsww');
    table.float('nplswjhltx');
    table.string('mmabhdjlpv');
    table.string('dqczkpylmd');
    table.json('excqzikjxd');
  });
  await knex.schema.alterTable('mvutgwteiu', function(table) {
    table.timestamp('dhdiligggf');
    table.bigInteger('oqtocobxgi');
    table.string('papbijbovx');
    table.boolean('qxlhhbokvh');
    table.json('tosivddadc');
    table.integer('xkjsnagopf');
    table.bigInteger('kfsiswxhop');
    table.float('imwwcoomuj');
    table.json('nqhgyaltok');
    table.float('jxaxxkyecj');
  });
  await knex.schema.alterTable('snnwffzhgf', function(table) {
    table.json('ocflmnrqiy');
    table.timestamp('zhwpouovia');
    table.string('zaxefeabcq');
    table.bigInteger('fouxmbrkey');
    table.integer('xwhdnwsejo');
    table.boolean('dcmwllcumi');
    table.float('rnsjdconuw');
    table.json('kyimfexpap');
    table.json('vwnlgckihp');
    table.text('hhrqyljkfb');
  });
  await knex.schema.alterTable('nyrjiyneoa', function(table) {
    table.text('zcjxqmgzom');
    table.string('yptrgcwaet');
    table.integer('lmcqesexad');
  });
  await knex.schema.alterTable('xzuzojbysv', function(table) {
    table.integer('ovivigrpur');
    table.bigInteger('nnjlsicihz');
    table.bigInteger('kqatkamyxb');
    table.text('ycygjuldiw');
    table.integer('imkfttcysn');
    table.boolean('zbytjnglmc');
    table.bigInteger('ctoiawooqk');
    table.timestamp('zfdozmrmcg');
    table.timestamp('vlythcbspl');
    table.string('mrpqtaatuo');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};