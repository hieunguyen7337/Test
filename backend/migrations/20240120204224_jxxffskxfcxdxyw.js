'use strict';

/**
 * Migration: 20240120204224_jxxffskxfcxdxyw
 * Description: Drop table
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('bmlpwvwsbv', function(table) {
    table.json('fvlhmdlvbo');
    table.timestamp('xwuiwkukdb');
    table.integer('jkafzmbsxm');
    table.json('tjbkrxdjkq');
    table.boolean('gybrvvjwlw');
    table.timestamp('ohnlkhietf');
    table.bigInteger('mogqbndnwd');
  });
  await knex.schema.alterTable('rlxeacehdl', function(table) {
    table.boolean('kgzdfwzrtd');
    table.float('pnpkqsimin');
    table.integer('gsyjnuuzlu');
  });
  await knex.schema.alterTable('plggqjgchi', function(table) {
    table.float('uftuiefdgm');
    table.text('mtjgceuedr');
    table.boolean('himmbrhcbb');
    table.boolean('uimfyiqxrc');
    table.float('rfuejedyis');
    table.bigInteger('cllfhpfhnv');
    table.string('bhjluhdvlr');
    table.string('kqseunzuev');
    table.float('iltcdkqepp');
    table.bigInteger('pcertvedib');
  });
  await knex.schema.alterTable('wcmvkpolsg', function(table) {
    table.text('iwzucinnuu');
    table.string('zwsyglxzpn');
    table.integer('orbzgngaql');
    table.float('drwsugkydn');
    table.boolean('aoqpnprbui');
    table.timestamp('czdwkkcdbj');
    table.float('dprrungzew');
    table.bigInteger('buduoigjbz');
    table.string('vcgqgqexyf');
  });
  await knex.schema.alterTable('zygjoksoar', function(table) {
    table.boolean('jxyqtgsebi');
    table.bigInteger('yumymhrmgm');
    table.boolean('uoiwbvuscx');
    table.timestamp('tgnrkufoeo');
    table.text('qeqplmyogq');
    table.timestamp('xahdtrvaom');
    table.timestamp('ovlkakygmb');
  });
  await knex.schema.alterTable('dacvfaawzw', function(table) {
    table.integer('xpnjwfdtnl');
    table.string('vnfjvmnqyp');
    table.bigInteger('mndiqxpbcl');
    table.json('kfszaybglv');
    table.boolean('ukoittgucx');
  });
  await knex.schema.alterTable('hzxlmglosb', function(table) {
    table.boolean('qbbmnlxunr');
    table.boolean('xaxfnmurtz');
    table.timestamp('zshwgsfygs');
    table.boolean('czllfhtpbp');
    table.float('ctensorjzq');
    table.integer('muaawqrtwj');
    table.json('fbuercmabz');
    table.text('dhogpengra');
    table.float('ruvrtqxlat');
    table.integer('emxfiqurai');
  });
  await knex.schema.alterTable('jslmsnngkg', function(table) {
    table.integer('napldtlcwq');
    table.timestamp('qfusoxksya');
    table.float('ynbfhuftxa');
    table.integer('ubyruzeulu');
  });
  await knex.schema.alterTable('aiyhuxemvk', function(table) {
    table.string('gplakdcboe');
    table.bigInteger('cmxkiudqus');
    table.timestamp('ifdocuwgpy');
    table.boolean('nnjuagtbty');
    table.timestamp('vxokticuja');
  });
  await knex.schema.alterTable('nuaxyqwipa', function(table) {
    table.json('lfuahxkyne');
    table.boolean('ugxgoikslf');
    table.string('nliyfdbrwh');
    table.timestamp('qrjjmwsizl');
    table.boolean('tmsnizybay');
    table.json('wdnsevsapl');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};