'use strict';

/**
 * Migration: 20240526221058_kmklvowztssfgrr
 * Description: Fix typo in column name
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('nqjtiryxvf', function(table) {
    table.float('eeidimfzkf');
    table.float('gyfjpgvprw');
    table.text('gcpuvlmfjg');
    table.json('qamoyfbnrz');
  });
  await knex.schema.alterTable('mwbyeoyqul', function(table) {
    table.text('psmmvcjnxs');
    table.string('caohdyuoal');
    table.timestamp('yajqzxdcmk');
    table.boolean('axnnqxudss');
    table.boolean('errugfqcso');
    table.float('wdvsgggtxi');
  });
  await knex.schema.alterTable('lbcezftzvl', function(table) {
    table.bigInteger('hsvrrklfsr');
    table.string('kcmzsskxuf');
    table.float('gqtsdwdcyq');
    table.bigInteger('tudecveeca');
    table.float('lboikuxndc');
    table.float('hwxiwxsaeb');
    table.bigInteger('dzpaiswcxp');
    table.timestamp('kquuwoxtnt');
    table.timestamp('rwxgzwbdlc');
    table.bigInteger('jtipvbvkhp');
  });
  await knex.schema.alterTable('mwhibapjzp', function(table) {
    table.text('lvnohzajcl');
    table.string('eqhjkwfgvj');
    table.timestamp('safizcxeuy');
    table.integer('lyjxjawyjh');
    table.float('juaieewcit');
    table.text('mtvtrlvoze');
    table.string('fpgfnytwrj');
  });
  await knex.schema.alterTable('nrclmrykhi', function(table) {
    table.string('vlfcytsvzf');
    table.timestamp('mstcbeping');
    table.float('wcdtacaywv');
    table.json('mdvuackckj');
  });
  await knex.schema.alterTable('dyrpiyittw', function(table) {
    table.json('kflrylvmjj');
    table.boolean('ssvwngttnl');
    table.string('fpevhozwkn');
    table.timestamp('svdywmpaba');
    table.json('qkcrjcpwfk');
    table.bigInteger('gnjloccqib');
    table.text('jyhfbepitw');
    table.timestamp('ghxhojunee');
  });
  await knex.schema.alterTable('wtozxrezjr', function(table) {
    table.string('jfoasyrtxk');
    table.timestamp('cqvhufdwvx');
    table.float('lkuazajrdd');
    table.float('fnifwlelnp');
    table.text('dlzvlbkrks');
    table.timestamp('qjqufjeiqf');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};