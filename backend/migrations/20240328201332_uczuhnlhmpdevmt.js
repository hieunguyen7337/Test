'use strict';

/**
 * Migration: 20240328201332_uczuhnlhmpdevmt
 * Description: Please work this time
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('kiafvzvzhk', function(table) {
    table.integer('lwexvmieeg');
    table.json('ymapumypvb');
    table.boolean('avjihsbmce');
    table.boolean('ysvgonoqkm');
    table.text('yrppewvgys');
    table.string('pronbowzrr');
  });
  await knex.schema.alterTable('lktdzytgbd', function(table) {
    table.boolean('gnhoavjcav');
    table.json('cigkpdcizh');
    table.json('qctfoaivkf');
    table.bigInteger('okdfwfdcob');
    table.boolean('ohdzceyulx');
    table.boolean('nqeauyqadm');
    table.timestamp('odlhvmfhto');
  });
  await knex.schema.alterTable('grhvkxyqru', function(table) {
    table.json('yoqutkpvzf');
    table.timestamp('qqjfawrlcy');
    table.bigInteger('yxltctpkfy');
    table.string('khbjxnziar');
    table.string('vnbjbeznil');
  });
  await knex.schema.alterTable('feuphutxhm', function(table) {
    table.string('hahdfiyryr');
    table.boolean('xpaabldujg');
    table.string('oytjgqjdzk');
    table.boolean('nsjeytqkki');
    table.json('pksublyuol');
    table.json('hvorbcxlxk');
  });
  await knex.schema.alterTable('pubcjhvuvf', function(table) {
    table.float('nhgohkxasw');
    table.bigInteger('rexjeimupf');
    table.bigInteger('jjfngctsfx');
    table.string('khcbjidolk');
    table.text('kjmzrgrxhz');
    table.float('ictmxzqfnm');
    table.string('vkdkwczfag');
  });
  await knex.schema.alterTable('vyacthlrjl', function(table) {
    table.float('ajkofwadjm');
    table.integer('jslzpbyjzi');
    table.float('ksggslthwj');
    table.json('vwzietzlth');
    table.timestamp('oohuhrpzta');
    table.string('yrmqbvtdow');
    table.float('lxtsrppydw');
    table.float('gyyrdgghoe');
    table.string('nmhibkcxbx');
    table.bigInteger('covewdrgkl');
  });
  await knex.schema.alterTable('lgnzrkbbmz', function(table) {
    table.text('hvwvsahqcw');
    table.float('zrzessnwuo');
    table.boolean('ennxqttuoq');
    table.json('qxmrkpdldj');
    table.float('ctiyuntazb');
    table.string('embbcyytvd');
  });
  await knex.schema.alterTable('rmjdhwbdxu', function(table) {
    table.integer('pifblofcqi');
    table.bigInteger('whrvpnldiz');
    table.bigInteger('fsrlqgztvl');
    table.timestamp('kjztffidsg');
    table.integer('uhamivhrle');
    table.timestamp('syrrbvfksb');
    table.timestamp('zsxpzjwxty');
    table.text('cpcpyodgjj');
    table.string('spktpongdi');
    table.timestamp('chnspojpax');
  });
  await knex.schema.alterTable('yvygapsavn', function(table) {
    table.text('cpvuhtesbg');
    table.bigInteger('ijpsxhgypu');
    table.string('dgsanqbvzm');
    table.string('oatksqmjre');
    table.json('qdyarmdkga');
    table.boolean('dhlblhaqjl');
    table.float('dgqcmiacyd');
  });
  await knex.schema.alterTable('czruauazbd', function(table) {
    table.timestamp('uwuqxmgivu');
    table.text('ncziscxbzq');
    table.bigInteger('pdbbcxwixc');
    table.bigInteger('zckoujhfdh');
    table.json('dosxlfuewb');
    table.json('mnsouosxgc');
    table.float('xzpwydajrl');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};