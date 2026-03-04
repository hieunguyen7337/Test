'use strict';

/**
 * Migration: 20240603180147_twtavqfszuwrpex
 * Description: Undo previous migration
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('mtugmkxelm', function(table) {
    table.float('xqjkpuvjaj');
    table.boolean('evokrkpivr');
    table.bigInteger('mabqlddbpt');
    table.integer('prirviibot');
  });
  await knex.schema.alterTable('dabqlrtvng', function(table) {
    table.boolean('aemosxcngi');
    table.float('sgnstrsxnd');
    table.float('gpsrncymzg');
    table.boolean('lntfzjjwsc');
    table.float('gfmyuexcsj');
    table.bigInteger('ztanwxzhpz');
  });
  await knex.schema.alterTable('ddphgdwxrk', function(table) {
    table.bigInteger('tktirgafec');
    table.string('gtzlprwrgc');
    table.float('nibonvyehh');
    table.boolean('cgtzqraexs');
    table.boolean('hfwvmjcnuk');
    table.float('enzubhyrfc');
    table.boolean('obvsyaflyt');
    table.timestamp('qesadufhzm');
    table.text('lbhkuzmpwr');
  });
  await knex.schema.alterTable('rrumtzfddz', function(table) {
    table.bigInteger('kedtmylekm');
    table.float('xoldjayxzk');
    table.json('ygieircyoo');
    table.json('ofrvbymakh');
    table.string('wxousrpfbu');
    table.string('hjejmpylbe');
    table.timestamp('cakfklbcle');
  });
  await knex.schema.alterTable('ufxznrgzqe', function(table) {
    table.bigInteger('hqirimbjhu');
    table.boolean('bsripoygsi');
    table.string('phzcurpsis');
    table.boolean('oxujfnflxa');
    table.timestamp('ljklcvneyu');
    table.timestamp('mhtbblamsn');
    table.timestamp('lkuivjglry');
    table.integer('naatqliazj');
    table.timestamp('kjcnvkhppp');
    table.string('jdgmosqhdu');
  });
  await knex.schema.alterTable('cchylhcjmz', function(table) {
    table.boolean('wrrzlassuh');
    table.text('psglulonxt');
    table.float('ettngpmvrz');
    table.json('arsebgnzlr');
  });
  await knex.schema.alterTable('ipifmpsain', function(table) {
    table.float('vydlfohvgo');
    table.text('bywtstsfby');
    table.integer('sxjtokgcbp');
    table.text('robilajwul');
    table.bigInteger('imthmgarpn');
    table.timestamp('yzuxmhmzbq');
    table.string('wujsdqqvvi');
    table.timestamp('npfvzsiuxx');
    table.json('nkrcmfsqgu');
  });
  await knex.schema.alterTable('uvmgmtiwuy', function(table) {
    table.integer('uhozaxchcn');
    table.string('ahrzzorpsx');
    table.float('elroeowucc');
    table.string('ytiepcvsdw');
    table.text('ovnnfgxaij');
    table.bigInteger('tuwnofsqcg');
    table.string('jzllrjshyz');
    table.bigInteger('mjyfknguwo');
    table.timestamp('osxxafttzc');
  });
  await knex.schema.alterTable('gkkgklpskb', function(table) {
    table.float('zbbkslhrqq');
    table.json('caeehkwpnx');
    table.boolean('fchotlpvhq');
    table.string('ktnajgcfhx');
    table.timestamp('tyivyfdska');
    table.float('omzwuznjoz');
    table.string('byxiiikdwe');
    table.integer('jsoukwjjcc');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};