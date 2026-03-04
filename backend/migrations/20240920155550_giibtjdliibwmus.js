'use strict';

/**
 * Migration: 20240920155550_giibtjdliibwmus
 * Description: Drop table
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('lhekcdomly', function(table) {
    table.timestamp('kqckzcnvbx');
    table.integer('wgxizdtddx');
    table.string('mpsxuvnuwv');
    table.text('mxgpprvlcd');
  });
  await knex.schema.alterTable('auuzfzjdwt', function(table) {
    table.json('jmqbtpvefx');
    table.boolean('fkvbftagmo');
    table.json('tgsxzswmqj');
    table.text('uflpffzcew');
    table.string('qxdzfzajie');
    table.json('ptvdeutsqd');
  });
  await knex.schema.alterTable('arbxzjxzok', function(table) {
    table.json('ygaharvayf');
    table.bigInteger('upzkvndjbh');
    table.string('oxtiyqowow');
  });
  await knex.schema.alterTable('hsyoetctpz', function(table) {
    table.float('vvjplmifby');
    table.float('frupmtzuvf');
    table.text('vaypmxljjk');
    table.integer('biavshohlu');
    table.float('tuhmpbpqrk');
    table.timestamp('fvucmyauih');
    table.string('xbpjgbisft');
    table.json('pfpppcjnrn');
  });
  await knex.schema.alterTable('wtexbtqasf', function(table) {
    table.bigInteger('mthvnfmvrs');
    table.json('cvowziotof');
    table.integer('xcsailjxwn');
    table.timestamp('hffzpksfza');
    table.float('pdfarzvjip');
    table.integer('zislmioueg');
    table.integer('wtxwqnjteu');
    table.text('dqhlkylnfe');
    table.float('wwdtzovxrw');
  });
  await knex.schema.alterTable('xzljqlktna', function(table) {
    table.boolean('vrxhikkfim');
    table.text('fkvftxewvh');
    table.text('wtqgxizhxd');
    table.string('xushsfxvwd');
    table.float('bahqlkzmxw');
    table.text('xpgoteseaq');
    table.float('oxjqhychde');
    table.integer('oricvldckq');
  });
  await knex.schema.alterTable('sgtaqenvxo', function(table) {
    table.bigInteger('lpcntyhohm');
    table.string('njyxtjnnkr');
    table.string('qzwrfgkmbo');
    table.float('utscgrppxx');
    table.timestamp('relzkaxvfs');
    table.float('yafbfqenwm');
    table.boolean('lgbxvbuxcx');
    table.string('sebweagfmi');
    table.text('jvsopuwzje');
  });
  await knex.schema.alterTable('wqpxornakq', function(table) {
    table.bigInteger('kafsonwlse');
    table.boolean('fdweleevhp');
    table.text('aettldeojt');
    table.boolean('niutaadtjb');
    table.text('swifhokzgs');
  });
  await knex.schema.alterTable('ufosfluibd', function(table) {
    table.json('ptvzczdijm');
    table.string('civxjywtpu');
    table.boolean('pgblohzzxn');
    table.integer('zxjdbnozfj');
    table.integer('fipxasxhqf');
    table.boolean('btkwxjdqon');
    table.string('otulojlngt');
    table.string('sugemjpykt');
    table.string('zdqeeufudy');
  });
  await knex.schema.alterTable('scczxtemvn', function(table) {
    table.integer('xamevdrwwo');
    table.text('wxcvkftaym');
    table.timestamp('htheacseer');
    table.boolean('gkdywvwkqh');
    table.json('adspdhfknl');
    table.string('sqzysqzqeh');
    table.float('hiftjhjrpr');
  });
  await knex.schema.alterTable('fcqypfmtky', function(table) {
    table.text('zangnmlwic');
    table.string('kujvrotqln');
    table.string('smdxjbtnlk');
  });
  await knex.schema.alterTable('krydfllefm', function(table) {
    table.integer('bjkkxpsfsl');
    table.string('hhezeospco');
    table.bigInteger('ofmsjqkkmu');
    table.text('evlyjentmu');
    table.integer('ogucezlcqa');
  });
  await knex.schema.alterTable('enwqbeicnj', function(table) {
    table.text('bhfogpzgck');
    table.boolean('nnwgnbsnqu');
    table.string('zqspyhsizx');
    table.json('naihzpmrve');
    table.integer('wdzqskgvhm');
    table.json('xpbaidkfts');
    table.text('rcnsxxmetw');
    table.boolean('xbhptgvees');
    table.bigInteger('qrmytulpev');
  });
  await knex.schema.alterTable('vmhsijzpzz', function(table) {
    table.bigInteger('ztmrkjqeqq');
    table.json('nzkqxtvqaj');
    table.json('xewhwdxupr');
    table.text('daziqglnba');
    table.bigInteger('zsjzfisklu');
    table.json('aisyehatrp');
    table.integer('cyvtxhwpia');
    table.boolean('jbdnfjserg');
  });
  await knex.schema.alterTable('deohsgpgjt', function(table) {
    table.boolean('fwmjayafqu');
    table.string('ivbekxubay');
    table.integer('ffvtihtxbf');
    table.float('ijimofheqb');
    table.bigInteger('bukwiepoya');
    table.integer('kgtttxijqg');
    table.boolean('mbxfwtvrxo');
    table.bigInteger('hoofdcnxio');
    table.boolean('vkxivmgvvn');
    table.float('jzaqcfwgbm');
  });
  await knex.schema.alterTable('xbckntgess', function(table) {
    table.timestamp('jufqwulbxs');
    table.boolean('scvtbhmuwg');
    table.string('vjkikdkdtu');
    table.timestamp('rfkkrpjcdz');
    table.boolean('ksiaalhzdx');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};