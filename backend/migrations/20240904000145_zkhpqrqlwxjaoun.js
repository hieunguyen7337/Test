'use strict';

/**
 * Migration: 20240904000145_zkhpqrqlwxjaoun
 * Description: Undo previous migration
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('nssbdrosnj', function(table) {
    table.boolean('mnczqjiyif');
    table.bigInteger('ttkrpczavd');
    table.float('bxjdrliolt');
    table.timestamp('xpgtpmztdi');
    table.integer('qqftrcopql');
    table.boolean('awdifhrpuu');
  });
  await knex.schema.alterTable('saoncipocw', function(table) {
    table.json('vfmlnfczxp');
    table.json('yinpgfvajz');
    table.bigInteger('tyeftadgid');
  });
  await knex.schema.alterTable('cijgmzihzg', function(table) {
    table.bigInteger('khpaqyakbp');
    table.float('yjfwttvtih');
    table.timestamp('gdcjbktlce');
    table.bigInteger('jrcqffutue');
  });
  await knex.schema.alterTable('pdyehtdzxu', function(table) {
    table.float('zpjxqifgud');
    table.timestamp('cuqjxdiydh');
    table.bigInteger('bgfsmthrls');
    table.text('zhiterbjgt');
    table.json('unnkxhhmdh');
    table.json('xuglrugfco');
    table.json('scqohpqfqr');
    table.text('hdrwspoosi');
  });
  await knex.schema.alterTable('hzvkzbpjtw', function(table) {
    table.bigInteger('bdgyttbcch');
    table.boolean('jufnycfofw');
    table.timestamp('gpkrtbayiq');
  });
  await knex.schema.alterTable('nhkypwceod', function(table) {
    table.json('ytkjztsjpw');
    table.integer('wluunkbkaj');
    table.timestamp('pwulrmbqwo');
    table.json('ezuvjhelvx');
    table.boolean('cspziwoyaw');
    table.boolean('hrrtazslba');
    table.integer('cfwqtmymyd');
  });
  await knex.schema.alterTable('apdicxtvxs', function(table) {
    table.json('wnfmwkrfok');
    table.float('iyrmuottwr');
    table.string('ksguhauqxp');
  });
  await knex.schema.alterTable('gndhxtjpqi', function(table) {
    table.boolean('zeknnkiqml');
    table.timestamp('tpncqjstey');
    table.integer('dimxungwvq');
    table.integer('kxpzinnxoo');
    table.bigInteger('vxncfzthqi');
    table.string('vbzsnkoeaf');
    table.integer('tnecqhigjz');
  });
  await knex.schema.alterTable('axawplqlqh', function(table) {
    table.text('ufnzqxjsda');
    table.timestamp('umzvyeyffp');
    table.json('ppqryjsoyp');
  });
  await knex.schema.alterTable('onrveqojvk', function(table) {
    table.text('pxotgakcxs');
    table.timestamp('iuoqbnaijj');
    table.bigInteger('xntkljlzzn');
    table.text('bqiisrclzx');
    table.json('aoljwikguq');
    table.json('xtucyiobtc');
  });
  await knex.schema.alterTable('ekzwoohdkq', function(table) {
    table.float('uijhutlklh');
    table.float('mgojwzinkm');
    table.text('dbpmskabhx');
    table.integer('pzermwmibu');
    table.timestamp('ayrraqxsdv');
    table.string('tjhvchvqzf');
    table.float('ydmgqwxrqs');
    table.string('lxtrhmtrjy');
  });
  await knex.schema.alterTable('vbpcjiezwg', function(table) {
    table.integer('owycmitgbe');
    table.bigInteger('jpywqostki');
    table.string('fdwfluswqy');
    table.json('ahzzqkosln');
    table.boolean('wkhxmxmufc');
    table.boolean('pjpzgcnadg');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};