'use strict';

/**
 * Migration: 20240403142848_rvlaychdvwbhuiq
 * Description: Remove column
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('jrjcfqibyg', function(table) {
    table.float('icdkpccfko');
    table.float('vzckxnsmbn');
    table.boolean('pswpzkxlym');
    table.integer('lwhosgycpq');
    table.integer('bxzsenhpui');
    table.text('pmdnjwqhfg');
    table.text('jyilhzmytt');
  });
  await knex.schema.alterTable('xcxflcuwrg', function(table) {
    table.float('alkqlzxtib');
    table.timestamp('duiydojwei');
    table.boolean('uksusquyyn');
  });
  await knex.schema.alterTable('xoxypdzudb', function(table) {
    table.float('lehkobvtvx');
    table.float('adocmynwjb');
    table.bigInteger('ckhyaherpn');
    table.json('vkjlemdtbq');
    table.bigInteger('afuzouqnty');
    table.timestamp('cfashixrmr');
    table.float('frucwalfhn');
  });
  await knex.schema.alterTable('cqzcgkuvny', function(table) {
    table.json('blhvcekgdg');
    table.string('dxriknzuyk');
    table.text('ruauietxpm');
    table.json('dzfblpclwj');
    table.text('qennbwphpc');
    table.text('eqvdegtbbg');
    table.boolean('udzmskgytq');
    table.timestamp('qggjxfqqax');
  });
  await knex.schema.alterTable('luhfnsbgnh', function(table) {
    table.text('whjactxopd');
    table.integer('hjkygdthhb');
    table.bigInteger('vrbkmuvqpw');
    table.integer('mwkuwanzzk');
    table.float('ijurmfaals');
    table.string('pghsqrrmgg');
    table.bigInteger('ktyukdqsxz');
  });
  await knex.schema.alterTable('lhhediwegk', function(table) {
    table.float('eheaiypmqz');
    table.boolean('oenugwyzen');
    table.boolean('ljymioeemu');
    table.json('zciezwsify');
    table.boolean('iqkpiivyhl');
    table.boolean('cqifftqxms');
    table.float('ltdomvnauu');
    table.float('lcxsfsmsnm');
  });
  await knex.schema.alterTable('vjbgtvjado', function(table) {
    table.boolean('qtjbobjnug');
    table.boolean('socnnrbqbn');
    table.timestamp('irghhyxvmi');
    table.json('vxyejksukj');
  });
  await knex.schema.alterTable('ifbnnlxlsf', function(table) {
    table.integer('dicjgyayqw');
    table.string('cntaqqdndm');
    table.text('addnyjgnfv');
  });
  await knex.schema.alterTable('dsflbaswgz', function(table) {
    table.float('bwynfgyzvs');
    table.timestamp('pzljyrvmfr');
    table.float('cxrxkdmkdm');
    table.json('hswirkvsos');
    table.text('speqqoikou');
    table.boolean('fweursuhlj');
  });
  await knex.schema.alterTable('ydnwlciyeb', function(table) {
    table.string('egjtixasjl');
    table.boolean('vahhiewpqz');
    table.bigInteger('xbuvgtnszr');
    table.float('rfjkklyywa');
  });
  await knex.schema.alterTable('apkcmjbkmk', function(table) {
    table.json('mppsguoxqn');
    table.string('rhtaeodzfw');
    table.float('ilqgsrxnjl');
    table.json('wicapasgpt');
    table.float('hycrxcdkwu');
    table.json('gzmmfhozkt');
  });
  await knex.schema.alterTable('fjtbjjnfju', function(table) {
    table.json('vhlqezcjsr');
    table.timestamp('cihawtvbgw');
    table.boolean('kqxrfzpqrp');
    table.float('xjitklcpzc');
    table.json('cqjtpoueey');
    table.float('jqcjkqnsqh');
    table.timestamp('gqauzhhmgo');
    table.text('diadhqnnjc');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};