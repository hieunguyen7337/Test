'use strict';

/**
 * Migration: 20241216093327_txcnqhwtpnscnll
 * Description: Create table
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('pfhsuzovln', function(table) {
    table.integer('efbwrdtsjv');
    table.boolean('jjpllpcuvu');
    table.timestamp('mmgiwpyftq');
  });
  await knex.schema.alterTable('ucpophvsis', function(table) {
    table.bigInteger('cupvdidjni');
    table.json('fhiaqbhdoc');
    table.float('qafnwnsyyi');
    table.bigInteger('gknkoyxrdi');
  });
  await knex.schema.alterTable('ybsgenikaf', function(table) {
    table.boolean('wnsfrllcwi');
    table.text('pkslzanzxa');
    table.text('ngaomhynyw');
    table.string('xdwwjmxhem');
    table.timestamp('drgxtbhwjj');
    table.text('fqlsgfdhlx');
    table.bigInteger('ydzybvdzcg');
    table.boolean('gxctughyqv');
  });
  await knex.schema.alterTable('pbtoqyydlv', function(table) {
    table.boolean('eruuuzjfch');
    table.float('elpxtdzerc');
    table.string('xvbjhxfjzo');
  });
  await knex.schema.alterTable('ssabuurzrs', function(table) {
    table.bigInteger('ubpjhdqduh');
    table.json('vfgbwyyitp');
    table.float('vdhiitahvd');
    table.boolean('pieaxdegjt');
    table.bigInteger('bbzyvzfiez');
  });
  await knex.schema.alterTable('hinytirznz', function(table) {
    table.boolean('kveklrcpnu');
    table.boolean('dfqyxyhosc');
    table.json('khmmigmrqh');
    table.text('edavaelevu');
    table.bigInteger('oaryldogrg');
    table.float('cfzyxlxvdp');
    table.text('sqfmrsnafg');
    table.bigInteger('nbjmjqmbkd');
    table.text('wxwjglzuof');
    table.json('cfcnlrnlxz');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};