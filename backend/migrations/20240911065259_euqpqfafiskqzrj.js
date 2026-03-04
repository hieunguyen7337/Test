'use strict';

/**
 * Migration: 20240911065259_euqpqfafiskqzrj
 * Description: Redo the undo
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('gtlmqodojz', function(table) {
    table.boolean('imfwznejdl');
    table.integer('fkqgnkskxk');
    table.boolean('poogsczwxc');
  });
  await knex.schema.alterTable('qxluvfdbln', function(table) {
    table.text('qwuvufjppe');
    table.float('fhrcharogi');
    table.bigInteger('fdpuhvstsb');
  });
  await knex.schema.alterTable('olqxxiovwq', function(table) {
    table.timestamp('juljzovpxo');
    table.integer('fqkxflwdlq');
    table.boolean('burwyxtwoh');
    table.json('luwkawcsii');
    table.timestamp('rrrwtekoez');
    table.text('oucklagoom');
    table.json('ywjmluzrwa');
    table.string('yvlxfhxwwk');
  });
  await knex.schema.alterTable('chjseiakys', function(table) {
    table.text('hxkzfqliau');
    table.timestamp('rmwcqgbfmg');
    table.integer('taxobwcelf');
    table.integer('kkwlnljgwk');
    table.text('uakioadruz');
  });
  await knex.schema.alterTable('implhlszdu', function(table) {
    table.string('yizhywikfs');
    table.float('ojrgkftllj');
    table.json('iczcpaeiit');
    table.json('nrxfstnltl');
    table.float('mtmumuqxuz');
    table.bigInteger('kphuymvaqq');
    table.boolean('nmfakwnrbe');
    table.float('rmhtawneoc');
    table.float('gmszcdfznr');
  });
  await knex.schema.alterTable('fjxhcrjedz', function(table) {
    table.timestamp('qaawtcwniw');
    table.float('ljjmvsqmhl');
    table.boolean('nleudstovi');
    table.text('jfjqtxjriu');
    table.integer('lmvqynafvo');
    table.string('kynskxparj');
    table.float('xqfkxyzfxd');
    table.boolean('puqgiisfij');
  });
  await knex.schema.alterTable('frvovxfnwr', function(table) {
    table.string('dwecwtkpwp');
    table.boolean('ldyeppckyh');
    table.text('kkslcppdqo');
    table.string('vxqtomoywi');
    table.text('iijygqfcgm');
    table.bigInteger('fwyysvckqe');
    table.timestamp('ocmrmxtxin');
    table.integer('lqxtcqbrnw');
    table.boolean('cnxvkxtjgq');
  });
  await knex.schema.alterTable('dcpvustswh', function(table) {
    table.boolean('flubwzzocx');
    table.text('cxndfttlhl');
    table.json('cuuqajxnxd');
    table.timestamp('stnpdhrine');
    table.json('lllxlqynun');
    table.timestamp('sydbsivdxc');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};