'use strict';

/**
 * Migration: 20241126081217_jbwdwefxhwvmgdp
 * Description: Drop table
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('gybmfgfqdo', function(table) {
    table.bigInteger('tusdyenlil');
    table.json('pyixthspvh');
    table.bigInteger('vewouaqqkn');
    table.json('ziuisexism');
    table.text('pfxgvfsclb');
    table.bigInteger('cewbedbogg');
    table.boolean('rllvubxaiy');
    table.json('ydjmeodgsp');
    table.bigInteger('klbcakzapj');
    table.boolean('yfjzropqei');
  });
  await knex.schema.alterTable('taihtljfny', function(table) {
    table.text('dcjfpktrot');
    table.json('armujjsjkp');
    table.json('fmdvpnngja');
    table.float('diwmkyuurr');
    table.json('onwkwnwdsh');
    table.boolean('lhixqrmeqd');
    table.json('jbzhhejzzs');
  });
  await knex.schema.alterTable('moxibncqmm', function(table) {
    table.bigInteger('mmyfnyerzc');
    table.json('rvjfijgoek');
    table.timestamp('wurqyxydtg');
    table.float('ntxuyetdxx');
    table.timestamp('whaxsvblgb');
  });
  await knex.schema.alterTable('kxckmqckxz', function(table) {
    table.bigInteger('vywrulpdsn');
    table.float('qmuenelbab');
    table.string('sbmnynxhux');
    table.integer('hjykrdoael');
  });
  await knex.schema.alterTable('mrprvctkqy', function(table) {
    table.float('cpgmjxwyyf');
    table.string('imipakietq');
    table.text('ngtwxvbvxe');
    table.timestamp('exjdrospvr');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};