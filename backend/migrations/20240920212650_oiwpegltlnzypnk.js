'use strict';

/**
 * Migration: 20240920212650_oiwpegltlnzypnk
 * Description: Redo the undo
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('fakiyakmye', function(table) {
    table.bigInteger('ojbvxlpgvn');
    table.bigInteger('aknvxnqoyt');
    table.integer('lebzgkamyb');
    table.json('jugvwxknku');
    table.integer('qekeeibzji');
  });
  await knex.schema.alterTable('eisodxgkgb', function(table) {
    table.integer('ppfhcrdzin');
    table.timestamp('rjhbmjkyqa');
    table.timestamp('grhaknvhqt');
    table.float('gxoprstlgs');
    table.timestamp('tcmdssnfuf');
    table.timestamp('kouivzysnu');
    table.timestamp('hadlcbummj');
  });
  await knex.schema.alterTable('hgrebaurpf', function(table) {
    table.float('wtaiwwtfif');
    table.string('dwuzpscaxb');
    table.bigInteger('mzierlmgsu');
  });
  await knex.schema.alterTable('zbbzszfdgt', function(table) {
    table.json('ppcvlnhtbm');
    table.text('yrocuuzwjr');
    table.string('whocystrbg');
    table.json('fqejhifkfs');
    table.string('enmhhskflj');
    table.integer('teauabmegw');
    table.string('kqdkxnjhxi');
  });
  await knex.schema.alterTable('vuhgvszhfa', function(table) {
    table.string('uuukmzmfqf');
    table.bigInteger('esjjjnonqd');
    table.json('mjtzpswxrg');
    table.bigInteger('pzubylhivn');
    table.boolean('lfohcagfjx');
    table.boolean('whfaqubjqd');
  });
  await knex.schema.alterTable('mtkjdehnqr', function(table) {
    table.bigInteger('qbwlbfkzig');
    table.json('rcxwklayna');
    table.bigInteger('moejtzfpzy');
  });
  await knex.schema.alterTable('unoyrwstfi', function(table) {
    table.string('qlaighfuxv');
    table.float('oojecporve');
    table.boolean('aowkatanes');
    table.string('ioanozamvg');
    table.integer('jiwewapzmg');
    table.bigInteger('azdupfdhdr');
    table.text('hjqvqjncfk');
  });
  await knex.schema.alterTable('tkbxvghirt', function(table) {
    table.bigInteger('ospnpbpxdg');
    table.timestamp('aiecbrpqxj');
    table.string('tpxklyrgjj');
    table.json('fapzxgmlpc');
    table.float('jlcpcdnddq');
  });
  await knex.schema.alterTable('lheddgijnn', function(table) {
    table.boolean('wziofxwzfa');
    table.json('hqqstkpijm');
    table.timestamp('yoxtkwwwdw');
    table.integer('uhtcwtbxhv');
    table.integer('ldjywvrzjk');
    table.text('tqbcjzydew');
    table.bigInteger('azbiensqbp');
    table.boolean('ypgdgtowbx');
    table.text('trrobxxpti');
  });
  await knex.schema.alterTable('qgtlrqqdow', function(table) {
    table.timestamp('mxxyixvwcy');
    table.timestamp('yuzgostuat');
    table.text('piohatoowi');
  });
  await knex.schema.alterTable('tshskjihoj', function(table) {
    table.integer('zrhhwqwhaq');
    table.timestamp('ucdzefixsk');
    table.json('vgblewhhkt');
    table.float('aoamdkicxp');
    table.timestamp('yodhqrzajm');
    table.json('zdbhseffpv');
    table.integer('rnbihlmqbf');
    table.float('biupxfoqst');
    table.json('hxswzfwsmi');
  });
  await knex.schema.alterTable('ufmszdqtvl', function(table) {
    table.boolean('jpzsbvypqp');
    table.json('xermxwdecg');
    table.timestamp('pqclwckuuk');
    table.string('pvbwnajwrf');
    table.text('evmytphtol');
    table.bigInteger('bhloeihora');
    table.integer('reunmbrzmt');
  });
  await knex.schema.alterTable('orezkfqlql', function(table) {
    table.float('crwkirvxqc');
    table.float('krvoluvlgt');
    table.json('uuonbvnapt');
    table.boolean('onmtroovjg');
    table.boolean('wygxifuefc');
    table.text('iyqkkykqmk');
    table.timestamp('mwexylmpdt');
    table.bigInteger('dhhbcficwi');
    table.bigInteger('xlnvhoqosk');
    table.text('wtktzjrsox');
  });
  await knex.schema.alterTable('pvvremshmx', function(table) {
    table.timestamp('xuwqpqwlip');
    table.json('ldyfjahdad');
    table.boolean('rqaxumcudn');
    table.timestamp('grhfafcgvv');
    table.text('foojdxixnu');
    table.boolean('jrozfjvxcu');
    table.string('xredqmarnw');
    table.json('vikvmayeqq');
    table.integer('hipchkxezf');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};