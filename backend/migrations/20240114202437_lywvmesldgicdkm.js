'use strict';

/**
 * Migration: 20240114202437_lywvmesldgicdkm
 * Description: Remove column
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('nsbmtyznwo', function(table) {
    table.integer('lzlrqjdhpu');
    table.bigInteger('lkqpfpwmcy');
    table.float('ybdoyhbblq');
    table.float('qnzabmmlbc');
    table.integer('pqvobjsklr');
    table.float('dwtahyrmco');
    table.string('jqhhlodwfo');
    table.boolean('apfdufkxqo');
    table.json('lfgptybpmv');
  });
  await knex.schema.alterTable('huxxtqnzxc', function(table) {
    table.text('cjikeyyjuv');
    table.bigInteger('dwhftkpmtq');
    table.float('pihmwiybhz');
    table.bigInteger('vhdnqyyekc');
    table.integer('xgsyqdpbrq');
    table.integer('ocztumshkn');
  });
  await knex.schema.alterTable('aznpaqmwzp', function(table) {
    table.timestamp('usyxspafue');
    table.integer('sjvodvnfad');
    table.string('giktudycsk');
    table.integer('fderchiwge');
    table.boolean('vgdoaatmdd');
    table.timestamp('ecoielyune');
    table.float('mthhioxcpw');
    table.text('tqilxlqevh');
    table.boolean('umlcowfbgi');
  });
  await knex.schema.alterTable('imwqatgazr', function(table) {
    table.boolean('bjhhdfriml');
    table.json('gcuzsgldvk');
    table.bigInteger('avxhojusjh');
    table.bigInteger('hjyhcbdbls');
  });
  await knex.schema.alterTable('ytolqbxrzm', function(table) {
    table.string('dlbvhafroy');
    table.integer('tgphoezrua');
    table.json('qsywjaezsm');
    table.integer('jwhncjhsma');
    table.string('riaxavsuhf');
    table.integer('iwceonadzb');
  });
  await knex.schema.alterTable('mvjitmlxey', function(table) {
    table.json('cupbbgqcbz');
    table.boolean('rayfynmapq');
    table.timestamp('bbvzxaokyw');
    table.json('rucbmiszcw');
    table.boolean('ggcpmiikzb');
    table.string('lumvfinalz');
    table.json('ldcpltrrdk');
    table.integer('slgutwdiue');
    table.boolean('vjfljeawla');
    table.integer('rxivlnbaal');
  });
  await knex.schema.alterTable('hwflopzwfk', function(table) {
    table.integer('lnbkzwktjq');
    table.string('uepcabnepi');
    table.float('djqzjvooum');
    table.integer('gobphcqkqm');
    table.bigInteger('becojdufbz');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};