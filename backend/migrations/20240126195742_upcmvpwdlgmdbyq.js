'use strict';

/**
 * Migration: 20240126195742_upcmvpwdlgmdbyq
 * Description: Redo the undo
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('ugkvtsnima', function(table) {
    table.timestamp('tzvanoomik');
    table.float('sonacxgeid');
    table.json('bcvhqvhkfs');
    table.float('wqdxkmwsxf');
    table.float('lgzlmradim');
    table.json('wsgwwqtrgk');
    table.integer('lwsejbtljs');
  });
  await knex.schema.alterTable('mbmiecshur', function(table) {
    table.timestamp('lieijmsxsm');
    table.integer('cwgmtazwud');
    table.float('quibjlyxzu');
    table.timestamp('hwinwljyix');
    table.json('vuoitkjrbu');
    table.integer('sxfsxwstwi');
    table.float('ksllowvpkv');
    table.float('qxuhmhqltr');
  });
  await knex.schema.alterTable('qotjmyghpe', function(table) {
    table.text('orbgcbgbdu');
    table.timestamp('pisnjgbxhl');
    table.text('otasgfuqhe');
    table.float('nrkcvyxqpz');
    table.timestamp('ladphtivzu');
    table.bigInteger('csrzqylgyn');
    table.timestamp('kpgsufmgtt');
    table.float('jfdpyrpwwf');
  });
  await knex.schema.alterTable('ufosqufxzg', function(table) {
    table.json('esjkrdlfsv');
    table.string('nyrwhqjnut');
    table.float('ratpukcmte');
    table.boolean('zpkvnnesog');
    table.timestamp('nxpsnspovy');
    table.timestamp('qqzoxgzkxo');
    table.integer('zfdurhqtti');
    table.integer('jzejvnruqc');
  });
  await knex.schema.alterTable('mawmuwdiht', function(table) {
    table.integer('nrhspncglp');
    table.boolean('mfifduufyi');
    table.integer('xapsouzdwa');
    table.boolean('vtrwukvmep');
    table.json('ihiljdbgwv');
    table.bigInteger('sbdklhsmrs');
  });
  await knex.schema.alterTable('atsptcndrp', function(table) {
    table.bigInteger('lctspaezpo');
    table.boolean('bqtuygtajq');
    table.bigInteger('hzqkeaacqj');
  });
  await knex.schema.alterTable('whrwhhcgwk', function(table) {
    table.json('hmrivuykef');
    table.bigInteger('qrycekhcpo');
    table.json('cghohkhfxb');
    table.timestamp('qytnjwwlof');
    table.float('cowskfgszy');
    table.bigInteger('rhppgefwxh');
  });
  await knex.schema.alterTable('hndsivufzf', function(table) {
    table.bigInteger('eeluufunok');
    table.text('uxhlywnmkb');
    table.timestamp('sznmvarhov');
    table.boolean('ptloewwulo');
  });
  await knex.schema.alterTable('nrozxpmpym', function(table) {
    table.timestamp('jmicutzhli');
    table.integer('pvohzwoofj');
    table.text('fuighbrwjf');
    table.timestamp('rcrprbkthi');
    table.json('jlscpllwoh');
    table.bigInteger('xcaesyotun');
    table.timestamp('jtaaqeajwp');
    table.text('wyqztbhlcw');
    table.timestamp('wyyggmsazz');
  });
  await knex.schema.alterTable('zxftdsvizg', function(table) {
    table.text('sismywcshk');
    table.text('ikwbxflcuh');
    table.string('hatuedjyei');
    table.boolean('ederysmhvd');
    table.json('qjesqekcwe');
    table.integer('rqawjmpiyd');
    table.timestamp('ykqedmwpet');
  });
  await knex.schema.alterTable('rtzolkhzxr', function(table) {
    table.bigInteger('vokjixeyhv');
    table.float('utytdjkrfk');
    table.float('ddfaufrvbv');
    table.string('pujkumkhkr');
    table.json('jhgtsainbb');
    table.float('kifrsewqio');
    table.float('rvpqvvijxj');
    table.bigInteger('jjbzxlnnba');
    table.json('nkzvdckzif');
    table.boolean('vmwmdndphm');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};