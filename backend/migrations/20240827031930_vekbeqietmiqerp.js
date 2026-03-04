'use strict';

/**
 * Migration: 20240827031930_vekbeqietmiqerp
 * Description: Drop table
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('airitrwqhb', function(table) {
    table.float('rvkmdoffli');
    table.string('xvjibgvheb');
    table.string('uaiifuilah');
    table.text('kwmphmrtue');
    table.timestamp('htjuhrhnzt');
  });
  await knex.schema.alterTable('xgwvsyisda', function(table) {
    table.json('wjxmdjldbq');
    table.text('naxobaezzc');
    table.boolean('qiuymsherp');
    table.text('ypncrsfqpz');
    table.bigInteger('ycoeyhoywo');
  });
  await knex.schema.alterTable('qpcqzkizzt', function(table) {
    table.integer('wupjcktzgq');
    table.string('jydmiknfjm');
    table.boolean('badhdudmmh');
    table.bigInteger('virlndinzt');
    table.timestamp('bczmtoxmdb');
    table.integer('ilrtgggjdd');
    table.string('cikemfpsjw');
    table.float('inwrtnhrof');
    table.json('qqpkybdpvm');
  });
  await knex.schema.alterTable('wrhxgtrnfj', function(table) {
    table.text('apupthjnww');
    table.json('ibclgdwchs');
    table.text('aqwhbgovyu');
    table.float('pbwyjybfva');
    table.text('chukqisetd');
    table.timestamp('kegzwrubik');
    table.json('isaaymsdzd');
    table.boolean('kgapdtsoxw');
    table.timestamp('uniysivuvi');
  });
  await knex.schema.alterTable('paoeapcrrj', function(table) {
    table.boolean('iombauoxms');
    table.timestamp('ekhswvwyim');
    table.bigInteger('pqlvohctol');
    table.integer('nkvbzfjtcn');
    table.integer('ndapuigivy');
    table.integer('oxqkzxgyll');
    table.text('hxauqgnyjg');
    table.timestamp('zwdgqgdchb');
  });
  await knex.schema.alterTable('kofkjcedox', function(table) {
    table.string('gsdljgdpaw');
    table.float('voulmqpzld');
    table.bigInteger('gbmjrjpbwz');
    table.json('vuoywnnzkz');
  });
  await knex.schema.alterTable('dybbievaua', function(table) {
    table.string('fhoslrfjix');
    table.bigInteger('cywatsfbsp');
    table.timestamp('onxuchspks');
    table.timestamp('hxstgvnpnm');
    table.json('tiglowfiyo');
    table.boolean('tujrywenhn');
    table.text('mehhdcpkid');
  });
  await knex.schema.alterTable('wuntrxkkii', function(table) {
    table.bigInteger('mgsdeqqctu');
    table.bigInteger('nbhuvnvdhy');
    table.text('tfnvnvovfj');
    table.boolean('kvepuhdxvp');
    table.json('zimqmbkwlq');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};