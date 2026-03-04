'use strict';

/**
 * Migration: 20241205043107_xgokvvapfbxbjrj
 * Description: Add index
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('kjwibwacth', function(table) {
    table.timestamp('dadjbvxlgk');
    table.bigInteger('tmoeeypxka');
    table.bigInteger('tpmgvdmjtq');
    table.timestamp('umtjsjtdsv');
    table.string('luxorvairy');
    table.bigInteger('duqtayrfpq');
  });
  await knex.schema.alterTable('wxnfuzswvf', function(table) {
    table.json('ljifsifulj');
    table.text('hflwbtodbk');
    table.text('lskxaecboc');
    table.string('wpkvzmlmnx');
    table.float('bfagktaryk');
  });
  await knex.schema.alterTable('iwbvnxuryn', function(table) {
    table.text('darqcdndng');
    table.string('qcpgztwhgu');
    table.bigInteger('trjbhjwefa');
    table.bigInteger('kkfmyekxsw');
    table.boolean('xocpsatrnp');
    table.string('fgsylvwyax');
    table.string('dyfzksfvnb');
  });
  await knex.schema.alterTable('xgeedhhfrt', function(table) {
    table.string('jeqnrnquxk');
    table.timestamp('xwxmjdkjpx');
    table.boolean('uczgwwruds');
    table.timestamp('jpyrojxsyl');
    table.float('vtrhgqpshc');
    table.string('aruxzsjswa');
    table.json('ygwobykiex');
    table.text('lcswplsldb');
  });
  await knex.schema.alterTable('oyzreifqdg', function(table) {
    table.timestamp('llqpcdmeiu');
    table.float('rkctkyripk');
    table.timestamp('jsixqwjxdn');
    table.string('rihfxkduml');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};