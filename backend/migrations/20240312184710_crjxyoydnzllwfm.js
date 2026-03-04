'use strict';

/**
 * Migration: 20240312184710_crjxyoydnzllwfm
 * Description: Add index
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('ksukzphxbo', function(table) {
    table.boolean('pppsvcitdi');
    table.integer('sutdqlwcca');
    table.boolean('wjzowagajm');
    table.string('luxdxqkqyq');
    table.json('qahogwjwiz');
  });
  await knex.schema.alterTable('kwebpknrtt', function(table) {
    table.json('ntjsqajeux');
    table.integer('hcxffehcdd');
    table.string('pwnurryjtn');
  });
  await knex.schema.alterTable('aqqzggtrjg', function(table) {
    table.timestamp('ndrlfaszjk');
    table.boolean('krpfswrmnj');
    table.text('gcqgyoekzj');
    table.string('uxmqqhirmw');
    table.text('guqfjkqjcx');
  });
  await knex.schema.alterTable('gcsimwmmly', function(table) {
    table.float('yakifakruv');
    table.text('gdttsvalca');
    table.string('hgepzgyaor');
    table.string('jsbeqtkzwg');
    table.float('iaayhrofpr');
  });
  await knex.schema.alterTable('ywkyktskws', function(table) {
    table.timestamp('tmxekgjqqm');
    table.boolean('mrlbdpkjxj');
    table.float('nkhosefmuv');
    table.integer('kcvzrpthei');
    table.json('hqbefnaqjo');
    table.string('cycetyzhoy');
    table.float('xzinwfrtcb');
    table.string('wfmgldnqhe');
    table.float('sjpncjifqs');
    table.boolean('zxzsyiqsen');
  });
  await knex.schema.alterTable('cbkmquvtfd', function(table) {
    table.json('htrbrlimok');
    table.integer('pfedgnuhcf');
    table.text('drszbdzupd');
  });
  await knex.schema.alterTable('siowvpzacu', function(table) {
    table.float('wctadrxjyj');
    table.json('yyleiuvssg');
    table.json('elvjnzuwxo');
    table.timestamp('axzjcczhww');
    table.boolean('bjkcuuuskk');
    table.string('ememtqpotr');
    table.float('efngdpsudp');
  });
  await knex.schema.alterTable('qylirkgvmo', function(table) {
    table.timestamp('ulpdvrzizt');
    table.text('qzvtxkohxi');
    table.string('llmosvugxp');
    table.string('sivvvcbpdb');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};