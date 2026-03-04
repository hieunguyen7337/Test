'use strict';

/**
 * Migration: 20240904183713_rtymgwtyhdfzzif
 * Description: Create table
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('bbjqusnqma', function(table) {
    table.json('mvvvdsutek');
    table.json('ddonzpvucm');
    table.string('svszmvkxik');
  });
  await knex.schema.alterTable('jimxxunskj', function(table) {
    table.float('pxllycrlel');
    table.json('mkrnrdnqjw');
    table.integer('yvohbskajm');
    table.string('jtkskcjsrc');
  });
  await knex.schema.alterTable('jzgzsnsbew', function(table) {
    table.timestamp('eecazfxyyz');
    table.timestamp('qoaockbpfw');
    table.float('smmzqzfbxs');
    table.integer('gvbyidlhyr');
    table.text('ppsceejxwb');
    table.string('yhcepnflhj');
  });
  await knex.schema.alterTable('wqncpcangf', function(table) {
    table.bigInteger('uwdhmydubp');
    table.json('ghnascfjze');
    table.text('lrlnrywsvz');
    table.integer('jawwhvsgtx');
  });
  await knex.schema.alterTable('rhambkzuep', function(table) {
    table.float('qkmxyeaoym');
    table.bigInteger('ezkvgldmgg');
    table.json('bxnirgxnhb');
    table.json('crltcblayc');
    table.integer('nywdqgbgrz');
    table.string('vammhmmljm');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};