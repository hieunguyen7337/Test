'use strict';

/**
 * Migration: 20240115233226_ognfjknnnepfupx
 * Description: Create table
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('lmarknquxh', function(table) {
    table.integer('mmmfeuinwq');
    table.string('vgoijplxmb');
    table.string('jxrdcbuqjl');
    table.string('xqvnksylqj');
    table.timestamp('tnqawdyowz');
    table.timestamp('tbjoabxcqu');
    table.boolean('swsajqaadl');
    table.integer('tqkiiphmia');
    table.integer('nofrnbhjnu');
  });
  await knex.schema.alterTable('oxxfdrqwmr', function(table) {
    table.text('ozleqqsslk');
    table.integer('anfxgpuysz');
    table.timestamp('vohuaubrxu');
    table.float('vgbehoimfp');
    table.boolean('puxdxydzmf');
    table.text('dpmzuubwzo');
  });
  await knex.schema.alterTable('tdanvtwvfu', function(table) {
    table.integer('ruimjzrczy');
    table.text('oepewhxonb');
    table.json('xpvmnwajpm');
    table.bigInteger('bbhsqpmaoz');
    table.integer('kzslhwmtae');
    table.timestamp('zwktqcxmgd');
    table.boolean('dnnqiswjrm');
    table.json('lbztxqdqtv');
    table.timestamp('lwalovnfhp');
  });
  await knex.schema.alterTable('xtjapyonch', function(table) {
    table.string('npjivpbrsv');
    table.string('sezknvgdzx');
    table.boolean('lzczrikfvh');
    table.json('gjuzidhueo');
    table.integer('slxjlzsyck');
    table.boolean('paypiixnys');
  });
  await knex.schema.alterTable('dorrxoefon', function(table) {
    table.integer('rafcwharnt');
    table.text('wtebdqatty');
    table.text('osugvqgbme');
    table.integer('rlzojtvhee');
    table.text('taybpjsntr');
    table.boolean('etyysyrnex');
    table.float('rnbbgxobik');
    table.boolean('wsxeskuwmo');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};