'use strict';

/**
 * Migration: 20240706170125_tftrjsazuhxohgf
 * Description: Drop table
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('zlqpwiotag', function(table) {
    table.bigInteger('vwdbjluofl');
    table.integer('kzfwoowfra');
    table.float('wddacbmppk');
  });
  await knex.schema.alterTable('yzkqggigok', function(table) {
    table.json('kqkabojmxm');
    table.json('fagyrvaysi');
    table.timestamp('pukbepoerz');
    table.timestamp('wdpaxdwndm');
    table.json('xfksccznjl');
    table.text('hhgmdamjht');
    table.timestamp('aleymfyatf');
    table.json('gaekpvcdfn');
    table.string('eyknafpbhn');
    table.boolean('oqgdzkrvsa');
  });
  await knex.schema.alterTable('dlzatmrwmr', function(table) {
    table.timestamp('zrturmjyfi');
    table.bigInteger('dfddsyeccf');
    table.timestamp('dfmifskvrj');
    table.float('gdrocejewo');
    table.float('ibvloagktd');
  });
  await knex.schema.alterTable('ffrnaeymrg', function(table) {
    table.boolean('yhdlssolqz');
    table.json('zrpdvigjeu');
    table.boolean('wqlinxcakm');
    table.boolean('gadyusfvqn');
    table.boolean('fsglqhohjo');
    table.boolean('vqqadkireq');
    table.json('ohgrgjflgj');
    table.boolean('ffaaqynags');
    table.json('bpzdthqibf');
    table.float('sqlqyehakj');
  });
  await knex.schema.alterTable('kabjpfqfah', function(table) {
    table.text('wdwtbiuelt');
    table.json('mxtotltkzl');
    table.timestamp('ugjuatyrjv');
    table.bigInteger('bqgasztywt');
    table.json('gavlsahcjp');
    table.float('wswbkeakdd');
    table.bigInteger('dvakcewyup');
    table.boolean('xdwqaodbyb');
    table.bigInteger('octmbwvdvj');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};