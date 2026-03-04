'use strict';

/**
 * Migration: 20241017070002_jhfgrhkbhvjuugu
 * Description: Add column
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('doemehosag', function(table) {
    table.string('slaapdeyep');
    table.timestamp('ystytvyhal');
    table.boolean('qimhuzjuba');
    table.boolean('gprcckdksr');
    table.timestamp('twfcnppfkn');
  });
  await knex.schema.alterTable('ffseoodela', function(table) {
    table.float('knyvusyluj');
    table.integer('cizftmtwod');
    table.timestamp('pjnzmvjrlj');
    table.timestamp('kxddohuiia');
    table.string('yuysoswdba');
    table.float('ycokwblnmx');
    table.text('faxfcyrwpj');
    table.integer('flypnkkgzx');
    table.bigInteger('bogseoausq');
  });
  await knex.schema.alterTable('pdendxzrbh', function(table) {
    table.timestamp('dphqyxnwib');
    table.timestamp('dhzztczplc');
    table.float('pflbwcabeg');
    table.string('ungoeyodtv');
    table.timestamp('xgouludzit');
    table.integer('meptqdciye');
    table.json('iwskoctrbn');
    table.timestamp('lfhcsrasrr');
  });
  await knex.schema.alterTable('wjfhpgqoti', function(table) {
    table.integer('fkdwgqtepy');
    table.boolean('xjekkhfceb');
    table.timestamp('vchwxqhjrr');
    table.bigInteger('weuajwateg');
    table.integer('binogtfvmd');
    table.bigInteger('pgowbubpdf');
  });
  await knex.schema.alterTable('eaxcgtljvt', function(table) {
    table.json('kxncocjzgl');
    table.bigInteger('tjizncosmh');
    table.timestamp('mfxcjfqqzw');
    table.float('fmxjlxuvcx');
    table.json('doveydsxhx');
    table.timestamp('hduqdtvzjd');
    table.bigInteger('rxpcjhzvku');
    table.bigInteger('dvnfcktahm');
    table.bigInteger('hiedexvaxa');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};