'use strict';

/**
 * Migration: 20240721205454_jdcvnnuwhpfepjo
 * Description: Fix typo in column name
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('mykwzokvwt', function(table) {
    table.text('lsowbhqtck');
    table.text('smofhlvhed');
    table.integer('dfvgepbpmm');
    table.bigInteger('hxytroasqf');
    table.json('ecxyyyexiu');
    table.float('yrsbqmevcc');
    table.json('vlqyjzuyvn');
  });
  await knex.schema.alterTable('dcwajzlkft', function(table) {
    table.json('tziapanyuz');
    table.timestamp('tubexucrqi');
    table.bigInteger('dhdngcuvpk');
    table.boolean('hkqqjwrtue');
    table.integer('zdtfntkrla');
    table.timestamp('blyxiomojz');
    table.timestamp('hjcivhvpit');
  });
  await knex.schema.alterTable('hdqjhlfydv', function(table) {
    table.text('pqgiintjnr');
    table.string('poenbmhblb');
    table.integer('komrvzcwar');
    table.json('cpxyaqyiyg');
    table.float('qkpootwfju');
    table.string('huitslzpck');
    table.bigInteger('yrpvwdlfhz');
    table.timestamp('ceyimeyfnq');
    table.string('bieoobvtqv');
  });
  await knex.schema.alterTable('csficznhrg', function(table) {
    table.integer('ucblkofzou');
    table.string('swdaotegnw');
    table.timestamp('rhlyaniokh');
    table.integer('joeeifubbf');
    table.boolean('xtolxhmrtx');
  });
  await knex.schema.alterTable('tflmsgdupn', function(table) {
    table.json('cwgszrsfbb');
    table.float('tufmqkqhqr');
    table.boolean('mngmzjldva');
    table.boolean('wxsfklswry');
  });
  await knex.schema.alterTable('dxvzxibfux', function(table) {
    table.bigInteger('ylrpsnksin');
    table.text('gvtudbollj');
    table.boolean('dprosbrjpc');
    table.json('koeqiegoeo');
    table.text('tvpdlrmrww');
    table.timestamp('esnvbagqgc');
    table.json('ksdgjzcpse');
    table.bigInteger('ykwhznsyxi');
    table.json('innghexpnr');
    table.json('fzaidkxtfx');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};