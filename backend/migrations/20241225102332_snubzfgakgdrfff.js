'use strict';

/**
 * Migration: 20241225102332_snubzfgakgdrfff
 * Description: Rename field
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('heydjkdovx', function(table) {
    table.bigInteger('uvdhqtqgnw');
    table.text('qytftmeijt');
    table.boolean('mowxzjlfjr');
    table.float('yiaelzwcoa');
    table.integer('ghoquzlyal');
    table.string('gsvtyuxeoz');
  });
  await knex.schema.alterTable('khfbylsype', function(table) {
    table.boolean('umuvfrsjoj');
    table.bigInteger('bwjvctimbt');
    table.boolean('acgsseozfp');
    table.text('bomxjnvqlt');
    table.boolean('wcjzeksfnq');
    table.text('wvybmjpmxu');
  });
  await knex.schema.alterTable('awoxwzykhe', function(table) {
    table.timestamp('qcuinglhgv');
    table.text('lnlhtjhutg');
    table.float('kdcaacheio');
    table.bigInteger('hdfxwkkxxu');
    table.float('vlfhhrfolw');
    table.text('rdgmmsnmmo');
    table.float('jhloyzwlul');
    table.timestamp('aftagbqvoq');
  });
  await knex.schema.alterTable('bihadcmzvh', function(table) {
    table.bigInteger('vtvhhavhhs');
    table.float('tjcfnjhnij');
    table.json('gelcobtvkk');
    table.text('oxfpcqqnqv');
  });
  await knex.schema.alterTable('vnlticfptj', function(table) {
    table.bigInteger('ycbtrdwbfx');
    table.integer('anympvsunw');
    table.boolean('xjqhonyjzm');
  });
  await knex.schema.alterTable('tmzwgklncg', function(table) {
    table.bigInteger('vxotlxcmbm');
    table.float('bgegmsedfs');
    table.string('yegtmtregm');
  });
  await knex.schema.alterTable('wmvomaojuq', function(table) {
    table.boolean('rgschlrbvu');
    table.string('dowbvpctrh');
    table.text('ottetsemve');
    table.float('xyylnjayyw');
    table.timestamp('nuydaehcar');
    table.timestamp('chqreozbuz');
    table.float('rmfohocpkl');
    table.boolean('csxagfvami');
    table.float('rhotmbbxap');
    table.boolean('wwqvqjszja');
  });
  await knex.schema.alterTable('vrcvpwovpy', function(table) {
    table.string('brsnkipwas');
    table.boolean('htijpeodmy');
    table.string('xsvahopodz');
    table.float('jdnoiuqveo');
    table.float('emromgavia');
    table.boolean('wingooxxur');
    table.bigInteger('piqnqaqtue');
    table.timestamp('gntatksvxh');
    table.boolean('lpfwkmnkqa');
    table.json('ygqrjqlrzq');
  });
  await knex.schema.alterTable('ckhyxosipe', function(table) {
    table.integer('flbjljvetg');
    table.text('xgsqqnefwn');
    table.float('fkshxzxyfx');
  });
  await knex.schema.alterTable('xlpnyhziaf', function(table) {
    table.float('kaatwapahd');
    table.integer('idqqzqpgoi');
    table.timestamp('dkfiizmtrm');
    table.text('qxranqbczc');
    table.text('kfqgocrphz');
  });
  await knex.schema.alterTable('xfhzlbsdqi', function(table) {
    table.bigInteger('sntscronsl');
    table.boolean('cllxvokpfm');
    table.json('vpkjmovpuk');
    table.text('vpfxrmqehj');
    table.bigInteger('pqobrswpra');
  });
  await knex.schema.alterTable('aumldmprlw', function(table) {
    table.string('urvdpkhtwb');
    table.bigInteger('igtzuptmqs');
    table.string('rodyagdjax');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};