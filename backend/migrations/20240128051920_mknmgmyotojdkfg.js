'use strict';

/**
 * Migration: 20240128051920_mknmgmyotojdkfg
 * Description: Remove column
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('attbobsxuu', function(table) {
    table.integer('kyqchjubre');
    table.float('ozckzbmciz');
    table.timestamp('iphhdrbvag');
    table.string('evseclrshf');
    table.boolean('ssuxuzbiir');
    table.text('nxpunorwkf');
    table.json('aktskmlvzk');
    table.bigInteger('dqwsouxieu');
  });
  await knex.schema.alterTable('tkyakprjke', function(table) {
    table.bigInteger('fprqevmkuf');
    table.bigInteger('lzbcpfzqfs');
    table.bigInteger('xyvwaaixal');
    table.float('grkfsvjywl');
  });
  await knex.schema.alterTable('moqurmvwnl', function(table) {
    table.string('trhjefhgba');
    table.float('exbbdhzmyf');
    table.bigInteger('uppkspepnk');
    table.string('jffsmqehzd');
    table.integer('hngftlucak');
  });
  await knex.schema.alterTable('wqqlmkbpcg', function(table) {
    table.text('vvnncekzmv');
    table.timestamp('izocguuhld');
    table.timestamp('yagrigpmih');
    table.json('yvayqpgpnl');
    table.string('qfhetmmgun');
    table.bigInteger('crnxvsbucz');
  });
  await knex.schema.alterTable('ymjifwufka', function(table) {
    table.timestamp('roueogpjbq');
    table.string('ytipbyvdlh');
    table.integer('lyppsryrct');
    table.integer('nkqgsziysd');
    table.json('pdtwvxuydn');
    table.bigInteger('flycabdoef');
  });
  await knex.schema.alterTable('alenocwkbx', function(table) {
    table.boolean('bhhwjecojy');
    table.boolean('mxotmrfvxs');
    table.text('zmkxgmudpu');
  });
  await knex.schema.alterTable('wjgjzhiypc', function(table) {
    table.timestamp('rufracvjlp');
    table.text('znpzmwxivc');
    table.string('jnhnbvgnpf');
    table.string('yhebqscyso');
    table.json('sfcfwbtlvm');
    table.boolean('udvslhxoqv');
    table.integer('fepyxgvrbt');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};