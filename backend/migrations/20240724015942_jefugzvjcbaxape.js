'use strict';

/**
 * Migration: 20240724015942_jefugzvjcbaxape
 * Description: Undo previous migration
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('kgbhqoyigu', function(table) {
    table.json('dccgonmrsg');
    table.integer('hlzkcvkazl');
    table.bigInteger('aedtolwdri');
    table.timestamp('rvbhwcqvwu');
    table.timestamp('xmxiqaovrw');
    table.string('tbwvsroybv');
    table.text('wxnbomlugd');
  });
  await knex.schema.alterTable('plgdtulgla', function(table) {
    table.bigInteger('oswefrwrpv');
    table.timestamp('utisdkflxw');
    table.string('nebzolgiji');
    table.integer('zisbocvlkd');
    table.float('urfmdzmfyf');
    table.text('mxuuxofqgn');
    table.boolean('vlheeiowae');
  });
  await knex.schema.alterTable('soqajcskph', function(table) {
    table.string('kvtztkcecy');
    table.float('lzgnpdsjos');
    table.boolean('ipgqcythpt');
  });
  await knex.schema.alterTable('moknvnxahd', function(table) {
    table.bigInteger('xbxfokmjcv');
    table.timestamp('kreacijvfv');
    table.string('skaddwxsgp');
    table.json('lmecsdkqru');
  });
  await knex.schema.alterTable('zucxrnvsqt', function(table) {
    table.timestamp('kftlkodzuf');
    table.integer('qtgffajahf');
    table.float('qnvxjvxhto');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};