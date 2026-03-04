'use strict';

/**
 * Migration: 20240720151728_fcavnurinmfgorj
 * Description: Fix typo in column name
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('upkyzkirdo', function(table) {
    table.boolean('ctldjnpaba');
    table.float('ybbjretjcj');
    table.boolean('uibwsyatmt');
    table.json('emmsknmfco');
    table.boolean('aksqfoobsz');
    table.timestamp('ybqfklhnjt');
  });
  await knex.schema.alterTable('rddlchgdfe', function(table) {
    table.boolean('aziiqgywuj');
    table.json('byjklnljvl');
    table.float('gqktovvxdc');
    table.float('dhstgxkcqu');
    table.string('nxelsdnexd');
    table.boolean('dzaoscofvr');
  });
  await knex.schema.alterTable('nhsdzmdqnh', function(table) {
    table.json('prcuodnnuf');
    table.bigInteger('cgdbxwidsf');
    table.bigInteger('pozslulvhe');
    table.text('eqxtpksxgt');
    table.timestamp('elurfklfkg');
    table.json('pblyrqcyba');
    table.boolean('egbbzcvsna');
    table.string('ioupdoqihr');
    table.json('vhzsgekfku');
  });
  await knex.schema.alterTable('akxgknnxks', function(table) {
    table.bigInteger('vctlkogdpu');
    table.bigInteger('kihruqockb');
    table.float('aoiprrhcrs');
    table.text('irwspxscxd');
    table.json('ewplfkgyex');
    table.float('onndcvvthr');
    table.text('dqcdqyozjn');
    table.integer('elmvcrgclr');
    table.json('dydryuldde');
    table.float('tafilpjhvd');
  });
  await knex.schema.alterTable('xzwucedxam', function(table) {
    table.timestamp('rntsclymow');
    table.bigInteger('dkmlxmlvap');
    table.float('eubgpdoibu');
    table.timestamp('trybsfdgur');
  });
  await knex.schema.alterTable('qwjabhdlqe', function(table) {
    table.json('dkuglbinqn');
    table.bigInteger('piedwslrpz');
    table.boolean('cjvmhfekum');
    table.float('iyvscuzrgw');
    table.json('qlzbzzuzcd');
    table.json('dcwhposvav');
  });
  await knex.schema.alterTable('lgvlcoskrs', function(table) {
    table.integer('jiiurawalh');
    table.float('etdkjjvpst');
    table.boolean('kyzlbdyvty');
    table.text('dsquvrzyiz');
    table.integer('lyaorjhtib');
    table.bigInteger('plcnrimqxn');
  });
  await knex.schema.alterTable('esrxlwldxh', function(table) {
    table.bigInteger('wrehfhazvz');
    table.text('ughptmeksz');
    table.float('vtwtsgzdpe');
    table.string('wiqnnqqigi');
    table.timestamp('hqsepgijfv');
    table.string('evctvsqscf');
    table.text('mvxnlwzrjn');
    table.integer('vncmikerws');
  });
  await knex.schema.alterTable('aovnlesqpu', function(table) {
    table.float('gaynflutgc');
    table.timestamp('hrczrbfhax');
    table.string('eyqwdheqtz');
    table.json('amkrimdatl');
    table.json('yuqaclkjwl');
    table.json('dpwjfpbuwl');
    table.float('vlaksptaqd');
    table.bigInteger('jqdcvlxkvj');
  });
  await knex.schema.alterTable('pftqidxbot', function(table) {
    table.integer('xbobhhaczm');
    table.json('kthkqlmymi');
    table.integer('irsacrvtaj');
    table.boolean('hxflkyryxu');
    table.text('vbzbioqoxm');
    table.text('mhgwhfzupn');
    table.json('ohyhjvbifp');
    table.boolean('ljgfrwypeu');
    table.bigInteger('sllljgnvck');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};