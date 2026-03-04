'use strict';

/**
 * Migration: 20240711142629_myuktsgiqdfzpkh
 * Description: Remove column
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('gnednjlpee', function(table) {
    table.float('fgijlpiqmo');
    table.string('pyhvtgcinj');
    table.text('crhctnuhmp');
    table.integer('givmwpmwht');
    table.text('baxkiblhps');
  });
  await knex.schema.alterTable('orbvjqxpky', function(table) {
    table.timestamp('psvtrvzwcn');
    table.string('pfkwysreuv');
    table.json('fsmmjucrze');
    table.json('didnmzjlcw');
    table.bigInteger('dfmoaijqul');
    table.float('tvurbnqaip');
    table.string('ohpspyacsa');
    table.string('cbztybieos');
    table.timestamp('pxalnxegll');
  });
  await knex.schema.alterTable('abyjpmerhm', function(table) {
    table.timestamp('tbyscllngc');
    table.string('anprmlytdu');
    table.integer('opgxwtgcgb');
    table.integer('ypjoteqidx');
    table.text('zsmeaafdgi');
  });
  await knex.schema.alterTable('hpfarltdle', function(table) {
    table.json('prylnelxiu');
    table.string('wdirmpmjzq');
    table.boolean('xdcgzpvpkl');
  });
  await knex.schema.alterTable('cubepsknfq', function(table) {
    table.timestamp('juczwiqajs');
    table.timestamp('sdxdhuwdih');
    table.timestamp('zdiqficgps');
    table.text('gqfpphbgtq');
    table.timestamp('smcmkirvpy');
    table.boolean('erlfivufrj');
    table.json('hkhxkszpeq');
    table.text('egeemmhxof');
    table.json('msfktkfvzw');
  });
  await knex.schema.alterTable('xjmnuyhotz', function(table) {
    table.float('sjkemkzuil');
    table.timestamp('cvhitqznht');
    table.float('zbignqquso');
    table.boolean('svxpjhuivz');
    table.json('gdcsazswed');
  });
  await knex.schema.alterTable('pvluhyjwub', function(table) {
    table.integer('pniuykndru');
    table.text('mwnbpiguer');
    table.string('ymgzsvwlwv');
    table.integer('jopkbtvagg');
    table.bigInteger('cpfehvdxga');
    table.timestamp('lvxrdaoveu');
    table.float('btawakqnca');
    table.json('sbztormwne');
    table.float('ocikbdrcef');
  });
  await knex.schema.alterTable('uhxopmzezz', function(table) {
    table.bigInteger('sbtocduwix');
    table.json('dknfnlbiic');
    table.text('awksqrynuw');
    table.string('cdkxabbuvk');
    table.bigInteger('dbdpuwlzep');
    table.string('hykwqiokhq');
    table.integer('xiwpwzudgb');
    table.integer('rsrelwwaoo');
    table.timestamp('gzdlbztwei');
    table.float('ndhkpuclct');
  });
  await knex.schema.alterTable('xfyalfmccv', function(table) {
    table.string('fzlzdjkgii');
    table.json('zywpfpnsew');
    table.boolean('dybbttkumu');
    table.bigInteger('xcgadjjwyw');
    table.integer('fartxoyvyx');
    table.text('zzxmcutizf');
  });
  await knex.schema.alterTable('pobdduzjww', function(table) {
    table.text('wospwjfaau');
    table.integer('blnoykrmhr');
    table.text('wtectyeegs');
    table.timestamp('etxxnarvri');
    table.float('vtrhllekfu');
    table.integer('hzbjuaezfu');
  });
  await knex.schema.alterTable('ojxatzdulh', function(table) {
    table.string('ehnptuqckd');
    table.json('xlhscozlst');
    table.json('kwhhswgpsw');
    table.json('cxjxxvoibw');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};