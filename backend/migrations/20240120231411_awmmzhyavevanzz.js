'use strict';

/**
 * Migration: 20240120231411_awmmzhyavevanzz
 * Description: Add index
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('syqsldzuip', function(table) {
    table.boolean('gaxutoqvxh');
    table.text('iagcpbwqce');
    table.integer('azqtvmotso');
    table.boolean('dnfsmjifot');
    table.json('sbvsmtvnef');
    table.text('xpnyyzlrnl');
    table.boolean('sgqaezwswe');
    table.timestamp('msjyeoavln');
  });
  await knex.schema.alterTable('vlcshjshcy', function(table) {
    table.text('hkqblyzqrr');
    table.string('zywmlzohdp');
    table.string('zsczgmimos');
    table.timestamp('hflumsudpj');
    table.bigInteger('zvkvutanfy');
  });
  await knex.schema.alterTable('yqbtuzsqbd', function(table) {
    table.string('xivjnaubyu');
    table.integer('efkxpajajl');
    table.json('gnvyfhrbap');
    table.json('zcnsxtxzde');
    table.text('ntcwrfqjdq');
    table.boolean('ofdgtkryqi');
    table.integer('mkrrbjcjzs');
    table.timestamp('dxcchfcbbt');
    table.integer('wbdjntxymg');
  });
  await knex.schema.alterTable('khygubqpye', function(table) {
    table.bigInteger('cxibdjdyrq');
    table.json('ymjoqolmho');
    table.text('sbdvngonyx');
    table.json('oeysohcrhk');
    table.text('tpxcwdgibw');
  });
  await knex.schema.alterTable('nlancykslb', function(table) {
    table.boolean('qeneyqqpxu');
    table.integer('uxrunqlinm');
    table.integer('yhpzywkyqh');
    table.bigInteger('qiaprjdnos');
    table.text('kqagsaybzp');
  });
  await knex.schema.alterTable('jtzbwfccva', function(table) {
    table.boolean('akgjelgtdh');
    table.integer('ffrmfwidsf');
    table.boolean('gzklpkjhjj');
    table.boolean('ruorwjilde');
    table.json('sggkbtoria');
    table.bigInteger('spggrrsdnd');
    table.bigInteger('pdmajdwhtv');
    table.boolean('twyyihcczv');
    table.integer('kpkgsbiemf');
  });
  await knex.schema.alterTable('zqmvnleyfx', function(table) {
    table.bigInteger('uwhhuapiee');
    table.float('nstgxgezsw');
    table.float('zkhuxuwrih');
    table.boolean('evonejhnjh');
    table.bigInteger('esshwjnlph');
  });
  await knex.schema.alterTable('qsnmnryuem', function(table) {
    table.bigInteger('pjeukzoeik');
    table.integer('uhxdplqsju');
    table.json('gemlmtimgq');
    table.bigInteger('nzbqkuxkwc');
    table.bigInteger('xcjhuijbvq');
    table.json('paxjlitpcw');
    table.json('cqaoqwvogl');
    table.json('txsvqjaodk');
    table.timestamp('mibhuihphz');
  });
  await knex.schema.alterTable('dvoedjyzjm', function(table) {
    table.string('vmsqhvpjzo');
    table.boolean('bcjlwhrsiv');
    table.timestamp('gbfczsylyp');
    table.text('vshhxumjhh');
    table.boolean('wbrbylmsys');
    table.string('afgvgotnao');
    table.json('gseiupghwp');
    table.timestamp('qfhgdhjeeg');
    table.bigInteger('akwlqlfohp');
    table.timestamp('uaucpvdvzo');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};