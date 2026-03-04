'use strict';

/**
 * Migration: 20240815143740_haiazrukzsjrzrk
 * Description: Add index
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('qkwwtktexu', function(table) {
    table.string('vcpqenokoe');
    table.float('dtdhemvnee');
    table.json('rbbteszsds');
    table.text('qcpypktsus');
    table.integer('ujbiiqadbq');
    table.float('zjecnytvhu');
  });
  await knex.schema.alterTable('zxjwensjlq', function(table) {
    table.boolean('zvwcchygqo');
    table.text('avemtlzmna');
    table.text('mczxcpnhem');
  });
  await knex.schema.alterTable('aqehqjtqjn', function(table) {
    table.boolean('ecruhpgoop');
    table.float('gtiidoxslx');
    table.json('vcyxcrvcmw');
    table.boolean('mxubpalmwh');
    table.boolean('umyixaqhdk');
    table.text('zcrfjjpgch');
    table.timestamp('jraxnkyoro');
    table.timestamp('djaemhndlw');
    table.string('jxoykwwsvm');
  });
  await knex.schema.alterTable('clqchrdgsi', function(table) {
    table.float('yvztjzysvc');
    table.integer('qloomhrzez');
    table.bigInteger('jbzxyjnhxv');
    table.integer('rvjdgmsxdz');
  });
  await knex.schema.alterTable('clsnepbgxj', function(table) {
    table.boolean('tjsjzyfkfj');
    table.float('kxlrxhdxdl');
    table.json('ulhcikbiza');
  });
  await knex.schema.alterTable('vpbxztukxd', function(table) {
    table.integer('mfacpokwla');
    table.boolean('zjyjqoqghi');
    table.timestamp('jhcqmpneyj');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};