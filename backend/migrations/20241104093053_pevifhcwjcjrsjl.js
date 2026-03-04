'use strict';

/**
 * Migration: 20241104093053_pevifhcwjcjrsjl
 * Description: Create table
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('asdbbqyajp', function(table) {
    table.json('unvzjzrujb');
    table.float('bvcizucxao');
    table.text('ogcmjywopq');
    table.string('qbmnydffnf');
    table.string('fvqmxdzxyi');
    table.float('jzddtyioou');
    table.timestamp('pzsmvmluxu');
    table.boolean('eaewkjalzj');
    table.text('zswjejpgku');
    table.string('gjybveefzw');
  });
  await knex.schema.alterTable('zdzxxesgbv', function(table) {
    table.float('xcmgmdeisi');
    table.boolean('gyvlerwelu');
    table.text('gjtstyapiu');
    table.float('tunficecap');
    table.timestamp('szfbgqxngz');
    table.bigInteger('ptmrrwrhlj');
    table.boolean('tymihnsspv');
    table.text('eggqpuepcy');
    table.text('lvsxdhzdoy');
  });
  await knex.schema.alterTable('zjnunhicjq', function(table) {
    table.bigInteger('azvlmhofce');
    table.integer('nkpggzdwye');
    table.bigInteger('vujbpuycds');
    table.boolean('rjrkxavwdh');
  });
  await knex.schema.alterTable('ekibmvqdbc', function(table) {
    table.boolean('batyewfjuq');
    table.json('tpampmvdwl');
    table.text('fhrsrhvqyk');
    table.timestamp('zgegfuczyk');
    table.float('amxlxhbdwy');
    table.integer('nzhkgjtbgf');
    table.float('byaaegxzzg');
    table.timestamp('uiqgnwcpjx');
    table.bigInteger('ukflbwiauw');
    table.integer('efrtsvwwrb');
  });
  await knex.schema.alterTable('gnumdygizg', function(table) {
    table.timestamp('dmemwhyuts');
    table.json('xbaooajdao');
    table.timestamp('ctbsvkvawg');
  });
  await knex.schema.alterTable('hypjmubjfq', function(table) {
    table.timestamp('mbfbnqloqq');
    table.json('wakjweypbk');
    table.bigInteger('vqxloeyzzf');
    table.boolean('hdmgwudkyh');
    table.string('mzdqonqomg');
    table.json('fgorzasszb');
    table.bigInteger('jwhvmngezb');
    table.float('fdekykxwvz');
    table.text('tlqgbdlrxt');
  });
  await knex.schema.alterTable('ykgwchhxql', function(table) {
    table.float('fvsdwhnknf');
    table.boolean('lraogtxqzk');
    table.float('bjlphwuxnq');
    table.text('sidakahwgb');
    table.text('jgatawsenx');
    table.text('njciknhttt');
    table.string('jhzvhwmtnp');
    table.float('glnlknkiwk');
    table.timestamp('krjxdupphl');
  });
  await knex.schema.alterTable('vexgcyldzq', function(table) {
    table.integer('csluzzmmtg');
    table.bigInteger('jfnftsiwsd');
    table.boolean('xeepdxcuna');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};