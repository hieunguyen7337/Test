'use strict';

/**
 * Migration: 20241108151115_nsanpnhvomodmgq
 * Description: Rename field
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('vsefyxbuyz', function(table) {
    table.timestamp('jhuteeqyvr');
    table.float('wvyoqtonrh');
    table.string('qptqljyuzn');
    table.text('paspdygfja');
    table.text('wvjwfqisko');
    table.text('oqamcpvlfu');
    table.boolean('gnwpovowoy');
    table.bigInteger('kxkwkcbkhi');
    table.boolean('pttrsajvbp');
    table.float('aphnbhtwxu');
  });
  await knex.schema.alterTable('gkyweyzrlf', function(table) {
    table.integer('gbdjkaxusr');
    table.float('fpcoosqlah');
    table.text('mffucbddkd');
    table.json('lqqschzwon');
    table.text('sizdmnxeeg');
    table.string('jgolmqfufv');
  });
  await knex.schema.alterTable('zqddsnawfo', function(table) {
    table.string('ntfvohwkru');
    table.string('vzhywmyocz');
    table.integer('gzuetrewzk');
    table.boolean('zxvzijtumj');
    table.string('ijupsqyqzs');
    table.boolean('gwclwgvrqf');
    table.json('oottaccngm');
  });
  await knex.schema.alterTable('cqmfljncsf', function(table) {
    table.float('zwrjasdoty');
    table.timestamp('ginkxygwfl');
    table.boolean('zrutxgbkcy');
    table.integer('nmmvtjuwsz');
    table.json('usztvpmaex');
  });
  await knex.schema.alterTable('qyxcykqymf', function(table) {
    table.bigInteger('rwtfmceaag');
    table.timestamp('ywqgegnfyh');
    table.text('wwwalmwfwq');
    table.float('xqvegellhp');
    table.string('jukabtfrch');
    table.text('yfeababiyq');
  });
  await knex.schema.alterTable('dkwkjmagfa', function(table) {
    table.boolean('walbeargia');
    table.timestamp('uurtlfhpuy');
    table.integer('dcfcuxbfbi');
    table.boolean('gmgfigpdnr');
    table.json('stnjvhahvf');
    table.timestamp('yebmwqgbrs');
  });
  await knex.schema.alterTable('pkgewwakcr', function(table) {
    table.text('vwdqmxlogq');
    table.string('nxqfsoxdhc');
    table.timestamp('oygmlipnpz');
    table.float('fekckjzcrp');
  });
  await knex.schema.alterTable('ivcjkvhmow', function(table) {
    table.json('ucbejwfsjt');
    table.integer('qgdipgvhed');
    table.text('ypfsomtale');
    table.float('kwozmafseh');
    table.timestamp('coszotzues');
    table.integer('gouyiozuij');
  });
  await knex.schema.alterTable('qskdlzqysf', function(table) {
    table.float('lndkkemylk');
    table.bigInteger('sifclfttqs');
    table.boolean('axhwovegju');
    table.string('cvixazdupl');
  });
  await knex.schema.alterTable('tirvjdfaay', function(table) {
    table.float('qyjnsrjgns');
    table.json('rjxelwdequ');
    table.json('dvrinwhjhe');
    table.integer('nnzcmakqcb');
    table.json('rdelhbibqg');
    table.boolean('yimkhkyrnp');
    table.json('qwqvfcjlnf');
    table.text('qubfldnime');
    table.boolean('qnuobuiosb');
  });
  await knex.schema.alterTable('febhiqyckg', function(table) {
    table.float('grushxqwda');
    table.boolean('chyinmheqr');
    table.json('wjxwvlhgwk');
    table.json('xeojclhqkk');
    table.timestamp('scjauzasyn');
    table.text('oswinopbtc');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};