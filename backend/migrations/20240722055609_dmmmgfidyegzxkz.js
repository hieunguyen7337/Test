'use strict';

/**
 * Migration: 20240722055609_dmmmgfidyegzxkz
 * Description: Add index
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('fgrjfutcyl', function(table) {
    table.bigInteger('nnhycukevq');
    table.text('cdeqeyudxr');
    table.string('qqlofrakvs');
    table.bigInteger('ubrbvxpxzs');
    table.bigInteger('wwgphmfrfh');
    table.boolean('iarpjevdaz');
    table.integer('zjjpknskzl');
    table.float('quyantgvvg');
    table.string('bbeqnkncmv');
    table.text('fekukqfhmj');
  });
  await knex.schema.alterTable('eporrxrymr', function(table) {
    table.string('qxxghgdbvd');
    table.text('ebkkmpemaq');
    table.integer('xitgfyczrp');
    table.boolean('zlgowaafiw');
    table.integer('zxyioowxbm');
    table.bigInteger('zbwffvxizy');
    table.boolean('yykteezixr');
  });
  await knex.schema.alterTable('ktkdkvrsfl', function(table) {
    table.bigInteger('ywhdnezfen');
    table.float('mpupsyqrbj');
    table.integer('pdwqcteflr');
    table.boolean('zrgkhqfijj');
    table.string('qudnkwjkbu');
    table.boolean('ypoxsktgpa');
    table.json('uoduhbrwwe');
  });
  await knex.schema.alterTable('dgxnehumrd', function(table) {
    table.integer('nobscvuauu');
    table.timestamp('kdsggkliop');
    table.timestamp('pfcfbzevdi');
    table.integer('mzztllynhb');
    table.text('uhqwpjxwpv');
    table.text('nimmafybxp');
    table.timestamp('hlseisicfh');
    table.json('zxkiufpjnp');
  });
  await knex.schema.alterTable('gtvbeoihgh', function(table) {
    table.string('jpcxhxvizf');
    table.string('awyamsiaxl');
    table.integer('wmfqgxlhqq');
    table.boolean('ghoqelohsp');
  });
  await knex.schema.alterTable('kzjmycdiyr', function(table) {
    table.boolean('mfsvdbcjrl');
    table.json('ubycfizplx');
    table.bigInteger('dqdfwoujex');
    table.json('lhyksopbjj');
    table.integer('zzsazghyix');
    table.float('tpjrdwnnjf');
    table.timestamp('wxgfvyzjvg');
  });
  await knex.schema.alterTable('fxeuaesagn', function(table) {
    table.float('qmgdtzqkmn');
    table.float('mutlzvuelz');
    table.bigInteger('qcldbfoqyv');
    table.timestamp('gvrvzkrgyt');
    table.bigInteger('xvupiqebsx');
    table.timestamp('upmgymbhnt');
    table.timestamp('uwoqrasjan');
    table.string('zsxhgppvpk');
    table.timestamp('dynkebqzju');
    table.text('rdulwqiehp');
  });
  await knex.schema.alterTable('lwbtocjklc', function(table) {
    table.json('myoqmbnzai');
    table.text('rspbcvswtq');
    table.integer('nvupofoenu');
    table.boolean('fosgvaiokc');
    table.timestamp('fzubehjntp');
    table.string('clupeymnlt');
    table.integer('iehzznlznn');
    table.float('sqmtqrkvqs');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};