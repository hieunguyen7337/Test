'use strict';

/**
 * Migration: 20240821204521_srnjtmygieeslac
 * Description: Redo the undo
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('bzlpoflmlm', function(table) {
    table.integer('fblcianczw');
    table.text('tedmwlvhxu');
    table.string('gyiknxjqek');
    table.text('runqlnjsbg');
    table.json('uuctqvacsg');
    table.boolean('qelldbwhpt');
  });
  await knex.schema.alterTable('epctmlwphh', function(table) {
    table.float('kvkzvsznqh');
    table.bigInteger('ipkionttdv');
    table.integer('ntewhofqzg');
    table.string('xjjxrvhcfw');
    table.float('ysyrmwmcbl');
    table.string('vzcwfmspmz');
    table.boolean('octphxtifd');
    table.timestamp('pgdatsbims');
  });
  await knex.schema.alterTable('jwikpsockr', function(table) {
    table.timestamp('fybfgteqow');
    table.string('uksqwolkyj');
    table.timestamp('aitroksdqt');
    table.bigInteger('ztiiygggqe');
    table.boolean('neryxxknud');
    table.text('dwuwbrndix');
  });
  await knex.schema.alterTable('cmvzdushwl', function(table) {
    table.integer('hpzjxpnxod');
    table.float('mzqeihfwak');
    table.text('cqkljgahto');
    table.string('zvrawnairr');
    table.timestamp('vqdygetydv');
  });
  await knex.schema.alterTable('ksfbrwbrcb', function(table) {
    table.text('jvceiembsy');
    table.float('najjcyznsk');
    table.float('ozuopkmgax');
    table.text('icbhhdgtzq');
    table.string('hrpghvxjgj');
    table.text('uehdtmlkhu');
    table.integer('dtsmcogwgq');
    table.text('belvcoadfw');
    table.timestamp('bltjrqhhbe');
  });
  await knex.schema.alterTable('hybqjocwse', function(table) {
    table.float('qcyyooorah');
    table.string('lgdjsixdec');
    table.integer('kgeuvdltzk');
    table.text('vgbkvwrbxd');
    table.string('hinjgqnrck');
  });
  await knex.schema.alterTable('svtjegybkx', function(table) {
    table.float('odhffkxxlu');
    table.timestamp('poduzxoamd');
    table.json('wxebzawyvb');
    table.json('eqzgdfthbg');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};