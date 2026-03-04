'use strict';

/**
 * Migration: 20240922063626_mmjoeftkbeidsvy
 * Description: Drop table
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('cexrohvpou', function(table) {
    table.json('chvumggiaj');
    table.timestamp('xutgecqizz');
    table.text('ublklraljh');
    table.string('eoazznvprp');
    table.bigInteger('bhvgnrtrec');
    table.float('drlizrueff');
  });
  await knex.schema.alterTable('wdwuqqotwk', function(table) {
    table.float('xnfqiigjuf');
    table.bigInteger('udxzaiczgq');
    table.integer('dmcgqzcwwx');
    table.text('qeetsgmjub');
    table.timestamp('akwpdsqrsc');
    table.string('qtrohunvlq');
    table.integer('hsoatgujwo');
  });
  await knex.schema.alterTable('eheuqfmiwq', function(table) {
    table.boolean('jxmwpzikmu');
    table.string('aoppsyjjhq');
    table.text('tmiwbbnmwh');
    table.boolean('jqsbehfbeg');
    table.bigInteger('qlhvsorlms');
    table.text('rhqfdaseus');
  });
  await knex.schema.alterTable('duzvhrdcra', function(table) {
    table.bigInteger('qmcgdvbecm');
    table.boolean('paeczzwnbg');
    table.text('dkfhbqefak');
    table.bigInteger('ltkrlvbcoo');
  });
  await knex.schema.alterTable('qfvjuuuate', function(table) {
    table.json('eupyjzezfj');
    table.json('ofaglthjkf');
    table.integer('clqbydstqz');
    table.json('usqhkqhwfe');
    table.string('ziumgnlqxm');
    table.boolean('ntnuflnxua');
    table.boolean('pekhdmnuic');
    table.json('frlbgqjqhw');
    table.bigInteger('kykimaillb');
    table.bigInteger('glsmgbwxhw');
  });
  await knex.schema.alterTable('mjfuefwydh', function(table) {
    table.text('xjbyidlmyu');
    table.text('yahbprtcno');
    table.string('bonbcvnoyx');
    table.bigInteger('ehnhykqrkg');
    table.string('exfmlpmeci');
    table.integer('ktlcijnjwr');
    table.float('uryazigita');
    table.string('tgabirrmwu');
    table.json('nodapoipuw');
  });
  await knex.schema.alterTable('ulbtbjyukd', function(table) {
    table.timestamp('oqrzzjntwq');
    table.timestamp('sidsjoijuy');
    table.json('wlbcajhdgf');
    table.string('csnynoxzub');
    table.timestamp('chcnoclpvo');
    table.text('zlnmisfgbz');
    table.string('laedkendny');
    table.text('kkfbvkbism');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};