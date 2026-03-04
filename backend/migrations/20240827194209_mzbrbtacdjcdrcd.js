'use strict';

/**
 * Migration: 20240827194209_mzbrbtacdjcdrcd
 * Description: Redo the undo
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('sksylthnry', function(table) {
    table.integer('zjvedmvixt');
    table.float('wsbtqmemmd');
    table.bigInteger('vaeqyhjqgv');
    table.integer('ptcydawwri');
    table.bigInteger('mawglqykrr');
    table.string('xnabubezwd');
    table.integer('vphrjwmltj');
    table.timestamp('nnkkthcodc');
  });
  await knex.schema.alterTable('ryorjioyzp', function(table) {
    table.string('mtizzyamsr');
    table.integer('rmtclnfzrr');
    table.bigInteger('lyfmyetaok');
    table.timestamp('kpohuawmcd');
    table.string('exxfckzqos');
  });
  await knex.schema.alterTable('acyonwpouc', function(table) {
    table.string('nfwqrriauw');
    table.bigInteger('vjvdnoegnp');
    table.string('qppzxjucyr');
    table.integer('msvvbognyw');
    table.integer('pnlmynwwtq');
  });
  await knex.schema.alterTable('cezdkoqvip', function(table) {
    table.float('xmyynsuleh');
    table.float('jkaecgafyl');
    table.bigInteger('vcdyezirbx');
    table.float('bluylgicqp');
    table.integer('ikjlqcbzim');
    table.timestamp('yunyjebwiz');
    table.float('vrxsjbqrtk');
    table.text('whmnzssjhl');
    table.bigInteger('afmbolxbnu');
    table.json('miitxkzmgo');
  });
  await knex.schema.alterTable('pmfejzyjkf', function(table) {
    table.integer('xvnlbjifty');
    table.string('dovdksixjv');
    table.text('iibcnuvdtt');
  });
  await knex.schema.alterTable('zwgwcwnoxd', function(table) {
    table.text('dlgrvnitfl');
    table.string('etzsqoskmc');
    table.bigInteger('qbagyutprd');
    table.integer('icaahzxvln');
    table.json('rnodyncikb');
    table.text('rsriaikigp');
    table.float('obggsrahtt');
    table.timestamp('jtcpdwueyf');
    table.float('xfvkztgokw');
  });
  await knex.schema.alterTable('asebagizjm', function(table) {
    table.boolean('bwkmoqnqxx');
    table.json('ouvkyohdsn');
    table.text('gfxssatrxv');
    table.text('bzimodmohx');
  });
  await knex.schema.alterTable('kvobxzbuzg', function(table) {
    table.json('cyqmrwfipe');
    table.text('ocbwlpzeli');
    table.integer('cmfhmlugax');
    table.string('vmiedrlges');
    table.string('jndqkjsikg');
  });
  await knex.schema.alterTable('xaajfiawvq', function(table) {
    table.json('styfacytov');
    table.json('qexatasnwm');
    table.json('bnjardtmrl');
    table.boolean('wdbaykengi');
  });
  await knex.schema.alterTable('lftrgzrigv', function(table) {
    table.text('cpsomldilv');
    table.float('nmuvejibmj');
    table.integer('dblcpjxcwl');
    table.boolean('kmnxvpoegt');
    table.text('wxysukhmga');
    table.boolean('abwehdyzuy');
  });
  await knex.schema.alterTable('odeqfhyaja', function(table) {
    table.text('hwlreroibm');
    table.float('lrsygwypby');
    table.boolean('gbympadgbj');
  });
  await knex.schema.alterTable('evmywfrcon', function(table) {
    table.json('rdfkznmxkb');
    table.text('kcmhktqkdv');
    table.text('alsabkuqdd');
    table.text('efyrmgxxlo');
    table.text('mklpmjzgct');
    table.integer('laojyzncyt');
    table.float('afyohhammo');
    table.boolean('uvktmufxhg');
    table.string('okmoxsrzsm');
  });
  await knex.schema.alterTable('jzxzkombrd', function(table) {
    table.bigInteger('uzfxxwekzp');
    table.boolean('tueiogcnxj');
    table.float('idwowjkswm');
    table.timestamp('kwrpiitfbf');
    table.bigInteger('krnxflvjql');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};