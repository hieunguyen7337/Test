'use strict';

/**
 * Migration: 20240919192634_csmijdylatydikx
 * Description: Create table
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('dcvklhylkc', function(table) {
    table.text('eadymuuxze');
    table.text('dievtzipmt');
    table.float('isoijfeimn');
    table.bigInteger('bvxehdawes');
    table.timestamp('irhiztrqve');
    table.json('jbfbnzlcuz');
    table.boolean('ugfewipanc');
    table.bigInteger('zsjivdxrtk');
    table.bigInteger('lccttylate');
  });
  await knex.schema.alterTable('ytawdgfqdi', function(table) {
    table.text('euofipxjdr');
    table.text('jmcimzauur');
    table.text('goaerqling');
  });
  await knex.schema.alterTable('zoqyiugfnv', function(table) {
    table.timestamp('rrxxoiyawa');
    table.string('ahcxqhejnt');
    table.float('kijnzplfkp');
    table.json('lcdrhqyzhw');
    table.bigInteger('jcqpmwcsaq');
    table.float('dtlhzmkvul');
    table.string('zddwabbaep');
    table.text('kfakmkwuxu');
    table.string('vkweaeeepr');
    table.bigInteger('mvovckhuba');
  });
  await knex.schema.alterTable('cveookpqut', function(table) {
    table.bigInteger('vbxwxsdouy');
    table.string('rnstwxkjem');
    table.integer('kfgoowhomc');
    table.text('paigulgosb');
    table.boolean('khfjuxjurl');
    table.text('ryidyyvtqt');
    table.text('sfpgkimwrn');
    table.integer('bokopbmunf');
    table.integer('hixoydecsi');
  });
  await knex.schema.alterTable('gyskrmoeae', function(table) {
    table.float('badguwctwj');
    table.text('dwkitnfufk');
    table.text('boljwycwmw');
    table.json('hcopjnagpl');
    table.json('iosnlalnwk');
    table.string('xdtgraojlw');
    table.bigInteger('ihrspjevrs');
    table.timestamp('tzluwnwaxa');
  });
  await knex.schema.alterTable('uqsizagytr', function(table) {
    table.timestamp('xqlcxcufry');
    table.integer('ovzwvqsnms');
    table.float('qayzdrigqy');
    table.json('llrrscarkk');
    table.json('nnougmaxyd');
    table.json('fwzkyiaazz');
    table.integer('vnwzrhyrxj');
    table.integer('sddmvstazs');
  });
  await knex.schema.alterTable('jwhiokvwit', function(table) {
    table.text('jebhnmqgkg');
    table.text('vmbijppavo');
    table.json('wishnkazkn');
    table.float('emjinhoouq');
    table.boolean('bppurjarqm');
    table.timestamp('dypazgazwx');
    table.integer('khzvaejopr');
  });
  await knex.schema.alterTable('zbdxyrfret', function(table) {
    table.boolean('wvnwngpadg');
    table.json('euwanbfxjb');
    table.timestamp('hzprjebezy');
    table.json('oolgqcjsar');
  });
  await knex.schema.alterTable('erkosvdgwx', function(table) {
    table.float('gouqkebunb');
    table.float('ulwccyfvjn');
    table.text('uebyzpnnyq');
  });
  await knex.schema.alterTable('frmnckfkbi', function(table) {
    table.json('doaphwmvyc');
    table.string('mvifukjlql');
    table.bigInteger('fknzyhyged');
    table.json('ssewcvdeeh');
    table.string('hjnjhjeyvh');
    table.bigInteger('jgqkwugrfm');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};