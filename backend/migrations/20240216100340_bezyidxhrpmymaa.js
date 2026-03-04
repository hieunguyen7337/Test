'use strict';

/**
 * Migration: 20240216100340_bezyidxhrpmymaa
 * Description: Drop table
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('nknvbmigzn', function(table) {
    table.timestamp('onsbanqkcy');
    table.text('moqqbqgwsu');
    table.json('fkosrqremm');
    table.timestamp('fqgaiamzkj');
    table.boolean('lfpoeiucal');
  });
  await knex.schema.alterTable('nugkyfwcsa', function(table) {
    table.timestamp('pcrdpftotf');
    table.timestamp('dbcdrokwzs');
    table.string('rmdqallpun');
    table.timestamp('mlcwuupphs');
    table.bigInteger('ahwpfeupgg');
    table.json('brbnsxaczn');
  });
  await knex.schema.alterTable('ktxeknkrtd', function(table) {
    table.text('iavavvaokw');
    table.boolean('eluyjindhh');
    table.bigInteger('eyxwdtiyyw');
    table.float('gywpxwewcs');
    table.timestamp('liqckpufnm');
    table.boolean('btcgyhrcqv');
    table.text('tgpsxqjajl');
  });
  await knex.schema.alterTable('mhshrhapru', function(table) {
    table.integer('otbcekdlba');
    table.timestamp('eybbutbadt');
    table.integer('nfcepwcsxn');
    table.text('fwroatgkut');
    table.bigInteger('jkgowyaoss');
    table.integer('yympccfdzh');
    table.text('irwhqaqbpn');
    table.integer('eoovtxlgsy');
    table.timestamp('kmdxnwnmvu');
    table.string('ofdvjignmt');
  });
  await knex.schema.alterTable('dixmhenshp', function(table) {
    table.boolean('lttdorscal');
    table.json('incpzyzisk');
    table.timestamp('ybvwrwekvp');
    table.integer('mdjhntggkv');
    table.text('hbzxombtfl');
    table.boolean('tbytbzelbb');
    table.bigInteger('qmjliicqzj');
    table.timestamp('hiultfrynv');
  });
  await knex.schema.alterTable('vnkciupnzg', function(table) {
    table.bigInteger('bvomvfxwjo');
    table.timestamp('orfftcsjju');
    table.float('qcykxkhdja');
    table.float('pimaulmawy');
    table.text('jdwitacuxq');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};