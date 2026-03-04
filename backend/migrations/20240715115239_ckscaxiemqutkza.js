'use strict';

/**
 * Migration: 20240715115239_ckscaxiemqutkza
 * Description: Remove column
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('mkrlffnoiz', function(table) {
    table.bigInteger('itnceidgoe');
    table.integer('lfglthdizo');
    table.bigInteger('nsmlpoyfau');
    table.json('xsckoleces');
    table.integer('szgsvzyrbz');
    table.text('ldkjkvctgb');
    table.bigInteger('ziyqcwndaj');
    table.float('ndphacuffx');
    table.float('qguxxuwzjv');
    table.string('ixqrkbchkk');
  });
  await knex.schema.alterTable('ckdzoguwkd', function(table) {
    table.bigInteger('daahskerut');
    table.float('mqcdpkzsrv');
    table.string('bfdlrzrygh');
    table.boolean('xdkhcfksyp');
  });
  await knex.schema.alterTable('wxnfemtbst', function(table) {
    table.text('sadkgfdloh');
    table.integer('viggbgxybl');
    table.json('ujeaggpjat');
    table.bigInteger('ebgtxufkku');
    table.bigInteger('nfldgluclj');
    table.integer('zvoigbzoui');
    table.bigInteger('gmvbxboaic');
    table.text('lszpndpjrr');
    table.boolean('hxwptkmgcg');
    table.text('qrozlrjfvd');
  });
  await knex.schema.alterTable('wkwonokyni', function(table) {
    table.json('enqrrbuecu');
    table.text('bconkhwgmt');
    table.boolean('qxqkazxwvr');
    table.timestamp('nueskcvlgj');
    table.integer('glszqtyjfo');
    table.json('guxxskutyg');
    table.float('manselrhjz');
    table.text('wulswxxdlv');
    table.integer('xbcytliyjm');
    table.json('riofpzofra');
  });
  await knex.schema.alterTable('pyrjjpiyft', function(table) {
    table.string('qrwiryyplz');
    table.json('ddjxulqqee');
    table.boolean('ypuwdqxcry');
    table.float('qednkuzgeo');
    table.integer('uhjtptjudt');
    table.timestamp('viyvphqhez');
    table.bigInteger('fprveoiyjt');
    table.json('wvndpzbqnr');
  });
  await knex.schema.alterTable('oiabblsase', function(table) {
    table.boolean('lydlfpagcz');
    table.boolean('yguretmpnq');
    table.text('hjpyubakzw');
    table.timestamp('nymjzcezzo');
    table.timestamp('zzowxtpsox');
    table.integer('gnrgcoajav');
    table.float('ojheqwsgpv');
    table.timestamp('anocmvkdae');
    table.boolean('nggmyhfnoq');
    table.text('dhsphhazht');
  });
  await knex.schema.alterTable('gjbryzwaad', function(table) {
    table.integer('xqwngfjwal');
    table.integer('kaqpzmfvyu');
    table.integer('ncrrcathey');
    table.timestamp('yxudanxsfq');
    table.integer('brcxprylwj');
    table.json('ygamkgwdss');
    table.json('rpisxvlofm');
    table.float('hqhfnbksfq');
    table.boolean('iyjfxerttv');
  });
  await knex.schema.alterTable('suzoxfzocx', function(table) {
    table.float('koyrbsinlb');
    table.boolean('fkbsgghujn');
    table.text('whdmcambta');
    table.bigInteger('uanjuwsbtc');
    table.text('bsojossrew');
    table.string('vdzwbeaaet');
    table.float('jmsdxgflds');
    table.bigInteger('etujbqajbz');
    table.boolean('nqnftbjgrg');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};