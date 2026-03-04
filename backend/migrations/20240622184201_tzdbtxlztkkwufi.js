'use strict';

/**
 * Migration: 20240622184201_tzdbtxlztkkwufi
 * Description: Please work this time
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('yrfuwcfspa', function(table) {
    table.boolean('qrirytlmro');
    table.float('gxxpsthsbd');
    table.bigInteger('moufgznuam');
    table.boolean('zewgtzwyze');
    table.float('aryctftieg');
    table.float('tnjlyjfwfl');
  });
  await knex.schema.alterTable('btclreahtm', function(table) {
    table.text('ickxwppvkp');
    table.text('fcuqhpitgv');
    table.text('uqckigcrsv');
    table.text('bysadmrtvd');
    table.bigInteger('dpzgbgqknp');
    table.timestamp('vlnborpama');
  });
  await knex.schema.alterTable('oowplqpovu', function(table) {
    table.bigInteger('uoyqhvycru');
    table.json('ockmcfqmeo');
    table.float('xxjxomdskf');
    table.text('dcegkiznbi');
    table.float('zuusculhay');
    table.json('mrfxmenzti');
  });
  await knex.schema.alterTable('hmqxbkaadi', function(table) {
    table.timestamp('lydznvelim');
    table.string('pimaokfxfs');
    table.bigInteger('aqyzpbrlvc');
    table.bigInteger('evwuqjvzhn');
    table.boolean('qyopwphnul');
    table.integer('djcvaxfclw');
    table.float('bhbipmtjcy');
    table.text('zztdmzfzzf');
    table.string('yvdqofjiqd');
  });
  await knex.schema.alterTable('oxykxgdfix', function(table) {
    table.json('hjpzxcwaaa');
    table.float('cpplddajfs');
    table.json('thwziasejg');
    table.string('kkyfusbrot');
    table.boolean('jazkgvzati');
    table.integer('mtxionviru');
    table.bigInteger('psvzhiqaez');
    table.string('rxwylmlipz');
    table.json('ytsrvdwuqq');
    table.text('qpyjinsabh');
  });
  await knex.schema.alterTable('cwtbaielku', function(table) {
    table.integer('ksuvfenbit');
    table.text('jucwumehpj');
    table.boolean('pykaiussme');
    table.json('yvukppklgy');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};