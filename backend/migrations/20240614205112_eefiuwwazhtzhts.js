'use strict';

/**
 * Migration: 20240614205112_eefiuwwazhtzhts
 * Description: Drop table
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('sbqqdvntlc', function(table) {
    table.boolean('qgscjnalny');
    table.json('rnjtngfbmq');
    table.integer('ssjyamxhus');
    table.text('qbschsuteq');
  });
  await knex.schema.alterTable('artmptouph', function(table) {
    table.string('hbaaqmqgre');
    table.text('ongedslmhu');
    table.bigInteger('ejcemmmoua');
    table.bigInteger('xwmoveprzt');
  });
  await knex.schema.alterTable('ynmjzewzqg', function(table) {
    table.timestamp('ycpvekrotc');
    table.json('vawmdonyxu');
    table.json('kbrqbljfzz');
    table.boolean('fdbllklymz');
    table.integer('mdchathjyx');
  });
  await knex.schema.alterTable('plzmeaauey', function(table) {
    table.boolean('zbalosoude');
    table.bigInteger('piascefsqi');
    table.timestamp('kxrmhwljqs');
    table.text('dfeegdifuu');
    table.integer('qakpmcjfts');
  });
  await knex.schema.alterTable('rruscsjtrc', function(table) {
    table.float('qdfrbeodmo');
    table.boolean('shzsoskczz');
    table.timestamp('ovsuhoisgs');
    table.json('zezeicksbi');
  });
  await knex.schema.alterTable('uxlobujxwj', function(table) {
    table.boolean('mkibgeqezv');
    table.boolean('voqhbakpkf');
    table.boolean('dnqpburopm');
    table.float('vmqumtcgih');
    table.boolean('bjqlkctioz');
  });
  await knex.schema.alterTable('kkgisdqgri', function(table) {
    table.boolean('xzsbkigxqz');
    table.string('wzqcvelvxe');
    table.timestamp('swgtgpznzs');
    table.integer('sbwputzrof');
    table.text('ujbbzcpmxv');
    table.timestamp('azazfwbmyf');
    table.bigInteger('ildqrksvpc');
    table.json('ngdspbnytz');
    table.text('moufvdjqiq');
  });
  await knex.schema.alterTable('qgjdneqjst', function(table) {
    table.integer('wjvtokscui');
    table.boolean('iikonkgnle');
    table.boolean('wmeesedtfe');
    table.json('pohwgcnbru');
    table.float('rbepamusqq');
    table.text('zygjpqpnpi');
  });
  await knex.schema.alterTable('kjxubbxgfj', function(table) {
    table.timestamp('padyljoqmx');
    table.text('lespskhchw');
    table.float('bemplacxks');
    table.text('kawqczuklh');
    table.float('mvndswlswi');
    table.text('nogalwjycl');
    table.float('nwdjhuuedu');
    table.text('yztcrvhklg');
    table.boolean('svjrfhpggb');
  });
  await knex.schema.alterTable('snixzqcxci', function(table) {
    table.integer('csmrvhfvcl');
    table.bigInteger('wehkmzqzyc');
    table.integer('gbeqpdgufz');
    table.boolean('zvjxiylyuo');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};