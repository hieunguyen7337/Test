'use strict';

/**
 * Migration: 20240515055850_suwudnlsssbvqrp
 * Description: Remove column
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('tvsubzblls', function(table) {
    table.timestamp('fnjosedjgg');
    table.timestamp('mdeptdczut');
    table.float('yeuwuvogod');
    table.integer('jjisbsrrik');
    table.integer('tqjnpmhykj');
    table.text('lezxnomodh');
    table.timestamp('hcfyciloxc');
    table.bigInteger('njnuyqendc');
  });
  await knex.schema.alterTable('gqzpcfivoa', function(table) {
    table.float('iiarzxkbwh');
    table.float('bnqbnrdfzs');
    table.bigInteger('kjkfghdsrr');
    table.string('uyvxondrwk');
    table.string('yqmsmjmrzr');
    table.bigInteger('ltpsqryfhs');
    table.timestamp('ngrizyqngk');
  });
  await knex.schema.alterTable('jwaesvdskf', function(table) {
    table.text('wgrfpulepu');
    table.json('bhekmlwjlt');
    table.integer('vrwpegttmj');
    table.bigInteger('uvbmmkijxe');
  });
  await knex.schema.alterTable('adgqfxuori', function(table) {
    table.float('hqkpblvxhd');
    table.timestamp('pvqwckczlj');
    table.float('ryypshfptv');
  });
  await knex.schema.alterTable('gyyzkunige', function(table) {
    table.text('mybypyjhyq');
    table.json('yfghuhxzer');
    table.timestamp('hgomawnymo');
    table.float('lotlvdvqwf');
  });
  await knex.schema.alterTable('ooaoqucqmc', function(table) {
    table.text('dwezwsridl');
    table.json('vqeyzqtlxf');
    table.bigInteger('vbfgvaxhov');
    table.json('assyljtkln');
    table.integer('vdzimidgys');
    table.timestamp('suxsxjojyp');
    table.string('ikzkadvfog');
    table.bigInteger('evzthztect');
  });
  await knex.schema.alterTable('spqbfhudmm', function(table) {
    table.timestamp('lwmbzbspfg');
    table.timestamp('nojysnwemv');
    table.text('nehauudesx');
    table.text('vxwvssrpjf');
    table.integer('bgeipfuwfr');
    table.timestamp('ziwoojbcly');
  });
  await knex.schema.alterTable('rcihqmhdbc', function(table) {
    table.float('vvdsmxtotu');
    table.float('txaazkkfcz');
    table.bigInteger('jxynqnbtso');
    table.boolean('jbpfxdneag');
    table.float('edabowgjbu');
  });
  await knex.schema.alterTable('nyyjwccbsp', function(table) {
    table.timestamp('putqkeisow');
    table.float('gtalywgito');
    table.bigInteger('twnpmwofvx');
    table.integer('aixilxfrtc');
    table.boolean('vugcjxkcgc');
    table.bigInteger('qqkdexbqpz');
    table.bigInteger('ivphwmwgii');
    table.timestamp('gcsuvhipuu');
    table.json('nxeforjxpb');
    table.string('bvxfymwsqd');
  });
  await knex.schema.alterTable('txtgepyiaa', function(table) {
    table.bigInteger('uxnaigoxpr');
    table.json('ucegcnszkl');
    table.boolean('bwooprqkxj');
    table.text('itnzawthjk');
  });
  await knex.schema.alterTable('kvmoyywcxk', function(table) {
    table.float('hucbtealyt');
    table.string('homhdcscuq');
    table.string('izwfjmxwmb');
  });
  await knex.schema.alterTable('ubmzeomzkx', function(table) {
    table.bigInteger('qavubsfwtr');
    table.float('pygouozhyp');
    table.float('zlrfyimjcl');
    table.boolean('ltzalrdrzz');
    table.string('cgjrbmomnd');
    table.boolean('ytarfdpgyr');
    table.timestamp('fkzvtdlmsi');
    table.string('tlxnnsisym');
  });
  await knex.schema.alterTable('yhpnecihed', function(table) {
    table.boolean('uffgqlzvvy');
    table.timestamp('hfbovywmrr');
    table.timestamp('fzgqsbyjce');
    table.text('lpflgzsrsg');
    table.timestamp('nmobprwpgc');
    table.text('tobshhrguk');
    table.string('xzivjaxeud');
    table.timestamp('zzczsiqplp');
    table.bigInteger('btgmuzslqr');
    table.timestamp('gkzpzihxbo');
  });
  await knex.schema.alterTable('mbnbagmrbc', function(table) {
    table.boolean('inwzogwvmh');
    table.text('jfmgjhqmiv');
    table.string('amjdnicang');
    table.boolean('kmchuldeeh');
  });
  await knex.schema.alterTable('hvccfgpomp', function(table) {
    table.float('xazhoeqqcm');
    table.timestamp('zijhntkucd');
    table.float('tkhjivdjwf');
    table.timestamp('zdogwbtewb');
    table.bigInteger('vyntiytbrq');
    table.integer('zqlmoibaiq');
    table.float('ttxavozuzt');
    table.json('rhznbgshme');
    table.json('qvvoscoupf');
    table.json('dnqrzqxdcv');
  });
  await knex.schema.alterTable('bxsqgimzrp', function(table) {
    table.bigInteger('edvpcyuusg');
    table.float('mlharlvspr');
    table.timestamp('vnkhjxyail');
    table.text('lqcqtszmbp');
    table.timestamp('zwlsoltugj');
    table.float('xbxculcjhq');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};