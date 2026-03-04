'use strict';

/**
 * Migration: 20240926085756_uhelwwoistzcehi
 * Description: Add column
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('tgkkgpytwk', function(table) {
    table.timestamp('oimfpxwtns');
    table.float('fonewarpmd');
    table.boolean('vvkmboowxz');
    table.json('agdefrtmjh');
    table.text('mfbhngcltn');
    table.boolean('qbqsbgmlhi');
  });
  await knex.schema.alterTable('ntidxejwlg', function(table) {
    table.string('wgzeifpslv');
    table.integer('iprtvzgkhi');
    table.text('aefkkouhaa');
    table.bigInteger('mqulkbwhwk');
    table.boolean('zxdsiymotr');
    table.json('uuhumeebcw');
    table.integer('jkskzbehdz');
    table.bigInteger('gmyrjfzepe');
  });
  await knex.schema.alterTable('gswaupcamn', function(table) {
    table.timestamp('brwmbwdznx');
    table.integer('eusyhzucdg');
    table.float('qwiyrhokaz');
    table.integer('ylmqdtiymk');
    table.bigInteger('ygsrswdaqc');
  });
  await knex.schema.alterTable('nizmqisdyb', function(table) {
    table.timestamp('kilmyrgvbl');
    table.text('fwphnoonkn');
    table.string('aqtwnqhxtu');
    table.integer('dsimvbeiev');
    table.string('qdcakpbiqc');
    table.string('qfnadwwvmn');
    table.text('grabyeggnz');
  });
  await knex.schema.alterTable('uhisbhqlxl', function(table) {
    table.timestamp('enlfrdptbc');
    table.string('embguoghfh');
    table.string('txgygjzqbu');
    table.boolean('uzqyydwmaa');
  });
  await knex.schema.alterTable('siljwqsyvf', function(table) {
    table.json('vxlkxkpggq');
    table.text('kmahahtyts');
    table.integer('rwiwgyubyh');
    table.json('nvnjkqiidx');
    table.timestamp('rmkfpiimuc');
    table.integer('mmmytbmkcq');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};