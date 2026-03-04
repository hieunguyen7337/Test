'use strict';

/**
 * Migration: 20240723084846_qknhofokbkgkddy
 * Description: Drop table
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('yspckhwhsc', function(table) {
    table.bigInteger('vgfasolkag');
    table.string('iuwmbvzpii');
    table.text('mriljwsxwi');
    table.text('doypvqsatq');
    table.bigInteger('kwawtqgsur');
    table.string('hkgxdxeywt');
  });
  await knex.schema.alterTable('pfouvyasul', function(table) {
    table.float('mwvgjxbupd');
    table.text('vrmsgzyawc');
    table.bigInteger('hoavycdkis');
    table.integer('uonklsogbj');
    table.integer('imavopvtth');
    table.timestamp('mtjzmbuuog');
    table.integer('ahvepybseo');
    table.text('ocnyleexka');
  });
  await knex.schema.alterTable('hszfvebwug', function(table) {
    table.boolean('urscrpjgcp');
    table.integer('xumknweyth');
    table.json('nfnifrilsz');
    table.bigInteger('fxxoiwhpux');
    table.boolean('hjguafattr');
  });
  await knex.schema.alterTable('ajkxzuwddr', function(table) {
    table.json('vztdixbpsb');
    table.boolean('vcviefmuxr');
    table.boolean('zkafliglgn');
    table.bigInteger('rwdaldvjjh');
    table.text('psyummhxws');
    table.text('eiqdwkvwre');
  });
  await knex.schema.alterTable('doxjcgxanu', function(table) {
    table.text('mldkzyxenp');
    table.bigInteger('wjvcwnxyzw');
    table.string('ctjmwdzpre');
    table.string('ooiuytecpc');
    table.boolean('yeeoblzwoy');
    table.bigInteger('ozwbljbmew');
    table.bigInteger('lngvqyywzi');
    table.bigInteger('gufhiorpgu');
    table.bigInteger('fubryrirbh');
    table.string('fsxarrwnel');
  });
  await knex.schema.alterTable('dzfywiqdbo', function(table) {
    table.timestamp('ftveblmdio');
    table.json('vcutimzgqa');
    table.timestamp('uptrbobphd');
    table.timestamp('mabzwsrlbc');
    table.bigInteger('tqmzbkqhup');
    table.text('xvnwxvdggk');
    table.integer('udvjoglbwy');
  });
  await knex.schema.alterTable('ulpquwiups', function(table) {
    table.text('udemqzwfbe');
    table.timestamp('vpypapmbha');
    table.timestamp('vjofwbnofl');
    table.float('vobnzzwoff');
    table.json('kxcmhltmmu');
    table.bigInteger('gvqqddcwkk');
    table.bigInteger('nzulhxeztc');
    table.string('wvkiwtbxip');
    table.float('hcsptnuejt');
  });
  await knex.schema.alterTable('rtgsipoygp', function(table) {
    table.integer('gmerfluegg');
    table.timestamp('kslkbxozeu');
    table.boolean('rgywqcujci');
    table.float('uzqwiqcjcx');
    table.boolean('adwlgzahim');
    table.float('soomqlotox');
    table.json('gzspcjcfsc');
  });
  await knex.schema.alterTable('arlsbgvsye', function(table) {
    table.float('coxfratbjm');
    table.integer('rqdemxlegy');
    table.boolean('cekgvztlms');
    table.integer('qisdrlepwi');
    table.bigInteger('gklylguiyv');
  });
  await knex.schema.alterTable('tsjkxnlosy', function(table) {
    table.json('bofyuvngnw');
    table.text('fursoqqara');
    table.json('rmpbwexveu');
    table.boolean('bdcotylpkf');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};