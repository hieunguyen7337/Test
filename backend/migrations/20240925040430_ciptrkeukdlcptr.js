'use strict';

/**
 * Migration: 20240925040430_ciptrkeukdlcptr
 * Description: Add column
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('cxjszrjekh', function(table) {
    table.json('iuavmdqnlo');
    table.text('irgqrhkwkn');
    table.string('zhfumgxbnm');
  });
  await knex.schema.alterTable('xxyjnjzwoh', function(table) {
    table.bigInteger('kwcyhisyta');
    table.timestamp('wscgxczhaz');
    table.timestamp('srvtpyftnl');
    table.bigInteger('rywvftqlgu');
    table.json('aiarfbpxkc');
    table.integer('wzzdxjoynw');
    table.string('uxhuarnmoj');
  });
  await knex.schema.alterTable('ngmawaftgo', function(table) {
    table.integer('xvouzlyhhf');
    table.boolean('wffswtqovx');
    table.timestamp('aeneuftmhx');
    table.integer('yirgzqpvbm');
  });
  await knex.schema.alterTable('dwbdafrfoe', function(table) {
    table.integer('ywycmmhiyd');
    table.boolean('fpejkkfnfp');
    table.bigInteger('jgazhbqlbr');
  });
  await knex.schema.alterTable('jnnvwztixj', function(table) {
    table.json('amgbmrbvhp');
    table.bigInteger('sdhbwxovko');
    table.integer('zlxmnxehrb');
    table.integer('ioufsbugmx');
    table.json('iszuyrwumw');
    table.timestamp('symegzndzu');
    table.json('nssbglmbrt');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};