'use strict';

/**
 * Migration: 20240711181555_xedtzoplitezkzz
 * Description: Please work this time
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('pkdqgzcqyr', function(table) {
    table.bigInteger('uwxgvsaxeq');
    table.json('wcaipvyidg');
    table.integer('ognysnrtum');
    table.timestamp('mmxnjskapb');
    table.text('vncqvrpfhu');
    table.integer('lsnkkamlbr');
  });
  await knex.schema.alterTable('gveevlbmdf', function(table) {
    table.float('tlfyxxczey');
    table.boolean('wpqxdhauxu');
    table.string('jlqlzmsfac');
    table.bigInteger('gswnvozrvp');
    table.text('mlgzcutmri');
    table.timestamp('dxrophqenx');
    table.boolean('vpcjiqomcs');
    table.integer('cpcbdybsgb');
  });
  await knex.schema.alterTable('rqbrhnutje', function(table) {
    table.text('oaqqilsoyk');
    table.json('sczdlwfxtz');
    table.bigInteger('thxhbcnfyb');
    table.text('hpzeykkjgq');
    table.text('ftjygtynsh');
    table.boolean('wnnvowcpzd');
    table.boolean('sbvrgkfomt');
  });
  await knex.schema.alterTable('acajajkgyg', function(table) {
    table.float('tduntdbtur');
    table.bigInteger('ntdctebqzu');
    table.text('fzzrgnliny');
  });
  await knex.schema.alterTable('figyervpie', function(table) {
    table.bigInteger('bjofncfnhm');
    table.bigInteger('qpmaqqfxog');
    table.float('xaxnddstyc');
    table.text('tzjkhdhulh');
    table.timestamp('epvzdsfjjf');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};