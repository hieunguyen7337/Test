'use strict';

/**
 * Migration: 20241023083633_pgirbdastnlvznd
 * Description: Redo the undo
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('fzxyzkxwrs', function(table) {
    table.text('waooqclrtf');
    table.float('qzjczbxklw');
    table.timestamp('obdnarrbss');
    table.boolean('otkodtpuev');
    table.string('mwpvjlzmdj');
    table.integer('zesvqqplaq');
    table.float('aoglqgybgc');
    table.timestamp('ynvrmjcswh');
    table.boolean('slfxkclyeu');
  });
  await knex.schema.alterTable('hgwfcotern', function(table) {
    table.integer('rpkrrmuiru');
    table.json('anxnldudqt');
    table.timestamp('cdbxgijpjf');
    table.integer('zwpgdelkie');
    table.integer('rpeowarigk');
    table.integer('vqcsctuiif');
    table.string('fxvvpjlrui');
  });
  await knex.schema.alterTable('jtndzbnlel', function(table) {
    table.string('wnebajmlio');
    table.bigInteger('zjnafvscyi');
    table.float('tkeefineeg');
    table.timestamp('yulvqmprob');
    table.float('elxnkuknci');
  });
  await knex.schema.alterTable('fqogeiirtm', function(table) {
    table.integer('gcugcrocre');
    table.text('pzepgkujjx');
    table.text('gosouvmppp');
    table.boolean('vccvjczddf');
    table.string('jbvtuomhjn');
    table.float('fjnabwrqqa');
    table.float('grrcgnotab');
    table.boolean('rlupflfype');
    table.timestamp('hraruwzcem');
  });
  await knex.schema.alterTable('ujpsqqcnwy', function(table) {
    table.integer('dxmhbntpph');
    table.timestamp('tzxcrhevzc');
    table.text('triznzhuuu');
    table.float('inykjrdyvp');
    table.json('qzpjueygur');
    table.float('pfquywpirr');
  });
  await knex.schema.alterTable('ztdgnclpkf', function(table) {
    table.boolean('zhatzkvnns');
    table.text('dbhxvnqnyo');
    table.timestamp('alrcwslrto');
    table.integer('qnghcjliba');
    table.float('aitrychtid');
    table.float('jcaifdvdjj');
    table.timestamp('hpqdyseopl');
    table.boolean('wigxojwxti');
    table.json('coqwkgjmzp');
  });
  await knex.schema.alterTable('jtsjwtrnjz', function(table) {
    table.string('oxrumoteax');
    table.integer('lsimynsbyv');
    table.integer('lzkgsyekji');
    table.boolean('qfdffsiret');
    table.json('gaudbfdeoj');
    table.string('aljkohwwuk');
    table.boolean('hmokkpdqjh');
    table.text('ocgauupvjh');
    table.boolean('lrormlnqie');
  });
  await knex.schema.alterTable('cweqihibja', function(table) {
    table.integer('bemuklqreh');
    table.timestamp('hflebatbiw');
    table.text('mdbjxvqiqw');
    table.float('jndfyoneua');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};