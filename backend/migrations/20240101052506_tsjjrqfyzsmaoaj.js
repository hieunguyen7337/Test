'use strict';

/**
 * Migration: 20240101052506_tsjjrqfyzsmaoaj
 * Description: Redo the undo
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('gbhpshnhgx', function(table) {
    table.integer('orijomcrxm');
    table.bigInteger('cdldvjiixz');
    table.boolean('cxkdpigero');
    table.boolean('anhyikarie');
    table.bigInteger('svvhsdneao');
  });
  await knex.schema.alterTable('bkipvmbdfj', function(table) {
    table.text('vkxnoznttj');
    table.integer('ggbonlhnsu');
    table.timestamp('zsogaisboj');
    table.float('mmraewakdx');
    table.boolean('bidhzogitv');
  });
  await knex.schema.alterTable('yngyblxqhx', function(table) {
    table.integer('desdvohvrr');
    table.string('hxsiovrtjw');
    table.string('seiokurhur');
    table.boolean('jcgsfldzuu');
    table.string('yfemqeleaw');
    table.json('feolndxndh');
    table.float('jgcwebhlus');
    table.text('uuqfxgceoi');
    table.boolean('fsgddscage');
    table.timestamp('auzjkczrmp');
  });
  await knex.schema.alterTable('eogzqmtwpf', function(table) {
    table.integer('ucwleznffm');
    table.integer('muldckmtud');
    table.string('fxvsdxnfsz');
    table.boolean('xdpwwdilqw');
    table.json('bbymdecduu');
    table.text('cdejmqjtnq');
    table.float('eeibmghjct');
    table.integer('qrkblbwzjv');
  });
  await knex.schema.alterTable('lqoslmfzyb', function(table) {
    table.bigInteger('rdyuntftsc');
    table.bigInteger('ubbwivpehj');
    table.json('gkqilhsdpb');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};