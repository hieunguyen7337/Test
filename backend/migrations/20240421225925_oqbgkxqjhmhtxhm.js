'use strict';

/**
 * Migration: 20240421225925_oqbgkxqjhmhtxhm
 * Description: Undo previous migration
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('uugcohugcg', function(table) {
    table.timestamp('ctrhmitnti');
    table.boolean('uprarshtlz');
    table.string('btkrugrnjk');
  });
  await knex.schema.alterTable('pgzkyzfwqt', function(table) {
    table.string('tpdgbhuymq');
    table.timestamp('gclqiadfwk');
    table.boolean('qcliknkqvy');
    table.timestamp('zduzsbaalo');
    table.boolean('qkqjjajscl');
    table.boolean('ijbgkwumoo');
  });
  await knex.schema.alterTable('eawvqjqipg', function(table) {
    table.string('iktswknmol');
    table.timestamp('xuoyrgjicm');
    table.integer('qdttptelto');
    table.timestamp('idflejtwhw');
    table.timestamp('casjwwcfwj');
  });
  await knex.schema.alterTable('guicmiwfad', function(table) {
    table.timestamp('ynludilsrl');
    table.integer('alxwlfgjtl');
    table.boolean('rmyzhyoxxb');
    table.float('pfbamyvihs');
    table.boolean('jfsxlgoskb');
    table.boolean('bewpsdlyzl');
    table.boolean('aozdrsytlm');
    table.bigInteger('gdnfjorzjk');
    table.float('yqnsppzqya');
    table.integer('omvfocbive');
  });
  await knex.schema.alterTable('owxqazcksp', function(table) {
    table.float('xfinhaeqnq');
    table.float('cuemlszwia');
    table.string('wbakonkcds');
    table.boolean('brfaouqgzs');
  });
  await knex.schema.alterTable('itpftsdidp', function(table) {
    table.bigInteger('udthjjtean');
    table.float('ighexbvcok');
    table.string('egencdtcip');
    table.integer('egdxfhzynj');
  });
  await knex.schema.alterTable('wrvrhjmbpn', function(table) {
    table.text('dcmlgspnxh');
    table.timestamp('lcstyxealy');
    table.json('tdrrelures');
    table.timestamp('wqcxaaamnv');
    table.integer('mpwnwqythn');
    table.json('uoorwbkuvq');
    table.integer('eaogymrabo');
  });
  await knex.schema.alterTable('scjpieuaju', function(table) {
    table.string('dahwpuotho');
    table.timestamp('sipnlmdcrz');
    table.text('iialyjjpdy');
    table.text('lcckmdozjv');
    table.float('wtiyyswjha');
    table.integer('kopeznehqk');
    table.float('agdjqdoqzz');
    table.float('vkuonpqonz');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};