'use strict';

/**
 * Migration: 20241002172432_sumsqcguoliajdl
 * Description: Rename field
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('mbttnaghmo', function(table) {
    table.boolean('jsuhjfuqlb');
    table.timestamp('xqofzlutxk');
    table.integer('ffstiesuyl');
    table.boolean('wqwygmxldu');
    table.timestamp('kmpxwnlqyr');
    table.timestamp('wpzyrxnbvd');
  });
  await knex.schema.alterTable('vlzqhmuqal', function(table) {
    table.string('novthduvay');
    table.float('zmuaidqaac');
    table.float('donnjpsdqi');
    table.string('iaogblywnh');
    table.string('fdrpazkvqv');
    table.bigInteger('tbeusujkjt');
  });
  await knex.schema.alterTable('aleeybuudr', function(table) {
    table.string('uylaoheljd');
    table.json('rpiihsxeza');
    table.string('mvjceamuka');
    table.float('zfupdcxbnn');
    table.bigInteger('ctnlhjtulp');
    table.boolean('yfrjodcyoo');
  });
  await knex.schema.alterTable('wuctxobefj', function(table) {
    table.bigInteger('qaepkzonmh');
    table.float('qqhlejgqje');
    table.string('qabncgfhqp');
    table.float('kjmkrqhcgf');
    table.bigInteger('yyijgjffrb');
    table.bigInteger('oqjlgiiidd');
    table.string('tnizzojlty');
  });
  await knex.schema.alterTable('yqtxswfkbc', function(table) {
    table.float('gijylaagkk');
    table.string('ijjiqmzkxa');
    table.json('iufvmygcxu');
    table.json('shqkfhopsu');
    table.float('zyznhaqadv');
  });
  await knex.schema.alterTable('txmqbaxlan', function(table) {
    table.bigInteger('tiuhcdhdnk');
    table.string('eyzpuztomo');
    table.bigInteger('prmnyjrbqp');
    table.text('gkuiotfroo');
    table.timestamp('btmxatlxoe');
    table.timestamp('prvckhrtnh');
    table.timestamp('fvbzatjxwm');
  });
  await knex.schema.alterTable('djrmzhczhb', function(table) {
    table.json('txpiwgfbwi');
    table.bigInteger('sptsobleep');
    table.timestamp('ddyjggksnl');
    table.float('zwnryjzbva');
    table.text('jbaeydqjzl');
    table.float('iuoxoklsju');
  });
  await knex.schema.alterTable('lxbywncfjy', function(table) {
    table.boolean('nafeeubdsk');
    table.json('vyxlavyemh');
    table.float('jkuohfkncz');
    table.integer('kplztuogly');
    table.bigInteger('kzrpkfjdxg');
    table.integer('zlvwftxueb');
    table.json('ubbjqxqikk');
    table.timestamp('svjgxyuchc');
    table.timestamp('dwcksnrimd');
    table.timestamp('ziqunvvygv');
  });
  await knex.schema.alterTable('xwqvchscmf', function(table) {
    table.timestamp('occylfxxce');
    table.integer('venqpwetlf');
    table.text('fpnbsqykqx');
  });
  await knex.schema.alterTable('nkupmhwazl', function(table) {
    table.timestamp('qomiojlpem');
    table.string('rahxiyjmte');
    table.string('jkmgqjxobc');
    table.timestamp('tmvhfdcldw');
    table.json('oihwrkkgbp');
    table.json('fihkhsajvg');
  });
  await knex.schema.alterTable('lbozwhvnyw', function(table) {
    table.text('urnynltzuc');
    table.text('gyarlrufmc');
    table.text('xkerioikuv');
    table.bigInteger('bmlvworkyp');
    table.json('btgtdcrshh');
    table.json('yqdveesdzq');
    table.integer('cfxwrlulqj');
  });
  await knex.schema.alterTable('cffiotbkcq', function(table) {
    table.bigInteger('itbwrvgpie');
    table.boolean('ffwvtlkehf');
    table.timestamp('etmwakbtqc');
    table.string('vthugpvxiq');
    table.integer('wuxjzplszg');
    table.boolean('iofmhtttzm');
    table.boolean('wxngwztljp');
  });
  await knex.schema.alterTable('tqcrzebfln', function(table) {
    table.boolean('khdkltrqhq');
    table.timestamp('hluoiniqsd');
    table.bigInteger('rcezlnywkv');
    table.timestamp('flesnlzbjr');
    table.timestamp('arkgdwajoj');
  });
  await knex.schema.alterTable('hzfsugnjtz', function(table) {
    table.string('ipamewenpy');
    table.timestamp('mssqozdvnk');
    table.string('ewfiaxlnhc');
    table.bigInteger('ukkeqrqpxh');
  });
  await knex.schema.alterTable('vhmrovlctg', function(table) {
    table.bigInteger('bgmtphgejj');
    table.bigInteger('nsdfnuahmx');
    table.bigInteger('cfveyvurpj');
    table.integer('xjhbkdnwvt');
    table.boolean('pckqsowcvo');
    table.bigInteger('wuxvbwihaa');
    table.boolean('oamqvuypik');
  });
  await knex.schema.alterTable('nufxulhusy', function(table) {
    table.bigInteger('kjrzemgtfp');
    table.integer('jaekmeesmh');
    table.float('zuoitcdigl');
    table.integer('eysihuysjs');
    table.boolean('rohfywmwao');
    table.string('ecweqkyptf');
    table.boolean('owrsxupslo');
    table.integer('wqrbixwklm');
    table.boolean('cthlrbhtrg');
    table.json('kipnfvlbck');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};