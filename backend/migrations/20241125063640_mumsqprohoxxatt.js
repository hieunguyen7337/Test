'use strict';

/**
 * Migration: 20241125063640_mumsqprohoxxatt
 * Description: Add index
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('cqjgemunro', function(table) {
    table.string('dxvaxrbxev');
    table.bigInteger('xdeinijuss');
    table.json('arjxungmtz');
    table.bigInteger('zjsoazwpiz');
    table.bigInteger('zccmfxlxlv');
    table.float('sobrygyjgi');
    table.timestamp('mzhtzmvujj');
    table.text('pryuqhreru');
    table.float('njrqmmqhhg');
    table.integer('bqhgpnhivg');
  });
  await knex.schema.alterTable('tdsvpkarok', function(table) {
    table.float('aduzizcwkw');
    table.integer('kjmgomdeos');
    table.boolean('hqheptkkcb');
    table.timestamp('ehxwbvxhvs');
    table.integer('yjiuffirdc');
    table.bigInteger('mcaqtndunr');
    table.text('wommhrhnuq');
  });
  await knex.schema.alterTable('cjfhsggyqu', function(table) {
    table.string('bikbwxqvyu');
    table.string('gpmkmakvfh');
    table.bigInteger('oudepifves');
    table.text('pwdrjidflk');
    table.integer('ovrnxkoxqb');
    table.float('ctxzzlrnvs');
    table.integer('hnlmegqqdp');
    table.text('yrffopbgwp');
  });
  await knex.schema.alterTable('emynveivtc', function(table) {
    table.text('sjgobwetlh');
    table.boolean('dvmibjkyhj');
    table.bigInteger('hffhqdqbau');
    table.json('elogutjkjl');
    table.timestamp('spdyhcmkrs');
    table.string('hsoswsjprm');
    table.integer('hngdfrntnx');
    table.json('mzfshgebyp');
  });
  await knex.schema.alterTable('ebkwaoqfhq', function(table) {
    table.integer('vhnwvaxlsw');
    table.bigInteger('euywddhymg');
    table.timestamp('zvxjakqtsh');
    table.integer('judohrxvuq');
    table.timestamp('vqmslfdwze');
    table.boolean('kkywpomntc');
  });
  await knex.schema.alterTable('kmnsnilvvi', function(table) {
    table.timestamp('ssquedwrqa');
    table.text('akgebybnvr');
    table.bigInteger('whmpmpaevs');
    table.timestamp('mabjevsqod');
    table.boolean('xjethzkmjw');
    table.string('rrleibcwib');
  });
  await knex.schema.alterTable('lzawhupwok', function(table) {
    table.string('ohztodzfnl');
    table.timestamp('gedjazfqyo');
    table.bigInteger('afftaguqaq');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};