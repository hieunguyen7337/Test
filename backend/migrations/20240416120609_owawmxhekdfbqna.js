'use strict';

/**
 * Migration: 20240416120609_owawmxhekdfbqna
 * Description: Undo previous migration
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('wrgyigifqd', function(table) {
    table.float('ahsstqnrjq');
    table.json('kgcdtycczi');
    table.text('wqitetyjss');
    table.bigInteger('ztvrjksniw');
    table.bigInteger('mpulltnvbv');
    table.integer('xcbcnormxu');
    table.text('gpbdmvuzfo');
  });
  await knex.schema.alterTable('swrjaxvdep', function(table) {
    table.timestamp('ciolzelped');
    table.timestamp('cuqksbbuoc');
    table.text('uieobreauu');
    table.float('abyetmwgft');
    table.json('jdeghblbmb');
    table.float('rdpscyhvpm');
  });
  await knex.schema.alterTable('edkzbspkdj', function(table) {
    table.bigInteger('ozwbnfdxbb');
    table.string('lpcjsahooh');
    table.integer('kcvzellbfv');
    table.boolean('gddwvtkcfx');
    table.bigInteger('xubptljfca');
    table.text('jvxjpcenis');
    table.text('dtrmhoabue');
    table.timestamp('gilsaxvslv');
    table.text('xlucxjfuxt');
    table.json('colgqhzghx');
  });
  await knex.schema.alterTable('owvnznifpk', function(table) {
    table.text('jfsepuektu');
    table.bigInteger('zdukfyucte');
    table.timestamp('hngkilazia');
    table.string('mqdncacoqo');
    table.timestamp('fwuhboejac');
    table.text('rvbeummbwz');
    table.float('guxtebcgki');
    table.float('ykmhxleoyy');
  });
  await knex.schema.alterTable('gbczhoidff', function(table) {
    table.boolean('jlvpgqlznj');
    table.integer('nobxkrzpuw');
    table.integer('ctrgoxrqwn');
    table.timestamp('igqbhmyiqy');
    table.float('zajimctmur');
    table.string('meddghtnho');
    table.float('afxvrolvfw');
    table.float('oyrvnuughi');
    table.string('nezhmgrdhq');
    table.timestamp('yytbehjwxf');
  });
  await knex.schema.alterTable('pvhststorm', function(table) {
    table.boolean('dziqajqwvm');
    table.float('jdhrrvsawh');
    table.bigInteger('zbvjojmofp');
    table.string('xtjjhelaaw');
    table.integer('mpevjyvqyo');
    table.bigInteger('zsqyzflayv');
  });
  await knex.schema.alterTable('rdowuwdyev', function(table) {
    table.timestamp('ybhsssdhax');
    table.integer('anitbrxszb');
    table.string('osbamenhwn');
    table.integer('phiqysexnb');
    table.integer('ohqcaeveil');
    table.text('izhciaicjv');
    table.bigInteger('xsmaawqsoo');
    table.text('zrgalptiuc');
    table.timestamp('wemwittxsu');
  });
  await knex.schema.alterTable('ysdvcfmbxq', function(table) {
    table.timestamp('wzhuypnnrd');
    table.integer('lrycihcgep');
    table.integer('ipmpqjuetp');
    table.text('qmldypooho');
    table.timestamp('xycvjasrvp');
    table.json('eqtiswaovg');
    table.bigInteger('zyvbmsgewi');
    table.string('cttelualkn');
    table.timestamp('uogzugktkc');
    table.string('ugvcpqgjzp');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};