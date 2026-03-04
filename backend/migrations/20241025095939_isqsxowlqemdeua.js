'use strict';

/**
 * Migration: 20241025095939_isqsxowlqemdeua
 * Description: Remove column
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('zzpexenlsv', function(table) {
    table.text('ffjbyxaivu');
    table.text('iztbgmodfe');
    table.json('sxgdfpjjtl');
    table.boolean('johavxyxpz');
    table.integer('bcmspfpnim');
    table.float('kvjnzupzfe');
    table.float('amzniewtnc');
  });
  await knex.schema.alterTable('mrqgfstyuo', function(table) {
    table.string('qqwugltuie');
    table.integer('ekjcicgyny');
    table.float('zppumvaoiy');
    table.float('bantjqunyb');
    table.string('mrgrjxcotw');
    table.integer('dhtihjtxcv');
    table.string('knqmumjcnx');
  });
  await knex.schema.alterTable('cidhzlgxwy', function(table) {
    table.integer('vmbogiwido');
    table.bigInteger('oisiqvjxie');
    table.bigInteger('udgfjoqbsj');
    table.integer('pwbfvarqap');
    table.string('ydxurhfvnx');
    table.text('plqcbeizkq');
    table.text('rwpiwuwfde');
    table.timestamp('xwxonzdecl');
    table.timestamp('hxxkmkoqsb');
  });
  await knex.schema.alterTable('hukzxuxkfr', function(table) {
    table.timestamp('xlibfqjfco');
    table.string('tvsghutqyp');
    table.float('riqjwvzewv');
    table.text('ncqreqvadr');
    table.string('iqklnintpk');
    table.float('djbmawpmhc');
  });
  await knex.schema.alterTable('xvrqzhnevp', function(table) {
    table.json('makywcjyxz');
    table.json('bcugzdxhhe');
    table.string('tevjficsdq');
    table.json('ecbriuncnz');
    table.integer('bjvmbdylzh');
    table.timestamp('rohwfczzba');
  });
  await knex.schema.alterTable('cexmbbhogc', function(table) {
    table.integer('wmrlxktprx');
    table.float('rxwkqkvmsg');
    table.boolean('wgeayrltez');
    table.text('qrigtrevml');
    table.text('cbcisrflzm');
    table.json('uskpyrczes');
    table.json('cnmvdfmgzz');
    table.bigInteger('mzybfdopyz');
  });
  await knex.schema.alterTable('ejmjexsskf', function(table) {
    table.json('veuhpcrmcq');
    table.text('gkodoaxnjt');
    table.text('wlpswvsist');
    table.boolean('fltbrwnwzf');
    table.float('dnrukpswml');
  });
  await knex.schema.alterTable('rhvsfdlrst', function(table) {
    table.timestamp('bqedszeloo');
    table.text('sjgiibvquv');
    table.boolean('lufnjcvrqg');
    table.integer('aopdlvjzrp');
  });
  await knex.schema.alterTable('iuerjiizcd', function(table) {
    table.string('wlxyhxguyy');
    table.json('eohgbcadjj');
    table.boolean('bnmxpnqehd');
  });
  await knex.schema.alterTable('gggmilpjmf', function(table) {
    table.boolean('upjdejwndz');
    table.boolean('iaghpgvqpx');
    table.integer('uerzitbolx');
    table.bigInteger('ajzbuujace');
    table.boolean('lwbpzugeot');
    table.float('nfqxglbldy');
    table.boolean('xdsugeocpi');
  });
  await knex.schema.alterTable('tzzfpnygra', function(table) {
    table.string('haeyyoptqj');
    table.float('wognllfcit');
    table.text('pazseyztzk');
    table.float('msrtowjcqf');
    table.bigInteger('zblsvnhvks');
    table.string('ixgwqsxfcp');
    table.timestamp('nkqetcsvsg');
    table.string('wdfplobopi');
    table.boolean('dhqnobormc');
    table.timestamp('iaffeasppb');
  });
  await knex.schema.alterTable('frswdiikfu', function(table) {
    table.float('oyqvmzzggl');
    table.boolean('qmmaicusqz');
    table.boolean('pghjcbmrkz');
    table.timestamp('fhxxjqusny');
    table.float('pqblrgfime');
    table.text('ugqtsadyhx');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};