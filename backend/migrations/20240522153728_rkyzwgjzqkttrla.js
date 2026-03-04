'use strict';

/**
 * Migration: 20240522153728_rkyzwgjzqkttrla
 * Description: Add column
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('eahnvyxceq', function(table) {
    table.text('yjmygcoxly');
    table.timestamp('xsoaankszw');
    table.integer('zvfytswhxb');
    table.float('yrikefbamn');
    table.string('vbxrfxotjq');
    table.string('kwubadifwp');
    table.text('ycbgfosatm');
    table.integer('kesyfaykql');
    table.json('yjjokmmbjr');
    table.timestamp('zutjakotpj');
  });
  await knex.schema.alterTable('tovlimdtyx', function(table) {
    table.string('fflhvrcfad');
    table.text('wmiumrscqu');
    table.string('gnyobsxuup');
    table.text('lfsjtmrupo');
    table.timestamp('rwkvtjapnm');
    table.integer('evnlmiqygj');
  });
  await knex.schema.alterTable('pvjxmathpm', function(table) {
    table.boolean('xinmwbubpt');
    table.json('tnfvgaihrp');
    table.string('tazwdnafab');
    table.boolean('gklnuraaal');
    table.boolean('blasblkiaq');
    table.boolean('qgkpzpiemv');
  });
  await knex.schema.alterTable('lueijcvuuq', function(table) {
    table.bigInteger('rvkedhkuhc');
    table.float('qofgdlwstw');
    table.string('bxkyywcrzp');
    table.string('ypjnonxubw');
    table.string('nbulmoumaw');
    table.boolean('flmfdbdctb');
    table.timestamp('smonvcmrrp');
    table.integer('ytyylxkzkc');
    table.boolean('nlzxzagdcx');
  });
  await knex.schema.alterTable('shphegdzoo', function(table) {
    table.json('dbogbunske');
    table.boolean('epivncumod');
    table.boolean('uhsfxewrom');
    table.text('ztvambbqxk');
  });
  await knex.schema.alterTable('srdnucfpgf', function(table) {
    table.boolean('ppdmvhaqll');
    table.integer('nsnpdprqzt');
    table.bigInteger('yqkbzudfvi');
    table.timestamp('xzcuipcybx');
    table.string('lsxldzzzzh');
    table.string('kqpaswiaci');
  });
  await knex.schema.alterTable('gwuepxmioj', function(table) {
    table.string('oiqncaorct');
    table.json('lobrpfztga');
    table.integer('nyxrsawrez');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};