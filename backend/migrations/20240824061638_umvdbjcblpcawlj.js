'use strict';

/**
 * Migration: 20240824061638_umvdbjcblpcawlj
 * Description: Remove column
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('vmnmhysrkb', function(table) {
    table.integer('srjjbtbzuk');
    table.float('yemgzzaowl');
    table.bigInteger('jljemurigp');
    table.string('mxtnvooisl');
    table.timestamp('epfdqbikrl');
  });
  await knex.schema.alterTable('adkeembyeg', function(table) {
    table.string('xmyufpmgqf');
    table.boolean('ewiifzujag');
    table.boolean('pgwtkpkfdr');
    table.float('vqvuqzplub');
  });
  await knex.schema.alterTable('nxjxmmvync', function(table) {
    table.float('iqicqlrdlf');
    table.json('kycegajgbf');
    table.integer('zofvpmfxix');
    table.json('vsxxngeeiq');
    table.timestamp('bqpxoyrebz');
  });
  await knex.schema.alterTable('egxnmsjzje', function(table) {
    table.float('zcheojgkqa');
    table.json('pkynxaskbn');
    table.json('avdabrhxmu');
    table.float('mlghbyhmrw');
  });
  await knex.schema.alterTable('dczmgbuzal', function(table) {
    table.bigInteger('jxjsarldjz');
    table.float('cirpydktdl');
    table.float('zgijzffscv');
    table.string('bmwyfehozo');
    table.integer('odjkorfbdi');
    table.boolean('ggzplajtnx');
    table.bigInteger('lpxinjlqrj');
  });
  await knex.schema.alterTable('gnoazukcrr', function(table) {
    table.integer('vhqbsszwqr');
    table.integer('antxrmpqbt');
    table.boolean('udhawxpqzs');
    table.string('gntnhhquzc');
    table.integer('zchbetgosb');
    table.string('vewqnxjpdp');
    table.boolean('alrsjycmue');
    table.timestamp('fwdrrydkst');
  });
  await knex.schema.alterTable('pixseghhou', function(table) {
    table.string('qceaettlyk');
    table.integer('ahwffzmguh');
    table.json('dydqxqkhqw');
    table.boolean('rutjgbrhln');
    table.string('yjnjuowmum');
    table.timestamp('jdycmrzdbs');
    table.bigInteger('eydvbawati');
  });
  await knex.schema.alterTable('ktimtabtoi', function(table) {
    table.float('stzeefgvdl');
    table.text('aawnggnscw');
    table.string('guvtxkooys');
    table.string('ayxmhduwrr');
    table.timestamp('phvwvygrdx');
  });
  await knex.schema.alterTable('snxbxqnbre', function(table) {
    table.bigInteger('ysdrqmqdqh');
    table.text('pwitvstxxm');
    table.float('tkgmgdlulv');
    table.integer('ndltkvwltr');
  });
  await knex.schema.alterTable('ddpesmfzeg', function(table) {
    table.float('mvvysisbhk');
    table.boolean('ndyvrhzgfe');
    table.timestamp('sddmudkywy');
    table.float('wvkjsfhybq');
    table.string('qlphusbcgp');
    table.integer('abxoixhbuz');
    table.text('uzjgfdkjii');
  });
  await knex.schema.alterTable('icpivraguc', function(table) {
    table.timestamp('ivewdvbfjb');
    table.timestamp('dktubdjxod');
    table.float('khjutrioxn');
  });
  await knex.schema.alterTable('nolfpyqrra', function(table) {
    table.timestamp('zlomnfpccx');
    table.boolean('jvwpvhzbyp');
    table.string('wlaylhwxfe');
    table.string('gtwkgpvnmn');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};