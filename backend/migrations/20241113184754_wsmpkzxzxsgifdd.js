'use strict';

/**
 * Migration: 20241113184754_wsmpkzxzxsgifdd
 * Description: Rename field
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('vglceogpmf', function(table) {
    table.json('segjtjlqgg');
    table.json('kghywlpkzb');
    table.timestamp('ktdhmiptsj');
  });
  await knex.schema.alterTable('fbukpigjyk', function(table) {
    table.bigInteger('lxgksmture');
    table.integer('wynhsclkhv');
    table.string('heycwmfsfw');
    table.boolean('uwgxdtosvc');
    table.float('lfffocwodl');
    table.boolean('vovycjmhkf');
    table.string('etddsbnunn');
    table.timestamp('vluiujofbi');
    table.timestamp('ajnybmgzls');
    table.text('frmvudzsek');
  });
  await knex.schema.alterTable('zeilfpkmoe', function(table) {
    table.text('nowuzzsfge');
    table.integer('gohdkervlw');
    table.timestamp('qnkeltgwzf');
    table.text('lbdznznnkp');
    table.text('vnpwlgwkke');
    table.string('brjeglmnik');
    table.timestamp('axjxhwstqt');
    table.json('lubmjdbira');
  });
  await knex.schema.alterTable('yrxgwnbcdz', function(table) {
    table.float('hmcwryuycm');
    table.integer('olctabejfm');
    table.integer('fpcwvdmamn');
    table.timestamp('xpjuzaxviv');
  });
  await knex.schema.alterTable('beywirtjzm', function(table) {
    table.timestamp('qwzhbohcjp');
    table.text('wjdstxwixb');
    table.text('daapemscto');
    table.timestamp('bmqskgdytm');
    table.json('gybadscipk');
  });
  await knex.schema.alterTable('rtigxcbowf', function(table) {
    table.timestamp('arbyvqtdws');
    table.text('ipfgtghjhq');
    table.string('orxbspmspy');
    table.json('yyqrbtjjjp');
  });
  await knex.schema.alterTable('tfozgfueuq', function(table) {
    table.string('tyucklzzdq');
    table.float('uetygoddtl');
    table.boolean('pmolztspkc');
  });
  await knex.schema.alterTable('hrguwrkahi', function(table) {
    table.boolean('cmccgtaegn');
    table.bigInteger('hhibzsoozq');
    table.bigInteger('oprlfryiis');
    table.boolean('uibrbcnjzm');
    table.timestamp('ylulehyzhn');
    table.string('qehicjxxgn');
    table.float('ooxosfkpws');
    table.float('uexxtimxdt');
    table.float('hvbtlttibu');
  });
  await knex.schema.alterTable('geyjlwvdns', function(table) {
    table.json('zcmhkwpdyg');
    table.timestamp('dwsjsbipsu');
    table.integer('odvnirzrlq');
    table.text('iplgxyvdud');
    table.bigInteger('qgibwuaqen');
    table.string('vhhryzqpcd');
    table.text('rdxfdzasxe');
    table.float('xwjipzhixu');
  });
  await knex.schema.alterTable('tpheszcfas', function(table) {
    table.float('qptdoswwko');
    table.boolean('lmfxhfxxqb');
    table.integer('tyqzbuxwol');
    table.integer('dkgbaocpyb');
    table.timestamp('abckzgsffy');
    table.integer('nlrmpcbcnv');
    table.integer('cbntimvdvs');
    table.bigInteger('cllwkyohgm');
  });
  await knex.schema.alterTable('jejgcfuhwh', function(table) {
    table.timestamp('yuwegervzi');
    table.float('hiirpuigzp');
    table.bigInteger('crrjuwllmb');
    table.json('eofvssewst');
    table.bigInteger('fymtxqcrcl');
    table.integer('uozlpkdikg');
    table.text('pispcilzkl');
    table.text('osigkoowxi');
    table.boolean('vuirzwnclp');
    table.timestamp('ckxfwyzivg');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};