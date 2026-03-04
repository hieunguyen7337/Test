'use strict';

/**
 * Migration: 20241217192222_kpcvrzhiplufosa
 * Description: Rename field
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('peuhhbskou', function(table) {
    table.timestamp('obkatzqxtr');
    table.string('xuhmbcqiej');
    table.boolean('uqsrwrsgdh');
    table.string('fympdenlzu');
  });
  await knex.schema.alterTable('qsiujqzanp', function(table) {
    table.text('lqhujdlvfz');
    table.timestamp('qigdzsxztl');
    table.text('azrzlkxqwu');
    table.integer('fiejbsofch');
    table.string('rpqrfgoyjh');
    table.boolean('ebigknqyzh');
    table.float('osnyuanrat');
    table.json('fmdvskmjwl');
    table.string('axdfzvzpog');
  });
  await knex.schema.alterTable('crbuwvsbqr', function(table) {
    table.text('viypoeknaz');
    table.float('wbcvcdmvru');
    table.timestamp('xbyhtnkqyp');
    table.json('fhoeflsgzb');
    table.bigInteger('mocbkscxxw');
    table.text('djwevriaya');
    table.timestamp('cvnysyzcmh');
    table.string('lgpvrvtktl');
    table.string('lllwksnugk');
    table.integer('qwdycnqidz');
  });
  await knex.schema.alterTable('vhlvbmhgbv', function(table) {
    table.text('plvptdydqg');
    table.bigInteger('qnamjtkgsd');
    table.float('glwxpsbezx');
    table.text('eznvbyjtkz');
    table.string('jzykwzcuis');
    table.integer('dreescmixw');
    table.text('qogscnydhb');
  });
  await knex.schema.alterTable('zfiaabsaor', function(table) {
    table.json('uieqlazszp');
    table.json('ornbklakxn');
    table.timestamp('mwmuhckjem');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};