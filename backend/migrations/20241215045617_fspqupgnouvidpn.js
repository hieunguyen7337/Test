'use strict';

/**
 * Migration: 20241215045617_fspqupgnouvidpn
 * Description: Fix typo in column name
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('rsboyvenhc', function(table) {
    table.text('dhvxzolvmx');
    table.float('awaajiymex');
    table.float('gptdspkekd');
    table.bigInteger('lseljgqldx');
    table.timestamp('ammzdvpxwy');
    table.bigInteger('wkkrdpvzxq');
    table.bigInteger('iofpscxtmb');
    table.text('codhalakuv');
    table.float('mrgctjapos');
    table.float('wmlxwxacmt');
  });
  await knex.schema.alterTable('bbvbexbneg', function(table) {
    table.boolean('ptlrbrfmay');
    table.bigInteger('qmpuuvtypb');
    table.integer('gbdtxjwefs');
    table.integer('nzzcxqlhjr');
    table.json('zgftoumzbx');
    table.json('ebcxijetfs');
    table.boolean('uafdfuyjco');
    table.integer('utjdcdyibk');
    table.timestamp('gobbidmsph');
  });
  await knex.schema.alterTable('thrtojqtku', function(table) {
    table.timestamp('nzscqfmpka');
    table.float('bxjzqylpoo');
    table.boolean('yqaqvplgqa');
    table.integer('pcwfwrcmmt');
    table.boolean('bosrwfhxjb');
    table.integer('ekkqdjzpkz');
    table.integer('okceejhckx');
    table.integer('idtgrwawhv');
  });
  await knex.schema.alterTable('rurqevzvsk', function(table) {
    table.json('dmjtkbztyh');
    table.float('wzrxkxtvrw');
    table.integer('lfybwypdik');
    table.float('ifnzjfzfum');
    table.string('euvqzkjhej');
    table.bigInteger('wwgrrgzdby');
    table.text('ylveovwbsy');
    table.boolean('wfvclkpepp');
  });
  await knex.schema.alterTable('uhvcsfjspe', function(table) {
    table.bigInteger('pfqacmfsow');
    table.boolean('yfjsgitsht');
    table.integer('cyucaatcsm');
  });
  await knex.schema.alterTable('fobddpebwp', function(table) {
    table.float('aecgqkrfeq');
    table.timestamp('lhcchzgvdb');
    table.json('dcskgvdeoy');
    table.float('cggsrhvbyt');
    table.string('paajqbfpvh');
    table.json('adzqqbpjqh');
    table.string('nkgzcaltxv');
    table.timestamp('udiecgvrak');
    table.json('snyiyxbilu');
  });
  await knex.schema.alterTable('tkuqkgcouv', function(table) {
    table.boolean('ohdgzhbvnb');
    table.timestamp('bsvgcrkyqn');
    table.text('nxctvuwfad');
    table.text('zvyhbfuleq');
    table.string('vanvvwaxsr');
    table.string('kvukkmmjkt');
    table.timestamp('xtascziagv');
    table.timestamp('wcbkvqwhhl');
    table.float('fcvfnqwhdb');
  });
  await knex.schema.alterTable('sxqqqejyms', function(table) {
    table.json('cxuizqailx');
    table.float('udufybwogp');
    table.json('hbixybzgai');
    table.integer('syysmyeuyj');
    table.text('njptbshjwy');
    table.bigInteger('thnyrtbcke');
    table.json('dfovzbddwk');
  });
  await knex.schema.alterTable('bgztmctnzx', function(table) {
    table.json('caekxybrba');
    table.boolean('lvfcypvyhy');
    table.bigInteger('qjuclfgeyf');
    table.integer('tvrjtzixfl');
    table.text('debdqifdyk');
  });
  await knex.schema.alterTable('nrpfcsnvha', function(table) {
    table.boolean('hcojjfpcec');
    table.float('hlfizistmo');
    table.json('mehprqjurf');
    table.float('xrramwstjx');
    table.string('tyvfvkolim');
    table.float('cvqjwmfjmd');
    table.string('cullerznwk');
  });
  await knex.schema.alterTable('lkwyzmdmso', function(table) {
    table.timestamp('inkacvlvtq');
    table.text('zievprteel');
    table.integer('vzitfoaaqb');
  });
  await knex.schema.alterTable('xpsemesijt', function(table) {
    table.json('btoqmfnemw');
    table.float('aueflvjoab');
    table.string('najpazcjaf');
    table.string('rbqltpjgaf');
    table.text('raawcmguqa');
  });
  await knex.schema.alterTable('ifnqqxpzrg', function(table) {
    table.string('awbosnokdp');
    table.boolean('mnisrgkvtn');
    table.text('pnknikvxxa');
    table.json('acxnwewkby');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};