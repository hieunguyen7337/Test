'use strict';

/**
 * Migration: 20240612133128_ycpoxshdmzpglqa
 * Description: Add column
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('kkavpterkq', function(table) {
    table.string('jjfdijogak');
    table.boolean('ewnsgcsgug');
    table.bigInteger('ycotcsvtcu');
  });
  await knex.schema.alterTable('afytyuoila', function(table) {
    table.integer('nljnxxpmuh');
    table.json('fjafghwtiw');
    table.boolean('ojlwdjudhd');
  });
  await knex.schema.alterTable('bcbrlmfvlr', function(table) {
    table.bigInteger('whjrlemzlm');
    table.timestamp('dsixmikuxj');
    table.integer('itzsmpcoai');
    table.json('tzlzjrolsl');
    table.timestamp('kpaxutgjjl');
    table.integer('xheicjgtxx');
    table.string('bmwqfmyxpu');
  });
  await knex.schema.alterTable('cchlzswcso', function(table) {
    table.boolean('ecqqosunma');
    table.timestamp('haocdwgqec');
    table.integer('uvvdfzuxzf');
  });
  await knex.schema.alterTable('girstirndo', function(table) {
    table.bigInteger('omoevtalsp');
    table.string('yljhdjnjpb');
    table.integer('daivipluis');
  });
  await knex.schema.alterTable('rrthhyvptz', function(table) {
    table.boolean('lovvguelza');
    table.json('sonyfnioox');
    table.string('rivhmbwdlb');
    table.integer('vjctfulibm');
    table.json('rxeydvokhg');
    table.string('ulpogvqfuo');
    table.string('qcnzmtvfmi');
    table.integer('rnlrryzfed');
    table.boolean('iyoytemzkd');
  });
  await knex.schema.alterTable('yodwxpbhui', function(table) {
    table.string('iqamnvgrle');
    table.bigInteger('wfitsgdyrf');
    table.string('nqckinetzf');
    table.boolean('ionnolufmx');
    table.json('jsbgwhlzqi');
    table.integer('ullihzgabb');
    table.boolean('zpobturxiv');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};