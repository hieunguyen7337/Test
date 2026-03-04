'use strict';

/**
 * Migration: 20241005173908_iwfdycqmaovmqph
 * Description: Fix typo in column name
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('hjjjoqolad', function(table) {
    table.text('vnfcigxwue');
    table.text('kjdiqwlfdt');
    table.float('xdukexgnqy');
    table.float('zmrvexpxve');
    table.boolean('hlhzpusifa');
    table.boolean('qsgqzsdqdj');
    table.text('nlzqzwmdhs');
    table.json('wvqpzqymma');
    table.text('iygijojpis');
    table.integer('ejbcvrnuph');
  });
  await knex.schema.alterTable('qcrnuhatkm', function(table) {
    table.string('pyfodlzjuf');
    table.text('iknboupubw');
    table.timestamp('tspuilstzu');
    table.text('xoaybmuimd');
    table.boolean('swlqktxiob');
    table.bigInteger('tkexrmtaof');
    table.boolean('mxsdvixcto');
    table.string('qdlsgamepd');
    table.integer('qxlnrivmqg');
  });
  await knex.schema.alterTable('qzoxdimoci', function(table) {
    table.text('dltgiwiqup');
    table.timestamp('gumbkjtxwl');
    table.bigInteger('bbbpucxkvy');
    table.boolean('iqmswpluzv');
    table.bigInteger('udfumrpljo');
    table.string('xeffnzwryi');
  });
  await knex.schema.alterTable('spvudxfyzg', function(table) {
    table.float('pxxdwlymhu');
    table.bigInteger('zvimfbvugm');
    table.string('eprwryzxsv');
    table.text('vsnmbysjph');
    table.json('jbjlzvfcoy');
    table.boolean('sntvolybey');
    table.text('kvirrgxxze');
    table.float('takvmovvvm');
    table.boolean('dzeesafvoj');
    table.boolean('jwxmzaqwwh');
  });
  await knex.schema.alterTable('yahhlnvhlf', function(table) {
    table.string('jigswozdan');
    table.integer('azcmrxwgms');
    table.integer('yuetaokyyc');
    table.integer('qexkkrztpc');
  });
  await knex.schema.alterTable('lrwgomxkmw', function(table) {
    table.float('jipxrpvjvu');
    table.float('xzepbfxcfy');
    table.float('wevwpxmnjj');
    table.integer('jdwmqarmck');
    table.text('oaupclhivq');
    table.float('dirvfwpaww');
    table.timestamp('kuaarpvgvi');
  });
  await knex.schema.alterTable('xktmcqkhqs', function(table) {
    table.bigInteger('sugmzrzvsg');
    table.timestamp('ahnbyhxryh');
    table.float('wdrvosieqd');
    table.float('vftsugqbvx');
    table.text('rypbsamddy');
    table.integer('dxnrevcbwj');
    table.bigInteger('eugnpkklef');
    table.float('fcsoxrusfu');
    table.integer('ilaovitykj');
    table.text('ozxahfmfjn');
  });
  await knex.schema.alterTable('bucukrfjwf', function(table) {
    table.integer('gpyqzayubr');
    table.integer('gzukoseomo');
    table.float('egbyqxdvyq');
    table.float('busyiticds');
    table.timestamp('hhyihjsgbu');
  });
  await knex.schema.alterTable('vzfgjjajta', function(table) {
    table.text('hufgbejmpp');
    table.text('aehvgztemv');
    table.float('rryjkgbggo');
  });
  await knex.schema.alterTable('tqnypttqkf', function(table) {
    table.string('pbwrlawnop');
    table.string('jgfzcgeekl');
    table.bigInteger('vzulxoqogb');
    table.string('gcxjctehsc');
    table.boolean('toxypzkgwr');
    table.string('pfsftcjkkc');
    table.integer('tdtlymyzcd');
    table.string('kevfjhdvoc');
    table.json('oepuwsncnp');
  });
  await knex.schema.alterTable('grurfrbumh', function(table) {
    table.string('bfbywbpbfc');
    table.json('jwahrdlaqq');
    table.json('tfngrgmlva');
    table.boolean('qnvtmfwefn');
    table.string('azjjmviexp');
    table.json('xiluzcwvyw');
    table.text('nizliyooah');
    table.timestamp('ikrtpnfxko');
    table.string('vvgbtsyisf');
    table.float('imnmzexofs');
  });
  await knex.schema.alterTable('oaajhzeese', function(table) {
    table.text('ggglduirrs');
    table.bigInteger('xyiivkmcpa');
    table.float('uzmmvnfqyt');
    table.bigInteger('dgarvhgmnx');
    table.float('tzcjsfftao');
    table.string('soggopniqh');
    table.string('irfhewomdw');
    table.text('lelyqfmwwa');
    table.timestamp('wxzyorifvv');
  });
  await knex.schema.alterTable('bctxnntwoz', function(table) {
    table.text('aqchimawnd');
    table.timestamp('djvgmlkjgr');
    table.integer('jtcmsdojrf');
    table.integer('cnhzhswmts');
    table.json('cfedbqfjpm');
    table.text('mqexeeynnr');
    table.float('ipdponjuzy');
    table.bigInteger('cfvghacbee');
    table.boolean('vsbgqwfrhd');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};