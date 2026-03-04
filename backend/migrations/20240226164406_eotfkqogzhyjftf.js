'use strict';

/**
 * Migration: 20240226164406_eotfkqogzhyjftf
 * Description: Add index
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('ldharafmlq', function(table) {
    table.string('ppsswffyfv');
    table.boolean('sttnubzkue');
    table.integer('yjbekppiln');
    table.text('uwobqahjsy');
    table.integer('plbktzesgv');
    table.bigInteger('bvtauqzvnn');
    table.json('iroifwpehl');
    table.integer('kkaqzvoiiu');
  });
  await knex.schema.alterTable('vgskuwhqdy', function(table) {
    table.text('fjdamfwcjx');
    table.float('idowwiikqn');
    table.integer('crwloxqimw');
    table.integer('enxdkpiicg');
    table.integer('xejposeszn');
    table.bigInteger('damloplljy');
    table.boolean('hehpshzvpc');
    table.string('kpwujqqgae');
    table.bigInteger('ejadltirpz');
    table.string('ziueabtsip');
  });
  await knex.schema.alterTable('mquawvcerp', function(table) {
    table.timestamp('fmvpuvbsxt');
    table.json('mrkqpunjpf');
    table.text('bvorjqjfhw');
    table.integer('liiondxqre');
    table.json('eacbquygth');
    table.float('ypkohdfrrn');
    table.timestamp('bbznnpsbpg');
    table.text('ineajvcflj');
    table.bigInteger('fdnjacjjdp');
  });
  await knex.schema.alterTable('yafodrqabd', function(table) {
    table.timestamp('gmjatxkoja');
    table.float('xuwfiqzgji');
    table.timestamp('xjkcrpteth');
    table.integer('yirkdlkclr');
    table.string('fvatanrluo');
    table.text('fhgmlavhwc');
    table.string('tsznhyzsku');
    table.integer('jbeuedxkul');
    table.text('meimjnutaq');
    table.bigInteger('bkuqkpwlqc');
  });
  await knex.schema.alterTable('dgyswwdaiq', function(table) {
    table.timestamp('lzsoulfxip');
    table.boolean('hsdejpkads');
    table.float('boalwhxloh');
  });
  await knex.schema.alterTable('oqyagtafxm', function(table) {
    table.bigInteger('auibnichqx');
    table.bigInteger('niampowoyg');
    table.bigInteger('epjoubxnis');
    table.text('fkbxvtnpxv');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};