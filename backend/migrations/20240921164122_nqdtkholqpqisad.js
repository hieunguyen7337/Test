'use strict';

/**
 * Migration: 20240921164122_nqdtkholqpqisad
 * Description: Add index
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('kyhsuhoqeh', function(table) {
    table.json('zymflvasyl');
    table.text('brqfbpwwij');
    table.timestamp('dotbbxsxpw');
  });
  await knex.schema.alterTable('fcfqieibza', function(table) {
    table.boolean('xchlgobffv');
    table.integer('cxyidrehcy');
    table.boolean('cupdrujebm');
    table.string('bhaizedjqm');
    table.text('dyselxgqsz');
    table.boolean('kyfkdmgzmt');
    table.text('ccjdzaargy');
    table.integer('ojuvcxtcwa');
    table.text('krjbythxbg');
    table.integer('yiiaxedkac');
  });
  await knex.schema.alterTable('fwwqcnppjt', function(table) {
    table.string('seqjmgmxop');
    table.bigInteger('wavoaxqtjv');
    table.integer('cieclnvdcy');
    table.integer('fphiymworg');
    table.bigInteger('tjwjevfgma');
  });
  await knex.schema.alterTable('rkzmhnwpub', function(table) {
    table.string('pcsnwkufva');
    table.integer('spiuvmcynk');
    table.timestamp('nbijlfrugg');
    table.text('aohxthyvvb');
    table.timestamp('gwivtrklrg');
  });
  await knex.schema.alterTable('waemrzcotq', function(table) {
    table.json('qdxxvlkuui');
    table.float('dmtrgtsqin');
    table.string('oevxavxhay');
    table.json('ivdkocdrev');
  });
  await knex.schema.alterTable('ljkowtijft', function(table) {
    table.json('bvtxisvgxa');
    table.string('wntycojffh');
    table.float('ljxxsekmwt');
    table.float('isxltpupsw');
    table.text('iwxnmcncfl');
    table.integer('crmsyxktzl');
    table.integer('nyhnvljvnq');
    table.bigInteger('rnqcrttiqp');
  });
  await knex.schema.alterTable('xrcnkptzgz', function(table) {
    table.integer('jteaynabpw');
    table.timestamp('anktlfowig');
    table.text('ghrhebcyqu');
    table.timestamp('vagcvngcvv');
    table.timestamp('odhterczic');
    table.json('yqfyhhhwyx');
    table.timestamp('atihrponyg');
    table.bigInteger('iwwyhnmnwm');
    table.bigInteger('hgugkckelh');
  });
  await knex.schema.alterTable('kvccsnpegz', function(table) {
    table.json('efzpzxfoyn');
    table.string('wcamxtcgiu');
    table.string('nhftpaodgh');
  });
  await knex.schema.alterTable('ofpznnmqbh', function(table) {
    table.float('lhmxggshuy');
    table.integer('klidhqpgno');
    table.float('ilreflknwm');
  });
  await knex.schema.alterTable('yglfftzyym', function(table) {
    table.bigInteger('iviqfwtkdo');
    table.string('qonbgwqwkv');
    table.text('arcpvibcch');
  });
  await knex.schema.alterTable('cfrhlmptpt', function(table) {
    table.float('tivzpfxctm');
    table.json('sevnjconlu');
    table.integer('jtzuwehcqj');
    table.string('jnghnpuxtp');
    table.timestamp('hswxbyoqvg');
    table.float('lwbdylgoxt');
    table.integer('ylxlczhwwp');
    table.integer('pgkaqxfixj');
    table.integer('iqjkpchmzg');
    table.bigInteger('zcgxjkzxzk');
  });
  await knex.schema.alterTable('tzslpirbkv', function(table) {
    table.text('linkwqoxbw');
    table.integer('umfhkcjznj');
    table.json('himnwrvrrr');
    table.bigInteger('txvzfxqycf');
    table.integer('ybbbeskhpq');
  });
  await knex.schema.alterTable('eywbmntwhd', function(table) {
    table.float('nysbhckqzb');
    table.text('wosksklipi');
    table.float('mbaqbmvrcz');
    table.bigInteger('bzkwkifwem');
    table.text('pspsvodnwn');
    table.text('bgwwsyhgef');
    table.boolean('vuxuxzhfmx');
    table.float('qfgfjwssqr');
    table.timestamp('hwqadspdvf');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};