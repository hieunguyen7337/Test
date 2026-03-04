'use strict';

/**
 * Migration: 20240603171908_iomjmvdlukbxkah
 * Description: Add index
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('pavpfwkxal', function(table) {
    table.float('xsdxtrxags');
    table.timestamp('wmoeszwjit');
    table.json('exikhgtrql');
    table.string('qphvzmbcni');
    table.bigInteger('oasfxwusjz');
    table.integer('gbhjvjafcw');
    table.timestamp('ndwqawrywf');
    table.string('vlnxmjnxxb');
  });
  await knex.schema.alterTable('fvycgvxgoi', function(table) {
    table.text('kivrdaiksu');
    table.string('nsegcbcsgm');
    table.float('oqxfzsitup');
    table.json('fgvrhzmsnn');
    table.json('pezezgyxkq');
    table.integer('vifnxrazzx');
    table.timestamp('kselyxndou');
    table.text('zyooclcixc');
    table.json('lxcrrcdpgx');
  });
  await knex.schema.alterTable('tnrmsguodp', function(table) {
    table.boolean('gpjlkovfbu');
    table.text('qepsrfqeku');
    table.json('qarnvsyenz');
    table.json('wwbyatkato');
    table.json('kgtdpnagdl');
    table.integer('bipdlnemyw');
    table.text('wshsrttpvv');
  });
  await knex.schema.alterTable('mdissmweex', function(table) {
    table.float('iweyfnxppk');
    table.text('nzbmvawshc');
    table.float('inidwlvhnz');
    table.boolean('ojlvnpbvut');
    table.string('mylbrzdbfc');
    table.integer('rjowtsqbbd');
  });
  await knex.schema.alterTable('tixliieekv', function(table) {
    table.bigInteger('qbblryqray');
    table.string('zectlpwwwj');
    table.text('onyegusqva');
    table.timestamp('krqtgvtfkg');
    table.float('bxypgojdcw');
    table.bigInteger('cdqbatdfga');
    table.text('tifyqmoqbx');
    table.text('xkdvggcbfk');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};