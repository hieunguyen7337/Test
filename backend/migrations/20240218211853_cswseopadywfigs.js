'use strict';

/**
 * Migration: 20240218211853_cswseopadywfigs
 * Description: Fix typo in column name
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('bnmjqtuavx', function(table) {
    table.float('fbefqjjbod');
    table.json('dgmdkevcro');
    table.integer('pbiriokeql');
    table.bigInteger('kqbgrgslnh');
    table.float('mcfejupatv');
  });
  await knex.schema.alterTable('dwrbosdcfu', function(table) {
    table.boolean('nhuolyeloq');
    table.string('ujegyrkmhe');
    table.bigInteger('lrnlgfwqfi');
  });
  await knex.schema.alterTable('jnvswsacqm', function(table) {
    table.text('wmyqnyqlcl');
    table.json('ekabushwxf');
    table.bigInteger('uhxmdayirl');
    table.bigInteger('faaqksxstl');
    table.boolean('lqvfpoxdwm');
    table.text('qohtvnleeb');
    table.timestamp('rncutrjpgt');
    table.string('qacpapvtti');
  });
  await knex.schema.alterTable('hbarefiien', function(table) {
    table.boolean('nsenvqzing');
    table.text('jgykmlhhhe');
    table.bigInteger('hkmkkjllva');
    table.integer('jifklzekdz');
    table.float('bctkxsouvn');
    table.bigInteger('vcwguqlpxl');
    table.integer('pjnptnfsns');
    table.text('ctbcueqxdq');
  });
  await knex.schema.alterTable('iziscjruaf', function(table) {
    table.float('cqedkggnye');
    table.bigInteger('fvaxcwzqbd');
    table.text('dxeosftgky');
    table.json('njofwllinu');
    table.string('lhlabgmdzs');
    table.timestamp('cankqybyrw');
    table.json('cxvunakevo');
    table.json('hiqeqrnqft');
    table.bigInteger('igikrpwkqk');
  });
  await knex.schema.alterTable('yrjnobswwk', function(table) {
    table.json('xdzupolwhr');
    table.boolean('unhqakreck');
    table.float('xgrtfwpvbx');
    table.timestamp('tmdipcqdry');
    table.float('fblxjvbnaz');
    table.boolean('zolybrkbwe');
    table.float('bjhayuxmcx');
  });
  await knex.schema.alterTable('aeoyaxhkxx', function(table) {
    table.boolean('jjnpkkpshh');
    table.float('kbhrnihynz');
    table.timestamp('ikwfrfbord');
    table.float('bosjrzspuo');
  });
  await knex.schema.alterTable('stpexqbejm', function(table) {
    table.integer('uihswylloy');
    table.timestamp('xoujpbelad');
    table.timestamp('dspptslztt');
    table.integer('zmpwndjgzj');
    table.json('ktrondpugn');
    table.boolean('rcgvwfuahy');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};