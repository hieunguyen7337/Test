'use strict';

/**
 * Migration: 20240223162438_zzgyoqsmbptawud
 * Description: Remove column
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('rqzgsydjei', function(table) {
    table.bigInteger('nqdrzhlymo');
    table.float('yvbvciiyzt');
    table.string('ifqxgtasxd');
    table.timestamp('abphbvusaz');
  });
  await knex.schema.alterTable('bywtptucdg', function(table) {
    table.timestamp('baaegwmqjt');
    table.json('jzdgppeyfn');
    table.bigInteger('ltdcfdozrd');
    table.json('joomgbzhtz');
    table.json('tltzlmkqdi');
  });
  await knex.schema.alterTable('nzkdkxcqwi', function(table) {
    table.text('xlrsvjzmjz');
    table.timestamp('aytwtfxxgo');
    table.bigInteger('kfgzyktqtd');
    table.json('nrtaujzlrm');
  });
  await knex.schema.alterTable('ypgnikteca', function(table) {
    table.bigInteger('eowqvxrctu');
    table.string('oskyowfvyy');
    table.integer('wtnmrjixpp');
    table.float('corzdpoyza');
    table.boolean('kljrwkszjv');
    table.json('ycqccndarc');
    table.json('vmqnsaeloy');
    table.string('zuagpymmcm');
    table.integer('urkewrodcb');
  });
  await knex.schema.alterTable('kqyyyaugki', function(table) {
    table.json('nqmqyhnvmw');
    table.boolean('wlhouqmmmn');
    table.text('yfxlddrblc');
    table.json('qlptyncvwg');
    table.integer('dkmuvmanil');
    table.boolean('hgjwcligge');
    table.text('mrbxnvseld');
    table.boolean('ujfysxiurl');
  });
  await knex.schema.alterTable('luioeiqtcc', function(table) {
    table.text('lasvvvfcju');
    table.float('yrnfuxotqr');
    table.string('qfnuxbtqge');
    table.timestamp('nffuiadxhj');
  });
  await knex.schema.alterTable('pvepcfdwil', function(table) {
    table.string('plhoizynth');
    table.string('ehwglhegfi');
    table.text('rgmvsjrwat');
    table.boolean('sczwobfzbb');
    table.bigInteger('lxyqlzaldk');
    table.json('seiqngpijk');
    table.float('yghycczqng');
    table.json('ahyjaihkqv');
  });
  await knex.schema.alterTable('lderpwcvgx', function(table) {
    table.integer('zlqwevrcjt');
    table.json('narftbywbl');
    table.boolean('otrqsulctf');
    table.integer('pobgyumvzn');
    table.float('fyxpiasfeo');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};