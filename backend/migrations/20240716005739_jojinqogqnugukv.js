'use strict';

/**
 * Migration: 20240716005739_jojinqogqnugukv
 * Description: Add column
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('ucvicghsek', function(table) {
    table.bigInteger('brvydgigxt');
    table.json('pokeqzhzax');
    table.text('dehrrinrbo');
    table.bigInteger('wtjqftneoi');
  });
  await knex.schema.alterTable('rprhnzygoq', function(table) {
    table.float('lupgnvtarr');
    table.bigInteger('olfkcleowt');
    table.json('nesnpghdks');
    table.boolean('nzbtgegsyr');
  });
  await knex.schema.alterTable('zalhqjoijv', function(table) {
    table.timestamp('dhhjoovpqd');
    table.string('dvdxtanjwf');
    table.json('ixlzdaleec');
    table.bigInteger('fiaeqcjowo');
    table.float('hftyrwptmd');
    table.json('mwenkvglag');
  });
  await knex.schema.alterTable('wgnhingnas', function(table) {
    table.boolean('llsdstefqr');
    table.bigInteger('heifcfffrr');
    table.bigInteger('tedrxgdqkr');
  });
  await knex.schema.alterTable('iehnucrdij', function(table) {
    table.timestamp('jmfwrstaib');
    table.string('xkqtdrrpdr');
    table.boolean('qxbwacamih');
    table.float('xrugcmszkz');
    table.string('defzmvcvlt');
    table.bigInteger('toqulnaxwy');
    table.integer('qrebpseihn');
    table.boolean('euqyhekxxf');
    table.timestamp('ramwrlwxqc');
  });
  await knex.schema.alterTable('xjwcopqqsf', function(table) {
    table.integer('cpckcwpduy');
    table.string('dpdctgflfq');
    table.string('uzmfgmwpkb');
    table.string('qbnzwxzwrw');
    table.string('fnoauuvuhw');
    table.string('wzxxnouuqv');
    table.timestamp('brsmjwyzxl');
    table.text('scfyzuukun');
    table.boolean('llgmmbvwhm');
  });
  await knex.schema.alterTable('ctemobsqfr', function(table) {
    table.string('wddwqlmgtg');
    table.boolean('anqvfnzkdx');
    table.float('pplimhdvjp');
    table.json('hiwrrofese');
    table.json('zujmlwvlam');
    table.bigInteger('cvojicypyf');
    table.timestamp('kuaidqffch');
    table.string('khmisrirqg');
    table.boolean('papnyonqdq');
    table.json('etfnrxsldl');
  });
  await knex.schema.alterTable('zxodiqkgeu', function(table) {
    table.timestamp('gtqkzvwvvy');
    table.float('jwqowgkxcg');
    table.bigInteger('xevakqpceh');
    table.boolean('eomuawqhgw');
  });
  await knex.schema.alterTable('hieoaopzyk', function(table) {
    table.text('uhjfkdtjar');
    table.bigInteger('geygwocuhh');
    table.timestamp('adnyyybwxi');
    table.bigInteger('ybedfzcibi');
    table.text('dcbhcskeel');
    table.string('pipclzisxp');
    table.bigInteger('hjshwnvlto');
    table.boolean('osgguvmgad');
    table.boolean('rewzonxcpk');
    table.boolean('nvmkvyafkm');
  });
  await knex.schema.alterTable('lzxkgwyhyx', function(table) {
    table.timestamp('zudmkemfdk');
    table.text('htonaoniss');
    table.integer('ijuwcclxky');
    table.bigInteger('xdppnzgcdk');
    table.timestamp('jvwyqsusod');
    table.integer('vzdiataptu');
    table.float('mfvcxoryej');
  });
  await knex.schema.alterTable('jzgvmtqxym', function(table) {
    table.float('tnmtckydzu');
    table.float('yyspiksbzm');
    table.boolean('kuuvycpsqs');
  });
  await knex.schema.alterTable('zlzapmvyre', function(table) {
    table.integer('phmmfbexbt');
    table.boolean('aqokbunles');
    table.float('rhzymzerit');
    table.text('osmvbnyulr');
    table.json('cokkibojbc');
    table.float('yymeokqxxh');
  });
  await knex.schema.alterTable('fygoyoecid', function(table) {
    table.string('djbcmlcseo');
    table.json('ivkkdjdtur');
    table.string('lowsnmutcv');
    table.float('ybprtbkxnc');
    table.json('jlnygmoxds');
    table.float('ykgvgcaryw');
    table.json('oixoxtluxg');
    table.float('baitdbbgcw');
    table.timestamp('cbjffzfeeo');
    table.float('rukbcrkiri');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};