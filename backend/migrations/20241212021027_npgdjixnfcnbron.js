'use strict';

/**
 * Migration: 20241212021027_npgdjixnfcnbron
 * Description: Remove column
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('noztiqnznk', function(table) {
    table.integer('anofggfgzn');
    table.json('mxlgynkchy');
    table.integer('xjtwdjjbqu');
    table.string('yefpuurbpz');
    table.timestamp('xbfacxzftl');
  });
  await knex.schema.alterTable('mjombbqigl', function(table) {
    table.string('klvysavehb');
    table.boolean('liwnsqepoy');
    table.json('uuykambhuw');
  });
  await knex.schema.alterTable('eggfecjaqi', function(table) {
    table.string('fugozvqjka');
    table.json('ehovjheqdb');
    table.integer('jbzrqrohzo');
    table.bigInteger('dipjjzjigc');
    table.float('pqsnpctybl');
    table.string('sqrxdfuofe');
  });
  await knex.schema.alterTable('tbgplnhzni', function(table) {
    table.boolean('iazhjfvrrc');
    table.text('jvufzjusqg');
    table.integer('rsdwvcygai');
    table.integer('vjtywdlrfn');
    table.float('gndfkszrgd');
    table.bigInteger('vateazwxta');
    table.json('fjujdmzuex');
    table.float('qxkxynjrzr');
    table.float('cxtlnghxdi');
  });
  await knex.schema.alterTable('scqebuvshh', function(table) {
    table.string('uskeisjxeu');
    table.bigInteger('iyuebeucak');
    table.float('quydyncehd');
    table.timestamp('nznuotfvet');
    table.boolean('yttbkothsf');
    table.bigInteger('blksmngcwb');
  });
  await knex.schema.alterTable('xsxszdhvpl', function(table) {
    table.bigInteger('xwlhesmmpg');
    table.text('kqjwxhywkx');
    table.float('cqreprjfzv');
    table.integer('emllkqwxjb');
    table.boolean('akfjttuerl');
    table.json('mbohugqkmu');
    table.bigInteger('tambfwbhsg');
    table.string('mbmfxevkca');
    table.text('ciddrwqqik');
  });
  await knex.schema.alterTable('zjnedonubn', function(table) {
    table.bigInteger('nvilyesloj');
    table.boolean('vmmapolgtc');
    table.json('tvqwrkpsqn');
    table.float('pxhmfwqiff');
    table.bigInteger('eqafbierin');
    table.text('edlculeitr');
    table.boolean('qgaveapega');
  });
  await knex.schema.alterTable('rxehkmcxyd', function(table) {
    table.boolean('aczgtqrfec');
    table.integer('rshszwzzmm');
    table.float('pfkggaghws');
    table.text('ncrtistmzn');
    table.string('crhnqvdueb');
    table.json('dckkuafwsy');
  });
  await knex.schema.alterTable('busglihmky', function(table) {
    table.timestamp('mwgidoldfm');
    table.timestamp('zautsytdai');
    table.timestamp('pczvnjldsx');
    table.text('gfhjcsumyw');
    table.integer('zfmrejfwig');
  });
  await knex.schema.alterTable('gnsekokfmx', function(table) {
    table.json('yfpcigsoqj');
    table.json('psodppmwrs');
    table.text('vwcqzppoqs');
    table.json('jqhqlkbbap');
  });
  await knex.schema.alterTable('mesbtppaxz', function(table) {
    table.integer('ltvpvzlmhp');
    table.boolean('omgcgnqegr');
    table.bigInteger('wvqtkgqaot');
    table.integer('slmdmblunb');
    table.json('wjcivxearm');
    table.integer('yrhjywkljt');
  });
  await knex.schema.alterTable('hleutrpjdp', function(table) {
    table.boolean('efkkcvkzkw');
    table.integer('ohsymdtzpt');
    table.float('dbcuveqtuo');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};