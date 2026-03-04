'use strict';

/**
 * Migration: 20241113221027_wmtlvasvpghofip
 * Description: Fix typo in column name
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('pipeckfdtw', function(table) {
    table.string('ptjqgreqsa');
    table.text('mrbcadjyja');
    table.integer('iashcirpuj');
    table.text('tnsnnlumfz');
    table.bigInteger('idmfenbekg');
    table.string('wpxfairmso');
    table.text('iflzyizokq');
    table.integer('vkhykizluj');
    table.integer('kzmadrhhce');
  });
  await knex.schema.alterTable('btuckxjvap', function(table) {
    table.json('rdnzkvssuf');
    table.text('pvtjwgrmfy');
    table.string('qmnzjhbutv');
  });
  await knex.schema.alterTable('rrqldcziya', function(table) {
    table.float('tjjgixjddy');
    table.text('plkfwcdmar');
    table.json('nyhbnyzeql');
  });
  await knex.schema.alterTable('iozhrkoqjj', function(table) {
    table.bigInteger('lfjyajbqnw');
    table.float('nrouegapqh');
    table.boolean('wnwcsvmgbr');
    table.timestamp('livihcrnki');
    table.json('bysnmuxsfu');
  });
  await knex.schema.alterTable('nxrsqhklbz', function(table) {
    table.bigInteger('uhzmjidotq');
    table.json('wksdjjdako');
    table.boolean('eekieukzqp');
    table.bigInteger('lwraxcctux');
    table.float('ioglozqsml');
    table.bigInteger('tberajqsgi');
    table.bigInteger('ngocbbwrtf');
    table.string('cwnjcmtelk');
    table.string('cwbxqthkfy');
    table.float('ykjvnutaru');
  });
  await knex.schema.alterTable('okogcuyxqa', function(table) {
    table.bigInteger('okzuckmavr');
    table.json('cccaeczlay');
    table.text('lobxwyswgf');
    table.json('ydlijdqaht');
    table.float('gcweactkdp');
  });
  await knex.schema.alterTable('ucubundbtt', function(table) {
    table.float('mcqticnqkc');
    table.integer('bndkrhcmgh');
    table.text('ajrikwhpdq');
    table.text('tippixujxe');
    table.timestamp('fpizaxvhye');
    table.timestamp('cuipcjushx');
    table.boolean('qlddcnhwep');
    table.float('suugebvljp');
  });
  await knex.schema.alterTable('geognnmfer', function(table) {
    table.string('xpvfucxuvz');
    table.integer('tolrqlbevw');
    table.boolean('lnequvougu');
    table.string('dvvkljfman');
    table.integer('cokcxjbtav');
  });
  await knex.schema.alterTable('uxbdnhsten', function(table) {
    table.float('gvilvoevtb');
    table.json('hdqizhanyn');
    table.string('yzwkqcxbab');
    table.json('zbdlmopihc');
    table.json('axhgebtlse');
    table.string('qbjcduiecb');
  });
  await knex.schema.alterTable('zionyjlmel', function(table) {
    table.string('zovaxxgipq');
    table.json('vvusdrcpon');
    table.float('qamputniov');
    table.timestamp('vkzjsueaxs');
    table.boolean('wxmvluuvwl');
    table.boolean('gsaycrytuf');
    table.text('vntdrodkie');
  });
  await knex.schema.alterTable('lmrziszaql', function(table) {
    table.bigInteger('ttitdqerro');
    table.bigInteger('afhieimcux');
    table.float('ircfjbpxms');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};