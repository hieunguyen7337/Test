'use strict';

/**
 * Migration: 20241201011328_anoihfkpbzvuxcr
 * Description: Undo previous migration
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('edlqehogkm', function(table) {
    table.text('fwyiclrpsk');
    table.boolean('yvkmvmealv');
    table.json('mvbehfvsaa');
  });
  await knex.schema.alterTable('behynptttz', function(table) {
    table.string('mdqmmlnnlk');
    table.json('rcgosnjbti');
    table.text('gdtjkmbdjw');
    table.string('wwutlprmeg');
  });
  await knex.schema.alterTable('ayunzojzvm', function(table) {
    table.float('lunrtvwfcu');
    table.bigInteger('gafjfvstjl');
    table.bigInteger('zcjzntufjl');
    table.timestamp('wjzukrzvjm');
    table.bigInteger('ffhqlpalzp');
    table.float('nsyscgxejd');
    table.json('oojqbdqwqu');
    table.string('hikznmesnv');
  });
  await knex.schema.alterTable('wxlrnjzhew', function(table) {
    table.bigInteger('gacazpbbdp');
    table.integer('cjeanecqlx');
    table.boolean('cenwhejoke');
    table.json('vwdvngzwbw');
    table.float('amamsnklzs');
    table.json('gzpsvkphhn');
    table.timestamp('rbiirqyhpg');
    table.bigInteger('rxnosezkgp');
    table.timestamp('jujqwvbqev');
    table.float('tvmkkmjlhq');
  });
  await knex.schema.alterTable('kegidjxklz', function(table) {
    table.string('xouaoqgmre');
    table.bigInteger('kywlmxwwva');
    table.text('bawyqgmigx');
    table.json('bktdefqdei');
    table.timestamp('jupvqcirfx');
    table.float('kanrwhlawl');
    table.text('cwpuyjgxyz');
    table.float('amifdwjxka');
  });
  await knex.schema.alterTable('admzitzxwk', function(table) {
    table.timestamp('hjsaiwpmhg');
    table.bigInteger('bwbptgdteh');
    table.timestamp('jgrmbgagce');
  });
  await knex.schema.alterTable('rffchumzya', function(table) {
    table.string('vhqxzajnel');
    table.timestamp('zrurmepimk');
    table.bigInteger('matnctpfip');
    table.bigInteger('hsgbifnfvu');
  });
  await knex.schema.alterTable('kansvxlgtl', function(table) {
    table.integer('cmuygwpcqm');
    table.bigInteger('ityghiqpga');
    table.bigInteger('axrbreqsgn');
    table.float('bhadjicwgm');
    table.integer('jzrsumjrja');
    table.float('mxeiazqmye');
    table.float('lyfqtnlvwk');
    table.float('zxpgfbezxg');
    table.json('rdvbfomyrs');
  });
  await knex.schema.alterTable('whlhxgdxsl', function(table) {
    table.timestamp('ycjifzohxr');
    table.text('dmirdapwur');
    table.integer('lhhqskpswc');
    table.text('emjrbqvzor');
    table.boolean('ilwktoeogo');
  });
  await knex.schema.alterTable('jukbibyllw', function(table) {
    table.text('erlzsoxyhe');
    table.integer('xvwetkmgmn');
    table.boolean('vihibwgcgr');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};