'use strict';

/**
 * Migration: 20240517000317_euvyfqkrduvwwmo
 * Description: Fix typo in column name
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('gockdghowz', function(table) {
    table.bigInteger('mllyzcqxjn');
    table.boolean('sqywzguuoi');
    table.boolean('paurpewsct');
    table.bigInteger('hobyivmnnc');
    table.timestamp('pcusjxgkui');
    table.bigInteger('mhklsaemie');
  });
  await knex.schema.alterTable('swoclttxrv', function(table) {
    table.string('srdqqickov');
    table.boolean('pckyyklpez');
    table.boolean('ehwtfmgixr');
    table.boolean('cnwcgxremg');
    table.integer('jwnvqymeke');
    table.float('mkojmiovgu');
  });
  await knex.schema.alterTable('oopuxxussq', function(table) {
    table.float('lfxjobzvuj');
    table.text('oapwqkrqkl');
    table.text('miqwmcgxuk');
    table.string('nmjzlpkzrq');
  });
  await knex.schema.alterTable('kbzezlwlsj', function(table) {
    table.string('rzjztqnaql');
    table.integer('jwhdbkoqbw');
    table.boolean('yexbmvfhbu');
    table.float('vthotssyqi');
  });
  await knex.schema.alterTable('bnwmzxozmn', function(table) {
    table.float('mnrxvaapzl');
    table.timestamp('blmgycholk');
    table.integer('mwxpqgvwir');
    table.json('cxcwhibphx');
    table.boolean('txsiwpjtai');
  });
  await knex.schema.alterTable('wgvegyjviy', function(table) {
    table.timestamp('jlduibfdzm');
    table.json('jszqmdlsgx');
    table.bigInteger('cekixlkhlt');
    table.bigInteger('bifpnnptsp');
    table.integer('qvrjpldyry');
  });
  await knex.schema.alterTable('nnpqfkwjkj', function(table) {
    table.timestamp('eukmeobnvc');
    table.string('wmydtgradg');
    table.text('mfhqxapbtx');
    table.json('fazxstwdft');
    table.json('sbojldpvii');
    table.float('lhozbtevlg');
    table.text('clnltawuxh');
    table.json('bcbpqfajms');
  });
  await knex.schema.alterTable('dorajaqdsh', function(table) {
    table.json('drphakphry');
    table.json('daftdrpgqa');
    table.bigInteger('njpqiwgckc');
  });
  await knex.schema.alterTable('zckuxtquuf', function(table) {
    table.float('eyosulhgcb');
    table.string('yrjezxzlwr');
    table.timestamp('gwsirqeych');
    table.json('jvugmqnkbr');
    table.json('uorbuayvzs');
    table.float('cwrawpvvhb');
    table.float('omsdkukpmw');
    table.string('fkkbhwdxaz');
    table.json('qcgphmrtzi');
    table.integer('odekuleinr');
  });
  await knex.schema.alterTable('citfiydnpt', function(table) {
    table.boolean('dnvxrsetdx');
    table.string('gbtvcydvnu');
    table.timestamp('hmayixsnny');
    table.boolean('isnqrvwfoc');
    table.boolean('nmclutidno');
    table.text('xxxobbypdf');
    table.string('gsymreivak');
  });
  await knex.schema.alterTable('hsrswnddpe', function(table) {
    table.json('quakxwbqae');
    table.json('dblitruled');
    table.timestamp('yxeiromoyo');
    table.bigInteger('ubgpbhgwck');
    table.bigInteger('fkzhzmhydn');
    table.json('slyerphbbk');
    table.boolean('rydtsyflyy');
  });
  await knex.schema.alterTable('cgoxqmheyf', function(table) {
    table.float('zwhmapqfoi');
    table.bigInteger('pxfpcwexsr');
    table.string('xqyjmjtygc');
    table.float('mvudfzurpb');
    table.json('bflpeklsao');
    table.string('mgfqrnhmsy');
    table.float('dbborcidap');
    table.text('uioawythur');
    table.bigInteger('swoqldrevf');
    table.json('rowrmyloyu');
  });
  await knex.schema.alterTable('mugxptylyb', function(table) {
    table.bigInteger('alebrngoiu');
    table.text('iwleycrxbd');
    table.text('ntzlqfexpt');
    table.text('kgbnehprls');
    table.timestamp('bbxhgaugst');
    table.float('uhtydtqnfo');
    table.boolean('nyikfdhcau');
    table.json('innitkcejb');
  });
  await knex.schema.alterTable('zfnzhgarrd', function(table) {
    table.text('dkfjtplkcc');
    table.timestamp('zqlduhcbot');
    table.bigInteger('osqnijjexm');
    table.float('mebpdadgmt');
    table.timestamp('lazcwqmzxs');
    table.integer('cqhspzqlnn');
    table.boolean('zrdkryuesm');
    table.float('fioacohfzz');
    table.text('htwwghiufu');
  });
  await knex.schema.alterTable('sdccihfdhc', function(table) {
    table.json('okjnmmpmao');
    table.boolean('igfqzidpzp');
    table.integer('jpmvfbtpgp');
    table.text('fpuiftbtla');
    table.boolean('ohgfqduzdc');
    table.timestamp('towbftofsw');
    table.integer('lomlpkohhf');
  });
  await knex.schema.alterTable('uzzooadhsf', function(table) {
    table.boolean('sebghyobqo');
    table.text('cweurtflsl');
    table.bigInteger('ewltuhmrms');
    table.timestamp('erbcfvcjjw');
  });
  await knex.schema.alterTable('ktzkrilzao', function(table) {
    table.bigInteger('ihsyozdvll');
    table.text('bvgkscdfeo');
    table.integer('xfxfxlreyi');
    table.json('empuamclrs');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};