'use strict';

/**
 * Migration: 20240703125426_povlamybxysvkmp
 * Description: Remove column
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('kjrnnsaeto', function(table) {
    table.boolean('xdurymldla');
    table.bigInteger('ntvxvfzvpr');
    table.float('lvjkrkoiiq');
    table.text('svfwuuytdj');
    table.text('pqinqchnrl');
    table.timestamp('jokjsbenzm');
  });
  await knex.schema.alterTable('junbrwueyz', function(table) {
    table.text('qcizvqqgxg');
    table.json('ksdskgfood');
    table.timestamp('sugmzblmls');
    table.timestamp('ilfqpxjgxb');
    table.string('guwjlombhh');
    table.float('eowcdcxgea');
    table.boolean('sdimkxtkrj');
  });
  await knex.schema.alterTable('ycdqexgsqr', function(table) {
    table.bigInteger('iyxtgxqzja');
    table.boolean('irodvarzim');
    table.text('mwyswzpsfv');
    table.string('npvcfanqck');
    table.bigInteger('qrfucmsggq');
    table.timestamp('xldkydemdu');
    table.integer('xjyorzrqle');
    table.text('ohjjjkwjzq');
  });
  await knex.schema.alterTable('zdkzycdcue', function(table) {
    table.boolean('prrtbkrkqu');
    table.boolean('zmhzqntcgo');
    table.string('jefoojkcdt');
  });
  await knex.schema.alterTable('ejlefeaosx', function(table) {
    table.json('mhvpdsenze');
    table.boolean('hbawyubewp');
    table.text('lluwqoytkh');
    table.timestamp('fkaafvodpo');
    table.integer('zuthellbro');
    table.bigInteger('osnyblolhf');
  });
  await knex.schema.alterTable('pxxpszvzpp', function(table) {
    table.string('htwzxrknlz');
    table.integer('zrofupaczq');
    table.bigInteger('gtqimvwycj');
    table.integer('izgeqdqytv');
  });
  await knex.schema.alterTable('gpsaxhaqgk', function(table) {
    table.json('mmqeerxzut');
    table.timestamp('cfjmooffdi');
    table.json('kxsquryukf');
    table.json('tsmyjnoivi');
  });
  await knex.schema.alterTable('jzdwygcipr', function(table) {
    table.bigInteger('wuwwtevseq');
    table.bigInteger('hquiwevuwt');
    table.integer('orumcpvyyk');
    table.boolean('pyuciqsdqd');
    table.integer('gajleuysut');
    table.timestamp('knbfxopihm');
  });
  await knex.schema.alterTable('nridqlzfyq', function(table) {
    table.timestamp('trwexbbmlt');
    table.string('npyyfreoqu');
    table.bigInteger('dyvtdtliap');
    table.float('ibjueegdkz');
    table.json('topuuezlgk');
    table.boolean('ecbybrhozc');
    table.json('epkfeqrhhn');
    table.boolean('joazamvpre');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};