'use strict';

/**
 * Migration: 20240602080157_hwqkjwdmjsjssiy
 * Description: Add index
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('zyotyyjacx', function(table) {
    table.string('aaxiqvtrlj');
    table.string('zetuzdhfoa');
    table.text('fuhazhlfzi');
    table.text('pwuyazuzqe');
  });
  await knex.schema.alterTable('hkdovazizk', function(table) {
    table.float('dqgbmgxkku');
    table.boolean('fngmdomxqi');
    table.bigInteger('nyxgrlyhpa');
    table.timestamp('aenhwyuult');
    table.bigInteger('pldknoeldy');
    table.text('zledsyogmm');
    table.integer('wmijgpcqeo');
    table.bigInteger('psekuaqoal');
  });
  await knex.schema.alterTable('uxtbecjbyj', function(table) {
    table.integer('qldhvavwob');
    table.boolean('apbroclziq');
    table.integer('oihmhueuap');
    table.text('imixbfdsld');
    table.json('fprazbxjxy');
  });
  await knex.schema.alterTable('htbampwpsd', function(table) {
    table.integer('sbutujoiuc');
    table.boolean('viucwsccli');
    table.boolean('ruozhbugik');
    table.string('mddzruansl');
  });
  await knex.schema.alterTable('dtkxepopas', function(table) {
    table.timestamp('ufeninoykv');
    table.json('ufeoumlwaf');
    table.float('hmcgtxopzv');
    table.bigInteger('lmxjnenyrz');
    table.boolean('trrcvwjoxk');
    table.boolean('bnemqplgmm');
    table.string('nkmgwwpvsa');
    table.json('hybxehoxyf');
  });
  await knex.schema.alterTable('lwjbeguxtl', function(table) {
    table.boolean('ypqshhguvg');
    table.string('jawwqlzjut');
    table.boolean('zfskgalyyy');
  });
  await knex.schema.alterTable('oxoftknglm', function(table) {
    table.json('eraicplqkm');
    table.float('zfzvwattye');
    table.integer('elhxedhnyj');
  });
  await knex.schema.alterTable('sqqpoqyyup', function(table) {
    table.boolean('yprbxenqrb');
    table.integer('aptwbyadhg');
    table.json('ahrqbpckif');
  });
  await knex.schema.alterTable('pfbfeqmrwp', function(table) {
    table.text('kbkzeovaxk');
    table.bigInteger('eillyouhai');
    table.integer('hkegawwnxd');
    table.integer('lsuuxjjmjm');
    table.bigInteger('ubbttscsce');
    table.timestamp('xzmngursbb');
    table.json('xvpznooqyq');
    table.string('ynajsiefng');
    table.bigInteger('zbgsrslgcs');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};