'use strict';

/**
 * Migration: 20241004084308_wondwbmvucnqzyu
 * Description: Create table
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('zasfalldwg', function(table) {
    table.json('xquuriffut');
    table.bigInteger('kuffttrozf');
    table.string('ihfrsrjaos');
    table.integer('xajsiabcxl');
    table.bigInteger('exlnomdjnl');
    table.boolean('gooqjrqrrc');
    table.boolean('eafvbnreas');
    table.json('tqczmtyxaf');
    table.boolean('dnqsvqufqg');
    table.text('kjoprtmput');
  });
  await knex.schema.alterTable('ittqlioyra', function(table) {
    table.text('bjxllstiaf');
    table.integer('lbbwrzoutm');
    table.json('fylxuzxrkj');
  });
  await knex.schema.alterTable('sfifdmcrwr', function(table) {
    table.bigInteger('yxzzxojtli');
    table.timestamp('omgdeidnye');
    table.boolean('ghrvxuadac');
    table.integer('hharvbmfob');
    table.text('rwanszppbt');
    table.timestamp('ykrlztavuy');
  });
  await knex.schema.alterTable('kjhymjgoim', function(table) {
    table.string('nehmbfzktk');
    table.bigInteger('koaiqabfdu');
    table.json('lruklqojkr');
    table.boolean('elfvhkghwi');
    table.integer('nxzehvtrkp');
  });
  await knex.schema.alterTable('ajxmtyuifv', function(table) {
    table.string('fiffxbfilg');
    table.text('ffulnlqhbq');
    table.json('oyylceetjq');
    table.string('zuboydwlcu');
  });
  await knex.schema.alterTable('gagpiadsse', function(table) {
    table.timestamp('yzemopmlqw');
    table.text('oblkfwycdh');
    table.json('btrfxpbjpv');
    table.boolean('lflruocxhd');
    table.bigInteger('sotumvuwpb');
    table.float('uzuuyfrbrw');
    table.boolean('ttrcllirvp');
  });
  await knex.schema.alterTable('dwprbupgfo', function(table) {
    table.timestamp('kmryczjsly');
    table.string('ryvpmlrvuu');
    table.float('vmajtisfmn');
    table.json('ayqecjmlzi');
    table.bigInteger('okuixonruv');
    table.bigInteger('sedetlvdwq');
    table.json('nczlfojpuz');
    table.boolean('hbspmhpmuw');
    table.text('raqvzqoleu');
    table.bigInteger('qwpuvkksrw');
  });
  await knex.schema.alterTable('knxaojzskj', function(table) {
    table.boolean('neasttplky');
    table.timestamp('kwczojixod');
    table.json('wusmhpiapq');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};