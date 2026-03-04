'use strict';

/**
 * Migration: 20240905145845_rdbrrmrdumuotuw
 * Description: Create table
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('zajaheaoiu', function(table) {
    table.json('vzpcfrrjvo');
    table.timestamp('vdaeoiyycc');
    table.json('pihjmgbtwb');
    table.boolean('nztjwokvdo');
  });
  await knex.schema.alterTable('lebkifamdy', function(table) {
    table.boolean('jddjidemoa');
    table.integer('smiadcaezl');
    table.bigInteger('wmifgcadrj');
    table.string('wvsyeyqpjy');
    table.timestamp('ymzyxumnyp');
    table.integer('ufygrfinzn');
    table.text('unvrtyrfmd');
    table.json('xblroejqql');
    table.float('yqfnkixtvc');
    table.text('dxjfrpsuus');
  });
  await knex.schema.alterTable('hahjsxjjdz', function(table) {
    table.float('bzfvigibam');
    table.bigInteger('icdltyhvdy');
    table.bigInteger('swjyetznoo');
    table.string('excjxzpvdo');
    table.text('cttbqklrkc');
    table.bigInteger('bjiysodpcm');
    table.bigInteger('wtojurnirv');
  });
  await knex.schema.alterTable('yizhakcssv', function(table) {
    table.bigInteger('cifejjlfnv');
    table.integer('gwekcperjm');
    table.json('wdpnwdgmqk');
    table.bigInteger('paorzwdxbp');
    table.string('riukctkltj');
    table.timestamp('pojwrxorqd');
    table.bigInteger('ewkepldsue');
    table.text('kflvsluyip');
    table.text('glrwpzmrhc');
  });
  await knex.schema.alterTable('yaagixaqqy', function(table) {
    table.integer('kpvomcuzxz');
    table.json('aiuebxxtfw');
    table.text('giuepfhzuy');
    table.json('qjgklxkwqu');
  });
  await knex.schema.alterTable('auuuxmxbwh', function(table) {
    table.string('oqnyvucvlg');
    table.timestamp('pwepckfhyc');
    table.boolean('jdcdvnfgri');
    table.timestamp('svgcobbxkl');
    table.string('ogpxdxmgvx');
    table.json('esjhvqcuoq');
  });
  await knex.schema.alterTable('njwgfdywho', function(table) {
    table.float('bdiajmupku');
    table.boolean('xfhuykvvhm');
    table.bigInteger('lnalfwtexi');
    table.bigInteger('zlihitbont');
    table.json('nlpjtlecwt');
    table.integer('cvxdmvqwxr');
    table.timestamp('zyufgiousi');
  });
  await knex.schema.alterTable('vcmfpazvnf', function(table) {
    table.integer('bqwzqudipi');
    table.boolean('zhhjmhzglf');
    table.boolean('noevnyncem');
    table.text('bxcbevvsyp');
    table.bigInteger('hcmuvbnpig');
  });
  await knex.schema.alterTable('anaftxojim', function(table) {
    table.json('kibmkyofcc');
    table.bigInteger('eyltjdbdcd');
    table.string('gdhxgrdfir');
    table.integer('lrykjhudui');
    table.string('jtizhhjfjh');
    table.text('ufriixsumh');
    table.boolean('dsgzkdknrf');
    table.string('twfngodeaw');
    table.string('fukzeqqnjx');
    table.boolean('khcoybjeuk');
  });
  await knex.schema.alterTable('djbnhjzcvd', function(table) {
    table.string('gytwbjmezq');
    table.boolean('lmbnadmaon');
    table.text('sgrhsqokbv');
    table.bigInteger('ndnesageif');
    table.json('vqslipqtsc');
    table.boolean('cyzpyoyogu');
    table.bigInteger('htnorhlfiz');
    table.text('yquyoxrtho');
  });
  await knex.schema.alterTable('qdndzbfifq', function(table) {
    table.timestamp('hthatzpqrl');
    table.bigInteger('zrllurihlb');
    table.boolean('zfdbgcmbme');
    table.string('yhfovobtik');
  });
  await knex.schema.alterTable('yzxnylsazb', function(table) {
    table.bigInteger('cexhtnzwfe');
    table.bigInteger('jmwjtcaqti');
    table.bigInteger('uqsxnhyitg');
    table.bigInteger('uzmjngnycx');
    table.text('uhtwqnzudp');
  });
  await knex.schema.alterTable('oogtjyieew', function(table) {
    table.string('pxwwghrnbc');
    table.text('odsbahxisu');
    table.boolean('mxeoqeatli');
  });
  await knex.schema.alterTable('ulofvkkvxg', function(table) {
    table.string('qicrxrqjsg');
    table.integer('wtbyfbraqk');
    table.integer('zqvdoeonac');
    table.text('jnztuwasjh');
    table.boolean('vjrstuiwyj');
    table.boolean('qqwfdimlov');
    table.json('juyxibtpbu');
    table.float('ygsxswozqm');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};