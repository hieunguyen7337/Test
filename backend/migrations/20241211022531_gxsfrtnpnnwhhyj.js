'use strict';

/**
 * Migration: 20241211022531_gxsfrtnpnnwhhyj
 * Description: Create table
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('hwwarwjuer', function(table) {
    table.json('oqxgbrquqj');
    table.bigInteger('hpfzmnuhvs');
    table.timestamp('ivmyrjgvrp');
    table.string('mizedcrdjm');
    table.timestamp('eqcmmkpvyk');
  });
  await knex.schema.alterTable('ixzhccgsnw', function(table) {
    table.float('yfmhbxrswd');
    table.bigInteger('zaernmjfjy');
    table.text('cekwbmdukp');
    table.float('lgtrfmodqn');
    table.text('sloiqqwlsr');
    table.boolean('oawvhxcpya');
    table.float('qthmggnhqi');
  });
  await knex.schema.alterTable('cshsxazbzt', function(table) {
    table.json('kvngfzpwzf');
    table.string('nvdkxlxpui');
    table.string('urivwucfvz');
    table.bigInteger('qlsjxizfyp');
  });
  await knex.schema.alterTable('vvcrwegmqp', function(table) {
    table.timestamp('vyhsciginx');
    table.json('bantwdqkyn');
    table.string('xyulwhkpfg');
    table.timestamp('dgbpyhvbvx');
    table.timestamp('joapmubuiz');
    table.json('csbbkrqxoy');
    table.text('nfimaxjxpp');
    table.boolean('uctvfvthaj');
    table.bigInteger('slygnkoism');
  });
  await knex.schema.alterTable('byuczbzwkr', function(table) {
    table.float('jlkovvkrxd');
    table.bigInteger('vkzdancvkv');
    table.float('qeunrupats');
    table.text('wmbacllocf');
    table.timestamp('qibtbqwuqn');
    table.json('cizyttnyen');
    table.json('ndnwipwtul');
    table.float('ylnlaweysm');
    table.text('wzzhfhbflo');
    table.timestamp('xuxjnripck');
  });
  await knex.schema.alterTable('rrntltiakk', function(table) {
    table.json('rbdaoeorzv');
    table.boolean('oltyxyqaip');
    table.boolean('imoclasvqx');
    table.integer('lgsjeodrts');
    table.bigInteger('izaoqictbs');
    table.text('gpcaitnpml');
    table.string('hmisvafggc');
  });
  await knex.schema.alterTable('rkflnkugji', function(table) {
    table.boolean('xeujtxglbg');
    table.text('wpzjocxcga');
    table.boolean('xsuwqmsehe');
    table.float('uqtdrukucd');
    table.json('fkwnumazts');
    table.boolean('lgutjzlhis');
    table.bigInteger('xaidqtrxfb');
    table.integer('xnxetxwbcl');
    table.string('rjovagzewf');
  });
  await knex.schema.alterTable('thbqlmnqxd', function(table) {
    table.float('hbbqxgnxih');
    table.json('srmuzujupa');
    table.float('cmqyegrllc');
    table.timestamp('scyrsonzhm');
  });
  await knex.schema.alterTable('eaxabrnvjh', function(table) {
    table.boolean('frplldozpz');
    table.text('aiyjlkorle');
    table.string('fbifnowadr');
    table.string('pnswzfftsi');
    table.float('udlmmxauyj');
    table.boolean('xxlrkamkla');
    table.json('viwnfewola');
  });
  await knex.schema.alterTable('bpeizrrvta', function(table) {
    table.boolean('oblrrwvgjv');
    table.integer('mixqpomxkg');
    table.integer('mytxobqwsg');
    table.integer('lcyvgruvem');
    table.timestamp('eltsmsqhlx');
    table.float('zfsgtxfyhk');
    table.bigInteger('noaeydfabq');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};