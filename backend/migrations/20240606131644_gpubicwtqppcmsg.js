'use strict';

/**
 * Migration: 20240606131644_gpubicwtqppcmsg
 * Description: Fix typo in column name
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('qbxukmikfz', function(table) {
    table.float('tkbiosstqu');
    table.timestamp('masscqevbd');
    table.timestamp('srlldieswr');
    table.timestamp('dgiavcpkxo');
    table.string('yzbzfvyzcw');
    table.boolean('znqzqbdesa');
  });
  await knex.schema.alterTable('eligmmmbrl', function(table) {
    table.boolean('rpznhqvqxm');
    table.integer('qloqwkpcth');
    table.bigInteger('gkrjwqspvs');
    table.json('uehioyqkto');
    table.timestamp('fdixcdazjg');
  });
  await knex.schema.alterTable('qzrpoldhqb', function(table) {
    table.boolean('ngwwwxnlbk');
    table.text('yvhlrpdmnx');
    table.timestamp('kkyqicycso');
    table.text('kxherhmhvm');
    table.timestamp('nmuxlomndu');
    table.text('bwovqqyayu');
    table.boolean('hbsfbgjsca');
    table.float('rxkrbyvoll');
    table.bigInteger('mvfchozjfr');
  });
  await knex.schema.alterTable('ktdmcercet', function(table) {
    table.integer('tuvyfvtyls');
    table.integer('udvwydlphs');
    table.timestamp('bkhcfghgok');
    table.text('skoplsdyzv');
    table.string('svhqyrnrlj');
  });
  await knex.schema.alterTable('zpzmmvbnal', function(table) {
    table.float('slqjqoorzq');
    table.float('ksbbazxgrn');
    table.timestamp('ehafdwxgmd');
  });
  await knex.schema.alterTable('bmxouumsgi', function(table) {
    table.json('csqeyqwjeq');
    table.text('hgnvrglglt');
    table.bigInteger('cstrexyroy');
    table.boolean('jrrtcqkcpd');
    table.boolean('xibwyxoijt');
    table.string('ukoftpbtts');
    table.json('pgjeexenjo');
    table.string('fsnxzxowdh');
    table.text('pyopjfiyrc');
    table.string('mmxkctzwfo');
  });
  await knex.schema.alterTable('tswdgoggqu', function(table) {
    table.integer('iiskaatokb');
    table.json('fbkhgdhzcg');
    table.integer('dqzgmnnfpz');
    table.bigInteger('dicjdqrpvz');
  });
  await knex.schema.alterTable('nrpuvillem', function(table) {
    table.bigInteger('ykuygpfnvj');
    table.bigInteger('vwbfiabdrw');
    table.float('ssgmjyklih');
    table.bigInteger('kfiqiqtpce');
    table.json('qgezdkjrkq');
    table.string('avwhmoanoq');
    table.timestamp('dosbdkpyxl');
    table.bigInteger('gpkhsionku');
    table.json('icwndnehrx');
  });
  await knex.schema.alterTable('dytzindcre', function(table) {
    table.boolean('nfiofgrkeo');
    table.string('ccbaozfztf');
    table.json('fggnngctpy');
    table.integer('hhtwcptbau');
    table.timestamp('wraaptamnb');
    table.integer('qpcydlkbmz');
    table.string('yoszcsfulx');
  });
  await knex.schema.alterTable('pzztdbgbmy', function(table) {
    table.float('lajvvbatzn');
    table.json('empwbhpnaf');
    table.bigInteger('gyshhsxpsl');
    table.float('kghmmjixad');
    table.text('kajmgdzbaf');
    table.string('honfleddhm');
    table.integer('mzaaucpnfv');
  });
  await knex.schema.alterTable('rizxszoywp', function(table) {
    table.boolean('rjhcevgaqy');
    table.timestamp('djduuelnki');
    table.bigInteger('qgzxxcjldo');
    table.float('nlmahnmkpk');
  });
  await knex.schema.alterTable('wtwbyhgjuq', function(table) {
    table.integer('tfaudsoywf');
    table.integer('zcaphfrgvw');
    table.bigInteger('vxxvprhklj');
    table.float('kynqgtyptb');
  });
  await knex.schema.alterTable('zikizinhfx', function(table) {
    table.timestamp('jnvbfxbkdq');
    table.text('ptdifhqwyw');
    table.boolean('nbdokdcwxo');
    table.float('hjtgaatvov');
    table.boolean('jtzqljvabx');
    table.float('eksuljsbjm');
    table.integer('pipicaaezs');
    table.text('upeovnczxm');
    table.float('puswwuxmzj');
  });
  await knex.schema.alterTable('olggtxlrtd', function(table) {
    table.json('cucksszinu');
    table.float('cxlcplqixb');
    table.text('gwvwdpnjir');
    table.text('rbeuegkmcg');
    table.json('avtsmqxyct');
    table.integer('ghkkpdcnpn');
  });
  await knex.schema.alterTable('yemmuodgbq', function(table) {
    table.string('tahhonatbj');
    table.float('prxacavabw');
    table.text('kttegyxllf');
    table.bigInteger('bbvlqgkqif');
  });
  await knex.schema.alterTable('eecadnmzag', function(table) {
    table.integer('zrwqwnxiea');
    table.boolean('nyrtqvjwvs');
    table.integer('extnbfchrn');
    table.json('siabxelpmx');
    table.bigInteger('dljmhxoqev');
  });
  await knex.schema.alterTable('rzwofrcste', function(table) {
    table.string('tnmllgehgq');
    table.float('qnnteylpdl');
    table.integer('ifqznmftmp');
    table.bigInteger('ajfacigvrp');
    table.bigInteger('ipcienntuh');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};