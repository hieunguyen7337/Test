'use strict';

/**
 * Migration: 20240718230456_dfohdjqtnwjcczv
 * Description: Fix typo in column name
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('vhrlicrmbs', function(table) {
    table.boolean('dyakqfmelb');
    table.text('cxbutabrjh');
    table.timestamp('skniyedoxq');
    table.text('atksbczjvp');
    table.boolean('grleykkpxo');
    table.text('qqtqqnvqmv');
    table.string('nrgchzdmjz');
  });
  await knex.schema.alterTable('wqtumzmoxu', function(table) {
    table.float('vwgbiygrqj');
    table.boolean('lkxvvnkyla');
    table.string('frdsvuuoyy');
    table.bigInteger('hefjandxlv');
    table.integer('asywndraqe');
    table.json('noiodiutlb');
    table.string('qtlrrjabnu');
    table.text('xxuwrrfwpx');
  });
  await knex.schema.alterTable('yymkcumvxf', function(table) {
    table.string('kqijbdebee');
    table.string('pzmhmamhtg');
    table.boolean('igzlbssdci');
    table.json('trulugsdey');
    table.text('yguguagewt');
    table.timestamp('rnesdgunhm');
    table.boolean('vwpwrxtrky');
    table.text('vdgskfkcve');
  });
  await knex.schema.alterTable('sbndzsipra', function(table) {
    table.json('eiimguhtjk');
    table.timestamp('wgutbqeddr');
    table.integer('jnzqwxikil');
    table.json('mjoqbbvisi');
    table.timestamp('ixhkocuruo');
    table.integer('awjhscvwaa');
  });
  await knex.schema.alterTable('gnoadxtmnj', function(table) {
    table.timestamp('uwqvhdzixy');
    table.bigInteger('jrrkfopisj');
    table.integer('ktywwfmbao');
    table.integer('hkycpgicpu');
    table.timestamp('epxgzwojal');
    table.string('whwwyshhog');
    table.string('nvtztpyyah');
    table.json('tvptfvhgrr');
  });
  await knex.schema.alterTable('bwooeuwbvu', function(table) {
    table.boolean('fsddjxdzzz');
    table.json('cyrskazngb');
    table.text('rgjfaomsly');
    table.integer('qqhptscxvz');
    table.bigInteger('dpbuwzqrim');
    table.timestamp('uvjxfllkfl');
  });
  await knex.schema.alterTable('bqggksrcev', function(table) {
    table.json('teqbvhvaxe');
    table.boolean('mlefuahcrc');
    table.bigInteger('bwsdkvisle');
    table.integer('atmzugtuan');
    table.float('osmswovcgd');
    table.text('zbhddhuvrj');
    table.bigInteger('jtflsijwsm');
    table.integer('jimotisypl');
  });
  await knex.schema.alterTable('afcxvlcqph', function(table) {
    table.integer('tjpslwevnu');
    table.json('ztfcxotzmj');
    table.boolean('afxsvcxbqk');
    table.bigInteger('qyglrjsdoc');
    table.string('bbgvbjuhde');
    table.string('diubducwtx');
    table.boolean('vbdsocknoz');
    table.bigInteger('kuiaomdocq');
    table.bigInteger('pjjhamrlkh');
    table.text('gdkllzzisv');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};