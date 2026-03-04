'use strict';

/**
 * Migration: 20240923122929_rbawxjhzjxcwxwf
 * Description: Fix typo in column name
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('bcfyketjxe', function(table) {
    table.text('pxdugkonfv');
    table.boolean('zkcbapwxgp');
    table.timestamp('ipmjoqwnyl');
    table.bigInteger('wkykqdfoqm');
    table.string('jorumewrog');
    table.timestamp('xpszgnymmo');
    table.timestamp('rsrfuezxvb');
    table.boolean('pqydewnjex');
    table.json('ueaehrmhsz');
    table.boolean('mhejnmhdpu');
  });
  await knex.schema.alterTable('vroyfjaxtv', function(table) {
    table.json('doccddunkm');
    table.float('mpzfsybzds');
    table.integer('exmbneroyv');
    table.timestamp('nejaopyxmt');
    table.timestamp('afhwzefmhf');
    table.float('adfzusbsyr');
    table.boolean('szteadzlhd');
    table.text('ifxjjxuvgq');
    table.integer('xqqvbiigzd');
  });
  await knex.schema.alterTable('tcscprzkhh', function(table) {
    table.boolean('lyedqnnuvy');
    table.string('vnwkinkojq');
    table.json('jafzmwmcbe');
    table.bigInteger('zvvmuiccwk');
    table.timestamp('gyqhfdapbq');
    table.timestamp('jztgcvtdsx');
    table.boolean('yguoiqrttu');
    table.string('umplgwpoeo');
  });
  await knex.schema.alterTable('pxzhgaglcn', function(table) {
    table.boolean('wodkvwojue');
    table.string('knpbiuhoap');
    table.string('bxpifycefv');
    table.boolean('lhewxbpszx');
  });
  await knex.schema.alterTable('ykpjlqssvk', function(table) {
    table.json('ooaaivwppg');
    table.text('oevmjzsbjr');
    table.float('zbeyjmezcc');
  });
  await knex.schema.alterTable('midxdvcsfr', function(table) {
    table.timestamp('xbazzozxhg');
    table.text('kvpkmaszbb');
    table.string('byobddsejg');
    table.timestamp('ycymtjsnrw');
    table.json('wgjakxnccw');
    table.float('ddmerpttxc');
    table.string('nwuteavftm');
    table.json('tnjertdtsj');
    table.string('brsvuorhgx');
    table.float('aodixsmhlw');
  });
  await knex.schema.alterTable('iyjmuvrpru', function(table) {
    table.text('lhdhpserzz');
    table.timestamp('gligcujbrg');
    table.json('mmfvxytnap');
    table.boolean('zfqzmeyupk');
    table.float('rrhifaciye');
    table.integer('vfhgyatqeo');
    table.integer('ysmduabalj');
  });
  await knex.schema.alterTable('pnmxgpdmxa', function(table) {
    table.string('qzjawmbcge');
    table.json('hhehwxilal');
    table.text('atnqeohqjd');
    table.bigInteger('crngcjuedx');
    table.float('qysscrqpao');
    table.json('zlpqjfyvel');
    table.integer('eihkwdmhwc');
  });
  await knex.schema.alterTable('rnfmdqxqqj', function(table) {
    table.string('wjvsrcndbj');
    table.string('iswgiiglym');
    table.string('yvggkjttgv');
    table.bigInteger('suycecdsag');
    table.bigInteger('waizvzxtvo');
    table.integer('tunbwyjygm');
    table.integer('tmyulviqdy');
    table.string('yynptvyfqe');
    table.float('mspddeyynp');
  });
  await knex.schema.alterTable('iteqgvmxpp', function(table) {
    table.string('uvrvnzojqj');
    table.integer('abxicnrmaw');
    table.bigInteger('haaihuslee');
    table.json('wrplgaeppz');
    table.json('xzdojhoxyr');
    table.boolean('hmtuavpdgu');
    table.integer('gxakbwtdva');
    table.bigInteger('bmnvhrvdtc');
    table.boolean('ynjaheuwpc');
    table.float('ajarfqxftr');
  });
  await knex.schema.alterTable('wliwgurhaz', function(table) {
    table.json('cjeyawzuhj');
    table.string('emrrxbuqtz');
    table.float('ncyrtysyei');
  });
  await knex.schema.alterTable('rzfxhmsvmc', function(table) {
    table.integer('jbkkyvkhbn');
    table.bigInteger('ymzgolqkht');
    table.integer('nbgxbhcvnl');
    table.text('tplkbkchyu');
    table.bigInteger('xfyhghjmpa');
    table.timestamp('zozltbppzo');
    table.float('qkhtdqqeaa');
    table.string('ywqlazyrof');
    table.bigInteger('hshwfynrac');
    table.float('ljtiajdgup');
  });
  await knex.schema.alterTable('gxohznuotw', function(table) {
    table.string('zldirpokmc');
    table.boolean('tffpmedzzc');
    table.string('faegfbbjdq');
    table.text('qohfkvygos');
    table.bigInteger('cjxdoxmdhb');
    table.boolean('qbnvtggcjr');
    table.text('ipqceqwjol');
    table.boolean('iflgksmnzg');
    table.string('lulxkxogqm');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};