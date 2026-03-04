'use strict';

/**
 * Migration: 20240326163416_otsmfzwrnfccswy
 * Description: Undo previous migration
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('xlsriqlfbv', function(table) {
    table.bigInteger('rvjiheclwr');
    table.boolean('uxnbddqfpt');
    table.timestamp('sewbaxhblq');
    table.integer('ikqkwwsnzj');
    table.text('gtbzlcjjdx');
    table.float('bppfvwtouk');
  });
  await knex.schema.alterTable('xqddmczxvx', function(table) {
    table.string('crtgzmtrhh');
    table.integer('upwsqthtco');
    table.bigInteger('tfvwstgidx');
    table.timestamp('ugsjqfxndj');
    table.text('jpydpxmufz');
    table.boolean('swfdxbdlhy');
    table.bigInteger('fglghzyogc');
    table.json('uunlbgajxx');
  });
  await knex.schema.alterTable('fjtylrzuzq', function(table) {
    table.text('pfapjwmwsm');
    table.bigInteger('qgfwfpeesd');
    table.float('dssmpekygg');
    table.bigInteger('fxvvbjhxej');
    table.json('ttvttimeee');
    table.float('doswuuzgwl');
    table.string('yapchovygv');
    table.timestamp('sroomyxyjo');
    table.timestamp('cacwbnmdlg');
    table.json('umkwqjeyiw');
  });
  await knex.schema.alterTable('okovrqsuyr', function(table) {
    table.boolean('mpopqvswfn');
    table.float('yadqvfkwpc');
    table.string('sfeqjeshvp');
    table.integer('prtcircnyt');
  });
  await knex.schema.alterTable('yijajewfat', function(table) {
    table.string('xtbyuvnfir');
    table.boolean('vlykjgbovc');
    table.string('cedgoexvyf');
    table.boolean('fscaegjsmm');
    table.boolean('yhguhfmipu');
    table.integer('uvxnhrbdqx');
    table.integer('orzsnojvmz');
    table.integer('njvfvnokew');
    table.string('fzbuitseae');
    table.boolean('mvweerndqe');
  });
  await knex.schema.alterTable('wfsyfkvelu', function(table) {
    table.text('hyymdnmzmq');
    table.string('juqfegghlm');
    table.json('zquobptlzc');
    table.text('notjbnbywo');
    table.text('wzmjtfiydh');
    table.timestamp('ykttldctzc');
  });
  await knex.schema.alterTable('gimwslanuj', function(table) {
    table.integer('imgvmmxqne');
    table.boolean('snhlmpoabh');
    table.bigInteger('ojnvwmvmfi');
    table.integer('kftpafzawq');
  });
  await knex.schema.alterTable('qheiyyqfsk', function(table) {
    table.float('zgpxgkzbmq');
    table.string('rtajfvjepd');
    table.boolean('chfgvxdebg');
    table.boolean('saxncgftpm');
    table.json('gypuxuubfb');
    table.bigInteger('ehaqicnnad');
    table.json('pqdicbqpyi');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};