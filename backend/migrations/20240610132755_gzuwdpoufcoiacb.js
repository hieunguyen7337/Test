'use strict';

/**
 * Migration: 20240610132755_gzuwdpoufcoiacb
 * Description: Undo previous migration
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('hxafrjcyxy', function(table) {
    table.timestamp('ybhuypvgia');
    table.integer('niskemfilv');
    table.json('igigrljyem');
    table.float('bngzcdlhih');
    table.text('tezmfunqum');
    table.integer('vnwervgbck');
    table.text('fiytquvaav');
    table.string('vzbmgiukqv');
    table.json('kthtptyhjj');
    table.text('jhgpkvzbjs');
  });
  await knex.schema.alterTable('zplhjehodp', function(table) {
    table.integer('wstqccymwt');
    table.text('iqznyhwxmj');
    table.bigInteger('jbzpkeetns');
    table.text('tinszxpkxf');
  });
  await knex.schema.alterTable('zfsbsfccuv', function(table) {
    table.integer('cpmmszhmlm');
    table.boolean('eebbdfkrxq');
    table.json('uwihxfqqfj');
    table.json('lpjieobvlx');
    table.float('guvzcafgey');
    table.boolean('jbxecjrvri');
    table.text('uzotxlduxv');
  });
  await knex.schema.alterTable('imiekunhch', function(table) {
    table.timestamp('xdasqidofu');
    table.boolean('nptoqfhnym');
    table.json('grjfgxyurm');
    table.float('awojoneocp');
    table.json('ywssqeajio');
  });
  await knex.schema.alterTable('ewbryiorew', function(table) {
    table.integer('lwxrlrjais');
    table.float('lxkmyzkfjz');
    table.float('tcebdqcwvw');
    table.float('nqertqejyf');
    table.bigInteger('mxejnmieqp');
    table.boolean('mbddbyssbl');
    table.string('bwoqmmedqf');
    table.text('igkbidffxw');
    table.float('fsofyshrqt');
    table.text('elgagzkzrs');
  });
  await knex.schema.alterTable('hxzvxedrvv', function(table) {
    table.bigInteger('qeipcmazln');
    table.boolean('kjtpyqclge');
    table.float('niykteuibz');
    table.string('eccmcxwakf');
    table.string('riymlwfbdh');
    table.integer('jsynzzkvkh');
    table.string('ombigsnfhp');
    table.text('wvebesllbp');
    table.json('tmplwgygwp');
  });
  await knex.schema.alterTable('myiyfbjerk', function(table) {
    table.string('arcnkszaqm');
    table.boolean('hkundiyxni');
    table.boolean('emwzmwxppl');
    table.text('nyaljsdqry');
    table.timestamp('pxshhqfgvn');
    table.boolean('meefsobbky');
    table.text('hnowxpqsbi');
    table.boolean('hbtlrwbzuu');
  });
  await knex.schema.alterTable('dlohsjaetz', function(table) {
    table.bigInteger('fkqbbuhala');
    table.float('movahonujj');
    table.integer('vkymoafyvy');
    table.boolean('ffohjovnsg');
    table.timestamp('rvfyjqfzal');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};