'use strict';

/**
 * Migration: 20240603021221_pinywhmawsrwsem
 * Description: Redo the undo
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('iaxnnbimhj', function(table) {
    table.bigInteger('gxdvbydbwb');
    table.bigInteger('syzgmqigsx');
    table.bigInteger('uqxlpxoevb');
    table.string('fibbreodqa');
    table.text('yrvghxcxux');
    table.float('hecxzwxalq');
  });
  await knex.schema.alterTable('albcqjkhgy', function(table) {
    table.string('rysjuckyxp');
    table.bigInteger('sjgudoqrby');
    table.float('eroqpebpai');
    table.float('bvrfmbaxez');
    table.integer('zwthxebdlg');
    table.float('sozfdmpmgc');
  });
  await knex.schema.alterTable('zksrblayaa', function(table) {
    table.json('sjtwlpkxxy');
    table.boolean('cksyelrpxs');
    table.float('cioiemhmwd');
    table.json('rauicrkwmc');
    table.timestamp('fsbzbfqdox');
    table.bigInteger('dnxnjzjiuf');
    table.float('zgwismuhey');
  });
  await knex.schema.alterTable('vpglvkktym', function(table) {
    table.timestamp('nqxjmcqqot');
    table.text('cieyaebsek');
    table.json('ckralcsafh');
    table.float('hobvhgdfbs');
    table.timestamp('hiqiypylwv');
    table.timestamp('dtpqgunehf');
    table.boolean('wacznpzcgm');
  });
  await knex.schema.alterTable('rjwevykhqd', function(table) {
    table.string('uhzwmxmhct');
    table.json('ductmhrqyg');
    table.bigInteger('edxtkamgdc');
    table.integer('tqbzfgjxkz');
  });
  await knex.schema.alterTable('qfadmnklyj', function(table) {
    table.string('odhsyhuqfx');
    table.timestamp('dlhtqhnbmf');
    table.integer('dveayvfckd');
    table.timestamp('cyudixqhaf');
    table.timestamp('pmnkqrcwja');
    table.integer('uybedtbucv');
    table.json('jmnwilwhha');
    table.bigInteger('yswimqnfnb');
    table.bigInteger('msqavcswpc');
    table.json('esywjetbbw');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};