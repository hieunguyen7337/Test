'use strict';

/**
 * Migration: 20240224105013_lcgboneffznhodc
 * Description: Remove column
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('ccqnewiqxl', function(table) {
    table.string('cxswuckmar');
    table.boolean('eofublijos');
    table.json('uwtiupkvsi');
    table.text('dpgycnzcaf');
    table.boolean('fxmraoejmr');
    table.integer('mugykslfrt');
    table.boolean('fudmahdwkw');
    table.timestamp('czcvvwtynu');
    table.text('potqnwuikq');
  });
  await knex.schema.alterTable('wyxvqwwznv', function(table) {
    table.float('pelzlhlxae');
    table.string('jwelpwvhwv');
    table.string('wwapprhulz');
    table.integer('iufjkrjbdg');
    table.timestamp('edfpmxnncv');
    table.integer('tmyixarrgb');
    table.text('pimtkmqjto');
  });
  await knex.schema.alterTable('vovmidclav', function(table) {
    table.text('hlvrdycvum');
    table.integer('qtixdquvcq');
    table.float('vckmidnadv');
    table.integer('dtsnpzwfic');
  });
  await knex.schema.alterTable('mzerxekccj', function(table) {
    table.timestamp('dgfzmqkkev');
    table.boolean('tfaremdpbv');
    table.json('jxvkqbwpcs');
  });
  await knex.schema.alterTable('eocrnkpdop', function(table) {
    table.integer('vfshxwumzg');
    table.float('ssbyjmjxla');
    table.float('rorujymsos');
    table.integer('drimrpnvaa');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};