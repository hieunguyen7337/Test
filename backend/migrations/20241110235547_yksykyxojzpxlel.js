'use strict';

/**
 * Migration: 20241110235547_yksykyxojzpxlel
 * Description: Remove column
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('xixygimxvb', function(table) {
    table.text('dzwfgnlcey');
    table.json('dgywupqrrj');
    table.string('bluhmegugo');
    table.integer('eriuqayptg');
    table.boolean('izicrvqill');
    table.text('kgpqmyzvfc');
  });
  await knex.schema.alterTable('nwppnpuqzc', function(table) {
    table.json('lgqcrhfokb');
    table.bigInteger('otnghuaepf');
    table.bigInteger('llyazhqqpo');
    table.text('kdnjzzqexe');
    table.json('xnnxzzwbiu');
    table.boolean('xvniezrlcl');
    table.integer('rcmwaeujtn');
    table.string('ucmqtihsrz');
  });
  await knex.schema.alterTable('znomisvkxz', function(table) {
    table.boolean('nixpfyyman');
    table.timestamp('dphtfkywai');
    table.string('paqobgdmmi');
    table.boolean('mplwimseks');
    table.json('cfutjnqvke');
    table.boolean('arudawkyvs');
    table.json('gupfjvriyb');
    table.timestamp('wixatzdgud');
    table.string('ccmnezwomx');
  });
  await knex.schema.alterTable('diutuncizp', function(table) {
    table.text('ratbnirxrl');
    table.integer('yivsonkovk');
    table.boolean('obavmtfvan');
    table.boolean('lidtvgdbrv');
    table.string('oxlzvzmbjy');
    table.integer('wddmcebaea');
    table.string('bhoshicycv');
    table.text('cmlihtxzev');
  });
  await knex.schema.alterTable('pglpsivehb', function(table) {
    table.timestamp('uwtvvjujjq');
    table.text('ifteonpmvy');
    table.integer('hyxgqqsdug');
    table.text('wlxrgoicfx');
  });
  await knex.schema.alterTable('rwhqmmlldu', function(table) {
    table.integer('ugnmvuavpi');
    table.string('dyxvoalirq');
    table.bigInteger('kkkxumktjl');
    table.integer('mihkvycoxj');
    table.integer('vfathytrkh');
    table.boolean('mkxhklctwa');
    table.float('mmniullaxt');
    table.bigInteger('ioixaoyiim');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};