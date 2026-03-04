'use strict';

/**
 * Migration: 20240101191529_kljkeszuyuurtso
 * Description: Remove column
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('mbjhdmeyty', function(table) {
    table.bigInteger('faflcfoslo');
    table.float('wgoyocahuf');
    table.bigInteger('igzzddpdva');
    table.timestamp('lcdruarmqx');
  });
  await knex.schema.alterTable('yqrsojugix', function(table) {
    table.integer('ezvkyafscw');
    table.text('nfknpakrlf');
    table.bigInteger('hlknbyllnr');
    table.json('bbagdceaxv');
    table.text('czcwzcwwzp');
    table.timestamp('fqkrrrzbcl');
    table.float('bgeagckblq');
  });
  await knex.schema.alterTable('xybeqkwyxk', function(table) {
    table.integer('uxbwfstrsu');
    table.string('wegtindggn');
    table.json('mzowrshcql');
    table.boolean('gkjxwpmurc');
    table.json('jtinuidbgp');
    table.text('uifxbmoraw');
  });
  await knex.schema.alterTable('funoyfeobj', function(table) {
    table.bigInteger('sffvivmzas');
    table.timestamp('nfczttsgei');
    table.text('yuhrrwemjb');
    table.text('payjscnvre');
    table.bigInteger('yoadrzqhez');
    table.bigInteger('yxfxygmtix');
    table.text('gumhzgjzmk');
    table.json('znzwvrrtzu');
    table.json('vopnykuafk');
    table.json('wgcftnwfbr');
  });
  await knex.schema.alterTable('bbjxwcgjkx', function(table) {
    table.json('llbkovfiql');
    table.json('qvhqtubbrp');
    table.integer('ydxyyhjaaa');
  });
  await knex.schema.alterTable('rqszmfatxn', function(table) {
    table.boolean('vjarmsfgvg');
    table.bigInteger('rzesglcuev');
    table.bigInteger('tzpouxlxrp');
    table.text('giofntmbkg');
  });
  await knex.schema.alterTable('ozcplzeuta', function(table) {
    table.string('vefyzbehoe');
    table.integer('nvzsbrchmv');
    table.json('gyzpjzecrd');
    table.text('afeuzqgdrk');
    table.string('osrhllbsry');
    table.integer('qqgxfkskgd');
    table.timestamp('xtithnkuue');
    table.string('puqgabyuvr');
    table.string('kihidvqgql');
  });
  await knex.schema.alterTable('goavsypjmn', function(table) {
    table.bigInteger('nxvxwpyyxj');
    table.float('anqfegngco');
    table.string('qhpjwnzjcz');
    table.text('hzrdbgxumt');
    table.boolean('rirwzshtft');
    table.bigInteger('orjkbnyczg');
    table.float('wtxbmfiahu');
    table.json('mtaxxglyvj');
    table.text('riptidqhoc');
    table.boolean('ddhhqioydm');
  });
  await knex.schema.alterTable('ceqdvabdul', function(table) {
    table.integer('glhhoynksd');
    table.timestamp('utscglrxgq');
    table.timestamp('liiuzrccnv');
    table.float('zntxrtazna');
    table.boolean('iicmvidfac');
    table.text('lotsjzbaok');
    table.integer('tbacvaiizn');
  });
  await knex.schema.alterTable('xqebjrnhxp', function(table) {
    table.boolean('owfykipdfi');
    table.integer('avruuswwqt');
    table.bigInteger('nnqdmwoags');
  });
  await knex.schema.alterTable('aytcydycjg', function(table) {
    table.integer('dwuzljwtmy');
    table.text('kbqjpqagri');
    table.bigInteger('hnlcamxtmm');
    table.json('jnwvxprrfa');
    table.boolean('lqijrwehue');
    table.integer('rpsvbkfzxe');
    table.float('ntivxogyph');
    table.integer('pdkhoekyic');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};