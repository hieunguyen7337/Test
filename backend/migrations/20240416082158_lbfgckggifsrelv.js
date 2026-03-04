'use strict';

/**
 * Migration: 20240416082158_lbfgckggifsrelv
 * Description: Undo previous migration
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('lyzzrjahnv', function(table) {
    table.string('kfthypxoxo');
    table.bigInteger('ykpxwlyrzg');
    table.text('gcmiuimuov');
    table.bigInteger('bvkidhrtjw');
    table.float('xvstjznbuq');
    table.float('sjzhslovpz');
  });
  await knex.schema.alterTable('tbrgyuedsv', function(table) {
    table.bigInteger('yfhqohhrjb');
    table.json('ibgxcgzxfa');
    table.string('npexmbldrq');
    table.string('wczastxois');
    table.float('wcwwcsmfhv');
    table.text('sznxsieulv');
    table.text('cwgddnsncj');
    table.string('ocfqhjhyru');
  });
  await knex.schema.alterTable('gjuybupgro', function(table) {
    table.json('woioeczpzs');
    table.string('deslgntosw');
    table.boolean('pntpsdrpyh');
    table.timestamp('arlyccoiqd');
    table.float('zhdfddqbda');
    table.json('fzslkegybw');
    table.integer('eacqosvrok');
    table.json('tgvctpxpyg');
  });
  await knex.schema.alterTable('gfbyiqtcdr', function(table) {
    table.bigInteger('lastyjmfvd');
    table.json('ahdockavpk');
    table.bigInteger('xqwtpjsqyh');
    table.bigInteger('uiviahxgdo');
    table.boolean('zcdwwanbgz');
  });
  await knex.schema.alterTable('zpsmqokzpu', function(table) {
    table.boolean('fjfaerhqqw');
    table.float('rhrorohtcr');
    table.integer('canvxxrbaw');
    table.text('udkityeykw');
    table.boolean('shvulvhwzq');
    table.float('qutsuorsvp');
    table.float('dmaqmobblp');
    table.bigInteger('ddbadvwbqx');
    table.boolean('pobtyrmwzs');
    table.timestamp('ocrtsqoprz');
  });
  await knex.schema.alterTable('xihcqneeaj', function(table) {
    table.text('powmscmptp');
    table.float('wqxcbguyxk');
    table.timestamp('wyzxlytuau');
    table.json('jlwwwvdqbl');
    table.timestamp('bpdzwjkuyg');
    table.integer('rymkejvoiv');
    table.json('lgdqugpmts');
    table.bigInteger('zahaggctdc');
    table.text('cupptegzdu');
    table.text('iszioqgjao');
  });
  await knex.schema.alterTable('zjdbxduxgf', function(table) {
    table.text('bjdqnhnszg');
    table.timestamp('ijwrzsyurz');
    table.text('oahmzsqqxp');
    table.integer('grqslwrdcy');
    table.float('tjchtswdbe');
    table.float('xmuamrmmgd');
    table.json('hbdvwjnnhe');
    table.string('zejlfqxnjx');
    table.boolean('jdthhwxdfs');
  });
  await knex.schema.alterTable('ztjssumzws', function(table) {
    table.float('xqwhztkwst');
    table.bigInteger('saynmhzzpp');
    table.json('bbjlavggfg');
    table.json('zgjsgtlcwh');
  });
  await knex.schema.alterTable('ncnyjerooe', function(table) {
    table.text('zlxitasdjy');
    table.text('gsllyccrxu');
    table.text('jfgxudiuyn');
    table.float('lgxfzokipg');
    table.boolean('gotlpnpipo');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};