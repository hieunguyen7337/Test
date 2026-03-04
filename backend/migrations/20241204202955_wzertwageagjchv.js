'use strict';

/**
 * Migration: 20241204202955_wzertwageagjchv
 * Description: Create table
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('gbbujymyds', function(table) {
    table.text('brgsjkyyky');
    table.bigInteger('ebsywbmadr');
    table.boolean('nffbhkowvv');
    table.string('qtmybgazyl');
  });
  await knex.schema.alterTable('ohupcnfinv', function(table) {
    table.bigInteger('vtenmamlsm');
    table.float('cswnvfwpxz');
    table.json('snwwfnshbd');
    table.boolean('sqdcbxpuhj');
    table.timestamp('wdmxrbxjmn');
    table.text('hgxkvoiczp');
    table.boolean('xaqspceccv');
    table.json('eiepgtvlyc');
  });
  await knex.schema.alterTable('frwqcrvkcr', function(table) {
    table.boolean('dtwgyiiddj');
    table.string('ybdvicnjwu');
    table.text('lkklkndttr');
    table.bigInteger('xwyazfxiol');
    table.timestamp('gdoxkabawz');
    table.json('lrvwswlidb');
    table.json('jwzrmdezza');
  });
  await knex.schema.alterTable('aifabijkbe', function(table) {
    table.boolean('ymegfgyrdg');
    table.bigInteger('soneocdtef');
    table.float('jnzfampsag');
    table.timestamp('bgjeaaobbl');
    table.string('gogbbrdxxt');
    table.string('bkwovxirkl');
    table.bigInteger('ldimhaqqzm');
  });
  await knex.schema.alterTable('qsxqyzumun', function(table) {
    table.json('tdhtxwydee');
    table.float('dxyqgvhgxt');
    table.text('sjzgategqe');
    table.integer('cnnptpicbg');
    table.float('hqrsjrregq');
    table.string('pwpdvswqbh');
    table.float('jtbhpomity');
  });
  await knex.schema.alterTable('vecydrplgm', function(table) {
    table.float('nyeeoigwbk');
    table.bigInteger('zwlpnzltbh');
    table.json('ljdnhzeiif');
    table.integer('jaqlafvzla');
  });
  await knex.schema.alterTable('bqgixsspjl', function(table) {
    table.text('dvbvybnorq');
    table.float('lffyfsdvjy');
    table.bigInteger('joyteejayf');
    table.json('raeymadspw');
    table.json('zznjweoico');
    table.bigInteger('nmlvinvrau');
    table.float('uzoqvsrgeo');
    table.timestamp('ffotxbdhpm');
  });
  await knex.schema.alterTable('tegcjedhbg', function(table) {
    table.json('tplqnzxnjg');
    table.integer('vnfiiiyazj');
    table.json('xqhlldesyo');
    table.timestamp('jzproucazo');
  });
  await knex.schema.alterTable('ynrnltmyiq', function(table) {
    table.string('tcqcodpfqm');
    table.json('jbyuraybeq');
    table.json('hmncakbtys');
    table.float('xsdswrnmxg');
    table.integer('bunrvotonu');
    table.bigInteger('yatymswhbx');
    table.text('tmjvgcvenx');
  });
  await knex.schema.alterTable('riakjvmqth', function(table) {
    table.boolean('fnwcolbcxp');
    table.bigInteger('ubkwjhktjx');
    table.float('tmllgufpum');
    table.string('ricdypifdk');
    table.bigInteger('plmjmhskyn');
    table.boolean('wuyqnucwxq');
    table.text('clstbtkieo');
    table.boolean('eutcstpxhc');
    table.text('cafseadypy');
    table.boolean('tocijaycca');
  });
  await knex.schema.alterTable('wdwhhwiuab', function(table) {
    table.text('ccrzlnidjs');
    table.integer('tmfkphjqkp');
    table.integer('sfhppkhybg');
    table.float('bdzgrltssd');
    table.float('jzyusophef');
    table.string('rrwjkahvko');
    table.json('ptdwmepcth');
    table.string('hpcnsucgen');
  });
  await knex.schema.alterTable('mircmnyhas', function(table) {
    table.timestamp('achqniqcqd');
    table.boolean('yemtcduhoe');
    table.json('rinxvobffe');
    table.boolean('ofpmkatgib');
  });
  await knex.schema.alterTable('wsuukozjxo', function(table) {
    table.string('cafcxkzryf');
    table.timestamp('bxjvgifmyi');
    table.integer('ockovkhbvh');
    table.bigInteger('opkbdptsri');
    table.integer('umafibmcxc');
    table.json('buzcdfwpua');
    table.boolean('qeqblevtcs');
    table.string('nyfhxsmlpp');
  });
  await knex.schema.alterTable('ixaysglidg', function(table) {
    table.integer('emiurekxng');
    table.json('vhrhcfdogb');
    table.json('vwbtexosgb');
    table.json('cprtvcnldu');
    table.text('nlhejyetve');
    table.json('hbkymfvxnh');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};