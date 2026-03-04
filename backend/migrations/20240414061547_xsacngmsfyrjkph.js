'use strict';

/**
 * Migration: 20240414061547_xsacngmsfyrjkph
 * Description: Undo previous migration
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('gajnwwesni', function(table) {
    table.float('nmgdbfmtls');
    table.text('mhthnhizrc');
    table.integer('mmrpyppnmt');
    table.integer('oytnvfqiqz');
    table.float('cqhvlphmyk');
    table.string('uldwzhqwda');
    table.bigInteger('mtsbcgjhkt');
    table.text('eppsjdpdop');
    table.json('jjubiidiua');
    table.integer('yswsswhbhh');
  });
  await knex.schema.alterTable('pjoybhxkqs', function(table) {
    table.float('zdaeqzntaq');
    table.string('rdjvzsfvnj');
    table.timestamp('potipfqwhl');
  });
  await knex.schema.alterTable('hfsvoagzls', function(table) {
    table.timestamp('wsmkbomoat');
    table.integer('izlkonbwdk');
    table.text('vxxvuoiwxi');
    table.boolean('cvvkqhhini');
    table.json('ogutuoanmt');
    table.json('loegbacojs');
    table.text('ehhhqicckn');
    table.text('ukslikqnis');
  });
  await knex.schema.alterTable('tgeuanplkn', function(table) {
    table.text('rqkhzozkcz');
    table.json('yjpovklvkn');
    table.text('gqqkiuqryo');
    table.timestamp('lagnkqbeeg');
    table.bigInteger('adxxuhrjuq');
    table.float('omcgkqedwx');
    table.text('kepedfmnfj');
    table.boolean('oxzmljlrvn');
  });
  await knex.schema.alterTable('vvptrxzemj', function(table) {
    table.timestamp('djttfrfazt');
    table.json('eafagsqwhb');
    table.text('dumarnhmpb');
    table.json('tfupclrycp');
    table.boolean('hsovgvqvkc');
  });
  await knex.schema.alterTable('nihzeybtxq', function(table) {
    table.float('aavepvylvp');
    table.boolean('rujjzuenzl');
    table.timestamp('jjyuuczfbx');
    table.bigInteger('pkeqbpzsaj');
    table.timestamp('ujbzuhffwo');
    table.bigInteger('mczvhxwkof');
    table.boolean('qrvxpzritq');
  });
  await knex.schema.alterTable('igobowkhwh', function(table) {
    table.timestamp('shcnnmguke');
    table.integer('vlwstisoiy');
    table.float('daajgdblic');
    table.json('avtyvxeebl');
    table.bigInteger('rmuibuoyhl');
    table.integer('ajatuemtwc');
    table.json('efzydpcbqt');
  });
  await knex.schema.alterTable('raolxtkaxt', function(table) {
    table.bigInteger('dxdxuowmnk');
    table.boolean('jutwxotrxv');
    table.string('omsdlkthiz');
  });
  await knex.schema.alterTable('mzumwuxztu', function(table) {
    table.text('bwztwvzxja');
    table.json('qcqvvyelxf');
    table.float('cauidwbmcc');
    table.json('pwtkiafvfq');
    table.string('appqpcmgtn');
    table.boolean('bwzakxsheq');
  });
  await knex.schema.alterTable('tmyetzxolo', function(table) {
    table.boolean('hpevqjefxc');
    table.text('qyhmwhvlfe');
    table.bigInteger('yrwhcovlml');
    table.text('cckjuqtkdh');
    table.boolean('fkukpwccif');
    table.timestamp('hjqlvnsgoy');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};