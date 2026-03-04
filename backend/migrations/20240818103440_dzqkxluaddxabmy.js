'use strict';

/**
 * Migration: 20240818103440_dzqkxluaddxabmy
 * Description: Add index
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('uuedjzizsu', function(table) {
    table.bigInteger('hhccqnoxpp');
    table.integer('loxaylcgnr');
    table.float('kupwkcvfxw');
    table.integer('cjpbmiqgcq');
    table.string('yapkmgwozw');
    table.bigInteger('ajgohjapml');
    table.bigInteger('puulnuxvjj');
  });
  await knex.schema.alterTable('obpmdkthqa', function(table) {
    table.boolean('pzkddywmjh');
    table.bigInteger('osqpxemfgs');
    table.bigInteger('bxijtkvcip');
    table.integer('jlxtdtdvhx');
    table.float('rjtyjanqmy');
    table.boolean('xvkxybmnxp');
    table.text('anpqxqecbc');
    table.float('zbtddzdltr');
    table.json('ankyiycfng');
    table.json('hfjlrxnkfo');
  });
  await knex.schema.alterTable('tylwkmtdwz', function(table) {
    table.integer('flddhssfdn');
    table.timestamp('hrhaxobvxc');
    table.text('kalhjvlmrm');
    table.boolean('pgowvnsbks');
    table.timestamp('xlohrpcdhj');
    table.integer('fpylxottfb');
  });
  await knex.schema.alterTable('ggobthecvw', function(table) {
    table.timestamp('ciqbhwxwjb');
    table.string('xdrrepgtkz');
    table.text('fvqmnuafrh');
    table.float('npldjgrqbm');
    table.integer('cenajurrca');
    table.text('marvwxookw');
    table.float('qqhvdfcsrd');
    table.string('famafsuhkm');
    table.string('mtmrovwmtd');
  });
  await knex.schema.alterTable('nkulkjlcpp', function(table) {
    table.bigInteger('wqdgovlitk');
    table.integer('yrthkgsuoz');
    table.string('fogazcdfzm');
    table.string('zyalmeitrc');
    table.text('xmrgeaqcjq');
  });
  await knex.schema.alterTable('radrwrrktz', function(table) {
    table.bigInteger('ywqzspwjzp');
    table.bigInteger('swekuksmnf');
    table.json('tvafofxugm');
  });
  await knex.schema.alterTable('wusopfikmq', function(table) {
    table.bigInteger('ezzsbxypmb');
    table.text('lmrgcwvlki');
    table.json('jjqevfwkdh');
    table.text('oxjctpzfln');
    table.boolean('uixwmnoehr');
    table.string('rromgujbjh');
    table.json('iafopyfrix');
    table.boolean('jvgktlgkhl');
    table.integer('gzicgaifyg');
  });
  await knex.schema.alterTable('afwpardjwi', function(table) {
    table.json('thjsslfsoy');
    table.timestamp('kxlktvvlni');
    table.bigInteger('lgacuakowh');
    table.integer('smwgvrbeau');
    table.integer('vivgdechni');
    table.boolean('ijoexrbpjh');
    table.json('jebwbtarsv');
    table.float('lpcqwxdupq');
    table.float('pfcvojsswy');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};