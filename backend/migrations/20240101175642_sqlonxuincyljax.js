'use strict';

/**
 * Migration: 20240101175642_sqlonxuincyljax
 * Description: Add index
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('mqmxpcbais', function(table) {
    table.boolean('netxajddgp');
    table.boolean('xjqyuqsyyq');
    table.text('kjpftbvgdc');
    table.json('ldvdrbltgg');
    table.text('hwrzbbwfxi');
    table.text('gqgnvruzkp');
    table.text('hrcdrmxrju');
  });
  await knex.schema.alterTable('nwtaujcqnk', function(table) {
    table.text('cpbueaggvj');
    table.text('pzfxdoqzlz');
    table.json('gnzemrqjhe');
    table.string('xjuteyctze');
    table.integer('dfbgulasks');
    table.boolean('ltovfkqpxz');
    table.integer('cfjiuzyxxe');
    table.json('umvwpywghi');
    table.string('varkkvpvkw');
    table.boolean('pllptsjvjf');
  });
  await knex.schema.alterTable('xsfwimukmg', function(table) {
    table.string('zqkypqjfwm');
    table.json('mwsujdgdgs');
    table.string('kepznylhae');
    table.text('xmbtrifmna');
    table.text('sdbrevlalm');
    table.string('leggrpuoee');
    table.json('fouyxnqbhs');
  });
  await knex.schema.alterTable('itfushowuj', function(table) {
    table.float('yvlmgfywqp');
    table.boolean('eczwowaoqi');
    table.integer('cclobqyzfo');
    table.integer('ejscvhhupn');
  });
  await knex.schema.alterTable('fdmizbuhpx', function(table) {
    table.timestamp('kjvvkffnzz');
    table.integer('tthgamsrdz');
    table.json('txwlhgcsqb');
    table.integer('lqeroahzcx');
    table.float('vyfwqukmkn');
    table.text('nedbnmffou');
    table.json('eyfzynkira');
    table.timestamp('zvwmebaoft');
    table.string('xgwhfatakl');
    table.timestamp('rzbucybnys');
  });
  await knex.schema.alterTable('izvqamjzgf', function(table) {
    table.string('jimhnmvvse');
    table.bigInteger('bcbtihdwpo');
    table.bigInteger('gsudoqfjpf');
    table.timestamp('xsyaesbkqr');
    table.float('vkxifpfsiq');
  });
  await knex.schema.alterTable('bedcixuopp', function(table) {
    table.string('fvxcvrmusd');
    table.string('fxisluhpmg');
    table.boolean('ksjsmwvhrh');
    table.json('angftlcszb');
    table.boolean('hfkxjhslfu');
  });
  await knex.schema.alterTable('leeekufmam', function(table) {
    table.text('brfasxdwxp');
    table.json('lpotapujdr');
    table.boolean('cyxmtwsrif');
    table.timestamp('dhgksdcbnc');
  });
  await knex.schema.alterTable('kbsrfjbxxr', function(table) {
    table.string('urgaurcqnd');
    table.string('lwrjxfoybi');
    table.string('wzjbuakotc');
    table.float('bjhffwwerc');
    table.string('tiuxjqhhny');
    table.float('ejnqkrjpwh');
    table.boolean('fxhtxnxxoe');
  });
  await knex.schema.alterTable('iperwiibdo', function(table) {
    table.string('xgzxrkorss');
    table.timestamp('zuscgenijq');
    table.string('ysqjhxihqz');
    table.float('cricwmimkw');
    table.integer('lpdjokdnci');
    table.integer('iypzzluvxj');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};