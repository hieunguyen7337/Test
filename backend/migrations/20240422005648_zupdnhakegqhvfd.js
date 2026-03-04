'use strict';

/**
 * Migration: 20240422005648_zupdnhakegqhvfd
 * Description: Undo previous migration
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('bzsuvaazio', function(table) {
    table.bigInteger('feddvdpuzr');
    table.text('olgpsmggeg');
    table.json('qlbrqwxigh');
    table.string('jkjgckwuxx');
    table.bigInteger('aicaoamgox');
  });
  await knex.schema.alterTable('owugyeedgc', function(table) {
    table.text('widasciqkt');
    table.integer('onzvyawdak');
    table.integer('jsxrvxbbkk');
    table.integer('uwcecwyysu');
    table.boolean('wfcjhyuzox');
    table.bigInteger('kbbpxxxpdj');
    table.float('dqfcjovgyo');
    table.bigInteger('hmylslmbvl');
    table.string('yubzuodweu');
  });
  await knex.schema.alterTable('kbcsusevjk', function(table) {
    table.timestamp('fqptqquenc');
    table.text('xsuuruapbg');
    table.json('tkzwfszjny');
    table.float('weazajkwwu');
    table.string('tkelzpqqfc');
    table.bigInteger('efcpgnfczh');
    table.float('jxmmomdzkb');
    table.boolean('jqfdluwfrf');
    table.integer('awravzcmev');
  });
  await knex.schema.alterTable('usbyopfouk', function(table) {
    table.text('guxxsbjrve');
    table.string('xbbynviqry');
    table.bigInteger('dwupmwtqqp');
  });
  await knex.schema.alterTable('hrktpxymea', function(table) {
    table.text('ewtfgwauib');
    table.timestamp('ukzqrhsaok');
    table.timestamp('fedheonojk');
    table.boolean('hxrbrsjvqq');
    table.integer('eremplaltu');
    table.float('kvxifojnnu');
    table.float('ylethjnlsl');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};