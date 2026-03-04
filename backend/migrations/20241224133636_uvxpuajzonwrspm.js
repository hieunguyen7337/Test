'use strict';

/**
 * Migration: 20241224133636_uvxpuajzonwrspm
 * Description: Undo previous migration
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('qolcdhlimg', function(table) {
    table.json('tvafghbvep');
    table.timestamp('tovxiznfwb');
    table.json('nfjjaczeef');
    table.json('pigbpgkrvw');
    table.integer('ocrtqddqig');
    table.timestamp('dpiaejumzo');
  });
  await knex.schema.alterTable('mznzoctzjy', function(table) {
    table.timestamp('ymtdsgqcxf');
    table.json('rygxknkysw');
    table.text('vwuipoytev');
  });
  await knex.schema.alterTable('mjxtfdvlnh', function(table) {
    table.boolean('lzpsxjblpw');
    table.float('yyijnyvweu');
    table.boolean('atjjpdixyl');
    table.string('uiasrlephi');
    table.text('bvoshdldvy');
    table.timestamp('hgfwcogyam');
    table.integer('yizwuimnnb');
  });
  await knex.schema.alterTable('wvfpycwipz', function(table) {
    table.json('vntbenygpy');
    table.boolean('sstednrcnu');
    table.timestamp('uwlrilspgx');
    table.text('xcjxukwaun');
    table.integer('dzmhjsopjs');
    table.json('twmzodahls');
    table.string('kkbtthceff');
  });
  await knex.schema.alterTable('fhliuqtqnk', function(table) {
    table.boolean('thtlakboqw');
    table.integer('pfxxvuxggi');
    table.integer('elaocjcyrk');
    table.integer('cmjcghrzly');
    table.string('fptxswcssu');
    table.bigInteger('ydmkztctyw');
    table.float('gycxuwoguk');
    table.float('snmkqljemp');
    table.float('vlhypcqbuj');
  });
  await knex.schema.alterTable('nreuousmrf', function(table) {
    table.float('bxundeflri');
    table.json('fjvqnyavem');
    table.integer('iaggyxkhzg');
    table.float('neaczirvpq');
  });
  await knex.schema.alterTable('vdpuxnyyjs', function(table) {
    table.bigInteger('oaiwlgsmdv');
    table.text('otzmoxwtzg');
    table.string('cezmvopqfn');
    table.integer('uohsgryuzb');
    table.string('xphosgucxq');
    table.string('uuxowrpdtp');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};