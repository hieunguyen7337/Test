'use strict';

/**
 * Migration: 20240418145636_xqxspjjtzeodlfe
 * Description: Rename field
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('ndbgafvaro', function(table) {
    table.boolean('pxeioxpexp');
    table.bigInteger('dylbdrizrl');
    table.integer('rarxnznhua');
    table.boolean('ijvgttwyiy');
    table.boolean('geqccixccn');
    table.string('fxtwhjurxw');
  });
  await knex.schema.alterTable('imgpoqcxyx', function(table) {
    table.bigInteger('wubqtvkfzr');
    table.string('tgojqgojlq');
    table.bigInteger('zparvfzqzb');
    table.string('lxtxdtnskp');
    table.timestamp('mnxzqcvjkj');
    table.float('rxowzavydl');
    table.float('jecnpskisp');
    table.float('kafvdhiobk');
    table.bigInteger('aaotytsysb');
    table.json('nwxkzlogsb');
  });
  await knex.schema.alterTable('bwfnbxfmqb', function(table) {
    table.timestamp('bomyieifgl');
    table.json('uhrdxmqyes');
    table.bigInteger('ncrwpofrzo');
    table.float('rusmomrdje');
    table.text('tpdncgtvnr');
    table.boolean('qxjzbebrjp');
    table.boolean('twgiyxdgqr');
  });
  await knex.schema.alterTable('xkvsnzccjp', function(table) {
    table.integer('jimivxjzda');
    table.integer('roqwiajjsw');
    table.float('vdsxxuuqit');
    table.bigInteger('fbypxziipu');
    table.boolean('ewoioqbofx');
    table.json('fcvzzaoram');
  });
  await knex.schema.alterTable('dcgzmumrft', function(table) {
    table.text('ibhmkkykqq');
    table.integer('lewgzaimlc');
    table.bigInteger('fdokluxzjd');
    table.json('hxwvzthwnv');
    table.float('zsdmnxkhhy');
  });
  await knex.schema.alterTable('kikqntidty', function(table) {
    table.bigInteger('nsfeihfmsr');
    table.string('fisyrzlfxz');
    table.float('bhgldllrzr');
    table.text('wquwjjhymq');
    table.bigInteger('qovppuocye');
    table.timestamp('xufxwstmac');
    table.text('sotgjypvfu');
    table.string('tvsiabdksu');
    table.json('hkbxfaokux');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};