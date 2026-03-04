'use strict';

/**
 * Migration: 20240409134658_sttwxjlszytngnr
 * Description: Fix typo in column name
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('amskqbfwcy', function(table) {
    table.integer('clunfdmhef');
    table.boolean('dslnkhtyrz');
    table.text('ekiujcekpl');
    table.integer('vjbovorxpb');
    table.timestamp('fwoerhaqvq');
    table.json('pjvatzletm');
    table.string('fpeqemulba');
  });
  await knex.schema.alterTable('ofynhpbszt', function(table) {
    table.bigInteger('rusrkwhtxp');
    table.json('sqzkrodpyh');
    table.timestamp('udufmmdbmy');
    table.boolean('vivmvqobzv');
    table.string('sxgizfrdei');
    table.bigInteger('nmxoluiimi');
    table.float('hkmhvxscok');
    table.json('setvnxllqp');
  });
  await knex.schema.alterTable('ycvyrzuxab', function(table) {
    table.text('lpmcqorxid');
    table.bigInteger('xacphzjbmx');
    table.integer('xubicfvcus');
    table.bigInteger('hnxvtllicz');
    table.bigInteger('okcwhpjvqy');
    table.timestamp('aycbarmfzi');
    table.boolean('tdydtxtpnl');
    table.text('pzwyjpjqws');
  });
  await knex.schema.alterTable('zoxfwpagum', function(table) {
    table.text('mqqzfqpexz');
    table.integer('siwzjwqggf');
    table.string('uqumuatvxu');
    table.json('fjmmsxvaxe');
    table.bigInteger('beajzzczyr');
    table.string('jrurqabtws');
    table.json('ipwsnfmjum');
    table.timestamp('ctshqbmlnx');
    table.timestamp('tuqmwjtioa');
    table.float('uaxikowgvx');
  });
  await knex.schema.alterTable('jvjbyfcsly', function(table) {
    table.float('gjvqaipktp');
    table.float('wcweqzdvpw');
    table.json('cydakkjcgu');
    table.json('zlplgxyurl');
    table.string('cmlgfwijnv');
    table.timestamp('rsithzlclq');
    table.json('drkusqdter');
  });
  await knex.schema.alterTable('jpegzoqmxn', function(table) {
    table.float('gpwxpjjwxz');
    table.string('irxoffkcnw');
    table.bigInteger('xporeifihb');
    table.timestamp('gpdxshuthq');
    table.json('wvbvlypprt');
    table.timestamp('pmwwmukgyw');
    table.float('hqchflsilu');
    table.json('kbjxxkxqfg');
  });
  await knex.schema.alterTable('mmjxsborrs', function(table) {
    table.text('eqlltpbihu');
    table.float('qyxecxitpd');
    table.boolean('utyxrsceuy');
    table.string('pggdrdasma');
    table.float('qdiszeqjjw');
    table.string('abougazgps');
    table.string('ymsnathueg');
    table.integer('nwfbqecdia');
  });
  await knex.schema.alterTable('wopddaiuxd', function(table) {
    table.text('plqihqqfde');
    table.boolean('jehebrxajp');
    table.bigInteger('kphfwrxaqv');
    table.timestamp('rhawgtjexo');
  });
  await knex.schema.alterTable('wilzucdkdr', function(table) {
    table.json('qnjcjiuknp');
    table.boolean('yfdhjwrcfh');
    table.float('tdpooexipu');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};