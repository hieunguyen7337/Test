'use strict';

/**
 * Migration: 20240516234245_uiuegfvdyzjwwtv
 * Description: Remove column
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('kzrwsioydb', function(table) {
    table.json('gnikqjxyqy');
    table.timestamp('ywejzjruek');
    table.integer('cyuuvzzlrb');
    table.bigInteger('fyxqzgfvzf');
    table.timestamp('oumytsflrb');
    table.timestamp('ujpfhbxlbo');
    table.boolean('bnoeijysdv');
  });
  await knex.schema.alterTable('bmwetcnhox', function(table) {
    table.string('yqeouiuhck');
    table.json('jrjtgnaodb');
    table.bigInteger('jwirpboohh');
    table.float('jmipqfbpcb');
    table.integer('zuyjgelsur');
  });
  await knex.schema.alterTable('dfcpfjzdbv', function(table) {
    table.string('qthucnyyqp');
    table.timestamp('rnxxfmktto');
    table.text('hhdatycmyt');
    table.integer('nmzsxpxwgp');
    table.json('rjmjnwngxc');
    table.boolean('nuhrlfloep');
    table.boolean('horusevoom');
    table.string('ushmqtsmqz');
  });
  await knex.schema.alterTable('thbucpiakd', function(table) {
    table.bigInteger('fqftbymbme');
    table.string('tqvqxxbcew');
    table.float('tsebphxaym');
    table.string('rysmlkoqqf');
    table.boolean('fxpbatvlsv');
    table.json('hljmoovxis');
    table.string('hefcpmkauk');
    table.float('dvhwxzjmld');
  });
  await knex.schema.alterTable('qwgalkmpxk', function(table) {
    table.boolean('agtotepvcr');
    table.text('sumwghrlyf');
    table.text('kmolypagtk');
    table.json('ypzursumut');
    table.boolean('zxcsmxwuhq');
    table.float('crxewdydbm');
  });
  await knex.schema.alterTable('ifktowxcrx', function(table) {
    table.bigInteger('rimfprwzmv');
    table.integer('lkemsmmisz');
    table.text('hfbrwrhbaw');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};