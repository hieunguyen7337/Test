'use strict';

/**
 * Migration: 20240809175031_grhdpqhzzalutgk
 * Description: Drop table
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('qhaszxlkoc', function(table) {
    table.bigInteger('pptjqzdgld');
    table.float('pppwnaboow');
    table.string('drzlpnxjkg');
    table.text('vyqrvoglxd');
    table.boolean('rocubwcmlm');
    table.text('njauvdnyla');
  });
  await knex.schema.alterTable('jcbytfytui', function(table) {
    table.json('nobztyspot');
    table.float('jmnkdhllnz');
    table.json('xgosurkttv');
    table.string('xsclxoowhd');
    table.timestamp('lnefpehwra');
    table.float('ytcqbqclth');
    table.boolean('cqvjlgsezf');
    table.text('tieadwabpq');
  });
  await knex.schema.alterTable('vigsffqzjt', function(table) {
    table.string('ryxfrlbtuy');
    table.string('yiuvjwazkh');
    table.timestamp('ucsahebwmk');
  });
  await knex.schema.alterTable('gcdmqmfegt', function(table) {
    table.text('lrdzuegjrp');
    table.float('fineausrvu');
    table.float('baadtlqcun');
    table.text('bpzwweaifc');
    table.bigInteger('tcqwuocsnu');
    table.integer('gqhnybgwhq');
    table.json('lrkrrcdljx');
    table.string('mmfzgfpeon');
  });
  await knex.schema.alterTable('ofbpevufyc', function(table) {
    table.integer('eosycvpkza');
    table.boolean('veacsgvztb');
    table.boolean('eepxrcpzyu');
    table.timestamp('ymtdcejfxh');
    table.bigInteger('qdsucwpyzh');
    table.boolean('dqligihbbq');
    table.string('flrirkefxe');
    table.timestamp('ikxbdezajg');
  });
  await knex.schema.alterTable('piqqhzctng', function(table) {
    table.float('rzbrpdhzte');
    table.bigInteger('akxlxjwrum');
    table.text('vgyxmohkku');
    table.float('dbkpxlfjyr');
    table.string('ppformkldv');
    table.text('rqosmonsca');
    table.json('aajapiviha');
    table.integer('xtwfshqhdc');
    table.bigInteger('ikjshyzacs');
    table.string('whskowzawn');
  });
  await knex.schema.alterTable('pcgwwtjoyd', function(table) {
    table.float('dioynrwzbd');
    table.string('xtuoblircn');
    table.float('tgeghsrdal');
    table.bigInteger('kpyugexvkc');
    table.json('scrheczmhz');
  });
  await knex.schema.alterTable('izjysjghru', function(table) {
    table.boolean('txuvsqjwap');
    table.boolean('jtchlkeqhl');
    table.json('jrzvevlddf');
    table.boolean('ufgemrjcby');
    table.string('mskuiywikj');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};