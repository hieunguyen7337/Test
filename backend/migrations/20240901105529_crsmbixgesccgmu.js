'use strict';

/**
 * Migration: 20240901105529_crsmbixgesccgmu
 * Description: Add column
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('dvgtvaijtw', function(table) {
    table.float('hujtmrofzc');
    table.integer('qpuiibapxx');
    table.bigInteger('gsushlrjez');
    table.float('dzntdywhhs');
    table.string('aygzpzttfr');
    table.timestamp('flruxwyzkt');
  });
  await knex.schema.alterTable('pismxkllrl', function(table) {
    table.timestamp('odueghkmed');
    table.text('nsapemsokv');
    table.text('rpuqpviytr');
    table.bigInteger('iaoxrfjgea');
    table.boolean('vqagmhecyi');
  });
  await knex.schema.alterTable('gwlxfbryak', function(table) {
    table.text('rfrurwatgy');
    table.integer('ehbnzxrlbz');
    table.json('tylgfniase');
    table.integer('htsjoncapn');
    table.timestamp('yymdetynst');
    table.integer('qlqsitchbb');
  });
  await knex.schema.alterTable('cxwrattnzm', function(table) {
    table.json('zxrjknlgyj');
    table.timestamp('ekpfqqhjco');
    table.bigInteger('ztsbnpknex');
    table.text('lykydfkbud');
    table.boolean('zwapoqzbcz');
    table.boolean('drkluacnws');
    table.timestamp('tvyjvxjfnh');
    table.string('joliquqwpl');
  });
  await knex.schema.alterTable('awsbloerut', function(table) {
    table.json('bnnbkzknzz');
    table.timestamp('cgrtpptujw');
    table.json('rwbzuzvpdl');
    table.bigInteger('ebxndwcdsb');
    table.float('ufdzejmdoa');
    table.float('fnniokkhgh');
    table.boolean('agdwzqjipj');
    table.float('aoevlyqvfv');
  });
  await knex.schema.alterTable('wolnecitti', function(table) {
    table.integer('wwwpmkbtxj');
    table.integer('vpqlkygodo');
    table.text('faebhxesgv');
    table.boolean('oyrynjziyl');
    table.integer('oiyfbbbrhb');
  });
  await knex.schema.alterTable('vrvaqzexww', function(table) {
    table.bigInteger('ynaiiodkrc');
    table.boolean('ffjlmbxetd');
    table.json('zhwmtdqkwk');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};