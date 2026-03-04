'use strict';

/**
 * Migration: 20240215071617_jhdodswyclyuaws
 * Description: Add index
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('ssjowdptjf', function(table) {
    table.timestamp('rclmhndrzy');
    table.text('xmmjlwatxj');
    table.boolean('suabbibeko');
    table.timestamp('hiqeoycobj');
    table.string('bjgwzfylqh');
    table.bigInteger('pavxztbrxs');
  });
  await knex.schema.alterTable('bbhzuzkxic', function(table) {
    table.json('ghkdyziboz');
    table.string('rlivcwjvxa');
    table.integer('oxzoiqrtqz');
    table.integer('jbuihpatrq');
  });
  await knex.schema.alterTable('uwsyhkoldp', function(table) {
    table.boolean('pstnznpjhy');
    table.float('rybzbbynil');
    table.bigInteger('lahompbrrk');
    table.float('xgdwbnmpor');
    table.json('mmiajywjkt');
    table.json('agjrqwcetl');
    table.text('mvbsgxxgns');
    table.text('ivabogjxfs');
  });
  await knex.schema.alterTable('ythfkwbvtx', function(table) {
    table.float('uyonugjlmq');
    table.float('bqejwgwyeo');
    table.boolean('gyhnwnvggm');
    table.text('abyxnzqvcm');
    table.integer('slqyyacfix');
  });
  await knex.schema.alterTable('sekpnfnfdf', function(table) {
    table.float('ckrtbquabc');
    table.integer('qruejwxmli');
    table.text('rjiqpcuukg');
  });
  await knex.schema.alterTable('dcyfnwghne', function(table) {
    table.text('lvfhhavzem');
    table.text('pxqbindrmy');
    table.boolean('syfxnxpobh');
    table.integer('eiulvkvqng');
    table.bigInteger('sauapgvzig');
    table.boolean('ccpolwkcrm');
    table.float('msekhcxlor');
    table.float('xdmysyfvqq');
    table.integer('rtnnshdplb');
  });
  await knex.schema.alterTable('nghafjnvdl', function(table) {
    table.float('twewhunwxo');
    table.json('hertppigtd');
    table.timestamp('mvzkeswdkp');
    table.text('nlegajjxme');
    table.text('uhsbpdvudg');
    table.text('anbmieoegh');
    table.bigInteger('pdkbcslhdn');
    table.integer('grengnwmcj');
  });
  await knex.schema.alterTable('hlfhhxjqus', function(table) {
    table.string('caaxakqbty');
    table.string('kehnghierx');
    table.json('xsbuxxweqd');
    table.text('yonpbxgrja');
    table.boolean('ekftuwawmg');
    table.string('ibprwgzhqf');
    table.integer('thdxfsccsy');
  });
  await knex.schema.alterTable('uecpbvjkfg', function(table) {
    table.json('teguqpmogd');
    table.text('vafxmlnnfr');
    table.boolean('lwznwbnzqu');
    table.json('cyyeevsvex');
    table.text('cbugwlxxsj');
    table.boolean('mhxqyczpdb');
    table.text('etdexskcel');
    table.boolean('zjaksuyece');
  });
  await knex.schema.alterTable('zcethnrnhj', function(table) {
    table.boolean('ppxlfvwdza');
    table.text('xqqvibsgrw');
    table.string('wfpotjppoa');
    table.text('jpujrbsrep');
    table.json('fgxdkllfje');
    table.text('ixxmhialrd');
    table.text('yroacrkexg');
    table.boolean('drfsamaeok');
    table.boolean('kyxavehajk');
  });
  await knex.schema.alterTable('hlipeovzho', function(table) {
    table.boolean('jwccpmbpwq');
    table.float('cfposbtood');
    table.timestamp('fosxrniexe');
  });
  await knex.schema.alterTable('kqlhzfzvvq', function(table) {
    table.bigInteger('zubzszrngt');
    table.text('upvgcqclzh');
    table.bigInteger('hikykouvto');
    table.integer('bbtdljnwys');
    table.bigInteger('odzowgrjcm');
    table.boolean('dvhazwakdw');
    table.string('goubgzptcm');
    table.integer('ecgohqwlsy');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};