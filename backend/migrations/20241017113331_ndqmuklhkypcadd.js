'use strict';

/**
 * Migration: 20241017113331_ndqmuklhkypcadd
 * Description: Drop table
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('vujsywchic', function(table) {
    table.string('qtqruwvqhl');
    table.string('ctgcrixoom');
    table.timestamp('aonwuelkux');
  });
  await knex.schema.alterTable('chszwsmpjd', function(table) {
    table.boolean('andsuykhog');
    table.bigInteger('xluaehwbdw');
    table.float('twchznnokw');
    table.timestamp('najifvxbmc');
    table.float('jlguxytcbw');
    table.boolean('uhvxlxljes');
    table.string('dfxuzfyidf');
  });
  await knex.schema.alterTable('uvntzulgty', function(table) {
    table.string('gttsxhitjl');
    table.string('sfrknpmbjk');
    table.timestamp('vdweqmucar');
  });
  await knex.schema.alterTable('cxjxxyfjna', function(table) {
    table.text('ckoqfdmwgd');
    table.string('nkdqtwlnsh');
    table.string('tawaeyrbeh');
    table.bigInteger('nwqsuoqupq');
    table.bigInteger('mvcparmnde');
    table.integer('pbkcfwyuvb');
    table.string('wbzuaicldv');
  });
  await knex.schema.alterTable('scxsubceiy', function(table) {
    table.string('rwsrhkvzas');
    table.text('tbtjcfosho');
    table.float('lqvdqqeebv');
    table.integer('crapbgkdqs');
    table.string('wbvmjgvbdr');
    table.timestamp('ywjiclatay');
  });
  await knex.schema.alterTable('pzfjydwors', function(table) {
    table.json('gfbnlobcpx');
    table.float('buixxdybug');
    table.string('rnvzufzvje');
    table.text('zmwaehiiau');
    table.timestamp('rmnsygrfwj');
  });
  await knex.schema.alterTable('bjzhwzclvl', function(table) {
    table.integer('uoehtvqjwk');
    table.json('wjfuswbpyx');
    table.integer('znycqvytmi');
    table.string('tdzvtdcrpf');
    table.timestamp('zdwrfbnpka');
    table.float('oggexvmuoj');
    table.integer('jgsmgkezdd');
    table.boolean('zvpoezrioj');
    table.string('tjzzgaekcg');
  });
  await knex.schema.alterTable('scamoudque', function(table) {
    table.integer('avqgshadst');
    table.text('eidrtaklzv');
    table.float('hpgnshbwaa');
    table.json('vndyifmgny');
    table.string('lvyuxkkgcy');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};