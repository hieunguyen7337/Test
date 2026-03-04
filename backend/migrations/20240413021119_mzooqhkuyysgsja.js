'use strict';

/**
 * Migration: 20240413021119_mzooqhkuyysgsja
 * Description: Rename field
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('ixsevyljit', function(table) {
    table.bigInteger('kskneejjhl');
    table.text('bkatpqqeyt');
    table.boolean('rtfpmhzffd');
    table.timestamp('dqevvdwczd');
    table.boolean('xaewzyqdmh');
    table.integer('rketkoobcx');
    table.text('ehttizlpmx');
    table.string('eqrirjnkzl');
  });
  await knex.schema.alterTable('mvkjtmkdjz', function(table) {
    table.bigInteger('jjzntfhwgj');
    table.json('nnfwpingql');
    table.json('zawqjwyyjv');
    table.float('yxxvprmpsc');
    table.float('ynykeutwpy');
    table.float('bcwnpccxqt');
    table.bigInteger('ntwijrfney');
    table.boolean('waeaxzpanl');
    table.timestamp('itqwprwuwe');
    table.text('cnpzwobqct');
  });
  await knex.schema.alterTable('nmcbfpegrq', function(table) {
    table.json('lliscozrxg');
    table.string('pndcawosma');
    table.float('pvfkxpjlha');
    table.timestamp('dimxvvadyv');
  });
  await knex.schema.alterTable('fnjghtbhjo', function(table) {
    table.float('nffbeifqxs');
    table.bigInteger('tnrpiwxfoo');
    table.text('ptnrozgqbn');
    table.float('mtqxdatrdk');
    table.integer('ffmkhzirpa');
    table.bigInteger('eyseijxtgb');
    table.float('tvcprmrniq');
  });
  await knex.schema.alterTable('lzzfetvxzo', function(table) {
    table.bigInteger('lmtphjlmrf');
    table.json('kwcusrsikf');
    table.timestamp('hrnxqbovon');
    table.string('mkeksegiga');
    table.json('ttqeoocuts');
    table.boolean('plozsnfuxy');
    table.boolean('xlpsbuhqnm');
  });
  await knex.schema.alterTable('doprcpueji', function(table) {
    table.integer('wseqdfghya');
    table.bigInteger('brlkkmpfbc');
    table.text('vrfijmblfr');
    table.float('tmonnfgdyf');
  });
  await knex.schema.alterTable('qsfpykcqqb', function(table) {
    table.integer('eyylzbmitr');
    table.string('sgmrzfxzdj');
    table.text('lnbhqxuuqq');
    table.timestamp('eaqircaofr');
    table.string('ddimteuttl');
    table.timestamp('fmouwmrzvl');
    table.text('sbdgwvbgtj');
    table.timestamp('amqqiauvyn');
    table.json('wffsiyyeju');
  });
  await knex.schema.alterTable('hqehcnverc', function(table) {
    table.bigInteger('xijyllbxoq');
    table.json('zgetcfeuao');
    table.json('ysuyqjqcwb');
    table.bigInteger('vnbqjxyysn');
    table.text('zmtoklvkll');
    table.float('kpkxglkgvk');
    table.integer('sahlkgcihh');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};