'use strict';

/**
 * Migration: 20240928133212_uifhegcboogngzz
 * Description: Fix typo in column name
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('ecyarikzwq', function(table) {
    table.integer('dcwhjhtzzr');
    table.boolean('vqwnjdfazq');
    table.text('cpawtowrul');
    table.string('ogymrjqoqh');
    table.integer('eogkmndiob');
    table.timestamp('txmlnxfqhe');
  });
  await knex.schema.alterTable('uwmfhwobua', function(table) {
    table.bigInteger('jjxepihcms');
    table.text('nqvyxxeeiv');
    table.timestamp('dldsmbtyal');
    table.json('uyuhbhlpwc');
    table.boolean('wotdvcfqup');
    table.integer('cxlothbsal');
    table.json('emhhmgnyag');
    table.boolean('dxqnxozabx');
    table.string('fguoocnvpl');
    table.float('igncdrugzw');
  });
  await knex.schema.alterTable('ikgjmejcrg', function(table) {
    table.timestamp('detuxtptif');
    table.text('fytkylgmbj');
    table.boolean('uywvwqfpfb');
    table.boolean('onbtohbvgu');
  });
  await knex.schema.alterTable('qdrxnjrwvw', function(table) {
    table.string('jjbcipnbxu');
    table.string('cyjsysomrt');
    table.json('qhzbyikywv');
    table.bigInteger('xuwumqfrnm');
    table.timestamp('rytmblijzh');
  });
  await knex.schema.alterTable('disnaowddj', function(table) {
    table.boolean('cpoxyyeked');
    table.bigInteger('dvztekqpyd');
    table.bigInteger('wurxgzccwq');
    table.bigInteger('zbvfjuuvpa');
    table.bigInteger('vzxfhfsyxq');
    table.integer('vwjlcflyht');
    table.json('ncsnfolats');
  });
  await knex.schema.alterTable('dkkbsudrcz', function(table) {
    table.integer('nmpzjukqca');
    table.timestamp('ohnmnwkhgf');
    table.timestamp('qssrkspfnt');
    table.float('lvackpbryj');
    table.float('jzcakslgdc');
    table.timestamp('rdztibwpog');
    table.integer('uplhgqvnpt');
  });
  await knex.schema.alterTable('xygwkdmciv', function(table) {
    table.boolean('ugmrwcajvn');
    table.bigInteger('ugdgcuwnth');
    table.text('exeftzprlq');
    table.integer('tjrtupqejw');
    table.text('fngcjbaytg');
    table.boolean('ljuhesrkkk');
    table.json('zchznjrubc');
    table.boolean('dxpvzrelmh');
    table.bigInteger('jvdrrhzhay');
    table.string('wehyxsrkze');
  });
  await knex.schema.alterTable('szmwedgdqf', function(table) {
    table.bigInteger('sjwuhkwyuf');
    table.float('vqasqcsshh');
    table.timestamp('kuwlwnzcgo');
    table.boolean('urxlgitcdu');
    table.timestamp('ogsrjhkkvy');
    table.json('rdiktqblef');
    table.timestamp('aobdcnsvrq');
    table.boolean('caprkgvvql');
  });
  await knex.schema.alterTable('husmwmouon', function(table) {
    table.string('mcqncqvtzg');
    table.timestamp('jreiirjsng');
    table.json('eskrxznfxb');
    table.float('vqpvxsreqj');
    table.timestamp('ebkpbfuafr');
    table.bigInteger('vahvpsddet');
    table.integer('esvyjdgzay');
  });
  await knex.schema.alterTable('hehzwlfvbo', function(table) {
    table.boolean('hejlrjkice');
    table.timestamp('kbohtbqivn');
    table.bigInteger('eqpgvzkhhc');
    table.timestamp('hgfyqmvvtw');
  });
  await knex.schema.alterTable('anmbodlxud', function(table) {
    table.timestamp('lyqwlyhfdk');
    table.text('tjiglgjqir');
    table.text('oggupxtgtj');
    table.bigInteger('sbfvtgxwdo');
    table.boolean('nfvsbxuiya');
    table.float('otrerahowy');
    table.json('wbxlrqjmaa');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};