'use strict';

/**
 * Migration: 20241203054026_zumtncbzuhskbpi
 * Description: Remove column
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('ngstkqwqdx', function(table) {
    table.integer('noahhliozo');
    table.integer('vjbxgnoxxp');
    table.integer('zeefhkrlhd');
    table.json('vmmvyyqatr');
  });
  await knex.schema.alterTable('wncxskchaq', function(table) {
    table.string('prgxquikkd');
    table.integer('stftnqkjjz');
    table.float('xqotstruvy');
    table.float('bvtfkrnyhj');
    table.float('ealzgtmukf');
    table.integer('oitgdctvyk');
    table.text('glwufhjsye');
    table.timestamp('luewbbzcfu');
    table.json('onsopgamds');
    table.string('msonjbrern');
  });
  await knex.schema.alterTable('pzirhdleoq', function(table) {
    table.boolean('gficdilfkl');
    table.integer('qwuwldzcjt');
    table.string('tzsbalyvzz');
    table.text('lyehebsxmz');
    table.boolean('dnhaohnach');
    table.bigInteger('vlrwwcbhpw');
    table.text('qnzuktzojt');
    table.float('jjmfrtdenh');
    table.bigInteger('ipvdavgwcv');
  });
  await knex.schema.alterTable('tyipmnvpct', function(table) {
    table.boolean('wuhrlofwhj');
    table.timestamp('mkczmpquxa');
    table.boolean('fbvaakmkzc');
    table.json('uijtecglpg');
    table.boolean('nyeqgxxwkv');
    table.timestamp('yvsbojdhvs');
    table.bigInteger('zvkrvqinxb');
  });
  await knex.schema.alterTable('fvfxrslhum', function(table) {
    table.text('dqciqmlrog');
    table.bigInteger('qgfekmulcq');
    table.json('nmsurheqki');
    table.text('oikdqalyzq');
    table.timestamp('uupklbkzwz');
    table.string('vmieazjndt');
    table.integer('vpeoxclgxj');
    table.string('xzecsoqewn');
  });
  await knex.schema.alterTable('nnhosggefs', function(table) {
    table.bigInteger('knruyxngbd');
    table.boolean('azhydgcpyq');
    table.string('cknguslvsn');
    table.timestamp('gmsvitixuy');
    table.text('fxpbzcyzaf');
  });
  await knex.schema.alterTable('qyxluwzsap', function(table) {
    table.string('kfmihkxebv');
    table.json('rbdwdswixl');
    table.bigInteger('wnbqhnkilk');
    table.timestamp('bvqgvkfjez');
    table.json('eqhhpvcmsf');
    table.integer('pixuqyimzm');
    table.text('fgmwaursla');
    table.boolean('eoskpzbegl');
    table.timestamp('stgofyrwvn');
    table.json('ebtrebqeul');
  });
  await knex.schema.alterTable('zfebpsihvi', function(table) {
    table.timestamp('qrmlznsbck');
    table.boolean('xcssngxgbf');
    table.boolean('igxayeybfa');
    table.timestamp('msbzlvagyp');
    table.text('gcvlrglkxg');
    table.timestamp('ayldabpkbs');
    table.bigInteger('odbyasjixa');
    table.timestamp('gwegcjpqce');
    table.bigInteger('zslqsxurcg');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};