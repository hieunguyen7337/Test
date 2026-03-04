'use strict';

/**
 * Migration: 20240805084531_gkgwrgdpvtqcich
 * Description: Remove column
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('jkycmkdirl', function(table) {
    table.bigInteger('ahjiprzyny');
    table.json('xhyskmcjbn');
    table.float('vohfnwrtlz');
    table.json('vltsnuemmm');
    table.timestamp('bukeeyxxjh');
    table.bigInteger('shurueylek');
    table.text('lipguxlerf');
    table.bigInteger('sgrukhtiga');
    table.bigInteger('fctmlroacx');
    table.boolean('gotegdrbzv');
  });
  await knex.schema.alterTable('srtgyijfpb', function(table) {
    table.integer('mtrfztcehn');
    table.json('yqfewddlvf');
    table.text('iefptcbyif');
    table.float('djqvnjffjx');
    table.integer('ybtyhtsrij');
    table.float('ekrejxtkrk');
    table.text('zaeskotloo');
  });
  await knex.schema.alterTable('vyqikvsepi', function(table) {
    table.text('tuayjhhrgs');
    table.string('wlzypfemqj');
    table.timestamp('jsgnufpftv');
    table.bigInteger('uiiptekpkl');
    table.bigInteger('nezbmizbxv');
  });
  await knex.schema.alterTable('iuphxfhpxt', function(table) {
    table.float('edzadqsdvn');
    table.json('wsrfjgqmrh');
    table.float('zycomobvje');
    table.float('hgidbaqand');
    table.json('xkihwdcwdm');
    table.json('vxzbbexbrb');
    table.boolean('zfvkxdfbma');
    table.integer('rxjzpcrfts');
    table.integer('mgmhxoihar');
    table.boolean('hatgncvhck');
  });
  await knex.schema.alterTable('jcrvyclcog', function(table) {
    table.timestamp('roizhmisen');
    table.boolean('zsjcoxsqbl');
    table.json('qkmcbywrmw');
    table.bigInteger('songfrxcox');
    table.string('jlkntrtgcm');
    table.string('vendprmnbl');
    table.integer('ikkgyddylh');
    table.timestamp('zgsztifsou');
    table.timestamp('qdzsztpopi');
  });
  await knex.schema.alterTable('tndbjkwbqs', function(table) {
    table.integer('xgquayfgef');
    table.json('ienboysnvg');
    table.integer('xujpmpoycl');
    table.integer('txahthewbn');
    table.boolean('xgefgscyvb');
    table.json('cpcyoapknb');
    table.string('tfzbxefmic');
  });
  await knex.schema.alterTable('luhhbprhsy', function(table) {
    table.timestamp('estxmzgpqr');
    table.timestamp('jrouhsqqtk');
    table.json('ddsuqvlikk');
  });
  await knex.schema.alterTable('vkmseohile', function(table) {
    table.json('paqikegiss');
    table.float('uhgsjbssru');
    table.integer('waorhtnqwe');
    table.string('bqplvybzbj');
    table.boolean('pdhjnvchtn');
    table.integer('ofmitaohtp');
  });
  await knex.schema.alterTable('lwxuflifwi', function(table) {
    table.integer('ybglqbmjaa');
    table.json('hpcttzatth');
    table.timestamp('nmutgagott');
    table.json('zakzimhzaz');
    table.json('lwgoqzkbsc');
    table.string('hvbcjgxcvk');
    table.string('kvzysbdkbx');
  });
  await knex.schema.alterTable('wcwtdsgcpn', function(table) {
    table.string('puontulazf');
    table.bigInteger('qtdxmstxax');
    table.integer('jmqskiriyb');
    table.string('ymaefovkca');
    table.json('ajdmdolcfm');
    table.integer('slttenzwex');
    table.float('kozxgpqjjy');
    table.boolean('vfqharmvrc');
    table.timestamp('hxenqlkrwk');
    table.float('cycwxnqekw');
  });
  await knex.schema.alterTable('omtwiujmji', function(table) {
    table.timestamp('wcjtywxfoy');
    table.json('vrqkmvtxjh');
    table.timestamp('ayogvnkdjo');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};