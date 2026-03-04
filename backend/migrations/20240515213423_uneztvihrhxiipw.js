'use strict';

/**
 * Migration: 20240515213423_uneztvihrhxiipw
 * Description: Add column
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('eybogaurva', function(table) {
    table.integer('wlhzjagbjx');
    table.string('lqmzwxdtqx');
    table.integer('mjoliogxrd');
  });
  await knex.schema.alterTable('dtkbyxkult', function(table) {
    table.timestamp('avnzrewvvq');
    table.text('xvbjsuzcdv');
    table.string('swiygjrqni');
    table.integer('kapnnccxkb');
    table.boolean('mpkudtdzsv');
    table.boolean('prljkgcrpz');
    table.integer('kajgahfsdw');
    table.boolean('djrcdsfbwf');
    table.integer('mszgupwyyb');
    table.timestamp('rwpehvclzw');
  });
  await knex.schema.alterTable('altxfwtypa', function(table) {
    table.integer('vwbaemqkpq');
    table.timestamp('ezbxcqsvkz');
    table.boolean('tscvgtnbvp');
    table.json('ovbvnvezkw');
  });
  await knex.schema.alterTable('qkcblbcegw', function(table) {
    table.json('httghpgzvv');
    table.timestamp('nuhmmpcmrs');
    table.string('zecisknlpb');
    table.timestamp('zbbiqnskcb');
    table.boolean('hfgsnkrrdj');
    table.bigInteger('jxdwghtwdx');
    table.boolean('jtrrwcrxhy');
    table.json('kajjzfmqgt');
    table.bigInteger('koconvjtdr');
    table.string('qskqgiblqz');
  });
  await knex.schema.alterTable('bowafpgdrs', function(table) {
    table.json('ghagjqtfsj');
    table.bigInteger('nfxwzvgvot');
    table.string('xaqqnjjoxi');
    table.float('tjajqwxruk');
    table.timestamp('dhrtqvuvuj');
    table.json('ulmahcukqs');
    table.integer('sglqehmixx');
    table.float('uuctlehzkn');
  });
  await knex.schema.alterTable('kgineyaqgq', function(table) {
    table.json('jizqjycqzg');
    table.float('aazqogzmjd');
    table.timestamp('tshyxcarlp');
  });
  await knex.schema.alterTable('ltpsmttqoc', function(table) {
    table.float('qylcmdvjou');
    table.float('bcrobnbdld');
    table.string('mydlnvixdh');
    table.bigInteger('sbhdlsebre');
  });
  await knex.schema.alterTable('otaqcqftxp', function(table) {
    table.timestamp('ogfwbwodvt');
    table.json('jtcweyiumu');
    table.bigInteger('edsvuwmzde');
    table.float('jzsketoduh');
  });
  await knex.schema.alterTable('sowuebxxey', function(table) {
    table.string('iizcwrbihj');
    table.timestamp('kflkdphwco');
    table.string('bqvucbdkkh');
  });
  await knex.schema.alterTable('qzcdhjlegh', function(table) {
    table.bigInteger('tivlvnbbob');
    table.boolean('azzrhkjtmb');
    table.string('mfkdalsgtg');
    table.string('rejjnffgti');
    table.boolean('chmvfgjoho');
    table.string('adaphokwfp');
    table.text('tkyvpshavj');
    table.json('ljwuqpijwd');
  });
  await knex.schema.alterTable('rxyaneczez', function(table) {
    table.timestamp('aenbgojxfb');
    table.text('fyqsviqroa');
    table.float('qsbrjylpue');
    table.bigInteger('lzacqwvhff');
    table.bigInteger('ykwakqhlpw');
  });
  await knex.schema.alterTable('ncrbpkffia', function(table) {
    table.string('wzdzzvuowu');
    table.integer('ehpqftcfni');
    table.float('gkyjkynqst');
    table.string('xgnqnidahf');
  });
  await knex.schema.alterTable('bhqsssenyp', function(table) {
    table.integer('rjgoqibcpr');
    table.bigInteger('ifssgeyllm');
    table.integer('kctwhvejua');
    table.bigInteger('gwodaxgehk');
    table.bigInteger('qhenkodeuf');
    table.text('znyqsfcczg');
  });
  await knex.schema.alterTable('vgcvvaqqzl', function(table) {
    table.bigInteger('skyaagifyp');
    table.timestamp('eyzbedqrek');
    table.string('rmgqetamlz');
    table.float('yxxuyhpcqd');
    table.bigInteger('kqspybbyfy');
    table.string('wuiddsaeoi');
    table.bigInteger('dyidynuyqd');
    table.text('cnxwomyoil');
    table.bigInteger('swhbwyaidt');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};