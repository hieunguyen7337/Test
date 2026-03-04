'use strict';

/**
 * Migration: 20240110103736_hkoqgpwwtzpjlcn
 * Description: Create table
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('vabjxolmnr', function(table) {
    table.json('xlchztwnsj');
    table.float('uonpqkxynw');
    table.boolean('oqtnfwchlx');
    table.json('lriaubevrp');
    table.integer('idnwyqrrlk');
    table.text('qtimnmtcmn');
    table.bigInteger('busycyypoq');
    table.bigInteger('wdyxuweize');
  });
  await knex.schema.alterTable('hqsqnimsba', function(table) {
    table.boolean('uwhfxtklju');
    table.timestamp('ozdquxpbap');
    table.bigInteger('hntvkugyrl');
  });
  await knex.schema.alterTable('pviloklbqf', function(table) {
    table.integer('iylbyrviwm');
    table.bigInteger('oldwtnvjpv');
    table.json('vplfcsyigk');
  });
  await knex.schema.alterTable('snrfipblko', function(table) {
    table.bigInteger('mswklkystz');
    table.string('elosmopurz');
    table.json('nldqscozol');
    table.integer('lmvunklntq');
    table.integer('fysatujbvy');
    table.timestamp('cwdhumncsk');
    table.bigInteger('lifqhztsxd');
  });
  await knex.schema.alterTable('jyllmnmuxy', function(table) {
    table.boolean('kfledgaaod');
    table.boolean('qyporwpqvm');
    table.integer('alrpolloyi');
    table.boolean('gcikikfkwv');
    table.float('bqxbpqgiiz');
    table.float('midrkmmruu');
  });
  await knex.schema.alterTable('xvtimlrwxq', function(table) {
    table.boolean('epluteuwyi');
    table.timestamp('warodwjvsk');
    table.string('ndyhojokvu');
    table.boolean('uqiboqmotu');
    table.string('vgeeovrqvm');
    table.boolean('cjcwppwgqd');
    table.boolean('sxprklrara');
  });
  await knex.schema.alterTable('zqcygixjae', function(table) {
    table.timestamp('vmylmwrsqi');
    table.text('amxqevtokr');
    table.bigInteger('hnsrtfclkf');
    table.float('pfagyxevlx');
    table.float('sfovndekao');
    table.text('eetyswepmz');
    table.text('ydpgidthkl');
    table.float('vfxhpujvke');
  });
  await knex.schema.alterTable('tfvjxzjezs', function(table) {
    table.string('agkrwwgctv');
    table.integer('vecyexocaj');
    table.integer('ebfmslynyz');
    table.string('udvleueoyz');
    table.timestamp('wmckjxzoqr');
    table.timestamp('nuuxumesxw');
    table.float('nxmjsxotkp');
    table.string('qycvczxehp');
    table.timestamp('lguoxkcbrk');
    table.integer('porsliquda');
  });
  await knex.schema.alterTable('lxkhytkiwz', function(table) {
    table.float('mspnqgmgck');
    table.string('kjbdubyztp');
    table.timestamp('poqbeewmdt');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};