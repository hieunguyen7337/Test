'use strict';

/**
 * Migration: 20241216104111_eazcasrfzygraes
 * Description: Create table
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('fpcrdaurzj', function(table) {
    table.float('gmdeoaqbbj');
    table.boolean('atblkyktdc');
    table.integer('hnmczooekt');
    table.timestamp('botjlzeemg');
    table.float('wxfldxpaid');
    table.text('cliiofmwak');
  });
  await knex.schema.alterTable('hinrlddtak', function(table) {
    table.integer('lmcereseaa');
    table.timestamp('khbqcuobsb');
    table.boolean('bjzfrplihk');
    table.bigInteger('ppakjbahgz');
  });
  await knex.schema.alterTable('hjdgdmjjpm', function(table) {
    table.string('bilqkjfxwg');
    table.json('sbuxhkjqjc');
    table.boolean('efejfthiaq');
    table.timestamp('cmdtgpfccy');
    table.float('xmfrwcbcij');
    table.json('vwckwwiegg');
    table.boolean('bkzfuydoor');
    table.integer('vovyarccms');
    table.bigInteger('xoubnkxrdq');
    table.float('mizwhtdvon');
  });
  await knex.schema.alterTable('dvgatfhsnz', function(table) {
    table.json('retiruiess');
    table.json('kzemagygsl');
    table.timestamp('suwdlrqtea');
    table.boolean('rbtcfjiife');
    table.bigInteger('ltsgwnbevn');
  });
  await knex.schema.alterTable('pplafwmkay', function(table) {
    table.json('rlsntaluow');
    table.json('lthiclcjuc');
    table.timestamp('vaqqiigzkg');
    table.integer('fxgxzjjvvz');
  });
  await knex.schema.alterTable('ugsxnwtwwq', function(table) {
    table.bigInteger('rwwzwhfgld');
    table.string('xbrlgrfuyd');
    table.text('idhccdlumg');
    table.json('tzbitjazbl');
    table.timestamp('fikujkuyqc');
    table.bigInteger('qynfqeprag');
    table.json('cszuyfoacn');
    table.text('kkgmsoepym');
  });
  await knex.schema.alterTable('pkqnqrmvje', function(table) {
    table.json('bpkcrgieap');
    table.boolean('xvjfsigvok');
    table.text('jfsvyznjvv');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};