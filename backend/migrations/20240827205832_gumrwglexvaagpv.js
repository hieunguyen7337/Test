'use strict';

/**
 * Migration: 20240827205832_gumrwglexvaagpv
 * Description: Redo the undo
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('inuvpmyqsw', function(table) {
    table.text('bolrmimtud');
    table.text('cizniknjyr');
    table.timestamp('dpphyrhodt');
    table.text('hqmdbkspyg');
  });
  await knex.schema.alterTable('rkeapwwear', function(table) {
    table.text('ldsthbigbi');
    table.boolean('gcxcwmystf');
    table.boolean('znwddmtghn');
    table.boolean('pydzilajdi');
    table.boolean('dafkvraoen');
    table.string('fyfdtesypc');
    table.timestamp('yjejupnwiz');
    table.string('jgipjspyyv');
    table.timestamp('npcrempfxb');
    table.timestamp('exfvwybstz');
  });
  await knex.schema.alterTable('lztcxngfwx', function(table) {
    table.bigInteger('bdveelbnkk');
    table.timestamp('mdejcvudcy');
    table.timestamp('sjsholkvox');
    table.json('gtlcrlmxpz');
    table.integer('acyikndhak');
    table.float('sfavjsbkxd');
    table.boolean('libcjjzaoz');
  });
  await knex.schema.alterTable('bjcfgnidav', function(table) {
    table.json('xoxmfehqeg');
    table.float('tfhoaoaslf');
    table.float('kzukagcyza');
    table.string('dedolzknzq');
    table.boolean('rcxragrzux');
    table.boolean('lfnoggqlwx');
    table.string('jaumlragnu');
  });
  await knex.schema.alterTable('bxvyyvohuu', function(table) {
    table.boolean('hjbrxijkmc');
    table.float('kxofyhqsnl');
    table.string('yoxltfgldc');
    table.integer('qzrwijvmym');
    table.timestamp('ktovjcwhlx');
    table.float('widqihkvmu');
    table.integer('ydcqjggppz');
    table.string('ivmxvnvbqj');
    table.boolean('wjusbdoien');
    table.bigInteger('sxhtfphpmq');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};