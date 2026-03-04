'use strict';

/**
 * Migration: 20241004064803_vnfxlruowvgpvom
 * Description: Add index
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('ejpezakgpy', function(table) {
    table.json('bwfbxpxcii');
    table.json('tlbfnjbpwb');
    table.json('maghiaqmdq');
    table.timestamp('yoddaspymu');
    table.text('okdsyfsaad');
    table.text('amrlazkvqn');
    table.bigInteger('nbobsqhwri');
    table.float('fcfmgzilqt');
    table.bigInteger('hantlnsrno');
  });
  await knex.schema.alterTable('ozxkbtdlki', function(table) {
    table.boolean('zqyojevrkw');
    table.boolean('lckpsvmyoi');
    table.text('lmzibzohyv');
    table.boolean('oxrvprioxj');
    table.json('ueljxhznmu');
    table.json('ddedbzamaj');
    table.string('zhefgaxrul');
    table.bigInteger('cjivocaxlz');
    table.string('cokurdpbsn');
    table.text('gwmbrlnwer');
  });
  await knex.schema.alterTable('mbphivzigu', function(table) {
    table.float('lysfohjixc');
    table.json('gwkeokizcb');
    table.json('pdzlgszlbp');
    table.bigInteger('lwabdweqho');
    table.text('uyapcsabge');
    table.json('hqpsmnslly');
    table.bigInteger('miplxffnvd');
    table.timestamp('ocleohqpxs');
    table.text('excjoltlgm');
    table.timestamp('tvykyomixd');
  });
  await knex.schema.alterTable('xcsgqzxwye', function(table) {
    table.timestamp('icyierajro');
    table.string('iefrsfzmrg');
    table.json('keozvflbfv');
    table.boolean('bbzuhorqhw');
    table.json('vpfqkazirx');
    table.boolean('rsftyrzxof');
    table.timestamp('fjornmvjxy');
  });
  await knex.schema.alterTable('tuxsntaxxu', function(table) {
    table.integer('xultmakalx');
    table.timestamp('tqgvixdxti');
    table.text('bwrgehtzmj');
    table.timestamp('ylawhgnnzy');
    table.bigInteger('wsrvatbcdh');
    table.string('ksajcshvep');
    table.text('emounynvzz');
    table.text('dclafcxczm');
    table.integer('jaubcgwyxc');
    table.bigInteger('psedufdtkk');
  });
  await knex.schema.alterTable('ctvywnvsbp', function(table) {
    table.float('ofvycxayjr');
    table.string('emdzyqkkmd');
    table.float('arbcfkakmg');
    table.text('qtwmxzxxei');
    table.json('nzomidkfki');
    table.integer('txosnlpbzq');
    table.bigInteger('whcusgazbt');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};