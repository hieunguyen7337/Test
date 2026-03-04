'use strict';

/**
 * Migration: 20240611181615_ljqtduleoskmnrr
 * Description: Rename field
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('hefufocfun', function(table) {
    table.json('bmmbypxhzt');
    table.json('dckuylakxv');
    table.float('lqidrwrnze');
    table.float('qrbxrxjchs');
    table.text('fothrnewfg');
    table.json('liyyrsiegk');
  });
  await knex.schema.alterTable('dfbajrfklg', function(table) {
    table.float('ukrgkcuutv');
    table.text('bsaqpolssa');
    table.boolean('pliextqbog');
    table.integer('cdepatqdth');
    table.json('ecofqirpct');
    table.bigInteger('ysniugctmu');
  });
  await knex.schema.alterTable('nfifyetxqb', function(table) {
    table.boolean('zkkhnlbvum');
    table.json('oktseeavsq');
    table.bigInteger('bpwnenomia');
    table.integer('tlhuvlgrtl');
    table.float('dmheoytbdt');
    table.bigInteger('bxkxdruula');
  });
  await knex.schema.alterTable('pgafroyjrm', function(table) {
    table.boolean('krcbltbvam');
    table.timestamp('swnziccldt');
    table.integer('uzahygcgog');
    table.float('hphshisjqv');
    table.bigInteger('jlatxztdck');
    table.boolean('azwcuvttbp');
    table.timestamp('mrmzsjvaya');
    table.text('thlvnnkzqw');
    table.bigInteger('vfiwixdqec');
    table.json('nvycvkndgf');
  });
  await knex.schema.alterTable('bfunrpsgze', function(table) {
    table.integer('ncjqrtxdnt');
    table.json('ehqvouzrff');
    table.string('ipgypybywu');
    table.boolean('lnvkfsvblq');
  });
  await knex.schema.alterTable('cujbeeltll', function(table) {
    table.string('ztglbmtose');
    table.json('bxbmfkjmwx');
    table.json('mvmzajpsfv');
    table.timestamp('zbmbskfhew');
    table.timestamp('rcwczbcfoh');
    table.text('jlbnbnvvkm');
    table.boolean('njydgqacof');
    table.text('iyaqyzbjrn');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};