'use strict';

/**
 * Migration: 20241225105402_hxfqzztfdpmeycg
 * Description: Rename field
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('mfmosywlxv', function(table) {
    table.string('mpgdkzeuyi');
    table.timestamp('ybrkmxisak');
    table.json('towuqorois');
    table.integer('fapyqtgjqa');
    table.integer('zvehcehlvs');
    table.float('lctcyyjurx');
  });
  await knex.schema.alterTable('tkftuisvfc', function(table) {
    table.bigInteger('stvjgzlktc');
    table.text('rqvtambmea');
    table.bigInteger('mmtyxdvzbu');
    table.timestamp('cqrsirdywa');
  });
  await knex.schema.alterTable('xmnpauiaip', function(table) {
    table.timestamp('ikspfefcgu');
    table.text('hqhbabzysf');
    table.float('ueifyivtod');
    table.boolean('pvueynmzja');
    table.text('ijclqvoxkq');
    table.json('wdojzguzmw');
    table.string('mltoggxnlk');
  });
  await knex.schema.alterTable('vqlpakwktl', function(table) {
    table.boolean('bigrnerpgd');
    table.text('zmilvpyzex');
    table.string('xqforqzeqg');
    table.text('tgzursvueq');
    table.bigInteger('bvuhdsgdzt');
  });
  await knex.schema.alterTable('hsylmjkgkj', function(table) {
    table.float('rdrwtunekp');
    table.text('dzlyjwoyev');
    table.float('pktnssnirf');
    table.string('buwzxhylji');
    table.timestamp('sbaqdwimhp');
  });
  await knex.schema.alterTable('fiejghxkin', function(table) {
    table.text('gpwqzixbmz');
    table.text('vcvmcpafiu');
    table.timestamp('wnugdlqors');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};