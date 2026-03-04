'use strict';

/**
 * Migration: 20240515055106_cspohuthdvupzzn
 * Description: Drop table
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('ucqioxaozk', function(table) {
    table.string('uycvjrqhtr');
    table.float('buqtwnaicf');
    table.json('ptezgblmvy');
    table.timestamp('hocnmnflex');
    table.text('kyuaqxguwm');
    table.timestamp('ljurjmfhlw');
    table.string('fyzzimztmo');
    table.text('nfghkztbne');
    table.integer('vvbmdsxxes');
    table.float('aqgcjdlupr');
  });
  await knex.schema.alterTable('qnubajeghc', function(table) {
    table.string('fgygmxbddy');
    table.bigInteger('nnribbmwvy');
    table.timestamp('snflfrtbyc');
    table.integer('djgkxyxilp');
    table.string('afbmmsnjuu');
    table.bigInteger('smgxvbomit');
    table.json('bvnwgtgnvd');
    table.text('fznfvrnxme');
  });
  await knex.schema.alterTable('offbiicvot', function(table) {
    table.json('adulmcnbvv');
    table.bigInteger('dvzdhqugtb');
    table.float('tpanazcgpi');
    table.json('kjxgwibjcc');
    table.timestamp('fqzbtzrmzl');
    table.string('hyvgazcmdv');
    table.timestamp('hhzulyduoj');
  });
  await knex.schema.alterTable('wjgjqtotyq', function(table) {
    table.string('xvgzkknpcq');
    table.float('npzqopopqg');
    table.boolean('iauzwofhkx');
    table.string('acmjuwajpy');
    table.integer('cldrtrdtbt');
  });
  await knex.schema.alterTable('hoyrdbidkz', function(table) {
    table.text('adlltfffem');
    table.string('vgroqdoyvc');
    table.integer('krtvvnrtkv');
  });
  await knex.schema.alterTable('kbsiogeinf', function(table) {
    table.boolean('nidxtaluqc');
    table.integer('jtysvarbkm');
    table.text('nnugjcathc');
    table.json('hnxmsfcgpm');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};