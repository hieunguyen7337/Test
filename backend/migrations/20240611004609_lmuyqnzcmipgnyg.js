'use strict';

/**
 * Migration: 20240611004609_lmuyqnzcmipgnyg
 * Description: Drop table
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('ijrckdrakk', function(table) {
    table.boolean('kltnfwmlrs');
    table.timestamp('adddnsjqnu');
    table.integer('dgyhespwbo');
    table.integer('zgkjwaulby');
    table.integer('ydjouxqpsq');
  });
  await knex.schema.alterTable('churupzeui', function(table) {
    table.boolean('omgoybiesj');
    table.float('jkyrnqsgnx');
    table.float('ahjinqzpjl');
    table.bigInteger('ummjbuirni');
    table.float('hpccxuzyrk');
    table.float('zpoxnqkbzo');
    table.boolean('opuhgpzthx');
    table.string('yrrbwjsmgd');
    table.timestamp('dmqkkafdyq');
    table.integer('frgoqsjqvb');
  });
  await knex.schema.alterTable('evhfefiyqi', function(table) {
    table.text('egszbsutgn');
    table.timestamp('nkncnwuzov');
    table.json('tbcxnwosvc');
    table.json('pzdlymzazc');
  });
  await knex.schema.alterTable('xpnhuqjukj', function(table) {
    table.bigInteger('qmuyxwtqft');
    table.bigInteger('vvozihnoug');
    table.boolean('boikpetlwi');
    table.integer('vbgfjjcqbv');
    table.text('fbfphzdmst');
  });
  await knex.schema.alterTable('yipmpgbdsa', function(table) {
    table.boolean('lgfthdzmlt');
    table.bigInteger('skoddecyho');
    table.float('zgalwhtahx');
    table.integer('xdmgvalsow');
    table.boolean('nciklbrsuz');
  });
  await knex.schema.alterTable('cahpipjuwy', function(table) {
    table.integer('kdlmxojpys');
    table.integer('hkyzukavxf');
    table.bigInteger('cjjuytxndz');
    table.timestamp('hspespimis');
  });
  await knex.schema.alterTable('bnewrvdoug', function(table) {
    table.text('jzxifnhfju');
    table.float('ntddgdoipx');
    table.bigInteger('wwsjodoueg');
    table.text('bcimfqvjak');
  });
  await knex.schema.alterTable('iwwkxxsvcw', function(table) {
    table.timestamp('txggrrfsic');
    table.integer('itpzofmpyz');
    table.text('bsrudvpxrg');
  });
  await knex.schema.alterTable('aclvrmcoun', function(table) {
    table.bigInteger('fkonyiczdo');
    table.string('emtddwdpjt');
    table.integer('hthmhtfajq');
    table.boolean('delihditch');
    table.bigInteger('yiitunoewl');
  });
  await knex.schema.alterTable('aprlisbqfp', function(table) {
    table.string('ljxpqgrrxg');
    table.boolean('dfxhkocmte');
    table.boolean('mfykeycjss');
    table.text('tylluelwwk');
    table.timestamp('gmognwcfat');
    table.bigInteger('splqfcbljf');
    table.text('hcvclzpunf');
    table.float('ejcngjrxau');
    table.text('uqczdnnpfz');
    table.integer('stuxjhrhxb');
  });
  await knex.schema.alterTable('avysmhjuxk', function(table) {
    table.string('fpjwvnggpy');
    table.string('yuwydzqiwf');
    table.text('eqhxublgpj');
    table.bigInteger('tzztcrriyy');
    table.text('dfzwwrwthp');
    table.float('strilykslx');
    table.integer('ykudlsjgdz');
    table.boolean('bfphasozhj');
    table.float('uicsrwahjq');
  });
  await knex.schema.alterTable('iilcslogun', function(table) {
    table.string('ygtkuirine');
    table.float('qwufhcjves');
    table.float('xrkwfrgnqd');
    table.json('veaauwlerr');
    table.string('gkcwbudvjt');
    table.float('aoiphbngpt');
    table.timestamp('tdeisdzhec');
    table.boolean('hxnsijmrpq');
    table.bigInteger('diwvhpjvdp');
    table.timestamp('zkfslzmcih');
  });
  await knex.schema.alterTable('cqeocrhmpe', function(table) {
    table.bigInteger('wesulnaodb');
    table.bigInteger('xobacaepab');
    table.json('meqejcbjyh');
    table.text('zsqvxwklev');
    table.string('fizlenizkx');
    table.timestamp('gczgblkdtd');
    table.float('kulbvlpwwb');
    table.text('hncmiwcqfk');
    table.text('vyortmenzc');
  });
  await knex.schema.alterTable('xfhohrobuh', function(table) {
    table.json('llqmcbymgh');
    table.text('nomtnybmsh');
    table.string('odyxmpvjvw');
    table.timestamp('uahmxgrzra');
    table.string('fwhjjueyhr');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};