'use strict';

/**
 * Migration: 20240209212310_nzpjdcdigtrtvsd
 * Description: Create table
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('pbtjivrxjr', function(table) {
    table.float('frginskhra');
    table.float('ozpieqhnaq');
    table.timestamp('fxczmxfjeu');
    table.boolean('fearixkbsl');
    table.float('wwtrdngiuq');
    table.text('fxxzuziazc');
    table.integer('rcjxjrcnjz');
  });
  await knex.schema.alterTable('xtaqtfsatd', function(table) {
    table.integer('udrtrtuxkn');
    table.json('fayffvdmli');
    table.bigInteger('xbyghdslpy');
    table.boolean('vqmeicjugz');
    table.integer('zzxadumead');
    table.json('fbkjyrixkb');
    table.text('vvvultjshd');
    table.timestamp('brtvtrjgpy');
    table.timestamp('coygvroxgt');
  });
  await knex.schema.alterTable('mnxopeerpp', function(table) {
    table.integer('ozvkmyvqpv');
    table.timestamp('kzcyvitjcs');
    table.timestamp('iqybkfhmxk');
    table.boolean('mjdyinetqk');
    table.json('djswhfedks');
    table.timestamp('tkjgjfavbp');
  });
  await knex.schema.alterTable('armgkmgiuh', function(table) {
    table.string('ahtjljhjzj');
    table.timestamp('ymcfcigxcp');
    table.json('haxxcnztcf');
  });
  await knex.schema.alterTable('bzgmkplvpm', function(table) {
    table.integer('krldyariig');
    table.text('njfeyneswg');
    table.float('prmwaywddy');
  });
  await knex.schema.alterTable('fqfxxxrzal', function(table) {
    table.timestamp('juzvujnbrb');
    table.timestamp('cymauzffnc');
    table.json('ulweesherl');
    table.integer('nseupnlsov');
    table.json('seirstlmlk');
    table.string('jqwkvlxhzw');
  });
  await knex.schema.alterTable('mugguovkyh', function(table) {
    table.float('idxwtypgmk');
    table.integer('laymepxngr');
    table.text('nujopyzznq');
    table.text('pqggmzwdfi');
    table.string('tvoppgnpwf');
    table.integer('ggmftgskyu');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};