'use strict';

/**
 * Migration: 20240309184833_qlqfhiutmsalttz
 * Description: Remove column
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('jokghvbtpd', function(table) {
    table.float('elphvqaygd');
    table.json('mvxyigpnym');
    table.text('fqmerjletf');
    table.json('kdcucgwcam');
    table.boolean('fmppqoudgg');
    table.float('qgpbnzasay');
  });
  await knex.schema.alterTable('ihtvolszvo', function(table) {
    table.boolean('rpgwccavje');
    table.integer('qvydjezkcp');
    table.boolean('gjyeyivmxo');
    table.timestamp('lgifoncwwg');
    table.float('skzdlargow');
    table.float('blvbvqcwds');
  });
  await knex.schema.alterTable('hevywhukvb', function(table) {
    table.timestamp('aaayritrqi');
    table.float('iunfhyvwuu');
    table.float('thhjbgiagk');
    table.float('kvzlvsizsy');
    table.json('fxkyxtzovg');
  });
  await knex.schema.alterTable('eoitphndbu', function(table) {
    table.timestamp('sezbygxtob');
    table.text('rvjmqcgtwk');
    table.integer('crtoycbdgm');
    table.boolean('kswutxrdha');
    table.float('nffiprjqrs');
    table.integer('nwjaqigvoi');
    table.boolean('dnqspzuvnw');
    table.text('gckvkxgmeq');
    table.string('aoaechardy');
  });
  await knex.schema.alterTable('qtqlpfmsuz', function(table) {
    table.string('sudlwcguyh');
    table.integer('ofymvpqgbd');
    table.json('hovbmthlnv');
    table.bigInteger('bwtkxwklee');
    table.json('phdhshdvhn');
    table.string('aqfnwuxabh');
    table.string('xxjrjtmyeq');
    table.float('ebepzazzpf');
    table.timestamp('ccbifvbxmu');
  });
  await knex.schema.alterTable('tmrsbovahv', function(table) {
    table.float('tpbkleifqz');
    table.text('ifwuenbxhc');
    table.text('tbjvwglnnm');
    table.boolean('cxtevrexve');
    table.integer('lsoumoquid');
    table.text('wcecuncomv');
  });
  await knex.schema.alterTable('baxhhugtsg', function(table) {
    table.integer('xgyxurpskn');
    table.json('xvyhfddvxl');
    table.bigInteger('waccoaqhwd');
    table.json('xnpxmyuhex');
    table.json('ezplfneaox');
    table.float('xojnfvtlnc');
    table.string('tjaaakaypy');
    table.json('nfmchpkxgr');
    table.bigInteger('zlpfzlgsrk');
    table.json('hjttntpkml');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};