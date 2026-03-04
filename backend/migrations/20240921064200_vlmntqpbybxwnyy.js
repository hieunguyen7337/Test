'use strict';

/**
 * Migration: 20240921064200_vlmntqpbybxwnyy
 * Description: Redo the undo
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('nbcwrouoxt', function(table) {
    table.integer('cvkagdqgie');
    table.text('nubsimcdvy');
    table.integer('fejkitqqkf');
    table.text('kxvrnfoqec');
    table.text('ijwrmvjdwy');
    table.string('hhbrnnixlu');
    table.float('bhgmjgyhah');
    table.float('bmuxiebbtz');
  });
  await knex.schema.alterTable('cmstmbggnz', function(table) {
    table.json('tlrnxmzwnr');
    table.boolean('xgndihzdfx');
    table.bigInteger('qfeeorciad');
    table.bigInteger('pgnoroqcgh');
    table.bigInteger('tobwfgmbih');
  });
  await knex.schema.alterTable('yoieommfwd', function(table) {
    table.integer('ieyejdkmpm');
    table.integer('loutbbnfek');
    table.float('nereukxirk');
    table.integer('opwionotsy');
    table.boolean('letrbtwefd');
    table.text('xaosolfhwp');
    table.integer('zaprzgpldn');
    table.bigInteger('aziiudcdxd');
    table.json('jiwnbnjquy');
  });
  await knex.schema.alterTable('vhnsltjdkl', function(table) {
    table.timestamp('iuunqblmjk');
    table.boolean('qdiemrmlov');
    table.bigInteger('chmwkmlvqj');
    table.float('uxiwkqadip');
    table.string('nuxabswkld');
    table.bigInteger('uvbzmthuyj');
    table.bigInteger('qjzsdadwqv');
  });
  await knex.schema.alterTable('ujxdwnoqko', function(table) {
    table.json('oemrbyomrn');
    table.timestamp('omufymmhbp');
    table.boolean('btgnptseou');
    table.string('mjclfqajit');
    table.float('trpmtvxdxp');
    table.json('tilxtlyhjd');
    table.bigInteger('odetxltwaw');
    table.integer('vjelampgzp');
  });
  await knex.schema.alterTable('tkemnonybp', function(table) {
    table.timestamp('wfylryniod');
    table.integer('kozzyakscp');
    table.json('jbonzbkkjs');
    table.integer('vjenbmlqkl');
    table.bigInteger('wjdmhdkrhf');
    table.bigInteger('iamtcmjtrg');
    table.bigInteger('lwpjmzgerb');
    table.boolean('hnmfghikkm');
    table.timestamp('pzsjlfhksg');
  });
  await knex.schema.alterTable('klusdfnvbo', function(table) {
    table.float('eljepedukc');
    table.string('hwtkhgzasu');
    table.string('gqxerkwwjd');
    table.boolean('pgrrpqugyu');
    table.integer('spnjvqvinh');
    table.bigInteger('plmhmpezzu');
    table.boolean('ebgvpswrdj');
    table.timestamp('udcfwfocnl');
  });
  await knex.schema.alterTable('uefaefknvl', function(table) {
    table.boolean('cpoivmnvjr');
    table.json('acltocqwfv');
    table.boolean('novzifporw');
    table.integer('vdeqtozhwy');
  });
  await knex.schema.alterTable('pzuuyndzmv', function(table) {
    table.boolean('eevgikylsy');
    table.text('psjoeezvca');
    table.integer('dwcbatlssl');
    table.integer('kxtalhqhbt');
    table.boolean('ssrjqunuue');
    table.timestamp('tkvwhmaxyg');
    table.text('kphwfzwdpw');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};