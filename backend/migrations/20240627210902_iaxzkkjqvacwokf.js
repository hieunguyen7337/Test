'use strict';

/**
 * Migration: 20240627210902_iaxzkkjqvacwokf
 * Description: Please work this time
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('kvklwlnivy', function(table) {
    table.bigInteger('ofuezsrppx');
    table.json('bwugnfavgw');
    table.float('aejssylbcf');
  });
  await knex.schema.alterTable('pwlnhxvvlj', function(table) {
    table.json('vkjdmaidjf');
    table.integer('pkfkvlcdjv');
    table.timestamp('pxvoozynlk');
    table.timestamp('tpusiyglve');
    table.string('xsufwuiqpc');
    table.boolean('gswseikgig');
    table.text('ojnegzfeuw');
    table.boolean('sqxuhzehpq');
    table.text('fcohvbfeek');
    table.json('zrfmcklvqq');
  });
  await knex.schema.alterTable('gglrvtzupu', function(table) {
    table.float('hpptklvffb');
    table.boolean('jnducbgphv');
    table.timestamp('azeixmmgaf');
    table.float('joctxohitp');
    table.bigInteger('jphgaewqav');
    table.json('xydebogtna');
  });
  await knex.schema.alterTable('bvthaelvas', function(table) {
    table.integer('simfsprxys');
    table.string('qymbqasxht');
    table.boolean('syvesmfcwx');
    table.timestamp('akhaausnjz');
    table.integer('ltdwsgfqoe');
    table.timestamp('vdzvrldwoi');
    table.json('kvejukmlah');
    table.text('gqwqkogkxp');
  });
  await knex.schema.alterTable('qbgxfeojdc', function(table) {
    table.float('syshbztuun');
    table.bigInteger('rvggnjyxmz');
    table.float('tvqyghtwfe');
    table.float('gmzkvcwogt');
    table.integer('xgoxvliqnm');
    table.json('ppifodbqnh');
    table.json('epmkyamlhd');
  });
  await knex.schema.alterTable('lyedutcsmn', function(table) {
    table.bigInteger('jnugkwgspz');
    table.float('srtqylqmlc');
    table.string('stuhsrcnrm');
    table.bigInteger('bpwhxtmekn');
    table.integer('djcvpyhgug');
    table.integer('ddfdrifmos');
    table.text('cdrrmmhiyn');
  });
  await knex.schema.alterTable('xpdkybevcm', function(table) {
    table.bigInteger('hlmeuvqhxg');
    table.timestamp('wyejpqmpug');
    table.integer('edyifgiall');
    table.float('lxijifkndp');
    table.integer('eooguemkci');
    table.boolean('bylqwbscfv');
    table.float('xgjoncuktw');
    table.text('xbotckrryg');
    table.json('kbxgrshpze');
    table.json('nuzmxegjpa');
  });
  await knex.schema.alterTable('duymjufuks', function(table) {
    table.timestamp('cggptkwsfg');
    table.json('pjlsagkjgu');
    table.integer('dsinvmphmp');
    table.text('pluahdstue');
  });
  await knex.schema.alterTable('utzvgutawo', function(table) {
    table.integer('tkuxdjwshv');
    table.string('hcpevjxxwl');
    table.string('kglqzsgrzo');
    table.timestamp('oeewbunrgd');
    table.json('aknvlxyabw');
    table.boolean('cmpdbaitag');
  });
  await knex.schema.alterTable('ljmbakaajp', function(table) {
    table.boolean('echhygrimk');
    table.json('clgtqkqipb');
    table.bigInteger('qlaxofjuha');
    table.integer('dlujmjjfai');
    table.integer('rnynhsxnap');
  });
  await knex.schema.alterTable('kcfkyyzhwk', function(table) {
    table.integer('hvmrxnrdwz');
    table.json('ppolplxizy');
    table.string('xoibavsosi');
  });
  await knex.schema.alterTable('vaasinthbg', function(table) {
    table.timestamp('nkclusrmwh');
    table.integer('jehkfelqgw');
    table.float('dowlxoqhyw');
    table.integer('gtqmhmcico');
    table.boolean('rqthhqowdj');
    table.timestamp('zaqwxsjnsc');
  });
  await knex.schema.alterTable('qnjyoinyqf', function(table) {
    table.bigInteger('ccsanusjgc');
    table.boolean('hkwgipplsu');
    table.bigInteger('vbfdxjupry');
  });
  await knex.schema.alterTable('qhxjdbufbf', function(table) {
    table.integer('qczdgayqzu');
    table.integer('bknrqjqzti');
    table.timestamp('iirelbarpx');
    table.bigInteger('nsxnmrzaqu');
    table.float('teihvnnjmn');
    table.boolean('qhqxbcgyet');
    table.bigInteger('fjcymwoxio');
    table.bigInteger('ddjoaxeick');
  });
  await knex.schema.alterTable('qsmxkzolzs', function(table) {
    table.bigInteger('beexflxmcj');
    table.text('edecikbioz');
    table.bigInteger('akzyofkwhz');
    table.json('lasgorqjgv');
    table.json('mkesuwsrit');
    table.integer('paogwyzevc');
  });
  await knex.schema.alterTable('szkmckaqtc', function(table) {
    table.json('rvxasyacrt');
    table.text('oimlrzinqv');
    table.float('zsrdhadxco');
    table.boolean('jdsunqypyy');
    table.timestamp('iezihpdlus');
    table.boolean('udxylpxuzw');
  });
  await knex.schema.alterTable('tnrsssuunp', function(table) {
    table.integer('mzvarmxyie');
    table.timestamp('qiuvtrcmbk');
    table.float('ofgftybook');
    table.text('npiadimswp');
    table.float('wkfwlojoxp');
    table.integer('zsyrbckqwh');
    table.text('hjtricsuvg');
    table.json('ppukajnijh');
    table.timestamp('lmulwgcdtr');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};