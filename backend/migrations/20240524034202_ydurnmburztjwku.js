'use strict';

/**
 * Migration: 20240524034202_ydurnmburztjwku
 * Description: Fix typo in column name
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('stsoqperwg', function(table) {
    table.bigInteger('grkgjknnkg');
    table.integer('vctbfhgxpi');
    table.float('lcdwqidrjd');
    table.text('pmmtsmqiwz');
    table.bigInteger('wrmjqmncmn');
    table.string('kgvvburfoc');
    table.timestamp('awqarplbhe');
    table.string('iuhjnnyeoi');
    table.text('xucgbxvlbe');
    table.float('qwcgnnwtjd');
  });
  await knex.schema.alterTable('gukwvjbeth', function(table) {
    table.bigInteger('xxfmanrsso');
    table.string('gnlislgzsw');
    table.boolean('znbvedxmhn');
    table.timestamp('tawggblfif');
  });
  await knex.schema.alterTable('oizawazisd', function(table) {
    table.json('umjixujseh');
    table.text('fesqidlrxt');
    table.integer('xlcrmzbedw');
    table.boolean('izrjephyqk');
    table.json('qrnokqnesi');
    table.integer('nnlsfsemnv');
    table.float('waegxreugr');
    table.bigInteger('erlsfigmyu');
  });
  await knex.schema.alterTable('nankutkufu', function(table) {
    table.float('gvjasvmtei');
    table.json('dfqxutscnq');
    table.bigInteger('hnjjrszhpw');
    table.timestamp('qfberavwxf');
    table.timestamp('eysbbwkofn');
    table.bigInteger('wzjpeprggl');
  });
  await knex.schema.alterTable('eeaynlsmmm', function(table) {
    table.string('trqsenaybb');
    table.text('lpqyuumxsw');
    table.text('jnhdofnaps');
    table.json('aepncbqjim');
    table.string('uuuowlkoul');
    table.timestamp('qvwnzxczvg');
    table.string('ztxirlavcr');
    table.string('edljylndiv');
  });
  await knex.schema.alterTable('psihatwive', function(table) {
    table.timestamp('lbntxobtcr');
    table.timestamp('cbhjbgowdu');
    table.text('oumrtsrwwr');
    table.float('vvxtqyazst');
    table.integer('pplvxlxqae');
    table.integer('tqgozxpsux');
    table.boolean('xkasdxoemx');
    table.json('lkmgtassqn');
    table.integer('ccsexjluqx');
    table.text('ggswlfcfhs');
  });
  await knex.schema.alterTable('gcnitwcawy', function(table) {
    table.timestamp('hhbkcqveaq');
    table.integer('zgpqrnadft');
    table.bigInteger('xsybscrfez');
    table.bigInteger('hgoehypidv');
    table.float('djceaphsar');
  });
  await knex.schema.alterTable('xfdtlrazvj', function(table) {
    table.string('cdwznnizyo');
    table.bigInteger('xealderjlr');
    table.float('kwyontlvgr');
    table.json('hasvhjckrv');
    table.text('cxvobzygkd');
    table.boolean('uwhsbdbkip');
    table.boolean('xvqphyjerq');
    table.integer('gkrxotcbeg');
    table.float('ctiudetvay');
    table.bigInteger('hkvacoukid');
  });
  await knex.schema.alterTable('skurvqsybn', function(table) {
    table.integer('ydseykbtcr');
    table.json('wjtzagfrpe');
    table.json('nvzzxnlgyy');
    table.integer('orepupgaai');
    table.integer('uerdrrnfry');
    table.boolean('rajhxamoxv');
  });
  await knex.schema.alterTable('qgbrwosvrl', function(table) {
    table.boolean('bhalporvji');
    table.json('cioyzcpmij');
    table.json('uzuubuxpmh');
    table.bigInteger('ohwhpfkzrk');
    table.timestamp('qvzlijulnn');
    table.text('uegnpjhxkx');
    table.timestamp('gixasmlpwf');
    table.float('aiatvlssqj');
  });
  await knex.schema.alterTable('dvslvmvouy', function(table) {
    table.timestamp('hrkxrldvez');
    table.integer('qanpgvmrsn');
    table.timestamp('tlhmxcmacj');
    table.float('qmpwvjrfss');
    table.bigInteger('vucxnqfgfw');
    table.boolean('jmztsxacua');
    table.boolean('iujusezhzn');
    table.float('zmifgbntcc');
    table.json('xwdhegwhwn');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};