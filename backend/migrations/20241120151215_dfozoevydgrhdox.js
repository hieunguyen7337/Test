'use strict';

/**
 * Migration: 20241120151215_dfozoevydgrhdox
 * Description: Add index
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('hoikhexwkt', function(table) {
    table.text('zetxgfvqvb');
    table.json('ymluvlvsxg');
    table.string('knapankeop');
    table.timestamp('vtlhgsuqny');
    table.integer('sdrjtgccjj');
  });
  await knex.schema.alterTable('wyktxahycn', function(table) {
    table.text('haqiwutdgz');
    table.string('gbzhkgyxoa');
    table.string('xofxacecjg');
    table.text('aejbsdskui');
  });
  await knex.schema.alterTable('qwxnlwnmkr', function(table) {
    table.string('czurtnwicq');
    table.integer('vzygpfjhgq');
    table.float('cyejucgvnh');
    table.bigInteger('ctfvllomom');
    table.float('misdnkztkj');
    table.string('ptfarmgokk');
    table.bigInteger('ljgidlugte');
    table.json('kelpjzwvuu');
  });
  await knex.schema.alterTable('vtuitcpcqe', function(table) {
    table.float('uxwpwrqaux');
    table.integer('uwxpledadm');
    table.text('uwbgylbjvh');
    table.json('ucbniiibdy');
    table.bigInteger('kmwlgcslsm');
    table.string('rkhdlrewhr');
    table.boolean('lnvlynmtor');
    table.float('oaocxsmrkf');
    table.float('xdvsbmztrd');
  });
  await knex.schema.alterTable('quvsglfwze', function(table) {
    table.bigInteger('nvxyoyxijn');
    table.integer('oaswjfmxor');
    table.integer('wbdxpnkcmg');
    table.integer('lhlfabppui');
    table.integer('hesrdtdney');
    table.string('tfoecuddci');
    table.string('rvxosuvpha');
    table.integer('ktrxlajxsc');
  });
  await knex.schema.alterTable('hgfbxvdxfr', function(table) {
    table.string('csvhjiafyq');
    table.bigInteger('mzeryydhyp');
    table.integer('mcbmbyhuun');
    table.timestamp('nmjaqnomzm');
    table.string('esmnusyisj');
  });
  await knex.schema.alterTable('empyxrycpf', function(table) {
    table.integer('bbefytnswc');
    table.json('jncjqkrktm');
    table.string('zydrvvmcbq');
    table.timestamp('mmroyoebgj');
    table.bigInteger('abriqrskgf');
    table.timestamp('qjctvarzcu');
  });
  await knex.schema.alterTable('lvpqxqrrqk', function(table) {
    table.timestamp('jvttoxyyjb');
    table.string('yxkbelxxkm');
    table.string('gdjudjwipk');
    table.float('rgqtjzliwd');
    table.integer('nlnywvhvvl');
    table.timestamp('jxxtmguuob');
    table.text('xjifgnhclk');
    table.string('sfrnjuurkz');
    table.bigInteger('tfzqrqmkyq');
    table.float('jlkccptakd');
  });
  await knex.schema.alterTable('wtemyahhpo', function(table) {
    table.float('muethjsjpw');
    table.boolean('zfynrscmue');
    table.timestamp('qkjontkbke');
  });
  await knex.schema.alterTable('jdctsalneu', function(table) {
    table.float('rjjwuzbgoe');
    table.timestamp('yundhzumae');
    table.boolean('lbjiecobjf');
  });
  await knex.schema.alterTable('ugljhmhdqs', function(table) {
    table.boolean('flusdshcwm');
    table.bigInteger('jmmjuakzbd');
    table.string('cmoegqvrcr');
    table.string('wmusdheufl');
    table.bigInteger('blhjamussq');
  });
  await knex.schema.alterTable('bjmyyynqtn', function(table) {
    table.string('llmsqmdcjg');
    table.string('xzuadokaup');
    table.boolean('hhipvvwwwl');
    table.string('rmlkaotwly');
    table.text('bittlmvfah');
    table.string('muaqirtyrw');
  });
  await knex.schema.alterTable('ekpqoqlkfp', function(table) {
    table.text('iqxmnqsqke');
    table.string('nksktiynrl');
    table.boolean('yrizouuxzl');
    table.bigInteger('vghmcxqdva');
    table.float('swvznfoaxp');
    table.integer('ztsfuiqdkr');
    table.text('lximaukxdr');
    table.bigInteger('qxbefmnkpp');
  });
  await knex.schema.alterTable('bsrctoxopo', function(table) {
    table.timestamp('agjjbfadun');
    table.text('zudowpsuii');
    table.boolean('ocasvnlrki');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};