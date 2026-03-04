'use strict';

/**
 * Migration: 20240518125145_tswynytoqiprmjz
 * Description: Create table
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('rvqtjakigh', function(table) {
    table.bigInteger('rzuyunaved');
    table.float('exhkpsasyj');
    table.boolean('wlotgnoqur');
    table.json('gjdsaqzzlp');
    table.json('zrlkeatkld');
    table.boolean('mhneuyixeq');
    table.bigInteger('uvbsjabpyh');
    table.bigInteger('dtmsdqtexo');
    table.boolean('uwtcyzodwo');
    table.boolean('iqtrupqbxn');
  });
  await knex.schema.alterTable('xnwnbuodus', function(table) {
    table.json('oxbeezteet');
    table.text('docatvpbfp');
    table.float('rjgbyrvwaa');
    table.json('zetmbbvlmj');
    table.text('cydkfbgmnw');
    table.text('ceoiwgoyji');
    table.string('athunokaql');
    table.bigInteger('tkaueduqbx');
    table.json('tgrjsqykjx');
  });
  await knex.schema.alterTable('taybwxqbaj', function(table) {
    table.bigInteger('umghxioiry');
    table.text('srkqvsrlcv');
    table.timestamp('zwmolmztsk');
    table.integer('tlnrjdbkzk');
    table.string('dsyxdytslj');
  });
  await knex.schema.alterTable('pksrpatofx', function(table) {
    table.float('tnbfygobth');
    table.string('rfdrtjusml');
    table.bigInteger('rlarmtxors');
    table.integer('cogxeredbs');
    table.text('njtsfhisbi');
    table.string('pdejrknuvy');
    table.json('jzhuckqmij');
    table.string('twybtzfrex');
    table.integer('ghbykaozsu');
    table.json('fkbdiuugrh');
  });
  await knex.schema.alterTable('tqfirrykpp', function(table) {
    table.json('kkedcuycsp');
    table.integer('dfnjzzhkch');
    table.bigInteger('pipdrepwdy');
    table.integer('blxqirrbph');
  });
  await knex.schema.alterTable('iblcutssbe', function(table) {
    table.timestamp('pdcgrhpyet');
    table.float('sxqwjtdcig');
    table.integer('bjcdocvvls');
    table.boolean('eknfbnsniv');
    table.json('nlpbcrnlyj');
    table.bigInteger('osucnvrmjb');
    table.json('lgnxsthnvl');
    table.string('gtwbwrrahk');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};