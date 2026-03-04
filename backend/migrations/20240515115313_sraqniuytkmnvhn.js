'use strict';

/**
 * Migration: 20240515115313_sraqniuytkmnvhn
 * Description: Create table
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('ekoxghbmbg', function(table) {
    table.timestamp('yujdzrzntj');
    table.float('zrtfzufepg');
    table.json('egtvzbgqdu');
    table.string('qohsajcgsu');
    table.string('mwkwpxrjiw');
    table.json('dzaxkmibus');
    table.integer('qpmsjvyqsh');
    table.timestamp('wnhxwwyrbe');
    table.timestamp('pmfgrbeiev');
    table.string('otrhtsdmwq');
  });
  await knex.schema.alterTable('hiyhzcukqj', function(table) {
    table.json('pwuptxneyw');
    table.json('neigwnvhvo');
    table.bigInteger('fnfitaahtd');
    table.string('iyijqoudmo');
    table.boolean('hxyvhiurmi');
    table.timestamp('hnpavqkinp');
  });
  await knex.schema.alterTable('yeyindadzp', function(table) {
    table.string('zwlcsfodiz');
    table.timestamp('fkdjylgnaa');
    table.timestamp('wsjfxyjhtx');
    table.string('zokktrrist');
    table.bigInteger('ohnofyqvwh');
    table.timestamp('imffnkdjpe');
  });
  await knex.schema.alterTable('jvbbxjdvjy', function(table) {
    table.float('ragiaagltp');
    table.float('uvmdiqxlnn');
    table.text('rjiwdmfpcb');
    table.bigInteger('oqvodalrly');
    table.boolean('uxzdpxxsby');
  });
  await knex.schema.alterTable('wtfplhmzyj', function(table) {
    table.integer('hdfhtxerds');
    table.boolean('xvjiyqxxob');
    table.boolean('frhcwzxpit');
    table.integer('bmkdbshdpn');
    table.bigInteger('syhxdtdunf');
    table.bigInteger('vhgyzpznmx');
    table.float('bzukntalpq');
    table.integer('hdvrlgjzhw');
  });
  await knex.schema.alterTable('kgucxzonnf', function(table) {
    table.float('luqcddiqjf');
    table.bigInteger('lbniziqgwq');
    table.bigInteger('mjrenprfho');
  });
  await knex.schema.alterTable('viilbkfcnh', function(table) {
    table.float('hdaxgsjrsp');
    table.bigInteger('hjabzkvxqr');
    table.integer('pnsnuodahx');
    table.json('bozebyjqbk');
    table.bigInteger('azswbrwhxt');
    table.boolean('jsipnqqfwb');
    table.boolean('yciupliikl');
    table.text('xgodlydade');
    table.text('nxiufjujwx');
  });
  await knex.schema.alterTable('zqglnimhsg', function(table) {
    table.json('euofjesdjm');
    table.text('vixjqroqos');
    table.float('atexaijjwx');
    table.text('nfwvryvqdr');
    table.text('aextsdviwf');
    table.float('nnfoufjgio');
  });
  await knex.schema.alterTable('phatvhhukq', function(table) {
    table.string('ddcqvfjvvq');
    table.text('rtmbhdcevf');
    table.float('micjvoaqur');
    table.float('dmvmmgdwge');
  });
  await knex.schema.alterTable('nwfpvvhbdt', function(table) {
    table.timestamp('xitpafqzkg');
    table.integer('zpvcssfnok');
    table.bigInteger('fecxctfntg');
    table.string('qdzwbpxaxg');
    table.string('koscoxzudb');
    table.bigInteger('eonwenryfm');
    table.json('hnmurckpwg');
  });
  await knex.schema.alterTable('zbaoscjbdo', function(table) {
    table.json('llkfgjidnl');
    table.float('hjdzwfdbde');
    table.bigInteger('csoondlikl');
    table.string('qifgnvjold');
    table.integer('ovhiazoses');
    table.boolean('fmfeyspdvn');
    table.boolean('awwiqmqzcs');
    table.text('qrwsdflkmd');
    table.string('dzygcmvhwh');
    table.float('hjtxdvjsst');
  });
  await knex.schema.alterTable('rqxofbttzf', function(table) {
    table.string('vbybxfqece');
    table.integer('rmqqonqnhb');
    table.json('qifnrhxukw');
    table.integer('gfgimrdrvj');
    table.timestamp('yqyaaoqznt');
    table.timestamp('yfmblzeosh');
    table.boolean('ydcbixtauv');
    table.string('zzwqjcarie');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};