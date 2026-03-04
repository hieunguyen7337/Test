'use strict';

/**
 * Migration: 20240920141349_fbayfcgkekxalca
 * Description: Create table
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('psmtfswhmn', function(table) {
    table.integer('ipwdkjvfhv');
    table.string('pqyacycctm');
    table.integer('xkuhacagjq');
    table.json('flzkmpzuko');
    table.float('jmpvfowicg');
    table.bigInteger('nkvixkmdlp');
    table.bigInteger('lbbvywrxlm');
    table.boolean('iuyqtyjzza');
    table.json('qbkupuoczl');
    table.text('khqaulfxzh');
  });
  await knex.schema.alterTable('djactbhydl', function(table) {
    table.boolean('xeoyotyqxv');
    table.float('hkxbjveurg');
    table.boolean('fsucxbypxf');
    table.bigInteger('sjzxrececk');
    table.text('gftvkcqwzy');
    table.bigInteger('agdgsdeojk');
    table.boolean('bfjxjisxgu');
    table.bigInteger('cryaaafgfr');
    table.bigInteger('dxjnndeukj');
  });
  await knex.schema.alterTable('hxbuzatfjd', function(table) {
    table.string('zfeduivyqi');
    table.float('wlzrkeywvi');
    table.text('rskvioetbz');
    table.text('upxrcuqkmh');
    table.text('lalxtexpkn');
    table.bigInteger('wxanuukbrd');
    table.timestamp('vmoafkvixc');
    table.timestamp('njjwkqvilh');
    table.json('lhnknjxnsi');
  });
  await knex.schema.alterTable('mpyeaswxof', function(table) {
    table.timestamp('gzobtrqhxv');
    table.json('ogxvnjhqcc');
    table.bigInteger('pvinwjgtsx');
    table.timestamp('bakizvqysu');
  });
  await knex.schema.alterTable('uspojemnuw', function(table) {
    table.boolean('qphjayoodw');
    table.timestamp('abbqijehwu');
    table.boolean('smopyytvcr');
    table.integer('navaishsps');
    table.float('gapumiayev');
    table.string('dbbfnkihnh');
  });
  await knex.schema.alterTable('vmpesvsjcq', function(table) {
    table.text('jkfdyultrp');
    table.bigInteger('txetycbuyt');
    table.text('ytjfpoafjd');
    table.float('mnptzefktr');
    table.json('azwirskoey');
    table.integer('rxsekcpnkl');
    table.text('ctvvznecvs');
    table.text('vtcqvmoebj');
    table.boolean('buchmlqbtq');
    table.json('avztmjjxbr');
  });
  await knex.schema.alterTable('ezytzlyejd', function(table) {
    table.timestamp('jifzjoizhs');
    table.boolean('jowtqqpylw');
    table.boolean('hvayjfonxj');
    table.string('hijanaokdz');
    table.json('gfbfdrhcxv');
    table.timestamp('lrorroodrf');
    table.integer('lavbinamqz');
  });
  await knex.schema.alterTable('hcvalqflkr', function(table) {
    table.boolean('tzpfzoyjtu');
    table.string('bhjrvmcwbp');
    table.boolean('tabobmycrz');
    table.integer('krlfdvotqz');
    table.float('wgijavdvqq');
  });
  await knex.schema.alterTable('wdpnkzxhtp', function(table) {
    table.float('rsvgeuxzkr');
    table.json('evxyseotfk');
    table.float('fbucxvprca');
    table.float('hdhlvgkoyj');
    table.timestamp('qeklglphiv');
    table.float('cwssnxllio');
    table.json('otyrmskuyr');
    table.text('dfxwygotfl');
    table.timestamp('pvnpsfllcg');
  });
  await knex.schema.alterTable('yizdgymjeq', function(table) {
    table.bigInteger('pegyukwugw');
    table.string('dbgrwxkifv');
    table.timestamp('nldlhuvvfu');
    table.string('gurugttbyy');
    table.timestamp('gwcuirvltr');
    table.text('cljbuputlu');
  });
  await knex.schema.alterTable('wuqsligkyg', function(table) {
    table.integer('bicpplwqyn');
    table.text('qterklkwui');
    table.json('ovsrichzaq');
    table.bigInteger('jarzyamnvs');
    table.integer('rsbzipdmdg');
    table.text('jkldtwpjsq');
    table.text('vwgqyeheoq');
  });
  await knex.schema.alterTable('qcdwogqeyl', function(table) {
    table.string('uvmnrtdqyf');
    table.text('dugzqrmnkp');
    table.boolean('zpsoikzott');
    table.bigInteger('vzoiyuruoz');
    table.timestamp('yzcznwvafe');
    table.timestamp('jktizjfwit');
    table.float('msdzumkszj');
    table.json('xswzjqcpal');
    table.boolean('yfhqnwpezj');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};