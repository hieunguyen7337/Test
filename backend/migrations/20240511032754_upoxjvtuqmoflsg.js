'use strict';

/**
 * Migration: 20240511032754_upoxjvtuqmoflsg
 * Description: Create table
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('mzuwuctgsm', function(table) {
    table.text('oswscvsamh');
    table.timestamp('qghiogitzp');
    table.boolean('yfpqecjvpb');
  });
  await knex.schema.alterTable('lvwkyokldr', function(table) {
    table.timestamp('pirczbxrma');
    table.boolean('wkbhmyrbbi');
    table.text('wvdnenckuf');
    table.text('dyjphpxmkz');
    table.timestamp('xnbgubclki');
    table.timestamp('qqdoprnoht');
    table.float('bmmnvterox');
    table.boolean('idxuszonjd');
    table.float('vbkltecbfh');
    table.timestamp('awwpvroqig');
  });
  await knex.schema.alterTable('uvuetimuos', function(table) {
    table.boolean('bcpswxjzxz');
    table.integer('yiuzdnjftm');
    table.text('xkgohsuyxy');
    table.bigInteger('conkyzzyym');
  });
  await knex.schema.alterTable('nwelutrjja', function(table) {
    table.integer('aiznxmfyjy');
    table.json('pwglobgbrb');
    table.float('rkukksgruj');
    table.timestamp('lztzrzcjkr');
    table.timestamp('hpkuvoerft');
    table.timestamp('psuunxmpzs');
    table.boolean('hvdagyxnof');
  });
  await knex.schema.alterTable('qtmlpedfkw', function(table) {
    table.bigInteger('fthgvudjkz');
    table.text('xeofiuqmat');
    table.text('tqknbjjqzw');
    table.string('mzyejcufwg');
    table.bigInteger('ntwgoiherr');
    table.float('iuplzlutyx');
    table.text('nejmxnvxme');
  });
  await knex.schema.alterTable('hprmntzfel', function(table) {
    table.boolean('swznsmljfb');
    table.text('yahdkxxrmw');
    table.boolean('tcgvylupet');
    table.text('qhgekrakks');
  });
  await knex.schema.alterTable('mfdzrbsebv', function(table) {
    table.boolean('ywoppjxljt');
    table.text('syparrkklr');
    table.json('jlrwxrdtpp');
    table.integer('ziapqkjiid');
    table.timestamp('carydcraes');
    table.bigInteger('vxdxsnhbqj');
  });
  await knex.schema.alterTable('htwcvstpmv', function(table) {
    table.timestamp('vzmhtdwypb');
    table.float('dgnaagsdsk');
    table.timestamp('zbhkxtnugt');
  });
  await knex.schema.alterTable('jjdkpsobqq', function(table) {
    table.json('maevzdxgki');
    table.timestamp('uffpyxaiut');
    table.string('nuhnoyhozg');
    table.text('dxwocksvsk');
    table.string('lsmfzezgrk');
  });
  await knex.schema.alterTable('qnlowqqxvf', function(table) {
    table.json('xayqctxoij');
    table.integer('lxfwmggryd');
    table.boolean('lzapgatkgc');
    table.bigInteger('cxtivbdxqf');
    table.text('crefiwptoe');
    table.timestamp('alwmsdxnhd');
    table.float('fnfdxlljhx');
    table.text('zetlyfnurn');
    table.timestamp('gxgrzashxw');
  });
  await knex.schema.alterTable('ibcczzydvh', function(table) {
    table.timestamp('hnwggobyxq');
    table.bigInteger('mdiyfbdpyz');
    table.json('mcbhbdhfan');
    table.boolean('mgaxiakfdd');
    table.string('fotohfhvuf');
    table.bigInteger('bqrzvxmntw');
  });
  await knex.schema.alterTable('utvhjpmfml', function(table) {
    table.json('ibwyrqvoba');
    table.timestamp('aodkzihano');
    table.string('rtbohrxlmk');
    table.bigInteger('waviofpwkl');
    table.float('fwnptcdymv');
    table.text('fuaiukokei');
    table.text('iahjmsbdpa');
    table.boolean('xpqnvwqvvv');
    table.json('zoqscfqvwo');
    table.bigInteger('mstsrcjckb');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};