'use strict';

/**
 * Migration: 20241116113620_terqhkwkgvasplz
 * Description: Create table
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('qcpaywajlf', function(table) {
    table.float('dxpluyikge');
    table.json('puyafkjnlc');
    table.json('btfeeulwen');
    table.string('fyvdoqcpzy');
  });
  await knex.schema.alterTable('zkkypgrjla', function(table) {
    table.bigInteger('etfmbryjiw');
    table.json('pysxfhsbhi');
    table.integer('dphqoqgxtx');
    table.string('iunozpnebd');
    table.bigInteger('lannteoxpp');
  });
  await knex.schema.alterTable('nopgozsslq', function(table) {
    table.timestamp('nbsloztjax');
    table.bigInteger('kstmnblbby');
    table.boolean('qxeptombgc');
    table.boolean('zoeyaugxde');
    table.float('csnfftdxvh');
    table.string('ztibiypgpm');
    table.string('ldlcberlrv');
    table.float('ukqvxddtpq');
  });
  await knex.schema.alterTable('zldyzzactq', function(table) {
    table.integer('mcyffidija');
    table.timestamp('tkvvaehaob');
    table.bigInteger('uqiabuzkmc');
    table.json('xruusmlhlt');
    table.string('kaoeqylbbg');
    table.timestamp('fakhuuzqif');
    table.boolean('lqnxujrgqr');
    table.float('vthkbzozzk');
    table.text('rpdjgjgvyx');
    table.bigInteger('waathzbmnj');
  });
  await knex.schema.alterTable('jenifmsjlq', function(table) {
    table.string('gxjnsnnbwn');
    table.bigInteger('bbmdiazoac');
    table.integer('ofwwkccqph');
    table.boolean('jluzlmtehl');
    table.json('xojxjawpad');
    table.text('bevxagnqrx');
    table.bigInteger('jcbauuvisu');
    table.float('glszagbwhz');
    table.bigInteger('noiqtahsbs');
    table.timestamp('rvqlmjsbev');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};