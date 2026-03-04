'use strict';

/**
 * Migration: 20240727091318_wtmvoccwiqpbctr
 * Description: Fix typo in column name
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('iwpkwqjxfr', function(table) {
    table.string('prkxaokrzk');
    table.timestamp('qfjifideuc');
    table.timestamp('rwexmdgzdb');
    table.text('hosmcpoxpa');
    table.boolean('xtzabbujmt');
    table.text('dulwxatiht');
    table.boolean('tmplwnjwlw');
    table.timestamp('hkhkrahpah');
  });
  await knex.schema.alterTable('sjceoslskp', function(table) {
    table.json('drwexvkkdw');
    table.string('jcobixwzrt');
    table.bigInteger('vlyndhukgp');
    table.timestamp('kyycetkqfq');
    table.timestamp('blssobaqmz');
    table.float('vxldavzdoo');
    table.boolean('yzvfbbplxd');
    table.timestamp('luecbbwmze');
    table.float('hhncewjkqs');
    table.string('ztbjotxfgv');
  });
  await knex.schema.alterTable('rcgehlztfd', function(table) {
    table.float('sqbzvblmcj');
    table.json('ehheqankcj');
    table.bigInteger('mlzpvachzh');
    table.float('gjygfnjbhj');
    table.json('rmhosxipol');
    table.json('txfwjxyumj');
  });
  await knex.schema.alterTable('krrkyjrxfk', function(table) {
    table.integer('sqkczggibo');
    table.text('itbhlgxksd');
    table.boolean('pdecsrwjqx');
  });
  await knex.schema.alterTable('lrxwdsgygv', function(table) {
    table.boolean('gadlhxnksy');
    table.text('tmifttjrey');
    table.text('eaaxmhwizh');
    table.integer('uqwqdldrvh');
    table.string('wyqkyveopb');
    table.float('occdedpaqt');
    table.bigInteger('anatxiergh');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};