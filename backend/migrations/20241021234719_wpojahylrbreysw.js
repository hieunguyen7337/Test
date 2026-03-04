'use strict';

/**
 * Migration: 20241021234719_wpojahylrbreysw
 * Description: Undo previous migration
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('fbqtqgunbl', function(table) {
    table.string('pcjwkpxtjq');
    table.text('gezbdpsosm');
    table.json('zfumfryjco');
    table.boolean('nexeqpqppk');
    table.json('ivatmzjdjd');
    table.text('dmaotxxwum');
    table.boolean('opjbicjdse');
    table.string('cstdgibuls');
    table.text('zipdnckhxq');
    table.json('qddacsnlzu');
  });
  await knex.schema.alterTable('sanetobgmu', function(table) {
    table.integer('epwtmpmfhu');
    table.text('guqrwygfkh');
    table.string('tqqljogxwm');
    table.json('vjoajzsrmr');
    table.string('xatcivdhkk');
    table.text('tdkebmnmxc');
    table.float('cedmgvbgzs');
  });
  await knex.schema.alterTable('oyxjnpgwdy', function(table) {
    table.float('tseuckjlxv');
    table.boolean('qsbexqddrk');
    table.text('aowefzgstz');
    table.timestamp('oyodfnzmzt');
    table.string('mgmjoydmgj');
    table.text('oeaibfuold');
  });
  await knex.schema.alterTable('gfedjmqqbe', function(table) {
    table.bigInteger('pksydkbrzs');
    table.timestamp('musdxywvzy');
    table.integer('qunrhabefv');
    table.timestamp('jetwutrxqx');
  });
  await knex.schema.alterTable('nxnkjnsnfp', function(table) {
    table.integer('hzjjxsdoet');
    table.string('yjcbnbangi');
    table.boolean('yybmhqupfk');
  });
  await knex.schema.alterTable('pyfuercqms', function(table) {
    table.timestamp('tjiaicnzhf');
    table.json('gupywbdtkw');
    table.text('glfusjkubp');
  });
  await knex.schema.alterTable('kbwvlnyczr', function(table) {
    table.timestamp('sxfyjeqfxu');
    table.integer('cgkfoiewls');
    table.timestamp('tprzegozpf');
    table.integer('kkgwqvmadl');
    table.json('kzwoxfosta');
    table.json('hokdsbtmxf');
    table.text('strkxukxjh');
    table.text('irgeosvmig');
    table.bigInteger('opdunnhyzh');
  });
  await knex.schema.alterTable('mxdzhtctnp', function(table) {
    table.bigInteger('dseubctulp');
    table.timestamp('phpaxxyjnf');
    table.float('fbxbqxjzsz');
    table.bigInteger('hrzwvwwgaj');
    table.boolean('tlezcmvtzm');
    table.timestamp('bzvfprixha');
  });
  await knex.schema.alterTable('opicvurckl', function(table) {
    table.json('knirrsaovq');
    table.text('vcuqxcsfrf');
    table.integer('ybhoilfjkj');
    table.timestamp('tsmlxlyvex');
    table.text('mlqyvlelro');
    table.bigInteger('dugbdlmgbv');
    table.json('gmcmloepfi');
  });
  await knex.schema.alterTable('xyzmjqebsg', function(table) {
    table.text('bpknvqiyok');
    table.boolean('ovkvrxaepa');
    table.json('xeobgrcnuc');
    table.float('rqzvsaguag');
    table.json('fxmgfrlgna');
  });
  await knex.schema.alterTable('fsrifgexme', function(table) {
    table.timestamp('pmbfothljy');
    table.bigInteger('ouxkuqnzbq');
    table.timestamp('ixhasplxzc');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};