'use strict';

/**
 * Migration: 20240828084453_pnttfxhjkycfkvu
 * Description: Fix typo in column name
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('zuiwzlgbse', function(table) {
    table.timestamp('ybopxdddzv');
    table.float('pfumlkkkxz');
    table.bigInteger('brlgnfdnep');
    table.text('xsztjosjgk');
  });
  await knex.schema.alterTable('jajpeulbey', function(table) {
    table.boolean('xsobvmkdes');
    table.text('qsaeyfwuje');
    table.integer('jloadiwwww');
    table.bigInteger('qxxkpgvwvr');
    table.float('dolmxfsbue');
    table.bigInteger('hklbseqfdh');
    table.integer('lctwmksusp');
    table.integer('jhrwfzaijo');
  });
  await knex.schema.alterTable('iuxccxuakd', function(table) {
    table.boolean('opqbzykqbn');
    table.boolean('ejqpcsjdwa');
    table.text('mwxcfmqqbp');
    table.json('oxrxvlqyjs');
    table.text('zclinblica');
  });
  await knex.schema.alterTable('xjwtzbytjr', function(table) {
    table.float('rsspniuidj');
    table.float('vtybuyccgr');
    table.text('wdibikpckx');
  });
  await knex.schema.alterTable('nwdgeikokp', function(table) {
    table.boolean('dayychagbx');
    table.string('waktbzxega');
    table.string('rdifakkctw');
    table.text('phmsjqywsy');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};