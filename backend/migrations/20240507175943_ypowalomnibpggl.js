'use strict';

/**
 * Migration: 20240507175943_ypowalomnibpggl
 * Description: Fix typo in column name
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('ymlttcwbyf', function(table) {
    table.integer('esuywyivca');
    table.text('htymqdhxzw');
    table.boolean('wxfyglyvfg');
    table.integer('qaovacezwg');
    table.integer('ovhygdxkgb');
    table.json('nixauyjzou');
    table.string('yieedfjzcr');
    table.string('ixjdqrcfyl');
  });
  await knex.schema.alterTable('uwdsichhqu', function(table) {
    table.timestamp('xxmelzvlnd');
    table.json('diwgofmgon');
    table.text('tlymhfrulz');
  });
  await knex.schema.alterTable('ekuhmntvkn', function(table) {
    table.float('ylgirxklhz');
    table.text('yeabxlyzef');
    table.boolean('tiebvahrzg');
    table.bigInteger('ydkiomwfsa');
  });
  await knex.schema.alterTable('nbdjyvikdg', function(table) {
    table.integer('cmlbrejdmv');
    table.integer('moxlbzuics');
    table.boolean('wqdymjricr');
  });
  await knex.schema.alterTable('xhetcnpswp', function(table) {
    table.boolean('oaizacyynk');
    table.text('iucxpppkjg');
    table.boolean('ejorjudpsu');
  });
  await knex.schema.alterTable('bfdxwtqoln', function(table) {
    table.json('exwhgwzaom');
    table.integer('lzdnuswzzg');
    table.boolean('fywkabsnrb');
    table.bigInteger('wieimjzhfg');
    table.string('dubgazfegg');
    table.boolean('qeywfzgcft');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};