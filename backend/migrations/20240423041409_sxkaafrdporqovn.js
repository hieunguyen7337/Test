'use strict';

/**
 * Migration: 20240423041409_sxkaafrdporqovn
 * Description: Create table
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('rpzejsbjoj', function(table) {
    table.timestamp('vfcprkibkd');
    table.integer('ebqssipbha');
    table.string('pwwbwhspeb');
    table.boolean('kgmkvoeoaf');
  });
  await knex.schema.alterTable('dekiemhbpb', function(table) {
    table.text('qtutesoaim');
    table.json('fyxzbbpbey');
    table.timestamp('eytmvtufyl');
    table.string('mednqabdzq');
    table.timestamp('gcoygoujgr');
    table.float('tpustlvhii');
  });
  await knex.schema.alterTable('nnoklxvppr', function(table) {
    table.json('vzeqypywkx');
    table.json('dwjlhqgocr');
    table.boolean('nrmtvkhqft');
    table.text('lgmjkmawcw');
  });
  await knex.schema.alterTable('xvyjszdctm', function(table) {
    table.boolean('hajqbcnakf');
    table.float('rylqgmvsfj');
    table.timestamp('ybncyvjnoc');
    table.float('oswhvxhstr');
    table.json('rlvhlqqxmd');
    table.integer('nkqegqajvb');
  });
  await knex.schema.alterTable('qeuwnqvsay', function(table) {
    table.timestamp('ymgjejppfk');
    table.bigInteger('sbvoqqznna');
    table.text('aozqbdfmln');
    table.timestamp('ovztyppppb');
    table.bigInteger('ylyutxcoap');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};