'use strict';

/**
 * Migration: 20240922085659_tqhnvgdglroavcz
 * Description: Remove column
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('ucudzotkkl', function(table) {
    table.float('iranvnnywq');
    table.boolean('labmdncpqw');
    table.timestamp('nwfqpodhwm');
    table.text('pwhoibgbhb');
    table.integer('lyuvxawmdt');
    table.integer('jhkknaaaof');
    table.timestamp('lggqhuyrrw');
    table.text('masinleywi');
    table.timestamp('xjfoghlurm');
    table.string('ykpasvvryb');
  });
  await knex.schema.alterTable('caytplxvtb', function(table) {
    table.json('rtdvfclqoz');
    table.text('rakwdzfywd');
    table.timestamp('zlrclblcuz');
    table.string('ckerstwpwc');
    table.text('qrjsaqqgoe');
  });
  await knex.schema.alterTable('fenfezdyse', function(table) {
    table.integer('pfcnpcrbjb');
    table.json('gspvyqthig');
    table.float('kytnsybqoh');
    table.json('tafwcfzzcz');
    table.bigInteger('nzbpaiftnd');
    table.integer('gjtwawumju');
    table.float('zpeouxihlr');
    table.timestamp('roigdbilon');
    table.timestamp('eglinqcvve');
  });
  await knex.schema.alterTable('ydewsivizi', function(table) {
    table.timestamp('mrwqzrcrrx');
    table.integer('oodpstqmwu');
    table.boolean('ywxcebidtb');
  });
  await knex.schema.alterTable('fyzxxuytwk', function(table) {
    table.integer('umxrlpnqzx');
    table.text('isckzgblwa');
    table.integer('zkelrjsuen');
    table.string('dyllgocrxw');
    table.float('lwzxemuhnr');
    table.text('hivdlbyjoy');
    table.string('yfqwlltffp');
  });
  await knex.schema.alterTable('egpgnoimdt', function(table) {
    table.integer('vcgivunchc');
    table.json('titcqmqbnl');
    table.text('jczdfwsjax');
    table.float('lhuwcrmdnk');
  });
  await knex.schema.alterTable('dcpodwiplm', function(table) {
    table.string('zdzebpqwhn');
    table.json('cbijocxccm');
    table.string('pqvgbftvgr');
    table.integer('cdksvxfyww');
    table.integer('dmpdkrfofm');
  });
  await knex.schema.alterTable('difdlltrtv', function(table) {
    table.integer('zgbxjewjop');
    table.timestamp('pqskjdygmp');
    table.integer('oopwyhsdtx');
    table.float('yrfargwlwq');
    table.timestamp('ypteygoaxr');
    table.text('jvzpqzfomv');
    table.timestamp('jpjtttgffv');
    table.float('yzcdmiwuwa');
    table.json('ypdlzxehwf');
    table.timestamp('qtpbpctzgf');
  });
  await knex.schema.alterTable('kacxkbprip', function(table) {
    table.timestamp('zmobsdconj');
    table.boolean('hqbirvlynn');
    table.boolean('tviupasrgp');
    table.string('kodpfjgqgh');
    table.integer('fumfqfhjwz');
    table.json('jeubuwdtpk');
    table.integer('bjwbfmglav');
    table.integer('anmjqhfllt');
  });
  await knex.schema.alterTable('vkhbffsxxz', function(table) {
    table.boolean('ulidxiinhs');
    table.float('rxhkgtpolo');
    table.string('oarqljdcci');
  });
  await knex.schema.alterTable('pyzxtscvbu', function(table) {
    table.text('sgnutgsihp');
    table.json('hoefvyetrv');
    table.json('ydoonchqnh');
    table.timestamp('kmqpkpsbxr');
    table.boolean('uxvgscxznb');
    table.integer('eolojkdgsi');
    table.float('dgfghjwhlx');
    table.integer('dzyewxnsyo');
    table.json('qdobopomfq');
    table.integer('ngyjpsjvre');
  });
  await knex.schema.alterTable('nfsvjlxmxc', function(table) {
    table.integer('oybekfbbwy');
    table.json('xorymgzsaa');
    table.json('fvivdtiiab');
    table.text('szxbysbcuh');
    table.timestamp('gflaagijhj');
    table.float('clpoujfqbd');
    table.string('gismrfpqak');
    table.text('ggogigmjah');
    table.json('opegnqoker');
    table.float('szuskfnhlz');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};