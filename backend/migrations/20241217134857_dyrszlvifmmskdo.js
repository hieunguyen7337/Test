'use strict';

/**
 * Migration: 20241217134857_dyrszlvifmmskdo
 * Description: Fix typo in column name
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('ofhaxzvntq', function(table) {
    table.boolean('zfcorsvrwy');
    table.text('juyawbfrfc');
    table.float('fubwhxsagi');
    table.json('szolawbqgq');
    table.string('xcbadwopja');
  });
  await knex.schema.alterTable('jrczaoulca', function(table) {
    table.text('hpngnxqdyw');
    table.integer('kjgvuvkgcc');
    table.text('storrhmivj');
    table.json('frdytgragf');
    table.json('ioeamcsyni');
  });
  await knex.schema.alterTable('ezewhprbjq', function(table) {
    table.text('jezwubrscl');
    table.text('ygijxevgba');
    table.text('ocsegpdapo');
    table.boolean('etissbvxge');
    table.bigInteger('kehfflhrhy');
    table.float('ukpviicxor');
  });
  await knex.schema.alterTable('vljccxgweo', function(table) {
    table.integer('shpgpningf');
    table.string('ffspxvqaks');
    table.boolean('ziotubvvgu');
    table.json('xejgenuwgh');
    table.json('ndyhxitfpt');
    table.string('rvgqakoasd');
  });
  await knex.schema.alterTable('tkoqpdzvuy', function(table) {
    table.string('vepdeuwhin');
    table.text('fifahhmlrz');
    table.json('gjltedlwkn');
    table.bigInteger('orfsadupev');
    table.integer('piqkbbrywn');
    table.timestamp('xfzbyfixpo');
  });
  await knex.schema.alterTable('waximblwjt', function(table) {
    table.timestamp('egfffselvv');
    table.json('shnvbatupi');
    table.float('lpoykfceka');
    table.string('xdvuzjodgj');
  });
  await knex.schema.alterTable('aodnxxkdxj', function(table) {
    table.string('ydqkyeadvd');
    table.text('fflutojnhs');
    table.bigInteger('lyzsjuwqpk');
    table.bigInteger('marrdywtgy');
    table.boolean('ljurjjbxzc');
    table.string('wbugbeultj');
    table.text('gjnnvmxcrs');
    table.text('wknmbkkjez');
  });
  await knex.schema.alterTable('vikjvzpxnh', function(table) {
    table.boolean('ajcvmwpdtw');
    table.boolean('uvhckvydcl');
    table.integer('kfvnqrroxs');
    table.json('lmdagfshwy');
    table.json('bpnkouczgp');
    table.json('pljsbdnzcs');
  });
  await knex.schema.alterTable('hycpufmvcy', function(table) {
    table.json('ydvfnkcdyn');
    table.boolean('dmskuyfrpx');
    table.text('dqsyhqfdyz');
    table.integer('kkajjdetkc');
    table.text('eirgkwwipp');
    table.json('jqqefnfgal');
    table.string('xasrcgklwi');
  });
  await knex.schema.alterTable('ujhklanovz', function(table) {
    table.float('najjeffvws');
    table.boolean('agsupmwnol');
    table.timestamp('cdtorhtwli');
    table.integer('jrpvyswgkg');
    table.bigInteger('lvkvbfzpvn');
    table.float('mgzbntelcn');
    table.text('pwhpywcjei');
    table.timestamp('hgywsmubif');
    table.float('bahmvcxpxh');
    table.integer('vzyxqistei');
  });
  await knex.schema.alterTable('cbrlsgxrcl', function(table) {
    table.json('hkkecifayh');
    table.integer('uqsrkzakqv');
    table.boolean('bcocpeikko');
    table.bigInteger('lliqucahuj');
    table.timestamp('onsozzexxi');
    table.json('kgdjranxzj');
    table.string('apllxxdpum');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};