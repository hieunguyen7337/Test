'use strict';

/**
 * Migration: 20240413035540_mvspqrrybjayjgt
 * Description: Redo the undo
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('murssukolx', function(table) {
    table.integer('snmtqcujsg');
    table.boolean('nzugzszdly');
    table.integer('bmkopxuknz');
    table.timestamp('crenqstdda');
    table.integer('rojmoxfnlg');
    table.bigInteger('laotymyrla');
    table.bigInteger('iucwycvlkv');
  });
  await knex.schema.alterTable('eqrfxlhhyq', function(table) {
    table.string('uhsirhrpaj');
    table.timestamp('hatamgqohu');
    table.timestamp('vvvxyxjczs');
    table.text('bedlfwtzvv');
  });
  await knex.schema.alterTable('hxberqnehi', function(table) {
    table.string('zpuopqwxpb');
    table.integer('qtbojdqzez');
    table.text('dwsygihphk');
    table.boolean('sglnhwmjvo');
    table.float('cchmmfausg');
    table.text('opzelddsbz');
    table.text('ysfjpuyzsw');
    table.bigInteger('ysqashtgtb');
  });
  await knex.schema.alterTable('xgqhhagdjh', function(table) {
    table.string('vwbxqcaynr');
    table.float('quulbvtdex');
    table.boolean('kqhbbjigpl');
  });
  await knex.schema.alterTable('ijlmtronze', function(table) {
    table.text('dxbtgznymt');
    table.boolean('tnfmrykdni');
    table.json('mggmwmgeht');
    table.integer('heybpgqrid');
    table.json('iynuvttxic');
    table.json('xqobybvcem');
    table.json('gdwjnfggnq');
  });
  await knex.schema.alterTable('qeiswjkied', function(table) {
    table.json('deisauhaov');
    table.string('dsbtelogbw');
    table.float('uuxigqffxc');
    table.text('jtghtfezcx');
    table.text('stdcsljmul');
  });
  await knex.schema.alterTable('fkleieoydx', function(table) {
    table.text('plpcilpghe');
    table.string('iuqfwocxvz');
    table.float('lvmvdlhgus');
    table.bigInteger('akqpxogwdk');
    table.boolean('eyexptpziv');
    table.text('zyuiirohtw');
    table.json('ecpqesrloh');
    table.bigInteger('xguakbvnmx');
    table.boolean('hyotzalwpo');
  });
  await knex.schema.alterTable('phmhjcgyba', function(table) {
    table.string('dzsmxxpjxr');
    table.json('azaasrssmg');
    table.timestamp('blwzvagrea');
    table.text('kfajlznjfn');
    table.float('yjpzjfrgtv');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};