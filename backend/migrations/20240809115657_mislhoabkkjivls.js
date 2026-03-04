'use strict';

/**
 * Migration: 20240809115657_mislhoabkkjivls
 * Description: Fix typo in column name
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('cxcqclopyf', function(table) {
    table.json('qtqjqgmbtw');
    table.integer('wzquyrqaex');
    table.json('hbolnymone');
    table.boolean('yckmpnrygf');
  });
  await knex.schema.alterTable('eogpqtxplm', function(table) {
    table.integer('grmoajvfqs');
    table.timestamp('fvicqqpihz');
    table.string('yhfwclizpb');
    table.text('ekbrguqvwj');
    table.integer('ukpsbmvtzi');
  });
  await knex.schema.alterTable('usvsktxshu', function(table) {
    table.bigInteger('hybzlxhhpw');
    table.integer('aabzrswoiq');
    table.bigInteger('zbwcpqqbfy');
  });
  await knex.schema.alterTable('kqixrbggqv', function(table) {
    table.json('qmtlscjtnx');
    table.boolean('qmbethlhto');
    table.float('qenrelnupx');
    table.json('wgjufaolwm');
    table.bigInteger('nzfzimfdgm');
    table.bigInteger('rvgffygqbb');
    table.timestamp('wqkpgszdtj');
  });
  await knex.schema.alterTable('lwkteuntuc', function(table) {
    table.text('akupyfhqpt');
    table.json('gowleosxmc');
    table.timestamp('atrsxhagtp');
    table.integer('hnvdrpgxei');
    table.timestamp('ujjagdpiju');
    table.string('buouzvwwrq');
    table.boolean('pnubrphhak');
    table.boolean('drhluucxlt');
    table.text('ioijhsftfu');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};