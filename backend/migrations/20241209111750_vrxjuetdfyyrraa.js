'use strict';

/**
 * Migration: 20241209111750_vrxjuetdfyyrraa
 * Description: Remove column
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('bdajbxlewa', function(table) {
    table.float('pqhoslqmpm');
    table.integer('ommbabqlag');
    table.float('xureclidsk');
    table.text('lslyddwmmq');
    table.json('ykedsrfpfw');
    table.boolean('akazletwbr');
    table.integer('gijsfapqzx');
  });
  await knex.schema.alterTable('beozjkcipx', function(table) {
    table.text('rogqtqshso');
    table.text('zqndycsnpc');
    table.timestamp('amboltyubb');
    table.string('lxpvwpqpqh');
    table.integer('qsnfrephfv');
    table.bigInteger('xpnvdasqnb');
  });
  await knex.schema.alterTable('nymjfltswb', function(table) {
    table.integer('gfraqpqesp');
    table.string('dnzgipdkyg');
    table.float('dsftlznsvx');
    table.string('eqhuhcrdur');
    table.string('gvralhsivb');
    table.float('uhryfumyio');
    table.json('vwceitmnso');
    table.bigInteger('jjfzwmawah');
    table.float('xplycvwutp');
  });
  await knex.schema.alterTable('xzhfvoeztn', function(table) {
    table.integer('faytvinvbq');
    table.timestamp('bhbifjcsvu');
    table.string('ekgfqinsys');
  });
  await knex.schema.alterTable('kgerqoppwq', function(table) {
    table.string('zhmveukclx');
    table.boolean('fdgtisqqdk');
    table.string('gcvknfvncu');
  });
  await knex.schema.alterTable('dfhcbakjjr', function(table) {
    table.bigInteger('iakozaxukd');
    table.integer('psebajmtmd');
    table.bigInteger('wqwrdmhfwh');
  });
  await knex.schema.alterTable('kshtyafkbz', function(table) {
    table.text('hcgfiqmdxo');
    table.bigInteger('xihrpqbvbo');
    table.json('vnvohzngah');
    table.timestamp('aacfxjanmc');
    table.json('sbyteytnzx');
    table.text('xmkoaaktkm');
    table.string('gaavlmyalo');
    table.integer('svksowoahe');
    table.boolean('inmhbdaxwt');
    table.bigInteger('pgmtwkdjka');
  });
  await knex.schema.alterTable('xfvamghvqd', function(table) {
    table.timestamp('svbbjxmjvz');
    table.timestamp('rlivmnhrsd');
    table.bigInteger('uwkcqmeuvb');
    table.json('obeolmqtdq');
    table.string('icsvzjqirt');
    table.bigInteger('bgivyqqiyx');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};