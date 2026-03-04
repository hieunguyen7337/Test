'use strict';

/**
 * Migration: 20240111095301_vhyjnubmdgcgxul
 * Description: Rename field
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('julxmrqahs', function(table) {
    table.json('vukaevucvm');
    table.timestamp('vnwzjhwedg');
    table.string('fsqjhunilw');
    table.string('fohlxiqdqb');
    table.json('atktruauhc');
    table.json('zcojptyiyq');
    table.float('ualcfeujvg');
    table.bigInteger('ihcigeewtd');
    table.json('ejbrbmlelr');
    table.json('uxaydzmkin');
  });
  await knex.schema.alterTable('eleyzhwjpl', function(table) {
    table.bigInteger('fedkwmznjp');
    table.json('qybfuutfts');
    table.boolean('jeebvsewvi');
    table.integer('mbjxtrctbe');
    table.bigInteger('whtjslgnjb');
    table.boolean('gtgrxmkbww');
    table.text('anbtqdogjd');
    table.float('jvuuzumpmg');
  });
  await knex.schema.alterTable('weqrctdjuu', function(table) {
    table.timestamp('uawaltjjmy');
    table.bigInteger('iarxzghqxo');
    table.float('peocrpfxxa');
    table.integer('fpvmaeuplf');
    table.text('rresyofjhf');
  });
  await knex.schema.alterTable('txfkmeebnv', function(table) {
    table.integer('nnfdxaxnfc');
    table.integer('nwhqgsiixv');
    table.json('qxknkzunmd');
    table.string('mprnmvdvta');
  });
  await knex.schema.alterTable('nrmlwfjzhe', function(table) {
    table.integer('wajuznawxh');
    table.text('sodsvpuovc');
    table.bigInteger('cnhedrbuky');
    table.float('dwnrkhnhvm');
    table.json('qpxieaykia');
    table.boolean('kuktmkrtmn');
    table.integer('dbelrepwjn');
  });
  await knex.schema.alterTable('yfhvgkxpje', function(table) {
    table.string('xbouelovft');
    table.timestamp('rkexiuxdga');
    table.text('necfeuudmq');
  });
  await knex.schema.alterTable('goclvmyvjk', function(table) {
    table.boolean('ssofgztkdz');
    table.bigInteger('vxazgctdxc');
    table.integer('nzhqspceti');
    table.json('nkkgjqbztx');
    table.integer('jwgjlqrgrr');
    table.bigInteger('qajlmeskjc');
    table.text('pvwmkiciwy');
    table.text('vwogcbjrzj');
    table.bigInteger('vshyhhbmiy');
    table.integer('bilvoiumxw');
  });
  await knex.schema.alterTable('etdwmlqqzg', function(table) {
    table.float('bvsfdzysbw');
    table.text('afirrunuyc');
    table.string('lxuyjefkmk');
    table.timestamp('wrhhlnzimk');
    table.boolean('txrhqjjwzw');
    table.string('gchymmyfaz');
    table.boolean('swxrczalon');
    table.float('tbwjbvmisf');
    table.boolean('ejsvinilkz');
    table.text('ltpfffillw');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};