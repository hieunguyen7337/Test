'use strict';

/**
 * Migration: 20240525014337_gqjodjpceckvkvu
 * Description: Add index
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('etcrpjxozt', function(table) {
    table.float('fmdiocbvzx');
    table.bigInteger('fyiuljgyrl');
    table.timestamp('lgxjcoynzs');
    table.integer('zndwzsitiy');
  });
  await knex.schema.alterTable('nfhrtaoycv', function(table) {
    table.text('sqmuqlvslp');
    table.string('xkokkkofbh');
    table.json('dkscleqilm');
    table.string('qahiblkddv');
    table.bigInteger('ihcpdbkcpq');
    table.string('kcqrfqsoku');
    table.timestamp('ffjpudumem');
  });
  await knex.schema.alterTable('utdjbsnkos', function(table) {
    table.timestamp('gkquhnsztn');
    table.string('tvnzdjshmu');
    table.boolean('xtlijwsczx');
    table.float('bxaugbnqoo');
    table.text('opzsrixnpn');
    table.text('scnbwjlqgu');
  });
  await knex.schema.alterTable('rdmilxjlqa', function(table) {
    table.text('fjhggnexff');
    table.timestamp('enkkhsmicf');
    table.bigInteger('ryrbrzcdqc');
    table.json('goosolsswc');
    table.integer('viobzjeldm');
    table.json('qofebzpnqa');
  });
  await knex.schema.alterTable('xymfmnjznh', function(table) {
    table.float('kqnmhjjeqm');
    table.integer('siobipfnzd');
    table.string('uhvcwgizfs');
    table.float('cdjzdzxlhf');
  });
  await knex.schema.alterTable('oheqmsnjau', function(table) {
    table.timestamp('xnbfnvrhdh');
    table.bigInteger('uyvetxaztf');
    table.text('xvozviubtb');
    table.string('ymcmfjzlpa');
    table.boolean('hgixwhegjl');
    table.json('ysrjfrcfxl');
    table.json('hwaehzqrds');
  });
  await knex.schema.alterTable('mjaftbkmuu', function(table) {
    table.integer('wgwukodfhi');
    table.float('keavsnkbnh');
    table.json('wvnooyswjw');
    table.text('ypxbixjfpy');
    table.integer('qywjdbyjkr');
    table.bigInteger('dsemvulvav');
    table.timestamp('ltonadkaek');
    table.float('urntnipbyr');
    table.boolean('lfuumxqdkg');
    table.float('gqgfhzdphu');
  });
  await knex.schema.alterTable('lyqhjdmkwj', function(table) {
    table.string('obaurrljxr');
    table.float('ukcjjmqdor');
    table.text('tcrjqweayw');
    table.float('mezttijaff');
    table.timestamp('ikfxieustn');
    table.float('ksshdqxzog');
    table.integer('demesftpqx');
  });
  await knex.schema.alterTable('etozqrkxam', function(table) {
    table.bigInteger('kilbfiwzvo');
    table.float('kxuqdrbqwh');
    table.text('jmfvquezte');
    table.string('dvgxsqpnfq');
  });
  await knex.schema.alterTable('xqfbcjztos', function(table) {
    table.string('kiqbztiads');
    table.string('sfuilvlqkn');
    table.text('xcapqcqprb');
  });
  await knex.schema.alterTable('uadpjntqtz', function(table) {
    table.text('uczzpmlhsw');
    table.text('qjdlqonrts');
    table.float('snnswhspcl');
    table.json('eazizyyckm');
    table.boolean('facpdmnkjt');
    table.json('kiuchtzgsz');
    table.text('zzbsblnkdz');
    table.boolean('vqbpfxpqzg');
    table.bigInteger('czqldhjzrp');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};