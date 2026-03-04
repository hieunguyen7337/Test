'use strict';

/**
 * Migration: 20240323154231_fmlmomywgqroced
 * Description: Add index
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('pquswwqtsx', function(table) {
    table.bigInteger('maqvyccfxi');
    table.text('bjakjkkant');
    table.string('iaqwnjqxcr');
    table.bigInteger('zmqmuyxmpk');
    table.integer('mcoiemyddt');
  });
  await knex.schema.alterTable('twfassfcum', function(table) {
    table.bigInteger('ijusvnbdcf');
    table.json('uuezsloixd');
    table.bigInteger('mrhoxcjrzg');
    table.float('yizkshbuon');
    table.json('jknsjuvymm');
    table.integer('uyowoyvhgv');
    table.timestamp('kqxxwfearz');
    table.timestamp('sfhuplsjvl');
    table.string('nqtiqmcvyu');
  });
  await knex.schema.alterTable('ydnmcybjiq', function(table) {
    table.boolean('qrovazmqqo');
    table.timestamp('ppgqfnrscg');
    table.timestamp('lezkyolgel');
  });
  await knex.schema.alterTable('kwjizyngla', function(table) {
    table.timestamp('egkxzwxswm');
    table.bigInteger('typmukexry');
    table.float('nayuhmafwk');
    table.boolean('fammtppcai');
    table.text('gczjvwbrxp');
    table.integer('hdcovjzytr');
    table.json('xupfqkyteb');
    table.boolean('xnruyyhafj');
  });
  await knex.schema.alterTable('icjbjgtvhr', function(table) {
    table.bigInteger('xeganyxfnz');
    table.timestamp('inpykljxca');
    table.bigInteger('xmtjppmnhm');
    table.json('lmlmlcpzpq');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};