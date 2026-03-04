'use strict';

/**
 * Migration: 20240703050837_hoxhtzerkzkzvpw
 * Description: Create table
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('mhrraquqcv', function(table) {
    table.text('oswodbcyou');
    table.bigInteger('ojtokwsokg');
    table.text('dotmegddut');
    table.json('ojljhpdcam');
  });
  await knex.schema.alterTable('rrcnckardf', function(table) {
    table.float('dxhanmzoqa');
    table.text('qjecafwiof');
    table.text('axmigkswrn');
  });
  await knex.schema.alterTable('qnegiruxtq', function(table) {
    table.bigInteger('oopfjltvsi');
    table.timestamp('vjztgcnryk');
    table.string('ujbyidefnj');
  });
  await knex.schema.alterTable('ufnlegnjbe', function(table) {
    table.json('kizhaujdwe');
    table.bigInteger('vhntdiuoir');
    table.integer('jhkbnpxvjy');
    table.string('mbpdkhjrpy');
  });
  await knex.schema.alterTable('edsplxgprr', function(table) {
    table.float('dtznffcpgh');
    table.text('ypbmspvdpo');
    table.timestamp('rphtioyhmw');
    table.boolean('sjkwwxaycb');
    table.bigInteger('asposfmjvb');
    table.bigInteger('xknqwbhdbl');
    table.text('zzsdvbwctd');
    table.float('dslbenvuid');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};