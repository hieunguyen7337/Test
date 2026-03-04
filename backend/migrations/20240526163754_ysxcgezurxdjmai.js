'use strict';

/**
 * Migration: 20240526163754_ysxcgezurxdjmai
 * Description: Undo previous migration
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('rbjjrjtmzf', function(table) {
    table.string('ccblrxuodn');
    table.text('mjjlinjvyk');
    table.integer('ydardopmea');
    table.float('nauvhyezhx');
    table.float('shjsvqgrqn');
    table.timestamp('xdrlbbshcz');
    table.json('vzuyrljkbm');
  });
  await knex.schema.alterTable('ckrtupajdb', function(table) {
    table.timestamp('gjnodmqrvz');
    table.json('jkubgetjwk');
    table.boolean('tquccjoppi');
    table.bigInteger('ceyoyxebrk');
    table.float('dlbwazexys');
  });
  await knex.schema.alterTable('vcddaikndo', function(table) {
    table.integer('yffgsmgoka');
    table.timestamp('igfgchtwum');
    table.integer('djvfajksvy');
    table.bigInteger('bookwjzdhk');
    table.float('txbahctsoa');
    table.float('ipawgvgzqa');
    table.string('rwtnzpgycv');
    table.float('gsaaadleqb');
  });
  await knex.schema.alterTable('muowdnfvxt', function(table) {
    table.string('nmqrftxvrk');
    table.boolean('gjqcppvjrh');
    table.bigInteger('mhoqtcycit');
    table.string('vfztitnxms');
    table.json('bnxzgyfkss');
    table.json('vmayoocpvl');
    table.text('ldcpebkycv');
    table.timestamp('lapzjwojeb');
    table.float('lbrkthgnnz');
  });
  await knex.schema.alterTable('dtbrneuhpp', function(table) {
    table.json('xvmrzhorat');
    table.json('fdqbkbtzob');
    table.text('pxbicsvfki');
    table.integer('pjsgqlnijz');
  });
  await knex.schema.alterTable('erytlpzanx', function(table) {
    table.string('idarzhrfzo');
    table.timestamp('txmfbvqrah');
    table.timestamp('oaytsttagl');
    table.float('iooxikevdz');
    table.integer('pcjxygokec');
  });
  await knex.schema.alterTable('hgaugnijoz', function(table) {
    table.float('pjnhrnxzny');
    table.integer('omebchtwzi');
    table.json('sjbcfbjgfe');
    table.integer('kmztepcsyl');
    table.text('kzfwpefgkq');
    table.json('sihlghxiac');
  });
  await knex.schema.alterTable('wsqnjwkmjw', function(table) {
    table.timestamp('jriqkgqczk');
    table.float('qbmicsbmpi');
    table.bigInteger('uigndhxxqo');
    table.timestamp('ztboxkeupa');
    table.integer('iheifftvrv');
  });
  await knex.schema.alterTable('gyppyojgwo', function(table) {
    table.integer('kufsllgdzj');
    table.bigInteger('kwjkuskneb');
    table.json('rnkkynzxuv');
    table.text('opizpacwdw');
    table.boolean('pwfcteinma');
    table.text('derdlraxin');
  });
  await knex.schema.alterTable('odyxsxohwi', function(table) {
    table.bigInteger('lhdidjgucl');
    table.float('xfappmnkdj');
    table.bigInteger('keirypipmd');
    table.json('usthchfwic');
    table.text('dncjvslmrn');
    table.bigInteger('kjafaamnko');
    table.boolean('mkhswtuzyx');
    table.integer('jivmoxkejk');
    table.timestamp('jilazafxdy');
  });
  await knex.schema.alterTable('hxkyosoyhx', function(table) {
    table.boolean('dllhwbsadq');
    table.string('gbwtbugjli');
    table.float('mhsigigmfx');
    table.string('quilxvlcmm');
    table.json('ayxcgevywk');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};