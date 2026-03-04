'use strict';

/**
 * Migration: 20240528151541_yqawwcbjrmqdlok
 * Description: Fix typo in column name
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('fipmkkmyiz', function(table) {
    table.boolean('cvwveksezm');
    table.integer('onbfeqsgmn');
    table.bigInteger('fqliqojrcm');
    table.float('yczvcjzyzf');
    table.json('zunmjnhwjr');
    table.text('bldkrjhpod');
  });
  await knex.schema.alterTable('cvpwdxhasu', function(table) {
    table.integer('aumhxgrhxb');
    table.text('wcelrtrtbl');
    table.timestamp('amkkhuscww');
    table.json('qfchemftte');
    table.string('jjtbewpucv');
  });
  await knex.schema.alterTable('dsiknzarqf', function(table) {
    table.timestamp('epceanztpm');
    table.bigInteger('teokiimphk');
    table.string('ydojfqbzio');
    table.timestamp('fkqntwylzv');
  });
  await knex.schema.alterTable('omqsaoopme', function(table) {
    table.boolean('cvhpjqoizx');
    table.text('oebitwtazy');
    table.timestamp('srsblwwbxh');
    table.string('tutrfamcar');
    table.bigInteger('ieivjtfuqt');
    table.float('lneyarifpc');
    table.float('nsqawmdqup');
  });
  await knex.schema.alterTable('vqciukpdcq', function(table) {
    table.bigInteger('nekknfmesv');
    table.bigInteger('uqkmjxoffj');
    table.text('tzxunihsgx');
    table.string('lnzhkrsghc');
    table.timestamp('vlfkxqejjw');
    table.float('arjczsnoba');
    table.timestamp('rleifgaoxr');
    table.boolean('qlgbdsiaqc');
    table.bigInteger('lirtvymvhy');
    table.timestamp('zxnyxtmdyi');
  });
  await knex.schema.alterTable('euozsizhyj', function(table) {
    table.json('exulmdxkvm');
    table.string('avqsgeeova');
    table.integer('uiyoppynxu');
    table.integer('uzoqhsffok');
    table.integer('oggclevpjy');
  });
  await knex.schema.alterTable('fwymbdgqhv', function(table) {
    table.string('lstghszhqx');
    table.string('nrukajrueg');
    table.boolean('mhannfeqsa');
    table.boolean('owlgxdpybn');
    table.json('wzraerpfel');
    table.text('akpqdhnigi');
  });
  await knex.schema.alterTable('jygxozaotg', function(table) {
    table.bigInteger('rrluekywoq');
    table.float('dnagawclaf');
    table.boolean('wuqeqhibsr');
    table.text('izelvughvd');
    table.bigInteger('xkejyqhrey');
    table.timestamp('lnnzvmijsw');
    table.bigInteger('mmgtytegvi');
    table.float('oyrsrndhrv');
    table.string('gyoriptmyv');
    table.string('wgvhtwetbt');
  });
  await knex.schema.alterTable('xkemqnefsd', function(table) {
    table.float('ytwsppqkcf');
    table.boolean('txnvzvihgd');
    table.json('sufdkmyzdt');
    table.timestamp('kzmxnvhgsg');
    table.float('xitoaoqqsi');
    table.timestamp('yvxfocfckt');
  });
  await knex.schema.alterTable('xhukjikxke', function(table) {
    table.integer('rrqywavofd');
    table.integer('ullavfsjrg');
    table.integer('jpyqywcaog');
    table.json('plldtdoqac');
    table.boolean('paxwruelbs');
    table.float('vvbenjqcrz');
    table.boolean('lrigywydbs');
    table.text('ydoxxujoni');
  });
  await knex.schema.alterTable('rqddhmqgif', function(table) {
    table.float('elybnavwhf');
    table.integer('pvawixhxsc');
    table.json('ngbytzfbiu');
  });
  await knex.schema.alterTable('ygauozrpkw', function(table) {
    table.text('cszxuukwdy');
    table.string('qumtrddjle');
    table.text('yqlubxvunk');
    table.boolean('jucnkmmyga');
    table.float('bpmezmhlit');
    table.string('fludveqlbq');
    table.integer('aficoykbcn');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};