'use strict';

/**
 * Migration: 20240111084334_ixaskhtkatuqwqd
 * Description: Drop table
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('nrsouofhuu', function(table) {
    table.string('ywapdnsojj');
    table.bigInteger('leqysfmrxj');
    table.integer('ajnczssgaq');
    table.integer('lryqiskxym');
    table.json('poiccddjvn');
  });
  await knex.schema.alterTable('ggxwjqghxt', function(table) {
    table.bigInteger('quouutcnuq');
    table.string('cupeznvkcw');
    table.boolean('gjtabrtsns');
    table.json('wsmfwoeqcz');
    table.float('rwgqilpezk');
    table.boolean('zbwhorxsal');
    table.bigInteger('jpggexierc');
  });
  await knex.schema.alterTable('ifghmxbixn', function(table) {
    table.bigInteger('lcoouxtxib');
    table.json('gvudqelagq');
    table.integer('ebrmademqj');
    table.bigInteger('ycvwjiucbt');
  });
  await knex.schema.alterTable('fbntplvglq', function(table) {
    table.text('rogwttzrke');
    table.boolean('tjivqhpsws');
    table.text('vwhmkdymab');
    table.text('drppygsnjd');
    table.float('jzzwspdyug');
    table.integer('gjeqyzugxu');
    table.integer('ieybllnkmd');
  });
  await knex.schema.alterTable('hmaznrmeqc', function(table) {
    table.timestamp('hedfabipzy');
    table.string('medenochyi');
    table.integer('ygxtorjjfn');
    table.bigInteger('dslfemekcy');
    table.timestamp('kmbfkhfdkg');
    table.json('hhvycykkoj');
    table.float('dkvyclmere');
  });
  await knex.schema.alterTable('dikzjxmtzz', function(table) {
    table.boolean('xosfjdjxvd');
    table.boolean('gnsqhqdyxe');
    table.string('uzimcwfalk');
    table.json('mhqyxjqqha');
    table.timestamp('hwnrdjnfha');
    table.text('zqhextvmer');
    table.boolean('jpobxtznso');
  });
  await knex.schema.alterTable('gmeufcfgbw', function(table) {
    table.boolean('wvfdgmkfig');
    table.bigInteger('qfuqjmzxsn');
    table.float('tchydlwrsa');
    table.boolean('yuagnysllz');
    table.timestamp('ornleixekr');
    table.bigInteger('rjmlfctkba');
    table.timestamp('gimwgvmjox');
    table.float('ahvsqhfiue');
  });
  await knex.schema.alterTable('eflchwfsph', function(table) {
    table.text('pskncwhiyr');
    table.string('ekmerhwczd');
    table.timestamp('nmtlobpflh');
  });
  await knex.schema.alterTable('hcmkehpcza', function(table) {
    table.bigInteger('wrbcetlawd');
    table.string('sodnmigcqz');
    table.text('ikwxsmrnqf');
    table.text('sfrrfsqkfl');
  });
  await knex.schema.alterTable('ktjwyucaoj', function(table) {
    table.float('mzcolpgtnl');
    table.bigInteger('tgtjlpabse');
    table.timestamp('rfxhvklyrb');
  });
  await knex.schema.alterTable('hkjzrhqcwl', function(table) {
    table.bigInteger('chyqnwmorj');
    table.bigInteger('vxibqebkbz');
    table.integer('pqzteudhqx');
    table.boolean('ixckljelgg');
    table.boolean('mtyqmwgwgf');
    table.string('gtxwspadsw');
  });
  await knex.schema.alterTable('ealyczxrkn', function(table) {
    table.string('ywrjmbsodw');
    table.string('lhxacehbyf');
    table.integer('vfscccqdui');
    table.text('fjzfmxnanp');
    table.integer('mdhgajfdvm');
    table.text('uzaxmsejto');
    table.string('zlcinmkbva');
  });
  await knex.schema.alterTable('ykibasrwhl', function(table) {
    table.timestamp('kikmxtattv');
    table.boolean('lchykkigir');
    table.timestamp('nxhkdxhmns');
    table.json('adjyhvnqdv');
    table.timestamp('gesyvnieeu');
    table.string('adxdqfjdrz');
    table.string('ddmgwadiyc');
  });
  await knex.schema.alterTable('ardeoygpuu', function(table) {
    table.string('panydzsckq');
    table.string('nfzuefznaa');
    table.string('pkcgudbler');
    table.integer('wnvvvnrfdb');
    table.float('hclsdhmsih');
    table.string('zioebkkeri');
    table.integer('kxbezlorel');
    table.integer('qvzteupidh');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};