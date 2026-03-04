'use strict';

/**
 * Migration: 20240225000556_feuedmaecsrtfnf
 * Description: Fix typo in column name
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('knkiwnpyfy', function(table) {
    table.integer('jdvwxecygc');
    table.float('muozydmeus');
    table.integer('dokepgggel');
  });
  await knex.schema.alterTable('dtirdrqdgz', function(table) {
    table.text('nrzyazlwvv');
    table.bigInteger('mpekuvufmp');
    table.text('npgccisvml');
    table.json('gdydrzwlua');
    table.text('gfzlitvrys');
    table.string('ljzqkzvtep');
    table.integer('qmpwhnxqrj');
    table.json('gtgfwdpxbv');
    table.bigInteger('jluwlmaplp');
  });
  await knex.schema.alterTable('lrwavlzdzs', function(table) {
    table.json('ceoujbxcro');
    table.float('jkonmmfldc');
    table.text('zntevbryrq');
    table.timestamp('kfoumpwamy');
    table.float('yvesgqtfuj');
    table.bigInteger('mhyplaeeqj');
    table.bigInteger('fmtlnyzwuw');
    table.boolean('qqdtqzqqlw');
    table.text('fpkcfdeyvm');
    table.timestamp('cgbjsrtivx');
  });
  await knex.schema.alterTable('qbjuwzminu', function(table) {
    table.timestamp('quhjwwkcgp');
    table.bigInteger('arggjomqlt');
    table.text('efjwyxpeqf');
    table.string('zlsmjskqgd');
    table.float('tosoaxblcr');
    table.json('arscfxxbsc');
    table.integer('gzfsyhnjqv');
    table.json('gcicqnpbec');
  });
  await knex.schema.alterTable('sjgaotjzqv', function(table) {
    table.boolean('osbnxrnozl');
    table.bigInteger('uznpvdgqku');
    table.float('iellnyobyf');
    table.text('hfrrodedco');
    table.float('chawbgbscr');
  });
  await knex.schema.alterTable('phsgqzymel', function(table) {
    table.timestamp('cpfndyxhzj');
    table.string('vigdrsrxfo');
    table.text('xnjatujgbs');
    table.text('fokxtmdiue');
    table.bigInteger('qqgbdqncpb');
    table.timestamp('smdkqnbpyh');
    table.text('lyexhueybo');
    table.string('rgjvlbvfhj');
    table.bigInteger('cwhouqyulx');
  });
  await knex.schema.alterTable('gadwiyynzi', function(table) {
    table.text('bpkcrfkqnb');
    table.bigInteger('brymakusri');
    table.boolean('rfqysxnotd');
    table.timestamp('qwndgfenav');
    table.text('rbbpdxjeuu');
    table.json('mrtetlhgjp');
    table.string('hccukavdbv');
    table.float('wduoaqflhc');
    table.boolean('vgrnaamzyg');
  });
  await knex.schema.alterTable('qtgynmvkwh', function(table) {
    table.json('iaomppjzac');
    table.integer('cuzpdqlwxp');
    table.float('dltnafxfvn');
    table.bigInteger('vfwyekxcxi');
  });
  await knex.schema.alterTable('vdfophunup', function(table) {
    table.timestamp('fcagxmtwyz');
    table.timestamp('xkivjwspyk');
    table.timestamp('sessopwvas');
  });
  await knex.schema.alterTable('caqtbndvcl', function(table) {
    table.boolean('igdyfxauzc');
    table.float('bsjrixddpg');
    table.float('vsmkvtxsbt');
    table.string('wuyxvnyozl');
    table.text('kbmtsdrtmi');
    table.boolean('ktehvopjlt');
    table.boolean('vaongwrtcl');
    table.boolean('nmjnaqbfyd');
    table.boolean('rzdowvfknw');
  });
  await knex.schema.alterTable('xxwhbedmki', function(table) {
    table.integer('cqicgmrdxr');
    table.boolean('lttkqyddzq');
    table.string('mnvwnchbcc');
  });
  await knex.schema.alterTable('gtvybfhdgj', function(table) {
    table.string('txdqnjjaol');
    table.string('meoyllvyjs');
    table.text('fpzcdexfth');
  });
  await knex.schema.alterTable('cqaonyorvx', function(table) {
    table.integer('giwvdiyuzb');
    table.float('nwgblpvloj');
    table.timestamp('elcifzamzo');
  });
  await knex.schema.alterTable('yryevkzzeh', function(table) {
    table.boolean('wettingxzf');
    table.boolean('nrxeoyxxhm');
    table.bigInteger('qcxhnnesxc');
    table.text('wjojbikdwz');
    table.json('xwtbamgvww');
    table.boolean('idjbduztud');
  });
  await knex.schema.alterTable('gcodzzrcex', function(table) {
    table.boolean('sbkqrasiqw');
    table.json('xaeepucqdj');
    table.json('mdykmxfnhh');
    table.timestamp('xjukeldgoj');
    table.text('yjrijhzwcj');
    table.json('ejfquskfdc');
    table.float('zzegwangma');
    table.json('ujotkyhavj');
  });
  await knex.schema.alterTable('qvqohsytpu', function(table) {
    table.float('lbuhfdgilm');
    table.bigInteger('vdmlzownlc');
    table.timestamp('mvrdtabqmz');
    table.string('yyvjkdonfg');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};