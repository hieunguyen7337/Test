'use strict';

/**
 * Migration: 20241009161703_hgkczhtrrsdzfbc
 * Description: Undo previous migration
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('kgxpzopcsz', function(table) {
    table.timestamp('nnstqvphlb');
    table.text('lefqegdcvn');
    table.integer('yrddlhivml');
    table.integer('hdvwniwgba');
    table.float('hcvmjpvgzj');
  });
  await knex.schema.alterTable('hqufzxsosp', function(table) {
    table.float('lmyqppvpue');
    table.bigInteger('kqvfsmqsjc');
    table.boolean('fjpgqbkdpi');
  });
  await knex.schema.alterTable('wrygrukgpa', function(table) {
    table.string('sqbucivlic');
    table.string('zgkvnydmzh');
    table.bigInteger('purscbvxcv');
    table.integer('nahfqaiijq');
    table.string('nlttdalijl');
  });
  await knex.schema.alterTable('uppktvptlu', function(table) {
    table.text('urxkkaablj');
    table.bigInteger('pecaydblix');
    table.text('bxpmzhgkxk');
    table.timestamp('ymvcszumxh');
    table.timestamp('zjdjgpjzzr');
    table.text('pszimynpwm');
    table.json('upegskskup');
    table.text('pelehpfqvg');
  });
  await knex.schema.alterTable('kydsaksbzg', function(table) {
    table.bigInteger('rjbjdsiyws');
    table.text('tsclimoofs');
    table.bigInteger('okbhhnmidy');
    table.float('cwloradyqc');
  });
  await knex.schema.alterTable('jcdhwlflrm', function(table) {
    table.float('uhjjglyiea');
    table.text('ltdynkjrnv');
    table.timestamp('kqxetxmgek');
    table.timestamp('gwfreyzvll');
    table.integer('wqasyintfh');
    table.json('evguhugvvm');
    table.bigInteger('edivdogbnp');
  });
  await knex.schema.alterTable('ixomkkupzp', function(table) {
    table.string('nzogmfzrlx');
    table.text('wykrutwcin');
    table.bigInteger('nsjgusxgsv');
    table.bigInteger('xhdkssiuur');
  });
  await knex.schema.alterTable('gafaubprqq', function(table) {
    table.string('frirwobhyb');
    table.text('idisqdlykk');
    table.json('ashkatlmxn');
    table.text('lqviudqeyu');
    table.bigInteger('rvrtagagdj');
    table.timestamp('gxznjdjswf');
  });
  await knex.schema.alterTable('bylprnqefq', function(table) {
    table.integer('jmxrnimxkv');
    table.float('xhkdveonts');
    table.bigInteger('vvlfjopxhs');
  });
  await knex.schema.alterTable('swpfygxevs', function(table) {
    table.json('lvxyqzbavd');
    table.integer('bfbaipyiry');
    table.float('kslucdgfcs');
    table.float('wxpooxadwj');
    table.timestamp('owpkkiwxnq');
    table.bigInteger('kwvdafxbkn');
  });
  await knex.schema.alterTable('cxjhmjmnsv', function(table) {
    table.boolean('jrxhcxoexq');
    table.timestamp('vdrtbksizw');
    table.float('dipkzmfzqt');
    table.json('npyubqrjly');
    table.string('hpflcruthm');
  });
  await knex.schema.alterTable('jmsjcqnxih', function(table) {
    table.bigInteger('jdwgbdaiir');
    table.timestamp('khubdgdcni');
    table.bigInteger('wijgzcjywh');
  });
  await knex.schema.alterTable('hglcovsmpt', function(table) {
    table.boolean('jxgujcxizi');
    table.bigInteger('zbrutwmnxi');
    table.json('kfawjqtnts');
    table.text('zabeypkpqz');
    table.text('tzwprayngx');
  });
  await knex.schema.alterTable('dnwxokagmf', function(table) {
    table.bigInteger('slmkwgrrrh');
    table.boolean('aeurppidne');
    table.string('nygwypkbki');
    table.json('dsusajnpvt');
    table.text('jsthjnldqp');
    table.string('vzsusbyrep');
    table.bigInteger('yurfbrwjin');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};