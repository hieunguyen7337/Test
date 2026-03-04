'use strict';

/**
 * Migration: 20241127160034_hvwzxczxmmxytfy
 * Description: Please work this time
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('twkzumnspa', function(table) {
    table.boolean('zunwtvbsuj');
    table.text('zrbkkpdktq');
    table.timestamp('easltyddbk');
    table.string('gwxasrmhhc');
    table.float('djkifoqqgp');
  });
  await knex.schema.alterTable('gufbljgvar', function(table) {
    table.text('jhyxgimbau');
    table.integer('xdzdbajxsp');
    table.text('ymzntsnehv');
    table.boolean('uqzvrgrqnk');
    table.boolean('ygmaogrqex');
    table.integer('fhehhkqayk');
    table.float('nfkziekzjs');
  });
  await knex.schema.alterTable('qpsaqxykzc', function(table) {
    table.integer('wewyimlofo');
    table.bigInteger('egwjnzxaar');
    table.integer('lcgpamivrk');
    table.float('bpipscqyeq');
  });
  await knex.schema.alterTable('yofvifblzu', function(table) {
    table.text('ahrjapxflj');
    table.text('zxdukedrth');
    table.text('wnszobxkbq');
    table.float('mypcyruuzp');
    table.integer('iosifpgotz');
    table.json('xwbedgrnrl');
    table.integer('vqtlzgllwd');
    table.float('bpfokssozw');
    table.integer('lflyjfvijc');
  });
  await knex.schema.alterTable('vgxoxewdnp', function(table) {
    table.string('aescmvqtym');
    table.boolean('rpjfjrbiaa');
    table.bigInteger('nuvivfcoai');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};