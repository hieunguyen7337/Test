'use strict';

/**
 * Migration: 20241217180904_otinqvszzrddahm
 * Description: Please work this time
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('bwmhvqegav', function(table) {
    table.timestamp('ztdopqleju');
    table.json('ektqzhvrvh');
    table.text('jewcdfyktm');
    table.string('enopcolaou');
    table.float('atuswofgut');
    table.boolean('klthqtfddr');
    table.boolean('yiaxvpvnmq');
    table.integer('crdikgmjno');
    table.timestamp('kutmrcsimn');
    table.bigInteger('voqjlrqiih');
  });
  await knex.schema.alterTable('umbbwliswn', function(table) {
    table.float('fhfxllxpev');
    table.float('xpoiaxhqua');
    table.bigInteger('cwozckrctk');
  });
  await knex.schema.alterTable('mvtjasljyq', function(table) {
    table.float('akdqfmdpom');
    table.bigInteger('bkabaftaqr');
    table.float('qzvgybleqz');
    table.bigInteger('ututiilyht');
    table.text('rywmursgmm');
    table.boolean('ddueturexd');
    table.integer('zykyafuruk');
    table.timestamp('zianpngrdj');
    table.float('xlfjnjwbza');
    table.json('hilmjbbrsu');
  });
  await knex.schema.alterTable('caltptjgff', function(table) {
    table.string('iwzlrrdnnf');
    table.string('baxfwijgqa');
    table.text('wszkpppqwh');
  });
  await knex.schema.alterTable('xbhmizuefk', function(table) {
    table.text('cdurhzzdcr');
    table.timestamp('vfcjmnpxoc');
    table.text('czzlahtdoi');
    table.timestamp('ibpacchxvt');
    table.text('cbenlaizfe');
  });
  await knex.schema.alterTable('mjeskjpetu', function(table) {
    table.bigInteger('fzqwzbaklm');
    table.float('swagfmvgis');
    table.float('rkosuwuioo');
    table.integer('yugetqyuat');
  });
  await knex.schema.alterTable('zsjezswyvb', function(table) {
    table.timestamp('uncxjzucaz');
    table.boolean('yyxgrjvgpz');
    table.timestamp('ypgizzywdi');
    table.json('vlfwarahwz');
    table.text('mceowwenoa');
    table.string('yphzazmcxe');
    table.integer('zomcurreep');
    table.float('xjfizhihso');
    table.string('vcmgwjmvyx');
    table.bigInteger('aolhdgxhns');
  });
  await knex.schema.alterTable('tdubrdtrvq', function(table) {
    table.json('upaotrsudj');
    table.text('hkrgrqmxhp');
    table.bigInteger('pgzubuxymg');
    table.text('oblccnyzeo');
    table.text('wzizimroxt');
    table.bigInteger('vkdwuulamr');
    table.float('ritzpmkrqn');
    table.string('vhdmmneyot');
  });
  await knex.schema.alterTable('zkgauxbbbz', function(table) {
    table.text('ggynbpxfrv');
    table.bigInteger('wvzanwtqtx');
    table.float('fucvtrbbss');
    table.integer('onqwoshsdc');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};