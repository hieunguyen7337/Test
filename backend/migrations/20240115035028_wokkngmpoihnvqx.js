'use strict';

/**
 * Migration: 20240115035028_wokkngmpoihnvqx
 * Description: Undo previous migration
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('pjbbcaghqj', function(table) {
    table.bigInteger('qabyoyiqtt');
    table.json('xwtzovwydk');
    table.json('fihbvjxdfp');
    table.text('hjtoovenrn');
    table.timestamp('czkcjtxkhd');
    table.boolean('pkdslbeeyg');
  });
  await knex.schema.alterTable('jzjxvgrmzy', function(table) {
    table.json('gpdnrrdkdh');
    table.text('qoqeyatzon');
    table.boolean('aagwnqvtzo');
    table.text('ahwzygefxf');
    table.timestamp('ijdsojwkkc');
  });
  await knex.schema.alterTable('ugixbspheo', function(table) {
    table.boolean('kpsstqaddi');
    table.bigInteger('wevmbgxmpk');
    table.json('bgfmdlvkzq');
    table.integer('fjzjzaryym');
    table.float('dnniktdjij');
    table.string('llxokcirpl');
  });
  await knex.schema.alterTable('atdykfjooo', function(table) {
    table.json('cdtagaxwod');
    table.float('jlygcoilvw');
    table.text('xtxpblssfu');
    table.timestamp('wvdjndnbeo');
    table.timestamp('qgpzemyddv');
    table.string('fsaukekbqd');
    table.timestamp('rawdnpksha');
    table.integer('qhpxvoajtv');
    table.float('sbaxjtudff');
    table.json('ypqyslejhb');
  });
  await knex.schema.alterTable('dlpkjlqhbt', function(table) {
    table.string('szazlpkxmq');
    table.timestamp('sqnpqaehxu');
    table.boolean('vzjbcvlbkq');
  });
  await knex.schema.alterTable('egdmbhberh', function(table) {
    table.timestamp('hamibypxhv');
    table.json('oexrygllnm');
    table.timestamp('ncglmlnqwh');
  });
  await knex.schema.alterTable('qpluwmbhrp', function(table) {
    table.string('mmlindrvhm');
    table.integer('cqdhnyxund');
    table.boolean('zhwjoonhzf');
    table.text('gucqdgjurx');
  });
  await knex.schema.alterTable('vgmsxnikcz', function(table) {
    table.timestamp('jibvlyuftc');
    table.string('rljsfcpgit');
    table.timestamp('jffrdhxcse');
  });
  await knex.schema.alterTable('wckgljiydo', function(table) {
    table.timestamp('jvjigzaufb');
    table.json('ejutbjbfeu');
    table.json('uobttwpabu');
    table.text('wxppkkjxol');
    table.string('ellkwyegiq');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};