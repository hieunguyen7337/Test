'use strict';

/**
 * Migration: 20240621104944_ceghyghwyclprhf
 * Description: Rename field
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('ffqvzmrzqx', function(table) {
    table.boolean('mbjilfwcjz');
    table.timestamp('bmefhpcfrk');
    table.json('gmoryyjrgp');
  });
  await knex.schema.alterTable('ysjmqolwqc', function(table) {
    table.boolean('kmqwctvape');
    table.timestamp('lhdsrmivkq');
    table.string('nmiozayduh');
  });
  await knex.schema.alterTable('jpoxyetvdh', function(table) {
    table.integer('wmakzzimex');
    table.json('nlpfnywjqg');
    table.json('qedxwhpruj');
    table.text('borzqeeujn');
    table.json('sauvoyryak');
    table.bigInteger('ionjckffrk');
    table.float('qltxfawxyk');
    table.timestamp('fbetdlruwc');
  });
  await knex.schema.alterTable('hagnqudwcg', function(table) {
    table.bigInteger('yteyohfssj');
    table.string('oeoofgjxqq');
    table.timestamp('fpeioejfcr');
    table.string('ezfpaaqssm');
  });
  await knex.schema.alterTable('sghomtkrqx', function(table) {
    table.bigInteger('amtkaacbja');
    table.integer('uvzddxojcm');
    table.timestamp('qluatibghm');
    table.timestamp('ygwdupcfqg');
    table.integer('rlhfpohvbn');
    table.string('divvyzcjnj');
    table.text('ckpywlvrcd');
    table.json('hbluazlsab');
  });
  await knex.schema.alterTable('czzfxstrok', function(table) {
    table.json('rjacvvpadg');
    table.bigInteger('rswtfmhuqb');
    table.integer('qjecswosat');
    table.boolean('lqbbbqggbj');
    table.boolean('azlpwsjmjc');
    table.bigInteger('phdegingro');
    table.float('eukwgmegbj');
    table.json('sukwxkiebu');
    table.text('cfkhkgzcvu');
    table.float('qipbdnkdru');
  });
  await knex.schema.alterTable('zciyyetfuu', function(table) {
    table.text('nwbaaoknzo');
    table.boolean('rydeiaqbtu');
    table.integer('jshabblxvg');
    table.timestamp('pbkjagbvit');
    table.boolean('fqdtbkmvap');
  });
  await knex.schema.alterTable('qdxviznaiw', function(table) {
    table.json('qrnoedsnkg');
    table.json('wxgwqlxzye');
    table.timestamp('kpphjywfat');
    table.json('zwzqsvrusg');
    table.integer('mptqjeudvd');
    table.timestamp('kbbmjappjo');
    table.timestamp('dmxgjzsieg');
    table.bigInteger('fnqagfvcst');
  });
  await knex.schema.alterTable('hakfuietep', function(table) {
    table.string('ylblpdgisp');
    table.integer('iyjqlsuwsa');
    table.bigInteger('zfhwdqmbbt');
    table.timestamp('frhqypydnk');
    table.json('zuerhwvonp');
    table.timestamp('plocvijkcd');
  });
  await knex.schema.alterTable('jevssptzwu', function(table) {
    table.bigInteger('tcuxryrutc');
    table.float('gcxjzmqocu');
    table.string('nfiboxmklh');
    table.integer('qpzkhdzplx');
    table.string('rlytvckckz');
    table.string('gbvalxmerb');
    table.float('gatwtzwhpl');
    table.integer('yfstjqcqrv');
  });
  await knex.schema.alterTable('rmavmhajzc', function(table) {
    table.timestamp('ottzjhmaoq');
    table.timestamp('hntlfscziw');
    table.text('ktoycxhtkp');
  });
  await knex.schema.alterTable('weutntzmtx', function(table) {
    table.boolean('svzctkashw');
    table.timestamp('uyugqgwzji');
    table.boolean('ppgrxvrvwr');
    table.json('tylsigfdnt');
  });
  await knex.schema.alterTable('lqlrmktjem', function(table) {
    table.float('qraylmamvc');
    table.timestamp('wmszlasimu');
    table.integer('tphthpgphv');
    table.integer('oiowohfqmb');
    table.integer('pjhqvvcoav');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};