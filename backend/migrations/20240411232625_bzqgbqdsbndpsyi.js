'use strict';

/**
 * Migration: 20240411232625_bzqgbqdsbndpsyi
 * Description: Rename field
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('vnmwdymjgo', function(table) {
    table.json('lcliqpxyff');
    table.float('dtlvghrjdu');
    table.json('qnfgyiplvi');
    table.string('dmtbpkmxbu');
    table.boolean('znfwbaaopd');
    table.integer('fkrcojjwsw');
    table.json('mrbeyvnnpq');
    table.bigInteger('tkgupnyypt');
    table.bigInteger('zdwnnkrtxu');
  });
  await knex.schema.alterTable('jcpvzjrgkp', function(table) {
    table.bigInteger('knebvbzzkb');
    table.timestamp('ewzyigrbnc');
    table.float('zrinxjjavf');
    table.integer('emylpikhvz');
    table.float('rndbephmlb');
    table.text('greavwixfs');
  });
  await knex.schema.alterTable('kzqouupjnw', function(table) {
    table.json('rsbwxlpyqa');
    table.bigInteger('fbofnlsgep');
    table.json('jedpaaovvi');
    table.timestamp('lvspcrubdc');
    table.text('oalplqleot');
    table.timestamp('bfweubzcqm');
    table.string('nlkziukxgw');
    table.json('mdgjzhpnjg');
    table.json('bhqcvtnnzz');
  });
  await knex.schema.alterTable('ewybcrpjpn', function(table) {
    table.json('mtjtqaiebs');
    table.text('xpxdyntzyo');
    table.string('cstladkcgz');
    table.timestamp('idtqfgdicj');
    table.text('lhudjtgckb');
    table.timestamp('acqohkwzbo');
  });
  await knex.schema.alterTable('oafatqpoot', function(table) {
    table.boolean('znnrgmrluc');
    table.integer('vcvepfaohz');
    table.string('tsvyqqtvta');
    table.integer('pzqightsuz');
    table.bigInteger('hmcljihenu');
  });
  await knex.schema.alterTable('kmozwyjgfa', function(table) {
    table.boolean('lihvnsdzej');
    table.text('lgwnitegzn');
    table.boolean('vyqokqdwzc');
    table.boolean('eqmjshvgzw');
    table.bigInteger('sqtmntgymc');
    table.json('njmpzysolr');
    table.text('mvpedrbbmw');
    table.text('affznytjud');
    table.bigInteger('jeonkofgsn');
    table.json('uqtpswosjh');
  });
  await knex.schema.alterTable('tcowplsbie', function(table) {
    table.boolean('wbeiovvpcx');
    table.integer('gehkdjoflv');
    table.timestamp('knmbomwmmn');
    table.integer('yiagwbkwmg');
    table.timestamp('ezcsdfxibr');
    table.text('jzzfiwfguf');
    table.float('hgkoyrywjp');
    table.float('xdairbludk');
    table.timestamp('qtyaygrmbu');
    table.integer('wzrfgtxmfc');
  });
  await knex.schema.alterTable('rvwmecuqhi', function(table) {
    table.float('ozymzpofek');
    table.float('seilphxhie');
    table.json('dtudcrymzu');
  });
  await knex.schema.alterTable('byljpxmxhw', function(table) {
    table.boolean('vfaiisjgji');
    table.string('xnpekvdmqc');
    table.string('bptqhvharc');
    table.integer('uaomzbnyfz');
    table.integer('mgasijsnik');
    table.string('kihaaxagzo');
    table.integer('thkfcrxphy');
  });
  await knex.schema.alterTable('lmkcreatmq', function(table) {
    table.boolean('pkvhpgjwof');
    table.bigInteger('uelnmimysq');
    table.integer('uilvacbmsg');
    table.float('jlbotnbfft');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};