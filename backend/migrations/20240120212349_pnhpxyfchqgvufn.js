'use strict';

/**
 * Migration: 20240120212349_pnhpxyfchqgvufn
 * Description: Undo previous migration
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('ltghsmarch', function(table) {
    table.float('ecqoogrqja');
    table.boolean('kjxpszjaao');
    table.text('jowvgvsmfl');
    table.timestamp('xjvstbpvmp');
    table.string('efexxnscuz');
    table.string('nsrssaxxeo');
  });
  await knex.schema.alterTable('gffkwxfdli', function(table) {
    table.float('qobmleuxpl');
    table.json('etdylixweu');
    table.integer('dmhugqcrle');
    table.boolean('emwiuckpag');
    table.bigInteger('hcwihoszwo');
    table.float('exolqlrszt');
    table.timestamp('zdhwmgbfaq');
    table.json('fxgvvhpyyp');
  });
  await knex.schema.alterTable('lkpdrzfopa', function(table) {
    table.timestamp('qaezaojzns');
    table.bigInteger('amsyolkbgk');
    table.text('dbkastkiaz');
    table.text('ildzpnazgb');
    table.json('rqfpglkvbm');
    table.bigInteger('xdgdqqxqwy');
    table.boolean('tspazvclib');
    table.boolean('ytjxaxzmuj');
    table.string('rddrtfuslo');
    table.string('lsjvlncwkx');
  });
  await knex.schema.alterTable('qfzhglgzhe', function(table) {
    table.bigInteger('ouplbhsrlh');
    table.text('bhddflebfw');
    table.timestamp('xsqgfrteyw');
    table.timestamp('clgtmmnplu');
    table.text('couorsotkh');
    table.string('pnrckowzms');
    table.timestamp('lrjhqacyjr');
    table.text('vrtlcngspl');
  });
  await knex.schema.alterTable('vcjlqxbips', function(table) {
    table.integer('uetoyespqp');
    table.timestamp('ybjoscezzn');
    table.text('uvsylwqzub');
    table.integer('zwesmdbtfu');
  });
  await knex.schema.alterTable('lbrzsgadjb', function(table) {
    table.string('mdyjsngfpr');
    table.bigInteger('lbgckffujy');
    table.boolean('znfuoutpsg');
    table.float('gdqeipokrx');
    table.text('gdhgaqiazu');
  });
  await knex.schema.alterTable('eagzcmpufa', function(table) {
    table.timestamp('axdzvebndh');
    table.float('howzpdyagc');
    table.string('ohehdijkaf');
    table.json('ibywibnpce');
    table.string('kfnsywniur');
    table.timestamp('xsblhrwyts');
    table.float('plwobazuxx');
    table.json('acupiglwls');
    table.timestamp('iqasipmifh');
    table.string('tryeznhnit');
  });
  await knex.schema.alterTable('xhukvopnyc', function(table) {
    table.json('dxrojimggq');
    table.bigInteger('kxjvesmuzj');
    table.timestamp('tiygcvpvas');
    table.text('ulyiouhvqp');
    table.integer('vxwoggygiy');
    table.float('pkmwuxebgk');
    table.text('stqwwstyje');
    table.text('paakppbgem');
    table.string('vihmnabbte');
    table.timestamp('qxcfgdwdee');
  });
  await knex.schema.alterTable('bwijfipkgj', function(table) {
    table.string('bbjdaynfet');
    table.json('ohpshcpwyw');
    table.float('ivcrbjrykw');
    table.integer('hynstatkkp');
    table.integer('qhjwqcjzrs');
    table.text('hzadyvxzro');
    table.boolean('qzduwxxhky');
    table.bigInteger('mohcbimghz');
  });
  await knex.schema.alterTable('mwyfasnvau', function(table) {
    table.text('zighidzhhr');
    table.integer('bcgjrvrzcw');
    table.boolean('mverdyufim');
    table.boolean('jvefjwwuet');
    table.boolean('isvabgqnmw');
    table.bigInteger('yzbcecqzkx');
  });
  await knex.schema.alterTable('iexeukneih', function(table) {
    table.boolean('eqxdgvvubg');
    table.bigInteger('rmfzmgydco');
    table.json('lrhfvwqbtd');
    table.text('hbafzbxjry');
    table.string('vohbnklxrb');
    table.integer('ftiobjizdf');
    table.text('lmukuzwdhn');
    table.bigInteger('eafyjmizlh');
    table.float('njwxbzjjdw');
    table.float('zounwdtnhk');
  });
  await knex.schema.alterTable('cefrmdbzzq', function(table) {
    table.string('txnzxjcvab');
    table.boolean('xcbovfhdcj');
    table.timestamp('lysrfedvbd');
    table.string('sjhgznlojf');
    table.json('ipxdrxelcz');
    table.integer('rwrwnhmrbc');
    table.float('brsskunhjt');
    table.json('cvenzeetwp');
    table.string('iexbkiboan');
  });
  await knex.schema.alterTable('uiozaztanv', function(table) {
    table.boolean('qwsgnlzpen');
    table.bigInteger('abtlzdaxwg');
    table.float('lqljlcpjpi');
    table.boolean('syvnsdjxax');
    table.float('kzvsudnuiw');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};