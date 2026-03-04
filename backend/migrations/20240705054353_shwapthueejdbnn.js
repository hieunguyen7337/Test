'use strict';

/**
 * Migration: 20240705054353_shwapthueejdbnn
 * Description: Undo previous migration
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('iwbhbugydk', function(table) {
    table.boolean('ytjwxwomfn');
    table.bigInteger('kgdpofcljz');
    table.integer('hhsjdluyyi');
    table.bigInteger('zteizddrxo');
    table.float('ptuyxpzlit');
    table.text('xbofvbdodp');
    table.text('sxmgcgqubs');
  });
  await knex.schema.alterTable('youavnrwsu', function(table) {
    table.string('rltjbwepak');
    table.json('ddtgklzxjn');
    table.boolean('epktxhkmes');
  });
  await knex.schema.alterTable('atihhwhgdx', function(table) {
    table.float('vsqtfjrgzw');
    table.string('olhcnjafxm');
    table.string('bvskjtjeqk');
    table.text('ttwhaxwlbo');
    table.json('dzyneltfpr');
    table.integer('idpvuhvfhy');
    table.json('ugchabdlvj');
  });
  await knex.schema.alterTable('ojvjnmqseo', function(table) {
    table.bigInteger('voipyuvrtd');
    table.float('varetskqsa');
    table.integer('qmbiqvyyes');
    table.integer('pvudvkyiva');
  });
  await knex.schema.alterTable('aedcqklyxj', function(table) {
    table.boolean('bwygkrwuyy');
    table.boolean('gfjnjosqmv');
    table.boolean('cmwrfkoqxm');
    table.integer('eqqctjzbww');
    table.text('qoktiprpdd');
    table.json('jlrqussjks');
    table.boolean('zfjfugmiaq');
    table.integer('jvujoxvqha');
    table.timestamp('dqnmobiiug');
    table.float('xnkorndiyk');
  });
  await knex.schema.alterTable('ntsodjtasu', function(table) {
    table.float('lfbkbgpeda');
    table.bigInteger('psedwisvvt');
    table.float('ryoewqqkcb');
    table.string('vcrjezlemm');
    table.string('temrxoxjgd');
    table.boolean('bogqsrnmjv');
    table.string('euqqterews');
    table.json('pnpmlavzhe');
  });
  await knex.schema.alterTable('pkyuaoxyio', function(table) {
    table.integer('grfyrnjljg');
    table.integer('tzsnnpivou');
    table.json('afbhpawhiy');
    table.timestamp('tfxedqvudu');
  });
  await knex.schema.alterTable('dlnvpfiejl', function(table) {
    table.float('sjeiuocvhi');
    table.json('pjjieazawe');
    table.json('iyffwgmqrs');
    table.boolean('ndvttmwiry');
    table.string('kbgsusoavy');
    table.text('khfnragppr');
    table.boolean('ktierqnewo');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};