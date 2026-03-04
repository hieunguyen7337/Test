'use strict';

/**
 * Migration: 20241007050838_pxwbmpzwxrgmqsj
 * Description: Undo previous migration
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('pgeucbpwci', function(table) {
    table.json('wmevtgpnni');
    table.json('jwawuqubjs');
    table.float('spogzqoaqc');
    table.float('yrcwesnasm');
    table.text('fdmrxpjvfu');
    table.float('umdharomla');
    table.bigInteger('ridsvhvtzt');
    table.float('ufwysmaaoc');
    table.timestamp('cbzrfjxfih');
  });
  await knex.schema.alterTable('mukebhhvvb', function(table) {
    table.text('sxihpzfktz');
    table.bigInteger('zbwwpjfjjj');
    table.timestamp('kmjwujlese');
    table.string('prpykvfvsh');
    table.text('fdmlwndxhz');
    table.bigInteger('djfqommaqm');
  });
  await knex.schema.alterTable('kajkbdgfrh', function(table) {
    table.bigInteger('yrybarzzed');
    table.float('zsqlrwzluq');
    table.float('jheskuyjlj');
    table.integer('lummhkrous');
    table.json('dhualebqay');
    table.text('hegqfnqtyt');
  });
  await knex.schema.alterTable('aogwcpkmcg', function(table) {
    table.json('cfqkofbdmc');
    table.float('cyplekdxxe');
    table.string('tjphzbegkh');
    table.float('zjxqzhbxix');
    table.timestamp('koroynhphx');
    table.float('sdiruoqgmc');
  });
  await knex.schema.alterTable('oagroatgyx', function(table) {
    table.integer('nzzadumqvc');
    table.text('xuqfimjfqm');
    table.boolean('ocfhztxhxw');
    table.boolean('qbweektiyc');
    table.boolean('czmphicsue');
    table.json('zeyagmgeec');
    table.integer('txgpcaoonz');
    table.integer('huaeatbuvv');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};