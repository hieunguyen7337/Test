'use strict';

/**
 * Migration: 20240920060252_punwdyfbqglzoqi
 * Description: Add index
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('mfupfwuzus', function(table) {
    table.float('qspilqccnt');
    table.integer('rzdvumjinj');
    table.bigInteger('swbkvddemp');
  });
  await knex.schema.alterTable('lecvgqawoe', function(table) {
    table.text('tymikrwxsj');
    table.json('xrnejsqfcl');
    table.integer('lgpxfjphfs');
    table.float('yrphusporg');
  });
  await knex.schema.alterTable('afdaplyrnf', function(table) {
    table.string('qhejtizbsj');
    table.json('rqtwsgasxg');
    table.text('wmyfhkvoiv');
    table.integer('yvodwbkope');
    table.boolean('fhmndhtykw');
    table.timestamp('ndkwzakbos');
    table.float('ofnnlathju');
    table.json('nbwlyfchme');
  });
  await knex.schema.alterTable('gnvqnwwnjt', function(table) {
    table.integer('dewcuosruc');
    table.float('bjaqohmesq');
    table.bigInteger('qfwqmidjmo');
    table.integer('gogczuelyr');
    table.boolean('aoswzkewxk');
  });
  await knex.schema.alterTable('hjzpuhpnop', function(table) {
    table.integer('ckphhzzbtm');
    table.timestamp('yeosktfmky');
    table.json('aoivjyuhyj');
    table.boolean('dgulcdytmt');
    table.boolean('qxrpsjtjzn');
    table.string('fhfttsawys');
    table.float('yrivjpyvds');
    table.text('kdddolholp');
    table.float('uoqqvyjlww');
    table.text('wilogvscio');
  });
  await knex.schema.alterTable('cqigikoovs', function(table) {
    table.text('bxvigdpzyn');
    table.integer('yjrqyncwho');
    table.boolean('rsixyrlmsw');
    table.json('qjvgpgcffz');
    table.timestamp('fqocrppsxo');
    table.json('fqnnlxjcnd');
    table.timestamp('khxbteddsr');
    table.integer('cwbmrfmhxb');
  });
  await knex.schema.alterTable('bttbwnpisi', function(table) {
    table.json('nfaovunczb');
    table.boolean('whdbuixaub');
    table.integer('rbhwstxgbq');
    table.bigInteger('qmhcicucuy');
    table.float('gkcklhrcaf');
    table.bigInteger('tkqgeqlfyj');
    table.string('zwxnjojzut');
  });
  await knex.schema.alterTable('daygefcuzy', function(table) {
    table.timestamp('quzyfxtifw');
    table.float('bggyzqxuoy');
    table.bigInteger('fyktptiijf');
    table.boolean('msleidgewp');
    table.float('zgrrecitev');
    table.float('ousqxdwbwz');
    table.bigInteger('cqvaioqnzu');
    table.bigInteger('vsvvpdehfk');
    table.integer('amxiwylaxr');
  });
  await knex.schema.alterTable('jxcxpnazdu', function(table) {
    table.text('vjqncpykuu');
    table.string('rvdyoffkdo');
    table.json('hczamqdxqj');
    table.bigInteger('irbiedvmjp');
    table.text('uhvhahlyjd');
    table.bigInteger('wtwivieikf');
    table.boolean('aczxljakbb');
    table.string('rjqzlaxnyn');
    table.string('lonzelqjuv');
    table.string('uwnkrbiomx');
  });
  await knex.schema.alterTable('dfqdeavrte', function(table) {
    table.text('xpvmzypdty');
    table.boolean('synaacavcm');
    table.bigInteger('vrfadhzbql');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};