'use strict';

/**
 * Migration: 20240203172114_yntosakhmaamhtl
 * Description: Undo previous migration
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('xenhkhnplw', function(table) {
    table.integer('zygyfolzbx');
    table.json('qrlvwlnzob');
    table.string('szjmwsnuss');
    table.boolean('fjwsvgrnjy');
  });
  await knex.schema.alterTable('kjpzrzgcbp', function(table) {
    table.timestamp('cjprrsswur');
    table.timestamp('gonpcvhehg');
    table.integer('nlyckdoczh');
    table.float('wumrworsqg');
    table.float('ekedzzjwtk');
    table.string('lujhhqerlq');
    table.text('aduwuyirjl');
    table.float('nipvaqgzim');
    table.json('xrodnxtimt');
    table.bigInteger('ojswyuldzc');
  });
  await knex.schema.alterTable('zhvkchbygu', function(table) {
    table.bigInteger('lzsrrchmwi');
    table.integer('nuxfqfstes');
    table.float('eunmrgjqcg');
    table.bigInteger('vejduorbll');
    table.string('vsaohmzmdz');
    table.boolean('xbikluiyfe');
    table.string('jfsggstyrb');
    table.string('ccaghukizs');
  });
  await knex.schema.alterTable('admkejikoy', function(table) {
    table.json('exyvuqanbl');
    table.text('ucmprjzinc');
    table.text('gjoqskaumo');
    table.json('wqqmrdwmyf');
    table.float('eyinyxeupo');
    table.timestamp('rzhmibwimf');
  });
  await knex.schema.alterTable('rcpskdpujk', function(table) {
    table.timestamp('kxkpsletyv');
    table.timestamp('qncucxjgvw');
    table.text('ebkacpzaae');
    table.timestamp('arfkyzbcoh');
    table.json('wvpicmsbed');
    table.integer('qveobctksl');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};