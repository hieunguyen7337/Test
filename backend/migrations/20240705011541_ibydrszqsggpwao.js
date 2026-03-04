'use strict';

/**
 * Migration: 20240705011541_ibydrszqsggpwao
 * Description: Create table
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('swtqtmrhrc', function(table) {
    table.string('nfwgkqlplf');
    table.json('tgrhefcpym');
    table.timestamp('iipvvwchhk');
    table.string('dxerrtmqla');
  });
  await knex.schema.alterTable('xkfaeymlqe', function(table) {
    table.timestamp('bmwkrlnddj');
    table.integer('cnghhqvzoy');
    table.timestamp('dqflkcduek');
    table.string('fovgejevyv');
    table.json('wwitlgdjvh');
    table.text('inqzfjpyyf');
    table.string('kzludjogon');
  });
  await knex.schema.alterTable('achdchqshp', function(table) {
    table.bigInteger('uqkncthudn');
    table.float('wdqgxvcxgo');
    table.json('hopuwzqyjp');
    table.text('vkfrxdfgda');
    table.integer('putpyrakbh');
    table.float('jkhlbwfhpc');
    table.text('plznjxicmp');
    table.text('obftufsemh');
    table.string('pksuzvshme');
  });
  await knex.schema.alterTable('gkcwthxvsi', function(table) {
    table.boolean('rzdqohabfi');
    table.integer('qjtpodlfzq');
    table.integer('flwatlouex');
    table.string('qxarwbzonj');
    table.timestamp('aasuijbczw');
    table.float('upxslazxtr');
    table.float('xwmihfksih');
    table.timestamp('jfadpqjwau');
    table.string('rsrjtohews');
  });
  await knex.schema.alterTable('vlqydfsnfx', function(table) {
    table.boolean('xsfiwsizop');
    table.float('wbyzwhlmgr');
    table.json('osrupjfaet');
    table.text('wxokejwzgg');
    table.boolean('ecpawnlnws');
    table.string('ellvnzvelh');
    table.text('bzmyduqvoq');
    table.boolean('fxjwzeiudr');
    table.timestamp('xqwiklfaoj');
  });
  await knex.schema.alterTable('lfijrpzurr', function(table) {
    table.text('grcxrpvdsc');
    table.json('whusasjtro');
    table.integer('qvvduajxqc');
    table.text('laywxhaeuw');
    table.integer('vwbhvsdikn');
  });
  await knex.schema.alterTable('duskoylzpp', function(table) {
    table.timestamp('cdskvfxcqp');
    table.float('ksemtwddbk');
    table.float('loimvdrcac');
    table.float('vwpnfmlkpg');
    table.integer('fnrdaolhod');
    table.text('uhbivsngep');
    table.bigInteger('spwvrkjzzs');
    table.text('xrtjwqkvtn');
    table.integer('mmxobxgjnn');
    table.text('mwexsnmrit');
  });
  await knex.schema.alterTable('rvahwnddys', function(table) {
    table.integer('ltppyjyjog');
    table.integer('qnjezuaykl');
    table.float('tcyudzrnbd');
    table.bigInteger('tzkjbcddgi');
    table.json('nxjlsbxoni');
    table.text('ennkcjlbcl');
  });
  await knex.schema.alterTable('pzpjaibsoz', function(table) {
    table.json('qmykrrssry');
    table.float('hlvfptkrfk');
    table.json('oqpzxteisp');
    table.float('umxuzxxcpd');
    table.bigInteger('aehmcigldo');
    table.float('lhuhlhuuku');
    table.boolean('tdrvvcxeqw');
    table.json('vwwyqfnfuy');
    table.float('rvfsqkoect');
    table.integer('miernsnfrt');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};