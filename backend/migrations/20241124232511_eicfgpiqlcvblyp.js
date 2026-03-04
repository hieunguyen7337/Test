'use strict';

/**
 * Migration: 20241124232511_eicfgpiqlcvblyp
 * Description: Remove column
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('oyckorgjku', function(table) {
    table.integer('pzevrqggtm');
    table.text('htxocufmuo');
    table.text('prkjtvtjkc');
  });
  await knex.schema.alterTable('onyafrjsxr', function(table) {
    table.bigInteger('gwtdgymmal');
    table.float('igzqphkfpq');
    table.bigInteger('xndeymltvk');
    table.text('dmzcuxmcad');
    table.text('hjfdzhtobb');
    table.bigInteger('gwajdqyibx');
    table.json('gilglodswa');
    table.float('vvtsaidknc');
    table.string('ppmegucbkv');
  });
  await knex.schema.alterTable('xdgagvqypx', function(table) {
    table.float('qynphcsrnb');
    table.string('txxfzbntrz');
    table.boolean('rizswfsjiq');
    table.timestamp('qbbciitkfh');
  });
  await knex.schema.alterTable('xmsusfgcoe', function(table) {
    table.float('dvmdjqnslb');
    table.integer('ifaazfvlax');
    table.timestamp('vrjgrqrmew');
    table.text('plqjycsnlp');
    table.boolean('yopiqsfqvb');
  });
  await knex.schema.alterTable('vlimmduezv', function(table) {
    table.float('dqctghvzyk');
    table.string('aeqoeakeef');
    table.integer('xeyriijjtc');
  });
  await knex.schema.alterTable('bmzmzkxboj', function(table) {
    table.integer('lygbqbkhik');
    table.text('joxbastnlz');
    table.timestamp('qmbmpehoja');
    table.integer('qiiclxiwzd');
  });
  await knex.schema.alterTable('ksihkhirwz', function(table) {
    table.timestamp('uqsirleevf');
    table.float('rzjosfgjrq');
    table.float('gtyfzhcezn');
    table.float('cdtcbxrhfb');
  });
  await knex.schema.alterTable('bzfxceoioy', function(table) {
    table.integer('yrqclnsbik');
    table.timestamp('szynkfreag');
    table.float('llpfsrialb');
    table.float('emijnfywph');
    table.float('dmopeevlft');
    table.bigInteger('bwtzfhnhss');
    table.float('drwuduyvdq');
    table.float('mxhurjwsjv');
    table.timestamp('gnfftafnet');
  });
  await knex.schema.alterTable('wqjhepzqtp', function(table) {
    table.timestamp('blaekcflst');
    table.bigInteger('xuxuztrvte');
    table.text('jcpfhkkgim');
    table.string('eytxdypkpl');
    table.string('rxqafnfage');
  });
  await knex.schema.alterTable('rivmoybctn', function(table) {
    table.text('zkofznikmc');
    table.bigInteger('mqrunjtaxp');
    table.boolean('qfxsozqfqq');
    table.text('ydhghhgwmg');
    table.text('zzbwirkfkv');
    table.integer('nwuiaulrop');
  });
  await knex.schema.alterTable('vwyvgpmokk', function(table) {
    table.json('mcomqjpyxe');
    table.json('woqyvrjjrs');
    table.text('bkuyorlazt');
    table.text('ljcvgkpzvf');
    table.json('psrclzzszg');
    table.integer('kxblisihzm');
    table.timestamp('mxazmurrye');
    table.integer('iaayfvhsbm');
    table.json('jbatdlofwt');
  });
  await knex.schema.alterTable('yphtvrppea', function(table) {
    table.timestamp('btrgzbiupc');
    table.timestamp('jgijcouwcg');
    table.timestamp('rkkbxjlgkq');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};