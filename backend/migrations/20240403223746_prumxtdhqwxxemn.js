'use strict';

/**
 * Migration: 20240403223746_prumxtdhqwxxemn
 * Description: Please work this time
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('ksxabhllcf', function(table) {
    table.timestamp('itmqfkzbht');
    table.float('uehnachodl');
    table.integer('dbfhbrllgj');
    table.integer('kstovmnpfj');
  });
  await knex.schema.alterTable('kqxoincgbn', function(table) {
    table.string('ztyjqzmcfm');
    table.integer('dsjcfvzket');
    table.bigInteger('ifgqtddujr');
    table.string('hsklxpkehu');
    table.float('vvzcywnktm');
    table.text('psgpsleanx');
    table.text('knixmhqypi');
    table.boolean('bvtubawpkx');
    table.timestamp('bchkplubuy');
    table.bigInteger('ujljucybrt');
  });
  await knex.schema.alterTable('vncjfmjmbz', function(table) {
    table.string('zvzomoiwfr');
    table.timestamp('dkzxufssja');
    table.integer('sukytjawko');
  });
  await knex.schema.alterTable('rgcapqamfz', function(table) {
    table.string('kldqyjkvvx');
    table.timestamp('gwwezhbbzu');
    table.float('dupzdabdsq');
    table.integer('kkfknxomsy');
  });
  await knex.schema.alterTable('swptgfjwxn', function(table) {
    table.integer('otbtlyjmfd');
    table.float('tmhjkyabtj');
    table.integer('kwrjrblwjd');
    table.json('tnhksuodic');
    table.string('crecqxutjz');
    table.text('dlxtejqoat');
    table.boolean('uzcgvastjr');
  });
  await knex.schema.alterTable('luukifzgfi', function(table) {
    table.float('wfmpgtjkzv');
    table.float('yiwyxfpmgb');
    table.timestamp('bfwvdcqgmq');
    table.bigInteger('voqmglxilt');
    table.boolean('srkoadcuxb');
    table.float('cdcdfpqhxw');
  });
  await knex.schema.alterTable('xdtzqizhph', function(table) {
    table.integer('ipobhfegwc');
    table.float('pilenowtll');
    table.timestamp('egqpeydxog');
  });
  await knex.schema.alterTable('wvhxkzysuy', function(table) {
    table.timestamp('wxvaftpkuq');
    table.timestamp('aimlsxweab');
    table.timestamp('gsofktoqzp');
    table.boolean('uyfomjbhgf');
  });
  await knex.schema.alterTable('tenvlqcsaz', function(table) {
    table.float('vnalicuoyh');
    table.string('qtvfttodnt');
    table.boolean('vhsxqrmkzx');
    table.bigInteger('tntijhfsch');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};