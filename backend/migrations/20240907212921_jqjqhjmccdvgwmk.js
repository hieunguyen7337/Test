'use strict';

/**
 * Migration: 20240907212921_jqjqhjmccdvgwmk
 * Description: Undo previous migration
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('yygalfgawo', function(table) {
    table.float('bedfnwbcao');
    table.boolean('fykvqwfeir');
    table.timestamp('yocmtvslxt');
    table.integer('nohwfvpiln');
    table.timestamp('gttcloztpz');
    table.integer('iwljkpsdba');
    table.text('hgiypzzith');
    table.integer('intnsfmxcp');
  });
  await knex.schema.alterTable('xdhsodclkc', function(table) {
    table.string('anhdgnerhk');
    table.integer('pttrpkpamd');
    table.bigInteger('sdeosyjeql');
    table.float('dlvnjbgyex');
    table.boolean('hfcsbracxq');
  });
  await knex.schema.alterTable('yhsohjtsga', function(table) {
    table.timestamp('uxrmimwsmg');
    table.text('falokpccna');
    table.string('rkqyihnqvd');
    table.timestamp('dywarywftm');
  });
  await knex.schema.alterTable('vjctkiacph', function(table) {
    table.integer('mudgszpzsz');
    table.timestamp('fzmzrdjkra');
    table.float('wftgaovxue');
  });
  await knex.schema.alterTable('buypwycexv', function(table) {
    table.boolean('irmzlfyhqy');
    table.bigInteger('eiizzvesvc');
    table.timestamp('lfkgwikfca');
    table.float('zmynupnyjs');
    table.text('aztkeucwce');
    table.text('afufhutbpy');
    table.json('cbfgtqwcty');
    table.string('qkkxgqnfjs');
    table.json('vdutthhtmy');
  });
  await knex.schema.alterTable('sbceyxpklg', function(table) {
    table.string('ezlgdptbne');
    table.json('zluteknwix');
    table.timestamp('bgoclaykei');
    table.float('pncppcuujw');
    table.text('aogqfiellk');
    table.boolean('nfagcmksfj');
    table.string('wkwksalwxk');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};