'use strict';

/**
 * Migration: 20241215122944_isgggmzkhhdpuwi
 * Description: Drop table
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('ssbszlkujk', function(table) {
    table.float('lyjjbhuwgj');
    table.text('ztueiqiiuc');
    table.integer('yfeeidirhg');
    table.string('zipgugdkul');
    table.bigInteger('slpajdgloq');
    table.timestamp('zeiopywabk');
    table.timestamp('mhzpnffoar');
    table.boolean('geysdrgwhk');
    table.integer('jfxobteuzw');
    table.boolean('jucuwfvdjo');
  });
  await knex.schema.alterTable('ymaxgfxmpb', function(table) {
    table.boolean('bbdaatoxxw');
    table.json('ltuxyoqvxj');
    table.bigInteger('pzfjqtagjr');
    table.json('oaqvvcfgji');
    table.bigInteger('nklrhqrbpj');
    table.timestamp('cacagmlksl');
    table.json('uinswsubkj');
    table.boolean('vftwiwagvq');
    table.boolean('zmybvpmzfq');
  });
  await knex.schema.alterTable('yspbuaezpg', function(table) {
    table.integer('idjkrsqukg');
    table.json('ufapdtfbdp');
    table.float('xusllntapk');
    table.timestamp('dlgdcsdcvx');
    table.json('zizywbycbj');
    table.json('zlmfnmrxei');
    table.bigInteger('vfgrixxizr');
    table.boolean('dgtrzgdfai');
  });
  await knex.schema.alterTable('ryhvdisbes', function(table) {
    table.string('amufwbowwk');
    table.string('cfgafvavau');
    table.json('czomzsuold');
    table.boolean('hxnhxsxepo');
    table.integer('amuupztatp');
    table.integer('zcobyweraz');
  });
  await knex.schema.alterTable('etwsrestza', function(table) {
    table.integer('imvgxspvdk');
    table.float('ojgmqvspxp');
    table.string('esszmyriqs');
    table.float('rdzgdfjrff');
    table.integer('fegosgvlnr');
    table.integer('vdoyqqkevi');
  });
  await knex.schema.alterTable('ztkuuikqrt', function(table) {
    table.string('tgkylklnil');
    table.bigInteger('aksetkzapy');
    table.timestamp('lbheaxrkzv');
  });
  await knex.schema.alterTable('ciqnqzxlvz', function(table) {
    table.json('pmvlvxmbkm');
    table.float('axydfrgezv');
    table.bigInteger('ljwgywkigy');
    table.json('qhzsoygexn');
    table.bigInteger('qenxahinsr');
    table.timestamp('jtuywbcecd');
    table.bigInteger('naxlxmwzno');
    table.json('qbqpjwzrep');
  });
  await knex.schema.alterTable('eaquscrnyd', function(table) {
    table.text('iwsagongvc');
    table.text('smtrmognbz');
    table.boolean('rkndiguaqk');
    table.timestamp('mmoymgjcfp');
    table.json('bwupfhtkdd');
    table.boolean('gryinwzcom');
    table.timestamp('dwjoksjezi');
    table.float('dnukvdrxzb');
    table.integer('nzmnchvmuu');
  });
  await knex.schema.alterTable('faepacbuzc', function(table) {
    table.json('sdciyuimfn');
    table.json('wdmhtbhbfh');
    table.integer('zxgfhnkkud');
    table.bigInteger('fvhtcjomfr');
    table.float('ntzrusbrmb');
    table.timestamp('mqayiqnqjz');
    table.text('dgotdqfxgf');
    table.timestamp('wxhlsayokm');
    table.json('pkijzehgho');
    table.bigInteger('jytgcqygla');
  });
  await knex.schema.alterTable('orlftmitzy', function(table) {
    table.boolean('ybzlxtymol');
    table.string('ecmpkqhkok');
    table.float('mqoyizetvw');
    table.json('dkledhrzup');
    table.text('gsbxhjtdre');
  });
  await knex.schema.alterTable('qjipzcmbnp', function(table) {
    table.string('ybolpppgnc');
    table.bigInteger('qejaazijqv');
    table.text('iuaapmxdkh');
    table.json('bijuyjelqz');
    table.string('mfvlaxetzp');
    table.float('gtxqxfkqld');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};