'use strict';

/**
 * Migration: 20240904103732_derhkoqykdtxehw
 * Description: Undo previous migration
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('bvhxnbfpnl', function(table) {
    table.timestamp('qserpnblbb');
    table.bigInteger('esleydjkkt');
    table.timestamp('eumjqpjexi');
    table.json('pzvihgglod');
    table.bigInteger('qlovcrpwvr');
    table.boolean('teianhtafj');
    table.string('janlvqvmyk');
  });
  await knex.schema.alterTable('dncgruylzs', function(table) {
    table.timestamp('jwejrhtcbk');
    table.float('mjsttuevod');
    table.float('onctxeurxj');
    table.bigInteger('vcumpbuyea');
    table.timestamp('exlwiqvsef');
    table.boolean('eadsstlful');
    table.json('znjkupphly');
    table.text('iltjxtzlqh');
  });
  await knex.schema.alterTable('inkchjtpcg', function(table) {
    table.bigInteger('uhaskdulwb');
    table.timestamp('jussgsrklo');
    table.bigInteger('qheqpgsnin');
  });
  await knex.schema.alterTable('bwwobnqsmk', function(table) {
    table.float('tgfulsveyh');
    table.bigInteger('pzfpxicgql');
    table.integer('yygeqrvzbq');
    table.timestamp('fcoojuzqpk');
    table.integer('jfzxzuyxld');
    table.integer('spfdqqvhvr');
    table.float('vwixsviocj');
    table.float('wavleryuxs');
    table.text('lelmdcrwzk');
    table.integer('oacvnmvgjz');
  });
  await knex.schema.alterTable('trmwtgqjnt', function(table) {
    table.boolean('sjdgqvtksr');
    table.bigInteger('anrzjcehlj');
    table.json('cnuqzaafcf');
    table.boolean('mgdowpqiaj');
    table.string('oeseafwxuc');
    table.string('cikgjmhijx');
    table.text('ahpapewfbx');
  });
  await knex.schema.alterTable('gnymnbisdc', function(table) {
    table.text('abrwlmpctd');
    table.boolean('nhkltzfesd');
    table.timestamp('nlyeqmrubj');
    table.json('xqmnfbstau');
    table.integer('kvcagmxwet');
    table.timestamp('gmonohdjoc');
    table.integer('hmavkvpcit');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};