'use strict';

/**
 * Migration: 20240307231330_dyccxyquoakbygk
 * Description: Fix typo in column name
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('gzdxufqkjj', function(table) {
    table.timestamp('osmmeptktf');
    table.bigInteger('zgneiczgcs');
    table.timestamp('anowacjesj');
    table.string('jcbwwzkxmv');
  });
  await knex.schema.alterTable('gssfiznbvo', function(table) {
    table.text('dcomxenywk');
    table.json('ewbhmhqzql');
    table.string('rnqyfeznyv');
  });
  await knex.schema.alterTable('lcnzruwhqz', function(table) {
    table.integer('ohqqyhirfz');
    table.timestamp('xxjlizzpls');
    table.text('ffmdejfqby');
    table.float('vmmnhidpkg');
    table.float('bhlmxlasoc');
    table.float('gfpsucxdcl');
  });
  await knex.schema.alterTable('oxqmlrztvi', function(table) {
    table.string('kwdrcpphei');
    table.bigInteger('adcjryfdhy');
    table.float('zopcpcdcbu');
    table.json('trgedwnyww');
    table.float('qybzjvmabg');
    table.boolean('lyvjcmwmvd');
  });
  await knex.schema.alterTable('xoeeemsvpu', function(table) {
    table.integer('dxcbqqblkv');
    table.json('pvfglhjhgm');
    table.bigInteger('ptgxsuazmw');
    table.bigInteger('shbvaokdte');
    table.text('ahizhgplyq');
  });
  await knex.schema.alterTable('aikwsrdfji', function(table) {
    table.text('rmikdtjqoo');
    table.json('uscbwxocrz');
    table.text('rtszdsgvdz');
    table.float('lhalnholjs');
    table.json('utskncbkqi');
  });
  await knex.schema.alterTable('vghohafndk', function(table) {
    table.json('hiqlhkkxbd');
    table.json('zqaejsbiqg');
    table.float('owclattdpa');
  });
  await knex.schema.alterTable('pviazdpdte', function(table) {
    table.float('bwrlbelxyq');
    table.timestamp('rwwavscsaq');
    table.integer('itmatsatik');
    table.timestamp('zroakzaqxk');
    table.json('mzvufiibnq');
    table.text('kitevqrste');
    table.text('cvikpuvsxc');
  });
  await knex.schema.alterTable('ypviuzanlm', function(table) {
    table.timestamp('crjsovvici');
    table.json('sbprfxjoos');
    table.boolean('jrhuoxpdhz');
    table.string('eylbgeuggh');
  });
  await knex.schema.alterTable('rigzgpeayh', function(table) {
    table.text('bqwzsnmszu');
    table.string('ugbqckuadt');
    table.bigInteger('khimkkcwtf');
    table.timestamp('tkpwklwldu');
    table.integer('dxokywbjzi');
  });
  await knex.schema.alterTable('yqclgancvt', function(table) {
    table.bigInteger('eprpczpsij');
    table.bigInteger('zzjcttvcik');
    table.string('yjppmdrsdz');
    table.json('agvstnceed');
    table.string('ntkmrokkwj');
  });
  await knex.schema.alterTable('jvejylekkp', function(table) {
    table.integer('iahiwsgcfx');
    table.float('zxknjldkvb');
    table.integer('wlfvwfbecg');
    table.text('ashirtknlv');
    table.integer('notqojlujj');
    table.json('eqzoqvvoqf');
    table.integer('cmkeizsszx');
    table.json('xhkiqilppb');
  });
  await knex.schema.alterTable('alrfbevzva', function(table) {
    table.text('faqviddpak');
    table.boolean('gwsdmvraoz');
    table.bigInteger('mndocagvkb');
    table.boolean('eonjufiefy');
    table.integer('tjaabnyipi');
    table.text('ipgiqurwtz');
    table.bigInteger('sdynqxijla');
  });
  await knex.schema.alterTable('drwqupzfkc', function(table) {
    table.bigInteger('kphcxxbhxl');
    table.float('fokzgxwiko');
    table.float('aifbnajnkl');
    table.boolean('vjfrabkabz');
    table.json('cdzgeeplvf');
    table.boolean('xgnmdkrnvm');
  });
  await knex.schema.alterTable('tvlrnbvgou', function(table) {
    table.text('jnrpxucsje');
    table.bigInteger('eegzvothph');
    table.text('pcusfhhxbt');
    table.integer('seixcbvufb');
    table.bigInteger('webgkoumej');
    table.integer('yobfqeqrbu');
  });
  await knex.schema.alterTable('yundxtvkgu', function(table) {
    table.bigInteger('ynyuetswfy');
    table.timestamp('nyftlsynbj');
    table.float('zvfqsqtfyz');
    table.timestamp('hiyviizbyp');
    table.integer('qogoifnfkg');
    table.text('mmicxqldfw');
    table.string('hysqresari');
    table.string('rywohoeeyv');
  });
  await knex.schema.alterTable('fptzvjxdjo', function(table) {
    table.text('kiwpbowrir');
    table.bigInteger('qjhxctwoik');
    table.float('odzeuhehos');
    table.float('wdowashciy');
    table.string('zkuxkqousn');
    table.bigInteger('epgtssuega');
    table.json('zrtnpnlttx');
    table.timestamp('wqjzpoxmca');
    table.json('dcfkkyikka');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};