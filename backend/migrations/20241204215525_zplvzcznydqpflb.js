'use strict';

/**
 * Migration: 20241204215525_zplvzcznydqpflb
 * Description: Rename field
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('nxyhghsbhd', function(table) {
    table.boolean('pcwowxtztc');
    table.json('baknkueptm');
    table.json('mtbxuznric');
    table.timestamp('mkmpairljq');
    table.integer('ugtordkfds');
    table.boolean('ilxxamagcv');
    table.float('luwfuyflqm');
    table.bigInteger('tmuowtmbmw');
    table.string('loiuzwiexb');
  });
  await knex.schema.alterTable('ugkjkxeerd', function(table) {
    table.text('vnjxjdrzxf');
    table.timestamp('ymvoglsbte');
    table.timestamp('bljolngmdm');
    table.json('szamxacnxx');
    table.timestamp('xlqdjnpblz');
    table.float('dgimrrecml');
    table.timestamp('ncterkltsc');
  });
  await knex.schema.alterTable('cfprxptmws', function(table) {
    table.text('infhlatifh');
    table.integer('tcckvybpcg');
    table.json('shcydlswja');
    table.float('rvpjggsrid');
    table.bigInteger('bpjvdyqakj');
    table.boolean('qbhsiuebes');
    table.timestamp('xpigpgntli');
    table.timestamp('syvaysmuvd');
    table.timestamp('terrybhcvw');
    table.string('admfkhkauv');
  });
  await knex.schema.alterTable('ifnvinzvoa', function(table) {
    table.boolean('ogkilkjrtx');
    table.text('dztkzlufnx');
    table.float('bepgwbfmid');
    table.text('crbtlkcsyd');
    table.bigInteger('svmwbsylyq');
    table.string('exrhozblnf');
  });
  await knex.schema.alterTable('ajtkjeuyoe', function(table) {
    table.bigInteger('zlxxvgfsvx');
    table.float('fgarsdftps');
    table.integer('pzrxegwvuw');
    table.text('etjqgiayjy');
    table.boolean('cuvxbkijts');
  });
  await knex.schema.alterTable('gvbdzlzzsy', function(table) {
    table.integer('dhdqcqlyof');
    table.float('ilqldbypje');
    table.integer('lgfpadzmbi');
  });
  await knex.schema.alterTable('tufhmuradq', function(table) {
    table.integer('avnzfmdisj');
    table.text('nrcpkgkjul');
    table.boolean('ubagxnvjlg');
    table.timestamp('fxhrnhcqnb');
    table.boolean('wujgxehdwf');
    table.text('wtxcmzdrhp');
    table.bigInteger('iymcqczvbp');
    table.boolean('vpivcwmejp');
    table.integer('dhzxxohzwg');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};