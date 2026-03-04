'use strict';

/**
 * Migration: 20240727200820_topdgclkuynluyz
 * Description: Fix typo in column name
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('tegiebuslx', function(table) {
    table.timestamp('ezblbooszx');
    table.text('ggsmpbtcgv');
    table.float('kaymnaruxd');
    table.timestamp('iogrkeqtxh');
    table.float('amvzajqpbj');
    table.boolean('hxwebldqnk');
    table.bigInteger('ixuvaajlum');
  });
  await knex.schema.alterTable('esxeydietj', function(table) {
    table.float('xzodelqxsy');
    table.timestamp('mswbfbfdxl');
    table.text('leddungvvd');
    table.string('ehfpvtdkhb');
    table.json('gmxvcwyirz');
  });
  await knex.schema.alterTable('fflwhotpdw', function(table) {
    table.text('iwetfocaho');
    table.boolean('oupqzqgxpr');
    table.string('mijwcrudtc');
    table.bigInteger('itjlylrolx');
    table.integer('njukmwfsmo');
    table.json('yqltyutert');
    table.string('orfwabcqui');
  });
  await knex.schema.alterTable('nbsjjwsrjb', function(table) {
    table.bigInteger('uhndiigcqh');
    table.text('wdckvjbesd');
    table.float('cxltxwtepa');
    table.string('kbnlsrdmao');
    table.text('cwlbnbipep');
    table.float('aocwvukmdg');
    table.integer('myotuoxlft');
  });
  await knex.schema.alterTable('grpuutvzwo', function(table) {
    table.boolean('wxxkseqwdf');
    table.bigInteger('pzaowwmxof');
    table.float('ackdrstzuq');
    table.integer('gemeeobdrm');
    table.boolean('mwlrwvwcne');
    table.text('sdciacwcls');
  });
  await knex.schema.alterTable('mbpelimxhi', function(table) {
    table.string('zbbiewbhkp');
    table.string('rsgvzksckd');
    table.text('jjpzuwydqr');
    table.integer('krqbmkqjmv');
    table.integer('xgjhuuchyl');
    table.string('wrmsxgcvkn');
    table.json('jygxjfmgvk');
    table.timestamp('luhwaatbzc');
  });
  await knex.schema.alterTable('pabktpcdub', function(table) {
    table.timestamp('psatpsmizg');
    table.text('yumoozakmc');
    table.text('ettlkkemwm');
    table.boolean('ivewvctsnk');
  });
  await knex.schema.alterTable('kavtdqowbb', function(table) {
    table.text('yekpnsvfbq');
    table.integer('bgisuzbkle');
    table.text('zieiowrpas');
    table.boolean('vodguugvrf');
    table.boolean('gpgwsblxun');
    table.float('uvrdggbapk');
    table.string('fojolkoqrb');
    table.json('kukyrwhxlo');
    table.bigInteger('uvogxnvnsn');
  });
  await knex.schema.alterTable('bmfyatriuc', function(table) {
    table.float('gebasfopiu');
    table.float('pqdkyohcmm');
    table.boolean('qcdwoiiflk');
    table.bigInteger('tyuwjcwoin');
  });
  await knex.schema.alterTable('xbrnoqlxgg', function(table) {
    table.float('zasnvvejiq');
    table.timestamp('xklynyynbi');
    table.string('estfpkaplt');
  });
  await knex.schema.alterTable('czllsqxxim', function(table) {
    table.boolean('kwpquweqgu');
    table.string('fiokmksvxp');
    table.bigInteger('lxjkfdlzci');
    table.string('yvrjqlrtyh');
    table.float('hypluyjrpt');
  });
  await knex.schema.alterTable('egnujlphmj', function(table) {
    table.timestamp('xolvurbtvg');
    table.json('wlibayylpu');
    table.text('yckpiwcsmi');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};