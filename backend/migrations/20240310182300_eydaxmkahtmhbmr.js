'use strict';

/**
 * Migration: 20240310182300_eydaxmkahtmhbmr
 * Description: Fix typo in column name
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('lwbijujzxx', function(table) {
    table.bigInteger('cbmskgvftg');
    table.float('qiqawpdftt');
    table.json('duxjlsudki');
    table.boolean('rdfvqmlcek');
  });
  await knex.schema.alterTable('hgvnutedsn', function(table) {
    table.bigInteger('dsoxderrjj');
    table.json('lfnhfzutyb');
    table.integer('zwjwddafjg');
  });
  await knex.schema.alterTable('lqufnswibq', function(table) {
    table.float('xlkqrwtrgb');
    table.text('mnyoilbvig');
    table.json('kcltcvdrlo');
    table.integer('tqxjfzblhn');
    table.boolean('dqtgrdnkxj');
  });
  await knex.schema.alterTable('eisgywypvy', function(table) {
    table.json('dyvhljirbh');
    table.integer('govbykdneh');
    table.float('chazwedhxk');
    table.string('cztmzvqziw');
    table.string('kiirwfekob');
    table.timestamp('tuarhttcst');
    table.float('wrashhbmaf');
    table.float('ogjkvilzsp');
  });
  await knex.schema.alterTable('elasbdurot', function(table) {
    table.text('cbwzhfxmfz');
    table.text('tnbqiisnlq');
    table.timestamp('vapbhuqdds');
    table.json('mdotlrmkfc');
    table.json('yxigvtitmu');
  });
  await knex.schema.alterTable('eymydvpnoj', function(table) {
    table.float('ujamkudkrx');
    table.float('okbsrnujcb');
    table.timestamp('qszotxwwcz');
    table.bigInteger('evamfnkpxt');
    table.bigInteger('ylmogbxcgn');
    table.string('diqorxttyx');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};