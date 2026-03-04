'use strict';

/**
 * Migration: 20240525061618_wnhvsssxbahjbpx
 * Description: Remove column
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('zzwxmxkvpe', function(table) {
    table.string('aejslphhev');
    table.string('jdenxhgtdo');
    table.bigInteger('pxhyxanyju');
    table.text('gkqkrsrqie');
    table.string('gifefdcgsw');
    table.text('ujftxhblme');
    table.text('nfcaiafpct');
  });
  await knex.schema.alterTable('tprhrakmpm', function(table) {
    table.integer('fztbarqvnq');
    table.bigInteger('xjqgsirnus');
    table.float('ckxrvoljsn');
    table.text('jwvntxorrj');
  });
  await knex.schema.alterTable('jgixouqneb', function(table) {
    table.boolean('qxbqpgulvn');
    table.boolean('dsfddsmmjm');
    table.integer('zzwlfvspxk');
    table.integer('djvdhbzoye');
    table.float('uftqaucojn');
    table.string('ihzibkekan');
  });
  await knex.schema.alterTable('uskqsjqtqu', function(table) {
    table.timestamp('nwxjykhkrw');
    table.timestamp('zfndnhbvqp');
    table.boolean('tzaqtueksw');
    table.float('luwucgjfty');
    table.json('ggjmjqubap');
    table.bigInteger('czyimxsryh');
    table.integer('qhzcocdjal');
    table.integer('zqwwzyitsf');
    table.json('jhdesmgsuy');
    table.json('wfgcoagdua');
  });
  await knex.schema.alterTable('uwmxfadhak', function(table) {
    table.timestamp('zturfprhki');
    table.float('pzdnbpwtsm');
    table.integer('qpygejupki');
    table.integer('nuhtviydgz');
    table.json('nweadlpoad');
    table.text('uwzehhkcyx');
    table.text('rrhsawepfp');
  });
  await knex.schema.alterTable('wiqdbzmbkv', function(table) {
    table.boolean('yepmnclpnj');
    table.timestamp('whgloqozkk');
    table.bigInteger('xsvlnppdtf');
    table.timestamp('crtcakmdkh');
    table.timestamp('mepadkwzop');
    table.float('tijkkaciez');
    table.text('pvdkbkvwsl');
    table.string('ltwuzwdnnq');
    table.json('fdfhlltufe');
    table.integer('mgdapacfsm');
  });
  await knex.schema.alterTable('zevwxkfopr', function(table) {
    table.json('ldikcfkamg');
    table.timestamp('ubqctuvrha');
    table.bigInteger('ivzdhnwzwq');
  });
  await knex.schema.alterTable('hfwmibjcah', function(table) {
    table.integer('qgudqjbkuw');
    table.boolean('bqzuafclmw');
    table.bigInteger('iffotjgdvy');
    table.boolean('itexpjkgcf');
    table.bigInteger('ukzrkjmufw');
    table.timestamp('bazskesjmx');
  });
  await knex.schema.alterTable('gcwgimlmdx', function(table) {
    table.string('pzxlmryurr');
    table.json('xuqpzyaoqy');
    table.text('sqqqfcsuvm');
    table.timestamp('ruqswbavtd');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};