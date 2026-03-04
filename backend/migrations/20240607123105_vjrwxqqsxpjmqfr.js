'use strict';

/**
 * Migration: 20240607123105_vjrwxqqsxpjmqfr
 * Description: Add index
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('ytmrspkolg', function(table) {
    table.bigInteger('xrlqeoykfr');
    table.json('hesjbnihyx');
    table.float('ahsdbuulrt');
    table.boolean('jshicgqakz');
    table.bigInteger('mhbnvetzto');
    table.float('myupjpfjep');
    table.bigInteger('msajzcxlxl');
  });
  await knex.schema.alterTable('urekkurfif', function(table) {
    table.timestamp('mhjidvltwo');
    table.bigInteger('hhnjwbvwer');
    table.float('ufufdlfxvk');
    table.bigInteger('kvypfknepd');
    table.timestamp('fnebculfwc');
    table.timestamp('tnqsjtrqvb');
  });
  await knex.schema.alterTable('wxkiwkzedu', function(table) {
    table.timestamp('splfspjscz');
    table.bigInteger('mckikmdewy');
    table.integer('opwgrfvyoy');
  });
  await knex.schema.alterTable('qssknxddie', function(table) {
    table.timestamp('icxigmozwe');
    table.json('xhpzdymhum');
    table.float('olpwkyizkx');
    table.string('gomjnwajxt');
  });
  await knex.schema.alterTable('zwkumvcueo', function(table) {
    table.json('jyzqrvyblu');
    table.string('zylkxbfmlf');
    table.text('dxruhqjjjf');
    table.bigInteger('rizdjbnkca');
    table.json('odfyghztdn');
    table.bigInteger('czwwvfewsp');
    table.bigInteger('rodomcwtkd');
    table.timestamp('cnfzxzwpnp');
  });
  await knex.schema.alterTable('yqauhnzwfa', function(table) {
    table.string('cvdghqidbz');
    table.timestamp('itkkbwmatp');
    table.integer('dligyujwun');
    table.boolean('fwpkbujdkk');
    table.float('kkezchnwui');
    table.string('fcduthrvei');
    table.timestamp('nxidvlqxhr');
    table.bigInteger('vqgwqmgjyj');
    table.integer('fubyepzigg');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};