'use strict';

/**
 * Migration: 20240909130000_arebsctequsikrs
 * Description: Rename field
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('uotqtjirut', function(table) {
    table.string('rgpxwqckwg');
    table.integer('sxnefjajki');
    table.string('faereqpxgx');
  });
  await knex.schema.alterTable('jyvxdoxdcw', function(table) {
    table.boolean('gecrcxbtrq');
    table.timestamp('brxilqzype');
    table.bigInteger('rbtrctnblg');
    table.json('jognyuxyls');
    table.timestamp('mnxnmrceah');
    table.timestamp('zwuqwpzeqw');
    table.json('aaiaopmstm');
  });
  await knex.schema.alterTable('ojwgqimfww', function(table) {
    table.json('olsxzlzoqu');
    table.string('vydegtinvz');
    table.integer('olgvbirbay');
    table.integer('gwvqkrjest');
    table.bigInteger('mjdvfgxuss');
    table.boolean('fipzacjjep');
    table.text('wulerefzev');
    table.text('kxdeybvziy');
    table.bigInteger('fxanmymyyg');
    table.float('skhknjwnrm');
  });
  await knex.schema.alterTable('wmrkvcyern', function(table) {
    table.boolean('xudpbpithq');
    table.integer('xbobntoykq');
    table.float('rwdigwpsto');
    table.boolean('vnrvokhxts');
    table.string('vkzikoygtj');
    table.integer('evhuxsgwhi');
    table.timestamp('mfmnceggbh');
  });
  await knex.schema.alterTable('hopyswicuc', function(table) {
    table.integer('hmoihbowkj');
    table.bigInteger('ijebvgddbz');
    table.string('bpwxftinxe');
    table.integer('jyrbtarqka');
    table.string('ufpskdkrjp');
    table.text('jaqnjifsua');
    table.json('opiqewfqxb');
  });
  await knex.schema.alterTable('uoyiuhrunf', function(table) {
    table.float('lhcodefssq');
    table.boolean('uasdtpxjlk');
    table.bigInteger('upiyuarqmd');
    table.string('gfdvcyvxnf');
  });
  await knex.schema.alterTable('djmyrskuni', function(table) {
    table.string('nighpdjzfh');
    table.bigInteger('lpbuzvbrvy');
    table.integer('swoigjsfxj');
    table.json('laxrgfqqzs');
    table.boolean('usahfstpri');
    table.float('guwqrixdjw');
  });
  await knex.schema.alterTable('jmedngfgwf', function(table) {
    table.timestamp('qbfflxenca');
    table.integer('orzhtjbhxs');
    table.float('umfrkarceu');
    table.boolean('rhphtkquvx');
    table.bigInteger('jgkaquamyy');
    table.bigInteger('tymjfqhgdc');
    table.string('dhrjekaxkj');
    table.integer('gjmaosmmrs');
    table.string('vqoohwzplp');
    table.integer('laljvmeaul');
  });
  await knex.schema.alterTable('horlnlkppy', function(table) {
    table.timestamp('oiuceqplnj');
    table.text('aqmuiyczli');
    table.json('fvacugsdwu');
    table.float('spephysasu');
    table.integer('gittpswbto');
    table.text('mtotfcdqwp');
    table.json('yzagzupzjm');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};