'use strict';

/**
 * Migration: 20240602225445_cvzzbbgwcberaxx
 * Description: Add column
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('vrxydmsdgc', function(table) {
    table.json('pklwqdqrsj');
    table.boolean('hsntxetijw');
    table.boolean('noloqwneyw');
    table.integer('luafrbzhqv');
    table.bigInteger('cbmokcnfrm');
    table.integer('iqbkudzynt');
    table.float('hycskflqdc');
    table.bigInteger('yluljigqza');
    table.text('cwlujahksw');
  });
  await knex.schema.alterTable('haxiffyjav', function(table) {
    table.text('owymlzytxm');
    table.bigInteger('szvgaissyt');
    table.text('thktjtxoap');
    table.boolean('aykyubcnoz');
    table.string('tasrrppytq');
  });
  await knex.schema.alterTable('lhbfnqebqg', function(table) {
    table.timestamp('jftfrxffuo');
    table.string('lloqhzoxmx');
    table.float('lldcoecgrf');
    table.string('zxiewhewkg');
    table.timestamp('tvibhfsdrj');
    table.boolean('hangsfqnmx');
    table.float('mwxqttpenf');
    table.string('uofndblrzw');
  });
  await knex.schema.alterTable('rknwpiooml', function(table) {
    table.text('nvtnedsyxx');
    table.boolean('nmqouiljav');
    table.float('yudkujvipz');
    table.boolean('hcwqyoztcj');
    table.string('eqqbpmepyf');
    table.json('fyndboogpv');
    table.string('mlftczwyrr');
  });
  await knex.schema.alterTable('dsuqvotupn', function(table) {
    table.integer('vgnfoishpl');
    table.boolean('jdxrldlhln');
    table.timestamp('qqkqlocqfd');
    table.bigInteger('xltmpfevqu');
    table.text('mbzbaurhdr');
    table.string('mwqtgqxxai');
    table.float('gqhryyyexz');
    table.text('ztdbnpdgem');
  });
  await knex.schema.alterTable('rduyyyikrz', function(table) {
    table.integer('mklqemwxck');
    table.string('flkievaikk');
    table.float('wgqpmwzebn');
    table.boolean('gjdivelasu');
  });
  await knex.schema.alterTable('frvkpbzpfr', function(table) {
    table.boolean('lfriwrndyx');
    table.timestamp('ttwqdfdbxe');
    table.float('vupxhshnws');
    table.boolean('ahetucdawg');
    table.integer('igegnccyqa');
    table.float('zqznqkfwdp');
    table.text('zwkkkfrvqk');
    table.json('ihblbbpkrf');
    table.timestamp('onqcldqoxr');
    table.integer('umexhvisyk');
  });
  await knex.schema.alterTable('huwkjgdmwn', function(table) {
    table.json('icsptttyta');
    table.integer('asdusspuqi');
    table.string('xgitdusook');
    table.float('uuxmekltgf');
    table.float('ddtujcuhmn');
    table.float('jqzojhtmfj');
    table.json('mzxxzdmklz');
    table.boolean('rtmvaakfvz');
    table.timestamp('crmtxlvdsd');
  });
  await knex.schema.alterTable('afxtmkusna', function(table) {
    table.boolean('xakmlqyhel');
    table.text('qpohcxopgx');
    table.boolean('tymqtveexy');
    table.boolean('dmlhlanluk');
    table.bigInteger('wensgyprpk');
    table.timestamp('mnowevgwur');
    table.text('sieqqbzpmf');
  });
  await knex.schema.alterTable('cdufiwfawb', function(table) {
    table.boolean('keezmqdypz');
    table.float('hoojbthtoq');
    table.integer('ptbnolbwrv');
    table.text('qacvyzuvxk');
  });
  await knex.schema.alterTable('wndzegulby', function(table) {
    table.boolean('eqalsrtuqb');
    table.timestamp('uerarhtmqo');
    table.integer('gbzpxxxguu');
    table.bigInteger('gyrubnyzwz');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};