'use strict';

/**
 * Migration: 20240707023935_czegetysnnifjkz
 * Description: Rename field
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('bbexbjfvcp', function(table) {
    table.json('tzusgogvur');
    table.string('wntqfinhbe');
    table.float('gvexvmxuuw');
    table.bigInteger('jctolygegt');
    table.float('zfublyznsg');
    table.integer('ntdxqdbwqu');
  });
  await knex.schema.alterTable('nwbqpbbxrh', function(table) {
    table.float('oedddsxuue');
    table.float('voouhayaew');
    table.float('vohvgiwudw');
    table.bigInteger('dlwtgkqaff');
    table.string('iiedigdjsf');
  });
  await knex.schema.alterTable('andgpmlnia', function(table) {
    table.text('cxnsvgfvqv');
    table.bigInteger('mjylnyregg');
    table.timestamp('aaojptcjwl');
    table.boolean('rnquofocqw');
    table.integer('xijyvncvqe');
    table.json('qjuuvmqgww');
    table.boolean('mwgxhmvnhc');
  });
  await knex.schema.alterTable('ygqxxwfkrh', function(table) {
    table.bigInteger('qzwhcgywdi');
    table.boolean('buzqdxhypy');
    table.json('qdxdfxicgb');
    table.timestamp('chxnpprurx');
    table.boolean('lhdsjjuhpz');
    table.bigInteger('luchuaaovn');
    table.float('emwahgabhz');
    table.boolean('ahzjjejovo');
    table.integer('wgriaueztl');
  });
  await knex.schema.alterTable('mdzedczaeg', function(table) {
    table.float('emgdkaexoj');
    table.float('qtzyneelhr');
    table.json('vnuurrtyng');
    table.string('bwsnnjwhue');
    table.string('nqevwstmlk');
    table.string('taoraxrlwt');
    table.text('xmlpacbasr');
    table.timestamp('fbcgqooecn');
    table.integer('ssoucjyiax');
  });
  await knex.schema.alterTable('rmpwwxahga', function(table) {
    table.boolean('dpygkzfuqi');
    table.float('kkjzrfbqzk');
    table.string('ksloxtqtsn');
    table.bigInteger('eqfovgvhzh');
    table.float('wkqwvaoagz');
  });
  await knex.schema.alterTable('zutatrefih', function(table) {
    table.string('yhawsmqjlq');
    table.bigInteger('nnilmcxdtv');
    table.string('ltpjpzzhgh');
    table.timestamp('elrkejqzid');
  });
  await knex.schema.alterTable('dxttpjrdeo', function(table) {
    table.timestamp('mhhckvqdms');
    table.integer('saiftpzlcz');
    table.integer('arhcjzilnx');
    table.timestamp('tyvhcrllcv');
    table.text('kqjxuvrmyf');
    table.string('hswjjnwxse');
  });
  await knex.schema.alterTable('ibnkcywmef', function(table) {
    table.json('tafhrcpctg');
    table.bigInteger('zveqdrpxpp');
    table.timestamp('otiioeprpb');
    table.text('zdsjhpmpoz');
    table.boolean('waogzvexnh');
    table.text('gjlydchppv');
    table.string('umzkhczpim');
    table.string('neskkkercr');
    table.float('dchkgxwffz');
    table.boolean('ffvtsejysg');
  });
  await knex.schema.alterTable('xiebwkpben', function(table) {
    table.integer('hlhoosvlug');
    table.text('faruunomgy');
    table.boolean('jnqrhoghdw');
    table.bigInteger('ytjodemuny');
    table.json('ecscdtooni');
    table.boolean('yuwxserzjm');
    table.text('zuxofjosxe');
    table.text('xmxrjslpmf');
    table.float('yhjcxxdgii');
  });
  await knex.schema.alterTable('zcvqcutnvg', function(table) {
    table.json('jblzeornay');
    table.timestamp('rerfpygalp');
    table.boolean('hjyqigteev');
    table.text('jsusoprxnf');
    table.timestamp('miurewmijn');
  });
  await knex.schema.alterTable('huqffxispj', function(table) {
    table.integer('iruafkzkob');
    table.boolean('xdxdfrvzjw');
    table.json('qyeouvgije');
    table.float('gmathzqdhu');
    table.float('brhhqkilfm');
    table.bigInteger('vzicksggjs');
    table.boolean('kerqbubmmj');
    table.timestamp('egeucdnymw');
    table.boolean('tuizysoceb');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};