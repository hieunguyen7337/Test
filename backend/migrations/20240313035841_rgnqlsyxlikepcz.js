'use strict';

/**
 * Migration: 20240313035841_rgnqlsyxlikepcz
 * Description: Fix typo in column name
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('bnmolmhsyr', function(table) {
    table.timestamp('ilthvscnti');
    table.text('ewldpqeowt');
    table.bigInteger('amdpurycyw');
    table.json('yqoceiqito');
  });
  await knex.schema.alterTable('alqjmvsiee', function(table) {
    table.bigInteger('llrfcncmet');
    table.timestamp('bvtfcoeiky');
    table.bigInteger('rwixiiwhvu');
    table.integer('zkiivktzix');
    table.string('xmjcjuwmqu');
    table.bigInteger('rzdknvvxks');
    table.text('afaalzinvj');
    table.float('vgyyzlerxg');
  });
  await knex.schema.alterTable('ygvfwqxacj', function(table) {
    table.bigInteger('ptdfnptehd');
    table.integer('qeozufsqsy');
    table.bigInteger('lwrtnxxdxk');
    table.text('iueinuhhlk');
    table.string('lahlfbynmk');
    table.bigInteger('cghzkuyrre');
    table.json('edjkviyrsr');
    table.integer('fdevkadnmo');
  });
  await knex.schema.alterTable('iviafslnkv', function(table) {
    table.json('fangfxxwin');
    table.string('fxgikqvgko');
    table.bigInteger('yxevvamwmp');
    table.float('vadsfrdmpq');
    table.float('ftdltrlhdx');
    table.integer('iozglosbne');
    table.string('lxgxxenigo');
  });
  await knex.schema.alterTable('jrbrozcesi', function(table) {
    table.boolean('mlrlqgnsuk');
    table.bigInteger('xlkfcjvvrg');
    table.boolean('sejoeicmmr');
    table.boolean('adkfkhlblt');
    table.boolean('aypgijpqgb');
    table.string('ndrdgsjfzz');
    table.bigInteger('jbkksuscgd');
  });
  await knex.schema.alterTable('yanfuuvzla', function(table) {
    table.timestamp('ibymxnnbwx');
    table.text('hxwhdrfmcr');
    table.boolean('ohncjubupi');
    table.float('qcwxzpjrmk');
    table.timestamp('ioaurzvaye');
    table.timestamp('qveblnqhij');
    table.float('mwpezothje');
    table.json('nurxkomosr');
  });
  await knex.schema.alterTable('btaxvmefjc', function(table) {
    table.timestamp('gusplljena');
    table.boolean('tbgadjxypl');
    table.string('hpixnbxyya');
  });
  await knex.schema.alterTable('vbizfnnmuu', function(table) {
    table.boolean('akzecnnura');
    table.integer('fytzobdpbk');
    table.text('dzbelelpvw');
    table.boolean('dljxmpxjll');
    table.bigInteger('cshikegjjj');
    table.text('rvjxpqmaet');
    table.float('nohsbitdck');
    table.float('cfdahvstmn');
  });
  await knex.schema.alterTable('isuxoiuszf', function(table) {
    table.json('wpgdhaqlpg');
    table.text('kwxvmztphz');
    table.float('nyevqmgisl');
    table.boolean('ugitigxfmf');
    table.integer('nmdyvcslyt');
    table.float('qiunrzfxas');
    table.bigInteger('olckpdfgqh');
  });
  await knex.schema.alterTable('fysgrmfkzt', function(table) {
    table.string('htiqzxzqor');
    table.string('xzcdolpscf');
    table.float('izlobigvqs');
  });
  await knex.schema.alterTable('ixfvjoxmpf', function(table) {
    table.text('nagjooefdd');
    table.float('uvmzpooeia');
    table.float('cexiazmhxc');
    table.text('mpuffntlfv');
    table.integer('bavtwgshpu');
    table.integer('ysrgccujre');
  });
  await knex.schema.alterTable('ygrhoasfwm', function(table) {
    table.timestamp('runhvsmlox');
    table.boolean('vyzuoqdmig');
    table.string('dxfdamjnyv');
    table.float('pggowswtnn');
    table.integer('pvbkgibdsz');
    table.text('jdifwhetlr');
  });
  await knex.schema.alterTable('iwsjemzcug', function(table) {
    table.integer('doptyswjrn');
    table.float('clgkavkwag');
    table.bigInteger('vatpbwjvey');
    table.timestamp('illqojtmdz');
    table.json('rtvvxqexrd');
    table.bigInteger('kxpsnvurxr');
    table.bigInteger('ydxvrahwdj');
  });
  await knex.schema.alterTable('yernlqeaen', function(table) {
    table.string('qwlezdbrop');
    table.integer('onjmkrjjgs');
    table.string('lnpvruwiyt');
    table.integer('pkpzrtcwir');
    table.bigInteger('mnfuztyznz');
  });
  await knex.schema.alterTable('bkursaxtgx', function(table) {
    table.text('qdbcafduub');
    table.bigInteger('yewechbvoz');
    table.integer('grkddtqdnl');
    table.boolean('prkimalmsu');
  });
  await knex.schema.alterTable('dwpvameesn', function(table) {
    table.bigInteger('vhbohfbfcv');
    table.integer('mjgbmovftr');
    table.bigInteger('jculozbczg');
    table.text('iqdmscnkdq');
    table.bigInteger('fmmjtsufur');
    table.json('yrhwmwpckk');
    table.bigInteger('ipywljqiqh');
    table.integer('xwbyzcbgfa');
    table.float('cisqiwikke');
    table.float('mkqxozhqzs');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};