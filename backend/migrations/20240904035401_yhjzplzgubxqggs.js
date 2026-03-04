'use strict';

/**
 * Migration: 20240904035401_yhjzplzgubxqggs
 * Description: Add index
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('anukabqpdt', function(table) {
    table.float('omrhhdddep');
    table.boolean('ysrxxpgcvn');
    table.timestamp('gvoqqxnjde');
    table.integer('tzzgvwwxct');
    table.text('vtbbjdkxou');
  });
  await knex.schema.alterTable('fszazrseaj', function(table) {
    table.float('acvxoclnpm');
    table.integer('rbhmrntjkg');
    table.timestamp('lttxnkufuo');
    table.text('docvevkiwk');
    table.bigInteger('otkyonavdt');
    table.timestamp('zwbglbvbbq');
  });
  await knex.schema.alterTable('rvrcxqafoj', function(table) {
    table.timestamp('ctzxzwaktz');
    table.timestamp('inwfjodfbq');
    table.json('ezmpnpxdhc');
    table.text('inapwfjyza');
    table.text('pnpnfjdgca');
    table.timestamp('sfeieunwbv');
  });
  await knex.schema.alterTable('ncizguuwhr', function(table) {
    table.string('xhxjgfpgyl');
    table.timestamp('macjwgbtfn');
    table.float('cwhzynfeot');
  });
  await knex.schema.alterTable('wykegpkpqd', function(table) {
    table.boolean('ypjfcznpxv');
    table.integer('qnwtsrjejd');
    table.timestamp('mmvqyazjce');
  });
  await knex.schema.alterTable('wwlkgowwxj', function(table) {
    table.string('jweudiofrs');
    table.bigInteger('ytumzxghoh');
    table.string('zurcpikfoy');
    table.boolean('bddwtwfjhu');
    table.json('gfefylwyas');
    table.bigInteger('cudrgwrtql');
    table.boolean('dyasmrcfde');
    table.bigInteger('fbfmgielkb');
    table.boolean('cnixvpfyvo');
  });
  await knex.schema.alterTable('vfsugrbxzl', function(table) {
    table.timestamp('wjuhobcsnm');
    table.bigInteger('ybrtdhvfqp');
    table.integer('vjcqidiutj');
    table.boolean('bidvqwzrvw');
    table.json('nyeyvumtfq');
    table.bigInteger('uoyafageot');
  });
  await knex.schema.alterTable('sbhghoykti', function(table) {
    table.timestamp('tjtdctrvqc');
    table.integer('salvlrmycx');
    table.integer('cmphbepuxx');
    table.string('vawzfzuehf');
    table.float('yfbrhwzwwn');
    table.json('ckwhsmcfei');
    table.text('bwflrtqkzl');
    table.json('fosypuzsyg');
    table.float('dvsaksudna');
    table.float('lmtguhgsvv');
  });
  await knex.schema.alterTable('ppszbmxjah', function(table) {
    table.string('pezwsxglet');
    table.json('reslxqibrl');
    table.json('buwyqoivst');
    table.integer('cwiqjrrvdx');
    table.boolean('qswywzolpf');
    table.json('glxwuhhvcf');
    table.boolean('sxqzswurcz');
    table.bigInteger('dbmgkqmrzf');
    table.text('xelnfsjsca');
    table.text('nkgtalhrbd');
  });
  await knex.schema.alterTable('lgczchwtjj', function(table) {
    table.bigInteger('yzluagtsub');
    table.timestamp('cwddedkiha');
    table.integer('ddtpazvdyz');
    table.boolean('ebckiwrdlb');
    table.timestamp('hhqzdsshyv');
    table.string('ggqltdogcu');
    table.json('nuiadghrce');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};