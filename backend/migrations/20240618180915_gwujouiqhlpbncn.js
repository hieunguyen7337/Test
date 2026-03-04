'use strict';

/**
 * Migration: 20240618180915_gwujouiqhlpbncn
 * Description: Add index
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('micyqxfyld', function(table) {
    table.string('dzmnwetorh');
    table.text('ofiwzhkolf');
    table.text('guismdtbcq');
    table.float('rtlezrwell');
  });
  await knex.schema.alterTable('htoscdkdrm', function(table) {
    table.float('oeqtuafukp');
    table.json('jukcfxotfn');
    table.boolean('hqnpklkvzt');
    table.bigInteger('auyqmqzdsx');
    table.boolean('dabtpbslyr');
    table.timestamp('dapnaoxdzl');
    table.integer('szorlrgjwd');
  });
  await knex.schema.alterTable('nupxjkiwuz', function(table) {
    table.boolean('gwfsgplaii');
    table.string('gqkighbjqv');
    table.integer('kabzedarxc');
    table.text('astoezyjzq');
    table.boolean('ecfdycwozz');
    table.boolean('xrbycuekkd');
    table.string('cksbxaedpn');
    table.timestamp('pdbbkabuax');
  });
  await knex.schema.alterTable('mytsdwyzzq', function(table) {
    table.bigInteger('zwtpvqumld');
    table.json('vdfwfrebjb');
    table.timestamp('lznuwjhfxi');
    table.boolean('brwtddqhsc');
    table.json('cmwhrvyvvt');
    table.string('thjzizgpjp');
  });
  await knex.schema.alterTable('sokhixkknx', function(table) {
    table.float('jathplvdvb');
    table.boolean('wmumrugiww');
    table.string('budvekozlb');
    table.integer('jdxybitnph');
    table.bigInteger('krnjetkidj');
    table.float('iwmuyjpkxv');
    table.text('putypsmhcs');
    table.timestamp('cskdqbycax');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};