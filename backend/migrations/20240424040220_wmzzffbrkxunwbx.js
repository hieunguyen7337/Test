'use strict';

/**
 * Migration: 20240424040220_wmzzffbrkxunwbx
 * Description: Redo the undo
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('grschgjspq', function(table) {
    table.timestamp('ndmokzyrgu');
    table.text('uskvgkizkq');
    table.json('xrrnstdzbh');
    table.integer('quxhsmxent');
    table.float('ycbabkhwjy');
    table.timestamp('venyxzmyuk');
    table.boolean('ixcelmoasg');
    table.string('qrzgglzzeb');
    table.string('ficsyrpuhm');
  });
  await knex.schema.alterTable('bnrrnatibw', function(table) {
    table.json('fqtkpkfaek');
    table.bigInteger('ptxoaqjyxb');
    table.json('gkunyvieio');
    table.string('qzabqpqfdf');
    table.boolean('qoxqbvvapi');
    table.timestamp('vftkszdrnf');
    table.integer('rrfhvlglur');
  });
  await knex.schema.alterTable('gdbhpxnqfb', function(table) {
    table.json('qbpmfvctkq');
    table.float('hugyqxkqhk');
    table.timestamp('qlwxkfrgqx');
    table.timestamp('ihwjebrvlf');
    table.boolean('ltkodlrfsm');
    table.integer('xlansvsceq');
    table.boolean('cthlmzuabe');
    table.integer('plonkxitgm');
    table.bigInteger('yeaerwpkaq');
  });
  await knex.schema.alterTable('pvldoapvhm', function(table) {
    table.json('wwjvhuhupz');
    table.boolean('hkatvhtcdq');
    table.float('ofvlcjqckg');
    table.boolean('roqjyiatcm');
    table.string('pupoklvwth');
    table.integer('zdzuxrmwys');
  });
  await knex.schema.alterTable('vinizmfgit', function(table) {
    table.bigInteger('vxznnfnbet');
    table.timestamp('lueurdkprr');
    table.text('nndgdmoyck');
    table.boolean('sqsvsoczgq');
    table.string('sddvwetkza');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};