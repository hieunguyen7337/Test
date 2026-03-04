'use strict';

/**
 * Migration: 20240921193720_jaeijsycoboufec
 * Description: Rename field
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('bfbzccvmdt', function(table) {
    table.text('fdyfowfclg');
    table.float('yfoihlnsja');
    table.bigInteger('wabcybihpj');
    table.integer('uneyuprobj');
    table.boolean('woohobasgr');
  });
  await knex.schema.alterTable('dsmtgrcxwd', function(table) {
    table.integer('iskomhldfm');
    table.bigInteger('xiuyjhzayk');
    table.text('nyhkqidklk');
    table.float('pmchlftrps');
    table.integer('oyfjanbxut');
    table.float('fbxvjylerq');
  });
  await knex.schema.alterTable('bipalkpubo', function(table) {
    table.timestamp('xgalwmjico');
    table.timestamp('ybyfbrbfnh');
    table.text('bunhmkxjgp');
    table.integer('bhptwhmheh');
    table.float('ffkmazyisj');
    table.text('efuberfhkg');
    table.string('hszecdgedy');
    table.timestamp('ewulyubkva');
    table.string('fylcnvmhah');
    table.float('xxhoudizfk');
  });
  await knex.schema.alterTable('ynsnmcouqt', function(table) {
    table.text('hvsrhdhgfu');
    table.timestamp('nawrrmaxfn');
    table.timestamp('zluiimxupp');
    table.bigInteger('wavysbkmye');
    table.float('xpwnrkmnvk');
    table.string('rwfyjefiie');
    table.text('jenfdzyeuq');
  });
  await knex.schema.alterTable('irhlvoblxq', function(table) {
    table.float('ainjopllgj');
    table.string('asutntxxot');
    table.float('mtjitgytui');
    table.float('ffszrjmplq');
    table.boolean('fgxmkcovot');
    table.json('fgojwzqstb');
    table.timestamp('jzwsqjodpw');
  });
  await knex.schema.alterTable('yvaiuuyfft', function(table) {
    table.boolean('dlfybscszp');
    table.integer('ssytkdrcsn');
    table.float('jamhsitpaf');
    table.bigInteger('sflxuosebz');
    table.timestamp('gvvzqynaks');
    table.boolean('scjihkwndr');
  });
  await knex.schema.alterTable('nsjcvjvado', function(table) {
    table.float('htaeeeuglr');
    table.float('mlfbdyuria');
    table.timestamp('qnmmrgrbot');
    table.integer('aibobtjimc');
    table.float('fmmjxtmvsj');
    table.integer('lwmbbpgxrc');
  });
  await knex.schema.alterTable('rxssmmgdqd', function(table) {
    table.text('rpcykwbcaf');
    table.float('woialotqhf');
    table.timestamp('pgnqqxjnjm');
  });
  await knex.schema.alterTable('mnshhizurh', function(table) {
    table.integer('golrokxiok');
    table.bigInteger('zozoonjitb');
    table.float('imeyejlngx');
    table.string('aopaoohgkk');
    table.timestamp('vnkpetulec');
  });
  await knex.schema.alterTable('luudqtyenq', function(table) {
    table.text('cuopqccaih');
    table.integer('xygeuzhyoo');
    table.integer('jpjnizzdni');
    table.text('ghcdahxzgs');
    table.string('wblkalrukv');
    table.bigInteger('rnvcjhvith');
    table.timestamp('efdvvnukda');
    table.bigInteger('ndhojtfmqe');
    table.integer('zzusljkzeh');
    table.timestamp('pmckeucqug');
  });
  await knex.schema.alterTable('iznhsxmvam', function(table) {
    table.string('cwfwfjxdzl');
    table.bigInteger('ahkgmdliye');
    table.bigInteger('gmasrhhzaj');
  });
  await knex.schema.alterTable('bgkygdoeny', function(table) {
    table.text('ccxybgwtth');
    table.float('buvweygkzl');
    table.timestamp('fjujnxtkcp');
  });
  await knex.schema.alterTable('wuxvvgdnvn', function(table) {
    table.timestamp('piivdmesij');
    table.text('lxxofalfnw');
    table.boolean('yqcxtlsvao');
    table.json('sactgoxzbd');
    table.timestamp('duxympkvnm');
    table.integer('wgawcnfymv');
    table.timestamp('uhiidftfql');
    table.timestamp('fwxbyuqjry');
  });
  await knex.schema.alterTable('vofqboecms', function(table) {
    table.float('rvsehrlpcv');
    table.bigInteger('utpksgrruz');
    table.string('gqnhhpozaj');
    table.integer('cqoerbqisr');
    table.text('hysmesrscd');
    table.timestamp('xgiplzgajb');
    table.timestamp('temyirjbzl');
    table.integer('vdxkblrmqj');
  });
  await knex.schema.alterTable('pbkfvjvajf', function(table) {
    table.timestamp('rncsnijqya');
    table.integer('ojvqcshmfu');
    table.float('whlioxcqed');
    table.timestamp('uuqhdtqbmo');
    table.float('cxkkajpppn');
    table.float('vvzasuzruq');
    table.timestamp('fumxsapnlo');
  });
  await knex.schema.alterTable('lczohxuxfy', function(table) {
    table.float('wpahxhfoja');
    table.float('jqfhkfarpu');
    table.integer('inxwcwhxzg');
  });
  await knex.schema.alterTable('bjgwsuocww', function(table) {
    table.json('lyxmtgjzek');
    table.boolean('iryhsuqhpv');
    table.boolean('dnuaghemmz');
    table.json('fslndbedcq');
    table.bigInteger('jtvknmekfl');
    table.integer('yrefmvwowe');
    table.timestamp('rxjfzcfkmo');
    table.string('glrakvqbws');
    table.float('vxqcmmkhbu');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};