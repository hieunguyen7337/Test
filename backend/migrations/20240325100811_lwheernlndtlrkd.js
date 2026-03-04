'use strict';

/**
 * Migration: 20240325100811_lwheernlndtlrkd
 * Description: Add column
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('hhanijjrak', function(table) {
    table.json('xyawvhzdfh');
    table.string('mvxtqqhgkj');
    table.float('qzcooarlns');
    table.float('dpgremaqko');
    table.float('dhayamfnxd');
    table.string('xfvjomefso');
    table.boolean('wdjhljfpno');
    table.json('jqzlzfzuad');
    table.boolean('haycinqcic');
  });
  await knex.schema.alterTable('zleoirfhxu', function(table) {
    table.integer('klalqzzpwz');
    table.string('dryknukndt');
    table.timestamp('swhjojgslf');
    table.boolean('wytgpztqph');
    table.integer('xtxeboooig');
    table.string('cgfavavhvl');
    table.bigInteger('qtxaadexhy');
    table.timestamp('fflnsxshre');
  });
  await knex.schema.alterTable('flphnmlgch', function(table) {
    table.bigInteger('tjnlnoqwvn');
    table.bigInteger('mzvqudoonb');
    table.string('brxfbhhocf');
    table.boolean('bxtjdpgfyh');
  });
  await knex.schema.alterTable('ddrysypeoc', function(table) {
    table.boolean('bbcpokrxkb');
    table.integer('qnbiqkcuho');
    table.float('xhpikuujaz');
  });
  await knex.schema.alterTable('yfrgsswnee', function(table) {
    table.bigInteger('qnthkbafgc');
    table.text('mswrrnyomd');
    table.integer('uhlelyqjxo');
  });
  await knex.schema.alterTable('qxvkojhxxt', function(table) {
    table.integer('rpcokpmxoe');
    table.string('ajrgvhnhvh');
    table.boolean('atqrocsrtc');
    table.boolean('apolfhmabs');
    table.bigInteger('jxjjmevlfa');
    table.boolean('makuwcxxee');
  });
  await knex.schema.alterTable('wbzswxnsie', function(table) {
    table.text('tdboeeelbq');
    table.text('axfmnklmwi');
    table.text('tmwnjmxlcl');
    table.text('oslimzsuku');
    table.string('znavhynnla');
    table.string('gywtmjlwgn');
    table.bigInteger('ithvmtqdxi');
    table.float('qesycuxkzj');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};