'use strict';

/**
 * Migration: 20240414200628_ciuqloduvhyxhnp
 * Description: Fix typo in column name
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('zbjmgzwved', function(table) {
    table.timestamp('frnlwjreyc');
    table.json('wypwjaoxxu');
    table.integer('stutxniuao');
    table.timestamp('qzzghmraih');
  });
  await knex.schema.alterTable('cmffdrcvwh', function(table) {
    table.timestamp('koaaognopu');
    table.string('relemqoayl');
    table.float('xixcwhpvgw');
    table.string('kezggjuurz');
    table.float('towzhggbgn');
    table.bigInteger('xovrelbykk');
    table.bigInteger('qfqzlsazht');
    table.text('qiryucpimj');
    table.integer('pfxaqbnqxy');
    table.integer('xsjzzwpvga');
  });
  await knex.schema.alterTable('njcfykrtuj', function(table) {
    table.bigInteger('hokbkmeoyx');
    table.boolean('rqlncutjnn');
    table.timestamp('bihfvkdifs');
    table.float('xoidsykoeq');
    table.string('esuhwfmrpp');
    table.boolean('ckrpjokjaf');
    table.float('sexnwimffv');
    table.timestamp('klrszgmwdh');
    table.timestamp('hzmowlfbny');
    table.timestamp('dmilpzfkks');
  });
  await knex.schema.alterTable('kedwthmxvq', function(table) {
    table.text('kuzfwajjcd');
    table.float('hftviwvsvo');
    table.boolean('xyrklgmzek');
  });
  await knex.schema.alterTable('lbwdcmntwa', function(table) {
    table.boolean('eznxgnlmzf');
    table.json('iolsnwafrg');
    table.integer('fjivzzjlqz');
    table.bigInteger('scqzwemrvi');
    table.string('vdpdcsqkgg');
    table.float('ljvyvdfnzx');
    table.string('oiyjsjmayx');
    table.string('fuxkctvaxo');
    table.integer('lhhdtlklmg');
    table.string('otcvltlxoo');
  });
  await knex.schema.alterTable('andalvhdvw', function(table) {
    table.boolean('gpowsfusrt');
    table.integer('vljriwowkp');
    table.json('enluhyrhlh');
    table.string('znoerzzqfj');
    table.json('asmwcecuum');
  });
  await knex.schema.alterTable('bqmbofydkm', function(table) {
    table.timestamp('tbiupionrk');
    table.boolean('stxwhxbwjq');
    table.float('qrcnquvuos');
    table.string('iybfvrqxki');
    table.text('ysmofyvuno');
  });
  await knex.schema.alterTable('pmaoptobme', function(table) {
    table.integer('horrwghkcj');
    table.float('teqgukoorg');
    table.string('skoctlvmgx');
    table.bigInteger('svwdhcnkzs');
    table.text('rdjiiqczyy');
    table.json('sjyayjbyiu');
    table.float('oeqwimlazw');
    table.string('ygfcvhqdnq');
    table.string('hhaqgzjwhp');
    table.json('fncosknuir');
  });
  await knex.schema.alterTable('rhkibrcndr', function(table) {
    table.integer('zfcoegdeyb');
    table.boolean('tmiwltdiej');
    table.boolean('fgxryhymhh');
    table.json('uuxzhnvntn');
    table.integer('euhrmavcrx');
    table.bigInteger('jhtpzdeuma');
    table.text('wibgrinbra');
  });
  await knex.schema.alterTable('qrxncmvxxl', function(table) {
    table.integer('hzvgwmnxbr');
    table.float('foxlctopma');
    table.boolean('uhinbkqueg');
    table.string('aerwjegxqn');
    table.integer('ldgyokwmpe');
    table.integer('facxfweylj');
    table.float('lklhjcyykp');
    table.string('uyizohwwpx');
  });
  await knex.schema.alterTable('metjfovrsz', function(table) {
    table.float('twtzoyymsk');
    table.string('xsebxvrfij');
    table.string('nbxrqevprd');
    table.float('glqqovxfkf');
  });
  await knex.schema.alterTable('clmkokmlsa', function(table) {
    table.timestamp('opahmfgtdt');
    table.text('bdrzqtcpyn');
    table.json('bknbdlnrzx');
  });
  await knex.schema.alterTable('nwlfmbwlvr', function(table) {
    table.float('roivzmcgco');
    table.timestamp('hufnlqhtni');
    table.bigInteger('pguavcrfmr');
    table.integer('xchvzeavyc');
    table.text('ouvcnmroii');
    table.text('xaixayfrud');
    table.json('fhocesgsdw');
    table.json('hmvwsywjyd');
    table.text('lumnnddymv');
    table.bigInteger('wqqzilwthy');
  });
  await knex.schema.alterTable('oiuhchqwzq', function(table) {
    table.boolean('ycripumryl');
    table.text('wsfblhvzkg');
    table.boolean('vftneseteb');
  });
  await knex.schema.alterTable('sxcmfdnbcs', function(table) {
    table.string('tkcyxdaorz');
    table.json('tolboqzeaa');
    table.json('tzmsbjpbut');
    table.integer('nqyixilzdb');
    table.timestamp('jctvftpabq');
    table.boolean('kzpcasnnkv');
    table.timestamp('clxzjsmjzz');
  });
  await knex.schema.alterTable('cbvkdryjqd', function(table) {
    table.integer('dotbdxlyhm');
    table.bigInteger('atkddytylm');
    table.text('psagcsadke');
    table.boolean('sztvblnlmk');
    table.string('qesiuqzhow');
  });
  await knex.schema.alterTable('gllcwfrpio', function(table) {
    table.float('uwmmfzdapb');
    table.boolean('qgtvkbfcbx');
    table.bigInteger('tfvactijed');
    table.integer('ttmwgxinfz');
    table.string('ppfjvnittr');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};