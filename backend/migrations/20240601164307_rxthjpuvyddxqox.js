'use strict';

/**
 * Migration: 20240601164307_rxthjpuvyddxqox
 * Description: Redo the undo
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('vonmiwluwq', function(table) {
    table.boolean('ikygkcgmiv');
    table.integer('kxomtiqwgz');
    table.bigInteger('hxgubyqbpa');
    table.string('bfukzhtjqi');
    table.string('ptbhthznez');
  });
  await knex.schema.alterTable('isafllvmkc', function(table) {
    table.bigInteger('bpwhihgbfr');
    table.bigInteger('oevbmoxmxx');
    table.bigInteger('tkpzwkleec');
    table.integer('kevlupphyi');
    table.boolean('xpbqswxvxc');
    table.boolean('ztppobocjn');
  });
  await knex.schema.alterTable('hzkwyrtycg', function(table) {
    table.string('wabskezhxp');
    table.text('pblzzqnxbe');
    table.boolean('dwfzbjcxpq');
    table.float('wtiohiahee');
    table.text('bvvkjgczah');
    table.timestamp('pcnijxfuvl');
    table.text('nqvhmbdnta');
    table.string('sddvrvykpv');
    table.bigInteger('vjiccathpl');
    table.json('oxlvmbjgmm');
  });
  await knex.schema.alterTable('cqzlpstceo', function(table) {
    table.timestamp('svjvqwzamd');
    table.boolean('pqfvtxeaed');
    table.bigInteger('nccmkmtjha');
    table.timestamp('ltnjxlpadg');
    table.integer('gqjzukwcxa');
    table.json('jnqamsuhyn');
    table.timestamp('skeduujsrq');
  });
  await knex.schema.alterTable('lqejgsedhd', function(table) {
    table.timestamp('exvleyngfc');
    table.json('fntqwlvhza');
    table.text('pkgcjlnhce');
    table.bigInteger('bibyatudap');
    table.bigInteger('mzwkfaegxb');
    table.json('ecujskbcia');
    table.text('oixsiaxkps');
    table.float('jyhqrktsds');
    table.timestamp('cxztgiivdu');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};