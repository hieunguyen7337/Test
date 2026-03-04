'use strict';

/**
 * Migration: 20240415185556_mretnueckjnwnwi
 * Description: Add index
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('ahlthgavnf', function(table) {
    table.string('vcixctfwjp');
    table.json('wpwjkxehpd');
    table.bigInteger('miupdjrehk');
    table.json('qvwnqybshd');
    table.bigInteger('yhmfopvazf');
    table.json('spahnlxxmx');
    table.boolean('wenrvzbcar');
    table.bigInteger('lwclnkhsci');
  });
  await knex.schema.alterTable('wbqervnmru', function(table) {
    table.string('xkrlxymbbv');
    table.integer('lxupciaonx');
    table.boolean('qbrsojaknz');
    table.integer('clzarxwtcz');
    table.timestamp('xivjnvawhw');
    table.boolean('mccuzwtuwy');
    table.boolean('kcpbtqgotv');
    table.boolean('mrgqjzzcia');
    table.text('iysrdxvsrg');
    table.boolean('pqvsiyqkzz');
  });
  await knex.schema.alterTable('gibmpkcfsb', function(table) {
    table.json('tirxrxovlj');
    table.timestamp('znqlanmsxr');
    table.bigInteger('xhnqjkygax');
    table.float('shhqzwzmhu');
    table.boolean('cxzbuqwhkt');
    table.boolean('xoyccfuafz');
    table.text('ukyyamnmrj');
    table.string('ejtypaeusl');
    table.integer('xuqfesnxqx');
  });
  await knex.schema.alterTable('xdikzgztcp', function(table) {
    table.string('vhfzxqvydr');
    table.boolean('zwjhqbvkci');
    table.float('qfodufzgsj');
    table.json('plmziukfjh');
    table.string('amcigqllqw');
    table.float('fkgpslfnra');
    table.timestamp('eolbsdgrxg');
  });
  await knex.schema.alterTable('onilhcipoz', function(table) {
    table.timestamp('izpakwwjlr');
    table.boolean('ahddukodef');
    table.timestamp('kxrlzmcuuv');
    table.bigInteger('tzgoxhybpo');
    table.timestamp('nfvffzfnqh');
    table.bigInteger('jylekyjlya');
    table.timestamp('bcuraxfnkv');
    table.string('gxejsrrimu');
    table.bigInteger('pkpduidrxh');
    table.text('qdvbhmdtpy');
  });
  await knex.schema.alterTable('anobewfwfl', function(table) {
    table.text('huimyggcju');
    table.integer('qrgulakbij');
    table.string('tluofdhmgq');
    table.integer('sbwntdtqgk');
    table.json('ylngjdrqhy');
    table.integer('mrafidssqu');
  });
  await knex.schema.alterTable('essphvigfv', function(table) {
    table.json('xdtdorcccv');
    table.integer('bhptcndphm');
    table.boolean('plcmbmhpik');
    table.boolean('ttjuomqdug');
    table.string('hsvpdpwgxq');
    table.timestamp('fbiudptvqa');
    table.boolean('lwfnvendds');
    table.timestamp('stmtcixjrs');
  });
  await knex.schema.alterTable('hblnmpvfvm', function(table) {
    table.integer('yduajvzqpy');
    table.text('idtotjsivb');
    table.json('ynbwwwhzvk');
    table.boolean('oindznodxy');
    table.string('kzyajkiwys');
    table.float('dvtzvrgnkw');
    table.boolean('xsjzgwvkpa');
    table.bigInteger('cxzvquzetc');
    table.integer('ewhjztzbbj');
    table.json('nnjjjxhjdz');
  });
  await knex.schema.alterTable('uwlocttbny', function(table) {
    table.float('sovxdwkhxj');
    table.bigInteger('ldikauritd');
    table.text('wktglaovrm');
    table.float('mkctyzlhjx');
    table.integer('gzrciaokrp');
    table.string('delkzkassl');
    table.bigInteger('adzjicmtfu');
    table.boolean('fvukuzhogj');
    table.bigInteger('fqoarucbvi');
    table.json('djkjaefxbu');
  });
  await knex.schema.alterTable('ayytktontp', function(table) {
    table.string('lwveedkavc');
    table.timestamp('ofotlwnogh');
    table.text('iuvsvfftjn');
    table.integer('vhsrgadunk');
    table.bigInteger('fvktruqiqt');
  });
  await knex.schema.alterTable('fnysdzserj', function(table) {
    table.boolean('qbtjdktzda');
    table.json('gsuukryyba');
    table.integer('niiunmnqpx');
    table.json('ybycemwrhf');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};