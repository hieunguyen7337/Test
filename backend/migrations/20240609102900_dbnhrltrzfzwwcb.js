'use strict';

/**
 * Migration: 20240609102900_dbnhrltrzfzwwcb
 * Description: Create table
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('bosqtretqj', function(table) {
    table.boolean('jzzunuhqsp');
    table.bigInteger('jxbncyxufy');
    table.timestamp('gtuxzklzrt');
  });
  await knex.schema.alterTable('yaiasotyyb', function(table) {
    table.boolean('mnypuxuqxf');
    table.text('jjornbquqv');
    table.float('qqpqwszbjy');
    table.json('yyboqtexjp');
    table.float('nmewfwabph');
  });
  await knex.schema.alterTable('ajfjlyymll', function(table) {
    table.timestamp('yrcmqwwyqy');
    table.bigInteger('okodeuadgd');
    table.integer('mwawdupdcf');
    table.float('bryjhvxwtw');
    table.timestamp('yuiplmhifo');
    table.float('jqojxgzjmw');
  });
  await knex.schema.alterTable('spwlqavkss', function(table) {
    table.json('morzgloqwd');
    table.string('qhcrmxameg');
    table.string('ovnqnqwooi');
    table.bigInteger('zmvcvawtbz');
    table.integer('virxmelzcj');
    table.json('rljleddmay');
    table.integer('ubxmoqxuwe');
    table.timestamp('ixfbdaaolq');
  });
  await knex.schema.alterTable('zzgqdiomlq', function(table) {
    table.bigInteger('xcdzzhehsm');
    table.bigInteger('mqqzbrgxhl');
    table.boolean('ptqmauwoys');
    table.text('ndcdxkctgp');
    table.timestamp('dqfxenpimn');
    table.bigInteger('vgpcbcmnqz');
    table.boolean('irejqjzszp');
    table.integer('twbhhmgqaj');
    table.string('wipuftzqnl');
    table.string('twoawcgfxz');
  });
  await knex.schema.alterTable('uuwjyzkwvc', function(table) {
    table.bigInteger('kepgtjypgd');
    table.boolean('pjjurcacke');
    table.float('nqmurnzwib');
  });
  await knex.schema.alterTable('hkeayiyptq', function(table) {
    table.float('jamymvpmbf');
    table.string('xphrcuicjd');
    table.string('xugykyczww');
    table.text('fzsulxlqjf');
    table.timestamp('uiostgscax');
    table.json('hcavjiydxh');
  });
  await knex.schema.alterTable('oxmrhcntdq', function(table) {
    table.float('wpwmxprktp');
    table.boolean('bkvqatkvbs');
    table.integer('vqhnepsuwz');
  });
  await knex.schema.alterTable('vvcixxlpqu', function(table) {
    table.bigInteger('mjdxmyvztg');
    table.string('tkfiqmlshr');
    table.timestamp('nteutnbhtr');
    table.timestamp('yyhenaariz');
    table.bigInteger('bmwgtzqbat');
    table.boolean('jyyaugbzpb');
  });
  await knex.schema.alterTable('olstggarkz', function(table) {
    table.integer('potjlgtpna');
    table.string('fdruvgvcjg');
    table.string('jrkzavxssx');
    table.integer('vhivvumatv');
    table.json('widfwbxfgc');
  });
  await knex.schema.alterTable('ilsalqrpea', function(table) {
    table.json('bntrscdpex');
    table.json('kjxaelvchb');
    table.json('eunwzqmhnt');
    table.json('teleldpyuu');
    table.float('lbelunccrz');
    table.float('pygytdsyae');
    table.text('ndewrpzvyw');
    table.bigInteger('qdlupqprax');
    table.integer('nbidhyofhi');
  });
  await knex.schema.alterTable('nsurocedsn', function(table) {
    table.bigInteger('bepsgmqegt');
    table.text('jggzqiieha');
    table.text('nvwrhwazkk');
    table.timestamp('ilhppmzbqt');
    table.float('sjbiqpioqb');
    table.bigInteger('renjocxeuy');
    table.text('xqshovgssz');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};