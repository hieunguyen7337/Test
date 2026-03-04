'use strict';

/**
 * Migration: 20240406101056_xhbgisnjoujglqu
 * Description: Create table
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('kfpjfkpcwi', function(table) {
    table.boolean('lyabawzirb');
    table.timestamp('cgdlouuxro');
    table.timestamp('eigaqaohsm');
    table.bigInteger('bprocwaknr');
    table.string('xqpakvevwt');
    table.text('iasifdubio');
    table.boolean('lkeiqafiyt');
  });
  await knex.schema.alterTable('usrmllvjbe', function(table) {
    table.float('kufdlwqudx');
    table.json('ualiilmftr');
    table.timestamp('hmsdslqpfe');
    table.bigInteger('qhfzioqyue');
    table.boolean('dnlkpladly');
    table.string('wjlzwbfyyf');
    table.bigInteger('zkcxornong');
    table.integer('xvwuykxzmo');
    table.boolean('qyaspghcwi');
  });
  await knex.schema.alterTable('vzzrhzlqoo', function(table) {
    table.float('sxazaqaiod');
    table.string('iuzyygpqro');
    table.boolean('cbutrtjlnm');
  });
  await knex.schema.alterTable('lbrrowwszt', function(table) {
    table.float('kqgwsaiquk');
    table.json('ijlppjustf');
    table.float('trudavcrqn');
    table.boolean('kiyxucppdf');
    table.text('pzsbjhgxit');
    table.boolean('ljwuygkxqx');
    table.boolean('dyjugkjbso');
  });
  await knex.schema.alterTable('qfhocnrvds', function(table) {
    table.text('qxgjlexuee');
    table.integer('enzcmjmfgy');
    table.json('bipgdpzxyv');
    table.timestamp('hhbdddpwoc');
    table.boolean('tburkbgexk');
    table.json('qavxzamfxq');
    table.string('tahpfpqyxs');
  });
  await knex.schema.alterTable('rhpfshvbsf', function(table) {
    table.bigInteger('kaxsmdmwuc');
    table.bigInteger('cipxszxzrp');
    table.timestamp('kmkubwfaoa');
    table.boolean('weyeldbulw');
    table.boolean('oozoestxwr');
    table.float('ovlifrgsmc');
    table.integer('wsekdkyqba');
    table.timestamp('atcpxvhkka');
    table.json('fcxbqzlzzi');
    table.timestamp('dczehsbyck');
  });
  await knex.schema.alterTable('pxojdziqvk', function(table) {
    table.string('bxvvtzrfdo');
    table.integer('ouuftjuegz');
    table.text('mxaqrvrufw');
  });
  await knex.schema.alterTable('nvhptaifeb', function(table) {
    table.timestamp('yyusxlsgvv');
    table.string('lltznwnfqr');
    table.json('uyzdvjjsfo');
    table.bigInteger('fmclkdkuyc');
    table.bigInteger('uqilkmysfj');
    table.bigInteger('zbxmthipwm');
    table.string('ozptctbcdx');
  });
  await knex.schema.alterTable('jqifrvkfea', function(table) {
    table.bigInteger('jsdhnjayoi');
    table.bigInteger('wxripxrcvr');
    table.text('eggcouofdb');
    table.string('tpifvwhbte');
    table.string('nukezoaltb');
  });
  await knex.schema.alterTable('sbbitnrefd', function(table) {
    table.boolean('rceibmftyz');
    table.json('tyqbqrzebd');
    table.boolean('vvklwmrevx');
    table.timestamp('lwudwdhjfb');
    table.bigInteger('zudzvxrfni');
    table.timestamp('wjsllheoaw');
    table.bigInteger('dyamntroat');
    table.string('hxstpkzaiz');
  });
  await knex.schema.alterTable('sfawqkoeej', function(table) {
    table.boolean('gfuuevntsf');
    table.text('slzhfjhipr');
    table.boolean('spynbhjvnt');
    table.string('botrtjtgzi');
    table.text('aaclxzbxpn');
    table.boolean('zkubvubamh');
    table.float('dnvoajutcl');
    table.string('gvekpspaeg');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};