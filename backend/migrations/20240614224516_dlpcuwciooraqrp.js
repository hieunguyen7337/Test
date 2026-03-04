'use strict';

/**
 * Migration: 20240614224516_dlpcuwciooraqrp
 * Description: Please work this time
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('znucylvsmg', function(table) {
    table.timestamp('blzwjkdsuk');
    table.boolean('qrnrhafvcv');
    table.boolean('ypartnndqh');
    table.string('awufjslecf');
    table.text('nlbqclvvir');
    table.integer('lxqfgtnmml');
  });
  await knex.schema.alterTable('yogsopwuyx', function(table) {
    table.float('absloddffa');
    table.bigInteger('oddvhhoetx');
    table.string('ygjmsyyoqa');
    table.json('zrbhtiuzmc');
    table.text('cjsbjcxbuw');
    table.string('svmjfaaeqf');
    table.integer('ypjzdayhrq');
    table.float('tpiveltqjc');
  });
  await knex.schema.alterTable('pizqkfbngy', function(table) {
    table.json('glwghgdkzy');
    table.bigInteger('bnzhruqmzv');
    table.timestamp('qehaihtexg');
    table.boolean('ujtjmdmigc');
    table.float('xheylrojjb');
    table.text('fafpmgioqv');
    table.timestamp('frgtowepsf');
    table.boolean('nhlpvrmquc');
  });
  await knex.schema.alterTable('zuighdokdq', function(table) {
    table.timestamp('ltaaryflzl');
    table.float('nqtivsqnyd');
    table.integer('akyqkfxgfw');
  });
  await knex.schema.alterTable('gylivqskog', function(table) {
    table.integer('xuxrktqawz');
    table.integer('veseseigqg');
    table.timestamp('ahwdnkhmdc');
    table.float('qltvuxvslp');
    table.timestamp('unsrtafavg');
    table.boolean('kkvjmyxeey');
    table.boolean('qhdahgixfr');
  });
  await knex.schema.alterTable('ysqvjokagu', function(table) {
    table.integer('zmxbcpnhbm');
    table.bigInteger('tliinparyc');
    table.float('eswdjzglfh');
    table.json('ntsnntoqav');
    table.json('bsikaacjcf');
    table.boolean('ixlirlpydn');
    table.timestamp('vgiuxrdjxj');
  });
  await knex.schema.alterTable('fkfxnihevn', function(table) {
    table.boolean('bgmkphoeqx');
    table.float('mwifzvshur');
    table.boolean('rsffqknhwe');
    table.timestamp('lhtbfdjxzt');
    table.json('hcseoznbyh');
    table.bigInteger('ykznoudddj');
    table.integer('uxpyhctdmo');
    table.integer('zrtqjjcxjo');
  });
  await knex.schema.alterTable('wexvpjsazc', function(table) {
    table.json('dmzkdmaxdg');
    table.json('hqoytsnhlb');
    table.string('dlydoxmqxg');
    table.text('pjjufqserz');
    table.integer('qrchpisbqj');
  });
  await knex.schema.alterTable('gzijgzkenw', function(table) {
    table.timestamp('ujrjtfzkby');
    table.bigInteger('vehjatbllv');
    table.integer('nimpnqxnbi');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};