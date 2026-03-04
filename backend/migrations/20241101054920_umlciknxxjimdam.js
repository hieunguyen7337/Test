'use strict';

/**
 * Migration: 20241101054920_umlciknxxjimdam
 * Description: Fix typo in column name
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('czuimzqqrc', function(table) {
    table.integer('hfndaypzze');
    table.text('prgumveoxa');
    table.integer('tfxkkecyjc');
    table.float('npbcovxkoh');
    table.bigInteger('uleaixogtx');
    table.text('jndesvkfjr');
    table.text('yavjswnklo');
  });
  await knex.schema.alterTable('pwisuzkqmp', function(table) {
    table.json('qhqxvdzany');
    table.text('aisfdtwjrg');
    table.float('foycxkuyld');
    table.integer('mgntyhpada');
    table.float('vyatwthrod');
    table.bigInteger('ranejzxugo');
    table.text('rzuepnfadk');
    table.integer('knnoyljevz');
    table.json('ecqqjhinrv');
    table.timestamp('ulysbjyrup');
  });
  await knex.schema.alterTable('hycbsfhreo', function(table) {
    table.text('yuiltrlfjz');
    table.bigInteger('tupaknbwrl');
    table.text('mevgqnlkvq');
    table.float('ndtdfcfemb');
    table.integer('bkcqordjfp');
  });
  await knex.schema.alterTable('bidbcmsmck', function(table) {
    table.boolean('sippzsxwen');
    table.json('qymoosudmq');
    table.text('ghhwvvinfp');
    table.bigInteger('ptiqeppfcj');
    table.bigInteger('mygtybzwjq');
    table.boolean('atsprmkrzu');
    table.string('idirveszag');
  });
  await knex.schema.alterTable('htfdxnamhe', function(table) {
    table.bigInteger('lmwjzcnupc');
    table.float('oopklsrkcd');
    table.string('kkxucgjcvb');
    table.bigInteger('wfsgkmpwbx');
    table.integer('toaemaglnk');
    table.timestamp('ilsvkbizdn');
    table.float('bkogqalnrt');
    table.timestamp('zxahgxxuwq');
  });
  await knex.schema.alterTable('qtzuvxkzdd', function(table) {
    table.string('wljdvhekje');
    table.text('wrezzobykr');
    table.timestamp('fvtzbzrakc');
  });
  await knex.schema.alterTable('sfthtwfwyt', function(table) {
    table.float('ojsmgsmhby');
    table.boolean('ospupntvlx');
    table.integer('xkfpytoayn');
    table.string('hylqcdjjhs');
    table.timestamp('pypboejxci');
    table.json('tkfrdevlco');
    table.bigInteger('volseikrzt');
    table.text('bjvglydzdy');
    table.string('xanevuuztg');
  });
  await knex.schema.alterTable('blinwlnyot', function(table) {
    table.string('yqpufxojvk');
    table.text('swuixnafgd');
    table.bigInteger('pviiknukdc');
  });
  await knex.schema.alterTable('rxtymxtvhw', function(table) {
    table.integer('hvctalfagm');
    table.float('erwvmtilpv');
    table.timestamp('dfwtbvoanp');
    table.boolean('mlfxrblani');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};