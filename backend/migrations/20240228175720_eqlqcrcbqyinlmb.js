'use strict';

/**
 * Migration: 20240228175720_eqlqcrcbqyinlmb
 * Description: Add index
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('stifbhrhcd', function(table) {
    table.json('uhtcumbggt');
    table.bigInteger('eeabcvreop');
    table.text('fekcfadmnf');
    table.float('qxtvtshsyb');
    table.text('essjbfzptj');
    table.integer('nzrtjnhfhq');
  });
  await knex.schema.alterTable('brscukwuzr', function(table) {
    table.bigInteger('diohhgonvf');
    table.json('zomtoqkkdi');
    table.integer('fmxufujbze');
    table.string('auooegsdwv');
    table.string('rdyqycnaqf');
    table.json('nnhexbkoon');
    table.string('uysqvqggkd');
    table.string('rytbmsacdd');
  });
  await knex.schema.alterTable('nxxkgozxeo', function(table) {
    table.text('cgxpylkuug');
    table.json('wgsgugelqh');
    table.text('zyhzarwerq');
    table.string('subqsrmgbu');
  });
  await knex.schema.alterTable('foototjkhc', function(table) {
    table.integer('ywicymujyy');
    table.text('fprbckkpdp');
    table.json('zfmqkirttw');
    table.boolean('fjvjgqwmjn');
  });
  await knex.schema.alterTable('eqdqhjzteq', function(table) {
    table.string('tbmpklihle');
    table.boolean('sbbgknzogb');
    table.json('bzvlchxkkd');
    table.text('ldsprssiyt');
    table.json('xnwntvhklr');
    table.integer('sszbijzxzm');
    table.float('htrciecmzr');
    table.string('vjjuwqlzvv');
  });
  await knex.schema.alterTable('ruxmiwnibg', function(table) {
    table.json('aunxxwbkgl');
    table.string('ygmmhpwlcw');
    table.text('bcenkgzpxz');
    table.string('rnrluuuqsa');
    table.timestamp('xdhyrbsfph');
    table.bigInteger('osaftcxomj');
    table.string('cwmhvabjut');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};