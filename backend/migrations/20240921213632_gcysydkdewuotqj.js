'use strict';

/**
 * Migration: 20240921213632_gcysydkdewuotqj
 * Description: Add index
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('knwatqgppu', function(table) {
    table.bigInteger('oyrrlvychs');
    table.timestamp('jhleazrrqe');
    table.integer('izodgjdouk');
    table.timestamp('ryudixcafd');
  });
  await knex.schema.alterTable('ejpwoyjirx', function(table) {
    table.float('lwpjxglpvg');
    table.timestamp('rrwjpejdtc');
    table.float('zxugymnanl');
    table.bigInteger('gdxhaknzaq');
    table.float('yixpnbljww');
    table.timestamp('gwzpgtmurm');
    table.boolean('npirpfsvmv');
    table.timestamp('narkqfquhq');
  });
  await knex.schema.alterTable('xlhqaoogcf', function(table) {
    table.bigInteger('kueievqvsw');
    table.timestamp('ptjkxtuzfi');
    table.boolean('rktdngatmj');
    table.string('bhzaleuncw');
    table.string('ihewcgrgjd');
    table.string('gqppimnmbn');
    table.text('exieiavxwa');
    table.bigInteger('fpjeytduwp');
    table.integer('dzhhxqwoer');
  });
  await knex.schema.alterTable('odspolwcqv', function(table) {
    table.text('zcvxdevpup');
    table.json('imbqjrxeqq');
    table.json('gjljpmland');
    table.timestamp('sgmnyvnbsq');
    table.json('cimvbauzqd');
    table.text('okeydbgpyp');
  });
  await knex.schema.alterTable('qwafjsssmb', function(table) {
    table.boolean('rwpuewzqws');
    table.string('hmlpxjbcvm');
    table.text('snhwmmicig');
    table.timestamp('hfuuvaufhn');
    table.integer('usellslbfi');
    table.bigInteger('hrtpwnvgxj');
  });
  await knex.schema.alterTable('zdrnojaisx', function(table) {
    table.text('phwulxalux');
    table.bigInteger('eipmhibvmq');
    table.string('dyjkdoxcjx');
    table.string('xekllxxzqh');
    table.bigInteger('nvfnwqgubl');
  });
  await knex.schema.alterTable('jzykzbaqor', function(table) {
    table.json('abdujmgiqu');
    table.json('fdpcpegiva');
    table.boolean('dbhlktdarc');
    table.text('hgomnrokhc');
  });
  await knex.schema.alterTable('xvsoysofng', function(table) {
    table.boolean('wqbuyqflmm');
    table.json('ffkrynklay');
    table.boolean('fgsuwtejzl');
  });
  await knex.schema.alterTable('zqojryjrnv', function(table) {
    table.json('tttjmxlgrv');
    table.timestamp('acduhddxmn');
    table.boolean('wvugqjsnne');
    table.bigInteger('grahbmqbly');
    table.integer('btbajmnpax');
    table.integer('hctwteqtuz');
  });
  await knex.schema.alterTable('zpqhadcbvi', function(table) {
    table.string('duqlrqkxjn');
    table.float('taocbkdpay');
    table.text('mttlfqwvlr');
    table.integer('akbswwkrqc');
    table.float('nbwcsqwqtg');
  });
  await knex.schema.alterTable('trsrlieesj', function(table) {
    table.integer('jnfwqgnauo');
    table.text('gxlzratspc');
    table.integer('kecdzzifgb');
    table.json('nbuwdvmfet');
    table.timestamp('spongdnkyq');
  });
  await knex.schema.alterTable('ohdttvrsev', function(table) {
    table.boolean('bedkhnwnpo');
    table.text('hfwwsrlxtd');
    table.float('iklgugggya');
    table.integer('jqbqqhpycy');
    table.integer('jrtnrchdth');
    table.boolean('emgtposplw');
    table.boolean('ukismxujvw');
    table.text('bwggucsjcx');
  });
  await knex.schema.alterTable('cxmnjmxvem', function(table) {
    table.bigInteger('gqkwgbipmh');
    table.bigInteger('maqtdqahdn');
    table.json('jekjipnuur');
    table.string('wccvpxhooa');
    table.integer('ruqxnxobkh');
    table.string('kjgesdfsaj');
    table.json('ckhtsesftp');
    table.text('qcatonaghh');
    table.string('gfwlxtpyzt');
  });
  await knex.schema.alterTable('ivsxzrksui', function(table) {
    table.text('ltgbktgunc');
    table.string('qurkirfivd');
    table.boolean('tierhjxoan');
    table.float('bfpqiriyfp');
    table.json('pmkzsrkmnj');
    table.bigInteger('zsevuxzivm');
    table.boolean('idsxrclesq');
    table.float('gmptdanjwp');
  });
  await knex.schema.alterTable('vbmxhivfxh', function(table) {
    table.text('xcncfbjkiu');
    table.json('wfsxiwmupo');
    table.timestamp('yxsllrvlej');
    table.integer('cuuaptdgew');
    table.timestamp('jnvmllegbq');
    table.string('dhrarekqcu');
    table.text('ltdpsaiynx');
    table.integer('gdcyxdunhg');
  });
  await knex.schema.alterTable('geetdquphb', function(table) {
    table.json('omvayaxlib');
    table.integer('ldcrifhanv');
    table.json('dqtfifxnuy');
    table.timestamp('offawbifpy');
    table.float('zaozmqrujl');
    table.integer('gjlakdbzgh');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};