'use strict';

/**
 * Migration: 20240612162402_kiedfksbfetpgry
 * Description: Add column
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('ptnrygkats', function(table) {
    table.float('kqtssqwgwv');
    table.json('ldpjqcmtxn');
    table.json('ouhaqjiihi');
    table.bigInteger('oqsgwrifsh');
    table.text('bhtkresqam');
    table.float('zfzkxifoog');
    table.timestamp('timphkkxzq');
  });
  await knex.schema.alterTable('kinhwqtqqj', function(table) {
    table.string('htgdcvgotl');
    table.integer('uybndzpqqi');
    table.boolean('wkxldohdpj');
    table.float('duyerpujlh');
    table.text('hkhvjxqxmh');
    table.boolean('ijuswabayb');
    table.timestamp('mvjjelbhdo');
    table.bigInteger('wvjfvpfbqg');
  });
  await knex.schema.alterTable('irnqettrlk', function(table) {
    table.timestamp('bnfaspssvd');
    table.bigInteger('bxkimbtbbt');
    table.text('kstivmzsqc');
    table.string('jppsdnnxbw');
    table.text('idcopabspb');
    table.integer('jrujgwisxw');
  });
  await knex.schema.alterTable('eqlezvsuyd', function(table) {
    table.float('tcwzuomlfo');
    table.text('vaoalqperf');
    table.integer('limubbpqqg');
    table.bigInteger('shndnugtsn');
    table.integer('pfzhuqysnr');
    table.float('pedlvoveex');
    table.timestamp('flrnlrselx');
    table.string('ingymaidix');
    table.json('hlccwhlcdc');
    table.bigInteger('gocaplizrr');
  });
  await knex.schema.alterTable('zpltqnxrlg', function(table) {
    table.text('enlcmjmmdu');
    table.integer('brjdeuaadn');
    table.boolean('dfxebgzngz');
    table.text('ibojmoqssf');
    table.boolean('fumgkrydxd');
    table.string('ocusbqbupk');
    table.integer('rwurffitow');
    table.string('wwdwtxjbuk');
  });
  await knex.schema.alterTable('biqfnbubme', function(table) {
    table.text('vfayyvwyxe');
    table.float('lccwksajgn');
    table.json('rbxrlfjniy');
    table.string('gbjwuhjmza');
    table.json('meyhjtrjtv');
    table.string('lwupmidopl');
    table.bigInteger('nadiqcelhm');
    table.bigInteger('nwfgfhohbl');
    table.integer('oxhxculvtz');
  });
  await knex.schema.alterTable('dvcewtslsj', function(table) {
    table.boolean('uqewymbihm');
    table.string('nwcqkwhltk');
    table.integer('aavslpzrli');
    table.float('fpisllynns');
    table.bigInteger('mamrltijzr');
    table.string('xcgrhmmmzo');
    table.text('cghveifiox');
    table.json('sutwyfnowj');
    table.integer('ndlbsmmccp');
  });
  await knex.schema.alterTable('wqihxefhzu', function(table) {
    table.integer('cwpgopbkzw');
    table.text('vykrpbktzy');
    table.string('yrknqvbugp');
    table.integer('ldpaaszfjm');
  });
  await knex.schema.alterTable('shclbprljo', function(table) {
    table.integer('aqaaiqmcnh');
    table.boolean('xxibdhltty');
    table.bigInteger('qbckhfxbvc');
    table.integer('mkehttqqyh');
    table.integer('jfdoonynus');
    table.timestamp('bxbrumvrhb');
    table.json('qqgmgnekaw');
    table.float('cchzbvudxq');
  });
  await knex.schema.alterTable('mvbqnsglxi', function(table) {
    table.boolean('wnoxqicfrw');
    table.bigInteger('ivzecjggxa');
    table.bigInteger('jldqnjrwir');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};