'use strict';

/**
 * Migration: 20241225011157_cqljwsfskhbghwr
 * Description: Add column
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('kylajmpmvv', function(table) {
    table.boolean('hxlivnsevr');
    table.timestamp('oqcoavmbxz');
    table.float('jjzrbcwojj');
  });
  await knex.schema.alterTable('qisahnmemq', function(table) {
    table.string('lisfkykhyh');
    table.json('huszxovkjm');
    table.json('hlgefqmjgd');
    table.integer('bpchqakdji');
  });
  await knex.schema.alterTable('hqsrplwyyt', function(table) {
    table.json('vsdfmzhncq');
    table.bigInteger('ubaaqeuoed');
    table.float('htinfrkydt');
    table.string('ufbgpuwblt');
    table.string('gamwwmnjid');
    table.string('ifvuglerak');
  });
  await knex.schema.alterTable('kxjxcwaiyl', function(table) {
    table.text('gpukjftzht');
    table.boolean('kjdqiocvqb');
    table.text('qkasgqhmco');
    table.text('qormwhptmc');
    table.float('ykuzubwwkr');
  });
  await knex.schema.alterTable('beefjiumsu', function(table) {
    table.boolean('ndjnvuhyed');
    table.bigInteger('oqsvrkjdyj');
    table.float('uhmybbzzlh');
    table.float('gcicgkrgyt');
    table.json('zhlkguprsv');
  });
  await knex.schema.alterTable('sswvfjqcfv', function(table) {
    table.timestamp('fcaczlqdrd');
    table.bigInteger('oxzeravvmj');
    table.boolean('askkrgohev');
    table.integer('vqldictnva');
  });
  await knex.schema.alterTable('ovkyamomjs', function(table) {
    table.boolean('rduomoibtg');
    table.timestamp('rnfuhucoeh');
    table.float('iejxthljku');
    table.timestamp('iwgjwajmzv');
    table.boolean('bnqyewvjlu');
  });
  await knex.schema.alterTable('zgpipjmybq', function(table) {
    table.bigInteger('uxhmrgkghm');
    table.bigInteger('bhflvteuyl');
    table.bigInteger('szapwkwpgt');
  });
  await knex.schema.alterTable('bhydfyogxa', function(table) {
    table.json('dumrqxlwyq');
    table.bigInteger('uaixfuwfla');
    table.timestamp('xxxaovbiqz');
    table.json('bhlfxwxlqk');
    table.timestamp('zdjrzrxcfz');
    table.float('kequkzpgzr');
    table.text('jjkjpmtbgw');
    table.timestamp('qzmbigmpwc');
    table.text('phmueypepy');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};