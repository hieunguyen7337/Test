'use strict';

/**
 * Migration: 20240328162342_vcvhaldvqkyloxv
 * Description: Create table
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('clxmncliet', function(table) {
    table.integer('yrhkryztpk');
    table.text('xqagopouij');
    table.boolean('mcanlptuyx');
    table.float('isfztyuhvq');
    table.bigInteger('wqkazbbqzc');
    table.text('jfmzmpxzma');
    table.string('nqxneqgyxv');
  });
  await knex.schema.alterTable('vsjrqnvwcd', function(table) {
    table.bigInteger('hcootgompo');
    table.boolean('gcomfneykn');
    table.bigInteger('nbmjdsqjxd');
    table.bigInteger('xsvxomoval');
  });
  await knex.schema.alterTable('wnirhsjjmz', function(table) {
    table.float('corekwevds');
    table.string('idaxlzagcm');
    table.json('whzflmonke');
    table.bigInteger('uiuioobjwy');
  });
  await knex.schema.alterTable('djebluhuml', function(table) {
    table.text('aratytybtn');
    table.text('jvwacepvhi');
    table.integer('ialplkqrnn');
    table.integer('anxcxxitxn');
  });
  await knex.schema.alterTable('zebfekbmbf', function(table) {
    table.boolean('lsfwxsnsyh');
    table.boolean('ipgrayidxe');
    table.float('xetxoghxtj');
    table.timestamp('kyhsyjoedq');
    table.integer('wjqlwgmrvp');
  });
  await knex.schema.alterTable('ybgzmtaggh', function(table) {
    table.json('ndpbzjvjef');
    table.string('uhxxdsvmtv');
    table.boolean('modlsmclsk');
    table.text('oechhzzkgr');
    table.timestamp('duhepxvooa');
    table.string('dbbelqhxjb');
    table.integer('mhbcxiyvps');
    table.float('opcdyoimwg');
    table.integer('lpfjizlkfu');
  });
  await knex.schema.alterTable('uvlykeltmg', function(table) {
    table.integer('llsxkgzvtm');
    table.text('daqldvavgg');
    table.json('nyxnjmlssd');
    table.timestamp('kmqhdfgopk');
    table.integer('lzwbmrgggl');
    table.string('rxrzbmldrk');
    table.json('zzxoguhdfi');
  });
  await knex.schema.alterTable('omjgadvsok', function(table) {
    table.bigInteger('ubagjhkdnm');
    table.text('waaegxzhda');
    table.string('sptbwgzzrx');
    table.timestamp('wofwamclbr');
    table.string('gfezvauqtl');
    table.integer('vxqwnsdlur');
    table.string('qbtgakgmdt');
  });
  await knex.schema.alterTable('dtaqhjdizd', function(table) {
    table.boolean('zwytgndtbl');
    table.bigInteger('uiuookwrju');
    table.integer('afosrivelw');
    table.text('ayrvnezxao');
    table.bigInteger('lvduxchydh');
  });
  await knex.schema.alterTable('cfriiapyjy', function(table) {
    table.text('pgcdwwelen');
    table.string('uodttkiyvs');
    table.string('utlqqtqmsg');
    table.float('cffnlodsbn');
    table.bigInteger('kxkjpbzeck');
    table.boolean('zmevyoxtqf');
    table.boolean('xxzonpvsdq');
    table.timestamp('pklslexuac');
    table.bigInteger('sadivcinzn');
    table.string('heqwwtjivr');
  });
  await knex.schema.alterTable('uaikxosigw', function(table) {
    table.float('hbfmgvrsbm');
    table.json('omogwyvjta');
    table.timestamp('jjlfoqbkpk');
    table.string('nlwqwxnxbr');
    table.float('fueisznvcx');
  });
  await knex.schema.alterTable('kpngdmbqed', function(table) {
    table.string('ttwzfpzlyu');
    table.boolean('nsgkixsmvy');
    table.float('ajuzxwlfeq');
    table.integer('cctkhuoqhx');
    table.string('pmchnawxaz');
  });
  await knex.schema.alterTable('gmxhdqlqmm', function(table) {
    table.json('bbtasgpvzg');
    table.float('lipiyaooei');
    table.timestamp('aaszxhkubn');
    table.integer('obttsxifpw');
    table.boolean('wijptmacjm');
    table.text('elgnrthseo');
    table.json('tuynnfadpy');
  });
  await knex.schema.alterTable('ylbaksboya', function(table) {
    table.integer('oxepojkicu');
    table.integer('nnvvhjhlbq');
    table.boolean('vqkqqjfnfa');
    table.float('shgqkhfqrw');
    table.timestamp('sumdqeasyu');
    table.boolean('avqrtqiteb');
    table.integer('lziwhkaimi');
    table.string('xztfkvadwu');
    table.json('uziweawgvk');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};