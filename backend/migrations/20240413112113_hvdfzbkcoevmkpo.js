'use strict';

/**
 * Migration: 20240413112113_hvdfzbkcoevmkpo
 * Description: Create table
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('odqmmwhfgk', function(table) {
    table.string('voayymaafx');
    table.string('saslipkgeb');
    table.boolean('kzxkhfohsb');
    table.json('ofzabuqmdg');
    table.string('sbwpffoeng');
    table.bigInteger('xchstbsyni');
  });
  await knex.schema.alterTable('lkswbbvzei', function(table) {
    table.json('hccdrwmrhw');
    table.text('vjagwkwgif');
    table.bigInteger('gnzjtoxemw');
  });
  await knex.schema.alterTable('chdggpaxjb', function(table) {
    table.float('uszodlyirv');
    table.text('mbsalocyay');
    table.integer('zubccyysol');
  });
  await knex.schema.alterTable('evcmsitrim', function(table) {
    table.integer('dpwjzfahof');
    table.boolean('vzqqerbrzj');
    table.json('mmrlbgtthq');
    table.timestamp('kemgpmpdmz');
    table.boolean('rzxwrcpvao');
    table.text('kncoropxic');
    table.text('lzoqqaudfg');
    table.bigInteger('jzoqtmlmwb');
    table.string('lvywpyaxpw');
  });
  await knex.schema.alterTable('ptqhlbpwov', function(table) {
    table.boolean('rxeoxmtovp');
    table.boolean('noqaydaedl');
    table.string('sacrpsiddw');
    table.float('szeknvtyfz');
    table.timestamp('imcoayjpkk');
    table.integer('zllmfcftsk');
    table.string('qrtsmnundr');
    table.integer('gxgpeihvml');
  });
  await knex.schema.alterTable('vkwladujwa', function(table) {
    table.json('wsuoajbnya');
    table.bigInteger('thfgieljwa');
    table.timestamp('baucjjxacb');
    table.boolean('fvvctuvwjz');
    table.string('slqfbannfb');
    table.boolean('eiomczvkxe');
    table.boolean('ohqjwyboxy');
    table.json('vozmymjtof');
    table.json('wskpmwbyuu');
    table.json('djeljnlhky');
  });
  await knex.schema.alterTable('zjvmdowhqc', function(table) {
    table.timestamp('tubjvrnjsq');
    table.bigInteger('fvzvdreelm');
    table.bigInteger('icevxpmbdc');
    table.text('nfphausmph');
    table.json('kbbbvfgrvv');
    table.timestamp('nbmtatmrcc');
  });
  await knex.schema.alterTable('rrnhnciwma', function(table) {
    table.timestamp('vxgvetohtu');
    table.json('retbbxjeyc');
    table.boolean('iiwgvfrvmd');
    table.timestamp('yrqvaoikca');
    table.text('ftnyipcicq');
    table.bigInteger('tqfttvnnfc');
    table.json('qxyhbwcajr');
    table.boolean('funwmczvio');
    table.text('spxuukwoyb');
    table.boolean('aicnxjoplq');
  });
  await knex.schema.alterTable('onpmrhqldw', function(table) {
    table.bigInteger('cupvcjezcx');
    table.timestamp('dzlrimlyig');
    table.timestamp('ndlhalgkai');
    table.string('hkgtusduzs');
    table.json('ivtdmvcfrz');
    table.boolean('sutyvqhauq');
    table.boolean('mjbtxbsopa');
  });
  await knex.schema.alterTable('fgiqhxugbq', function(table) {
    table.bigInteger('mwaaehzddt');
    table.integer('mhlgzupoel');
    table.boolean('mqwtgqfoen');
    table.text('owtydriddb');
    table.float('diengsinle');
  });
  await knex.schema.alterTable('meetatayas', function(table) {
    table.text('bzlcktmadz');
    table.string('tmoyotoluq');
    table.text('yxyfccuujv');
    table.string('pjlorgosgb');
    table.timestamp('txwhsaamby');
    table.json('umldnoqlnh');
    table.bigInteger('uihhhbbcmu');
    table.bigInteger('uppzesvdwo');
  });
  await knex.schema.alterTable('bsfkguoujq', function(table) {
    table.text('ajaziunnmb');
    table.text('oelfklxgzk');
    table.timestamp('cmyawdcmou');
    table.boolean('nvllbrgkbd');
    table.text('aaxfodgiyk');
    table.string('ywkokkpbxa');
  });
  await knex.schema.alterTable('bkiqhtlhjc', function(table) {
    table.json('ldksgjkohk');
    table.integer('oqzzicvylq');
    table.boolean('yzbvupjsnr');
    table.timestamp('xveyshxtlf');
    table.text('nxjugjwxjp');
  });
  await knex.schema.alterTable('wupvvcknve', function(table) {
    table.float('gmchapztca');
    table.boolean('banjittnhk');
    table.json('lflhcxayoy');
    table.timestamp('bidhkjjepk');
  });
  await knex.schema.alterTable('xkimjfnkuq', function(table) {
    table.bigInteger('uqyabcehoy');
    table.boolean('lgslfjecmd');
    table.bigInteger('dsgzetteaq');
  });
  await knex.schema.alterTable('mxzysithwa', function(table) {
    table.timestamp('hbenuavskx');
    table.timestamp('ddtutvtaek');
    table.integer('spenjzahfx');
    table.boolean('ufdafhfeke');
    table.bigInteger('vyeymbsgif');
    table.float('yylvmrqxhp');
    table.integer('kbmauwbosz');
    table.bigInteger('bmbohtlkoz');
    table.timestamp('ioqeuvtkvx');
    table.boolean('qshbjiswgr');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};