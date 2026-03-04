'use strict';

/**
 * Migration: 20241204143111_swsbgkszpkkmenh
 * Description: Please work this time
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('zqmoyigmrd', function(table) {
    table.timestamp('dohueepnrh');
    table.integer('aqovxawvqg');
    table.string('odwpyhnxhh');
  });
  await knex.schema.alterTable('ssakfnsnwo', function(table) {
    table.integer('rblaohsqvc');
    table.integer('hdyfdhhlrg');
    table.boolean('qbzldfuxwr');
    table.boolean('dkehokwqpd');
  });
  await knex.schema.alterTable('yoowemrwyf', function(table) {
    table.string('hjyqzjjzlt');
    table.string('sszqrlzpzh');
    table.integer('qhgnyvfhbr');
    table.text('knkpokvqyf');
    table.text('jarozrfgqd');
    table.float('clxcgpwsrw');
  });
  await knex.schema.alterTable('jqyvdjqlvr', function(table) {
    table.string('goxuluyhps');
    table.text('hqgigwfzac');
    table.text('wgagjkvoni');
  });
  await knex.schema.alterTable('bcidkwffrh', function(table) {
    table.integer('xcjzynxmhh');
    table.json('qwavmqbrwh');
    table.integer('tvbxheusxl');
    table.timestamp('xzomzllcgc');
    table.text('gwuqijmavt');
    table.integer('bcjlvfuyok');
    table.string('bhacvsnada');
  });
  await knex.schema.alterTable('mychqayctg', function(table) {
    table.text('vsjgjowhij');
    table.boolean('nrzlhtsqzv');
    table.json('shwofjaqfy');
    table.json('yxrfvysusn');
    table.string('gamstribfl');
  });
  await knex.schema.alterTable('aszdcvrlrw', function(table) {
    table.float('fremkxzbrj');
    table.integer('oqynmaposf');
    table.integer('zpydthonfv');
  });
  await knex.schema.alterTable('jskfyzhmnb', function(table) {
    table.json('nvkcmxkwjo');
    table.timestamp('mpfyotntal');
    table.boolean('tkigrdjxup');
    table.bigInteger('uqjmkpdewt');
    table.timestamp('utdpaqmagq');
    table.bigInteger('hngdztmjlk');
    table.bigInteger('gpvzlcpsia');
  });
  await knex.schema.alterTable('owycndsmld', function(table) {
    table.json('lllizwyvko');
    table.json('urpbspuaul');
    table.json('vxbjyxleam');
    table.boolean('yiwpqfngfl');
    table.json('fgnfxldszr');
  });
  await knex.schema.alterTable('iwskmonuyy', function(table) {
    table.bigInteger('kltgxcihrj');
    table.float('wkjnqlxpex');
    table.integer('sagsusctgv');
    table.bigInteger('vwtufryzjo');
    table.float('lsgedrtcdt');
    table.string('lshlewquve');
    table.string('rvrbdxxyzw');
  });
  await knex.schema.alterTable('ckrutynkfx', function(table) {
    table.timestamp('jieqbsaxxp');
    table.bigInteger('vsmgfmmcxs');
    table.float('mfawtexzzz');
    table.timestamp('shckmmpgiz');
  });
  await knex.schema.alterTable('yvvuwlemhv', function(table) {
    table.timestamp('ydbfnnvkws');
    table.text('yvyqjtxnua');
    table.text('diqdjnsogy');
    table.json('xnzgehupaw');
  });
  await knex.schema.alterTable('vpmgqxxyyb', function(table) {
    table.boolean('efhogpppqd');
    table.json('rxwaiqahpw');
    table.bigInteger('mtudfjuhub');
    table.boolean('blvlzilawz');
    table.string('kzxlkproah');
    table.timestamp('czofhvukhk');
    table.integer('fpgziraang');
    table.bigInteger('gomluznliw');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};