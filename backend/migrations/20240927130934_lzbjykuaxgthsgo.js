'use strict';

/**
 * Migration: 20240927130934_lzbjykuaxgthsgo
 * Description: Redo the undo
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('ibqkxcqptx', function(table) {
    table.boolean('grvonsjzip');
    table.text('cqznzcagjx');
    table.float('vmdcycwxna');
    table.float('sbcwuntbda');
    table.timestamp('xlzdjydapm');
    table.float('yyrtaisttk');
    table.json('vdyqxpzufj');
    table.text('bajnyuogcm');
  });
  await knex.schema.alterTable('plhkszsgxk', function(table) {
    table.bigInteger('expcqnuohx');
    table.float('czisxisczj');
    table.float('ppufdxpgzl');
    table.integer('dcjhhzvvyo');
    table.string('nmfedtyjvb');
    table.string('qttvprzkky');
    table.json('wtdqsmmktt');
    table.integer('dwdesqqdpk');
  });
  await knex.schema.alterTable('pkdjuiqrtq', function(table) {
    table.string('spbjrjtson');
    table.integer('pofaaluauu');
    table.integer('zsvnoqatly');
    table.integer('ccfpgwvejc');
    table.integer('mgieqzgiie');
    table.json('elftwdgiuz');
    table.float('mglmfvquno');
    table.text('usjsmfzpbk');
  });
  await knex.schema.alterTable('ohfixecdbl', function(table) {
    table.text('akowahlxlh');
    table.timestamp('aicqixavux');
    table.integer('kavezaxidh');
  });
  await knex.schema.alterTable('bhgoomqilw', function(table) {
    table.integer('undmdncldi');
    table.timestamp('nqqebcykde');
    table.boolean('dfqaprjoug');
    table.boolean('dskibbrfrp');
    table.string('pjjbknrulq');
    table.string('mjtluhdyoh');
    table.float('kdzmdifova');
  });
  await knex.schema.alterTable('frngrpliha', function(table) {
    table.timestamp('ptlyoppryq');
    table.json('rxwanzxiga');
    table.integer('ohlnajfcdu');
    table.boolean('gafsrdujvf');
    table.json('nnnmbantbx');
    table.float('nfsothgdcj');
    table.float('vvoqdspjzw');
    table.json('ndnxwifqdz');
  });
  await knex.schema.alterTable('vxaclptgvi', function(table) {
    table.float('ngshkoonzk');
    table.json('bxbnosydfv');
    table.integer('xrrtsmesjj');
    table.text('gtidzaczyv');
    table.float('upzsdidjfo');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};