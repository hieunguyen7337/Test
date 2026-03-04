'use strict';

/**
 * Migration: 20240123045450_thgefyiuulcooxx
 * Description: Undo previous migration
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('xftnzcbdng', function(table) {
    table.string('gbhwpgndsp');
    table.string('yduvrwmcaf');
    table.string('sszhqsjifp');
  });
  await knex.schema.alterTable('acvjihdwov', function(table) {
    table.timestamp('ewbpdvhkri');
    table.boolean('tdiyfbezia');
    table.timestamp('iecplwnoeo');
    table.json('qwucvkvegl');
  });
  await knex.schema.alterTable('hdzksmlfle', function(table) {
    table.timestamp('ethoaslbzr');
    table.boolean('wxjlkwahqg');
    table.integer('wrehofwmpr');
  });
  await knex.schema.alterTable('rdoroicwzy', function(table) {
    table.string('tazvvoojgy');
    table.bigInteger('vlfzgeuqok');
    table.boolean('esiucnsyjo');
    table.float('qjhqdzvhcm');
    table.boolean('dgkzdjarjv');
    table.float('gmqzxqyuth');
    table.integer('oynaewspwo');
    table.timestamp('ymfauzuunz');
    table.bigInteger('hsdsopwgxg');
  });
  await knex.schema.alterTable('luiutfoafw', function(table) {
    table.timestamp('knvnjtyizg');
    table.text('fideezznsa');
    table.boolean('ytdnlqwzqh');
    table.integer('jyhhkxxrct');
  });
  await knex.schema.alterTable('kpyqbatymr', function(table) {
    table.float('bjkhxlwlpp');
    table.boolean('elzdwcboqn');
    table.bigInteger('cdiqepywow');
    table.integer('qboswbqclw');
    table.integer('ffybbtdctl');
    table.text('jewuwaqdyy');
    table.json('kzcqdllmxa');
  });
  await knex.schema.alterTable('uisigshkob', function(table) {
    table.json('iymuhhtlbr');
    table.float('rirssktbge');
    table.string('zldzrcieog');
    table.string('kgpqobatil');
    table.text('nuyaeplqgb');
    table.bigInteger('pvaajvvdzr');
  });
  await knex.schema.alterTable('enzpwlkjos', function(table) {
    table.float('nidjrodyjq');
    table.float('ccdsisbxmw');
    table.string('aquvgriswy');
    table.string('ualkgdnqym');
    table.text('nkfreouxai');
    table.boolean('uwonfvzqbk');
    table.string('tautbmznxl');
  });
  await knex.schema.alterTable('mjfknhclcp', function(table) {
    table.text('mvorkpzubu');
    table.text('ekcwtschyz');
    table.integer('sftgkoyvwn');
    table.json('hmhqybumrs');
  });
  await knex.schema.alterTable('uuavfbdzxd', function(table) {
    table.integer('leleppbtjn');
    table.json('lsydvkjwpc');
    table.timestamp('wfgpdrxwvk');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};