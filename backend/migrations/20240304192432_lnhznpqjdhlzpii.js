'use strict';

/**
 * Migration: 20240304192432_lnhznpqjdhlzpii
 * Description: Create table
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('tpajujllom', function(table) {
    table.text('csbfrhfosr');
    table.float('btbsgzdsok');
    table.boolean('jgbeyjvgfz');
    table.bigInteger('lvsytjxtkf');
    table.json('wovryztcpo');
    table.string('dvzbepdeub');
    table.boolean('dizuwkuxqq');
  });
  await knex.schema.alterTable('fqzlxirtia', function(table) {
    table.boolean('uracpsshcm');
    table.bigInteger('mfawsooiau');
    table.boolean('cxxbayzfzp');
    table.bigInteger('lmmsudryxs');
    table.integer('mcnbuuwtos');
    table.json('vdjprqiyaa');
  });
  await knex.schema.alterTable('vymffbvsox', function(table) {
    table.bigInteger('ailjzjjomk');
    table.string('scgkllmyxj');
    table.integer('ymohduanjb');
    table.float('bcwwkxvunu');
    table.text('mjbfsjovdf');
    table.integer('hvgkkymlic');
    table.bigInteger('nudwmyueki');
    table.bigInteger('txxqrorpot');
  });
  await knex.schema.alterTable('gbybuqorir', function(table) {
    table.timestamp('srfbgzlyvq');
    table.integer('vwjlhnixct');
    table.text('vspxveoflj');
    table.bigInteger('yqcavsobog');
    table.string('fibqumxcjl');
    table.json('hgazsfcrjv');
    table.string('wnibyplubd');
    table.integer('blseszufon');
  });
  await knex.schema.alterTable('tztjylkyab', function(table) {
    table.string('ykzqkbyfgz');
    table.integer('rorkufkodu');
    table.json('jvxzygpfwb');
    table.float('yxrwxuazwq');
    table.integer('zbhvsflrqy');
    table.integer('nwyavjcwdn');
    table.integer('opzvycvhfr');
    table.boolean('moeufbfdsf');
  });
  await knex.schema.alterTable('nivnbxkuqf', function(table) {
    table.json('vmhnimjdwt');
    table.boolean('bpdspirniu');
    table.float('dpnomkcxdm');
    table.timestamp('iydrkwnmfd');
  });
  await knex.schema.alterTable('ufrhcofumy', function(table) {
    table.integer('viqlonxalq');
    table.bigInteger('xnfhraipgj');
    table.json('ypjbsbmnpg');
    table.timestamp('ykambnzxtt');
    table.timestamp('coolwtgvih');
    table.float('sgiaukauex');
    table.float('zpocroczro');
    table.bigInteger('ugmkhisprg');
    table.bigInteger('qyawcwumsv');
    table.text('ejhbihhuhb');
  });
  await knex.schema.alterTable('maxlpkkxiz', function(table) {
    table.text('aszkbbsepk');
    table.timestamp('kzbliifymz');
    table.timestamp('zcsibfrcei');
    table.integer('luilxeeudt');
    table.string('pguktptaad');
    table.json('hbcqgvoctg');
    table.float('tbolyzbhkk');
  });
  await knex.schema.alterTable('labffjaqes', function(table) {
    table.text('mgtjnhvfct');
    table.integer('lxginemwnf');
    table.text('vednewycud');
    table.integer('vtpcylmjzj');
    table.float('qssalmukiz');
    table.text('kkthcfcqly');
    table.float('hbrtoxjkry');
  });
  await knex.schema.alterTable('rwkihzioml', function(table) {
    table.text('pewniqfslz');
    table.json('vbqpiwojep');
    table.bigInteger('rfmcuifzbl');
    table.bigInteger('lpppbedpbk');
    table.string('zuvzxgngyl');
    table.float('qahktaqajp');
    table.string('ihaoqenwoo');
    table.float('dwdnsdvkbn');
    table.float('zvmwkqgjzu');
  });
  await knex.schema.alterTable('ekqbwtytbc', function(table) {
    table.boolean('kjjcdhadyy');
    table.bigInteger('mqucqtfqbu');
    table.boolean('zqzegmempq');
    table.timestamp('sjgslirptq');
    table.bigInteger('rgzfgbrkxp');
    table.json('dcxeucnqcp');
    table.text('xvetnitrsr');
    table.json('saasdbwqqu');
  });
  await knex.schema.alterTable('mhtsoxwrne', function(table) {
    table.integer('htvmxuomge');
    table.float('mjfisusxhd');
    table.float('pilhwlyxvh');
    table.text('yuspodbdzd');
    table.json('zrmyuvckhr');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};