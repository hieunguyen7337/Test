'use strict';

/**
 * Migration: 20240809160147_arfzbodsexbdquv
 * Description: Please work this time
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('vuwzmtgmma', function(table) {
    table.integer('etuuumcicc');
    table.integer('cifgugyybs');
    table.boolean('oobgzldagj');
    table.text('yrmzldtqzr');
    table.float('gcseruggtj');
    table.boolean('zmgdffzxtr');
    table.text('kikgyyzsdh');
  });
  await knex.schema.alterTable('zvqjrsctxd', function(table) {
    table.timestamp('sdjktojoyi');
    table.bigInteger('injgbucyry');
    table.integer('whacljjuep');
    table.bigInteger('xpkyumchmy');
    table.boolean('yobcohhwci');
    table.bigInteger('gpdezghpvq');
    table.integer('akdqvuepbe');
  });
  await knex.schema.alterTable('hcyfzkphue', function(table) {
    table.bigInteger('qtjpnydhrn');
    table.string('otkgpywctn');
    table.text('vlaettfgtp');
    table.float('ggobxfkygl');
    table.integer('jfnfqwewfg');
    table.string('kmmkpsnwib');
    table.float('ybwdufujzx');
    table.timestamp('nvniqkxevy');
  });
  await knex.schema.alterTable('jbixangynn', function(table) {
    table.boolean('ebivasrcqe');
    table.string('tsqibzlhwj');
    table.boolean('svwxbvsnwv');
    table.timestamp('uddpnwidwn');
    table.string('xjdsldaoug');
    table.float('ktekftggxp');
    table.json('bvecuamiyw');
    table.timestamp('axzurjdsxo');
    table.string('zixyxzdoek');
  });
  await knex.schema.alterTable('gxraaeyuzl', function(table) {
    table.json('zhnlboylfn');
    table.string('edmnzlpoxg');
    table.boolean('ovmhwvrmkz');
    table.bigInteger('rlxqpxnzuf');
    table.float('ywmmbsnkkj');
    table.timestamp('qwqaihzoma');
    table.integer('wmcdiphsbl');
    table.bigInteger('ykqpkpjied');
    table.string('zunjcvspzq');
  });
  await knex.schema.alterTable('enzcwmnjsx', function(table) {
    table.boolean('acenogqxnx');
    table.boolean('itkhgiadgm');
    table.float('rngyqsmzuk');
    table.string('orwmoxgctp');
    table.string('pdkkbodwnx');
    table.timestamp('kxptaqgkcz');
    table.json('dhxztfuvdz');
    table.text('sntsubrdpg');
    table.string('cxzxqrlofx');
    table.json('krwghqhgrd');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};