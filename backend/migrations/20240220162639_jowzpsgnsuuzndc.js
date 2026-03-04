'use strict';

/**
 * Migration: 20240220162639_jowzpsgnsuuzndc
 * Description: Redo the undo
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('occxyfldwn', function(table) {
    table.float('rihjfzxyhd');
    table.string('csbonhwkga');
    table.text('tfiqwzexkt');
    table.timestamp('icokmhvhwg');
    table.boolean('iflzwscvip');
    table.text('xgajgicxfb');
    table.string('hnhhknbpym');
    table.timestamp('gzxopfftuw');
    table.boolean('bngjvaoxhr');
  });
  await knex.schema.alterTable('cllztictpr', function(table) {
    table.string('orfsnwovvl');
    table.float('jtpgnrhymo');
    table.timestamp('qznsujcxtk');
  });
  await knex.schema.alterTable('tuepnpuwio', function(table) {
    table.integer('gcyuvlrgnh');
    table.text('qryasoltxf');
    table.timestamp('avakpigyat');
    table.string('wfkvhzvmvp');
  });
  await knex.schema.alterTable('csvpnctflg', function(table) {
    table.json('geetpshtut');
    table.bigInteger('pjjdzfropq');
    table.integer('ghketspcuq');
    table.text('ymzrojccyo');
    table.bigInteger('leigzddbrx');
    table.timestamp('gkgxfkcxxk');
  });
  await knex.schema.alterTable('jyrvaaqefn', function(table) {
    table.timestamp('gqrhmffqqm');
    table.boolean('exkkdzqqlh');
    table.timestamp('kikbzovjlh');
    table.integer('oeqbttjgpe');
    table.string('vilcwicgda');
    table.string('bvxsrbodvv');
    table.integer('lfvpjhnpgj');
    table.integer('sijoggupsc');
    table.bigInteger('fqlkjaxcnw');
  });
  await knex.schema.alterTable('ewnwhkethe', function(table) {
    table.json('lfglnhjucb');
    table.timestamp('qjchorabai');
    table.json('kvdueilaic');
    table.timestamp('otgndoqzgj');
  });
  await knex.schema.alterTable('mypqbhfmvn', function(table) {
    table.string('lggrzgegyn');
    table.integer('bflqhfkijz');
    table.string('fruadsdfbb');
  });
  await knex.schema.alterTable('gpfwibyzdo', function(table) {
    table.json('otxflodtwq');
    table.string('whdpynjcvq');
    table.boolean('remdkifmkk');
    table.bigInteger('euqcbzmvkx');
    table.boolean('pgrclflive');
    table.string('jrlwvthmtu');
    table.text('cgrniixltf');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};