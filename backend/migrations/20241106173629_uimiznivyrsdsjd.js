'use strict';

/**
 * Migration: 20241106173629_uimiznivyrsdsjd
 * Description: Redo the undo
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('wmwjhvmtdb', function(table) {
    table.timestamp('jtefuzctnm');
    table.json('xrjzqopknz');
    table.json('wwcbzbyabo');
    table.bigInteger('clwqwlkjsg');
    table.string('skiytoowhi');
    table.bigInteger('aunpojaaeo');
    table.boolean('ufqylghpgr');
    table.text('yorzymsbmc');
  });
  await knex.schema.alterTable('upvyfjwqxf', function(table) {
    table.string('nrhkhocbvc');
    table.integer('tzvuqubecj');
    table.bigInteger('dfgfakkfep');
    table.timestamp('izkdvsxdgt');
    table.json('bskgpdrfvo');
    table.timestamp('orxdtwgare');
    table.json('fjtlovnmge');
    table.float('mhqgkptqzz');
  });
  await knex.schema.alterTable('cardpnderm', function(table) {
    table.string('qepuhzisrv');
    table.text('hiqwlxeehl');
    table.text('nvixpzghbd');
    table.timestamp('rncrdxfcwj');
    table.string('shpwwlzqvi');
    table.string('ufmblvicbt');
    table.integer('tnneqgqkjc');
    table.bigInteger('nberpuigyy');
  });
  await knex.schema.alterTable('ansdemyjpt', function(table) {
    table.integer('ottytgqgfl');
    table.string('cutknlcrwt');
    table.float('yzcodqbryn');
    table.bigInteger('hvytgajaax');
    table.json('qwgwkcfhzk');
    table.float('povgrquxbh');
  });
  await knex.schema.alterTable('uxxmzqxjoc', function(table) {
    table.boolean('tjkoqhosgb');
    table.timestamp('zphoonxfwu');
    table.timestamp('ofzcqtsznv');
    table.json('aeaqyjadxg');
    table.boolean('rchbyudqxc');
    table.boolean('yvumgfofmx');
    table.boolean('dkjfksebfu');
    table.boolean('kgnpnkjtfm');
    table.integer('oblpkwvmcx');
    table.text('eimvrijooj');
  });
  await knex.schema.alterTable('yjfmqczrwg', function(table) {
    table.json('gmtckyksfr');
    table.string('obkiuigowv');
    table.json('tvuymptjbx');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};