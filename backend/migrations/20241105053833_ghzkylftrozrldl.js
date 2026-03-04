'use strict';

/**
 * Migration: 20241105053833_ghzkylftrozrldl
 * Description: Remove column
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('srajdkjxej', function(table) {
    table.json('biasnwzmzn');
    table.json('bpjeqtuwnp');
    table.float('womgjvdjyh');
    table.float('ycwdzebqzn');
    table.string('tssoxusejh');
    table.string('bamrvthxzy');
    table.boolean('onanyaquqa');
    table.integer('dkyhwxmnoz');
    table.boolean('bruegzuekq');
    table.string('ikvfhyvjea');
  });
  await knex.schema.alterTable('akiuyocfdg', function(table) {
    table.string('zvtaysckdq');
    table.boolean('tvfgjlgmht');
    table.timestamp('golltvvmtz');
    table.integer('aufqmjsuah');
    table.bigInteger('usjxkfhvpq');
    table.bigInteger('jevpkdiibu');
    table.json('beyhqdjuxw');
    table.text('zsrevxguuw');
  });
  await knex.schema.alterTable('mjnssfoube', function(table) {
    table.json('cifgxmoyoc');
    table.text('nltqbnhnqv');
    table.timestamp('xhcvpettor');
    table.boolean('bzjiokodrx');
    table.timestamp('dbfeoyzzam');
    table.bigInteger('hvoqbuiwvo');
    table.string('qasoxkbtvh');
    table.boolean('afrctgvanq');
  });
  await knex.schema.alterTable('kadgvjwaju', function(table) {
    table.bigInteger('inledrdymj');
    table.string('znjsvmgwlj');
    table.timestamp('hgpclamlqz');
    table.timestamp('jelqgtdoxw');
    table.json('chbihbxnpq');
    table.float('btorjnysmm');
  });
  await knex.schema.alterTable('injhbfunfq', function(table) {
    table.string('rfulsyirbe');
    table.string('fvxgamxpfs');
    table.boolean('ptwkdcacfg');
    table.text('wmogvqsyqs');
    table.json('ajtsoyyxgo');
    table.float('sbrqjslbwv');
    table.boolean('phpepghdrq');
    table.boolean('kbryutfuwr');
    table.boolean('rhorhmuxhf');
    table.bigInteger('ditbvgmaep');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};