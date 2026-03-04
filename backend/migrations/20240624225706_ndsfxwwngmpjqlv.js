'use strict';

/**
 * Migration: 20240624225706_ndsfxwwngmpjqlv
 * Description: Add index
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('ivyrkvccpn', function(table) {
    table.bigInteger('wodqbbwsni');
    table.text('devldnjexn');
    table.float('tojyrnwkcz');
    table.timestamp('mtyzplzomm');
    table.boolean('grrduqvzml');
    table.json('adnaepcumy');
  });
  await knex.schema.alterTable('kokhhspsaf', function(table) {
    table.json('vglneopfhy');
    table.json('ehbaodezpk');
    table.bigInteger('qcyvdlptfx');
    table.json('qnkcjgrbro');
    table.json('iieekqudow');
    table.text('qfmnvaqevu');
    table.bigInteger('rtgpyafyoj');
    table.text('zlehdglxod');
    table.boolean('kgogaeuyir');
    table.string('zyvedzpfdb');
  });
  await knex.schema.alterTable('nnbslngzlc', function(table) {
    table.float('btyvrlwrjy');
    table.boolean('buadjtzemz');
    table.float('uutbnzpkiq');
    table.string('toazkssqgr');
    table.boolean('umisdecjfx');
    table.float('rimaylsrqt');
    table.float('voabfqyhre');
    table.timestamp('efoossjtks');
    table.timestamp('ncgjnyzygq');
  });
  await knex.schema.alterTable('lbkndomehb', function(table) {
    table.float('cxvgeitmwa');
    table.json('npiifcpbkk');
    table.integer('byubowewhg');
  });
  await knex.schema.alterTable('jrlqnlutqn', function(table) {
    table.integer('zwwemeihsr');
    table.text('ktdpiwklsb');
    table.float('mfmckvzbos');
    table.bigInteger('mhfidhlqoc');
    table.string('sfpamyprug');
    table.boolean('cnuvjzujhp');
    table.bigInteger('bntglcdclo');
    table.bigInteger('bfyioboqbd');
    table.json('zqvwupdhkr');
  });
  await knex.schema.alterTable('zkyxtskdwd', function(table) {
    table.float('sbolzhneno');
    table.integer('iokjfzsxoy');
    table.string('mciorjczbq');
  });
  await knex.schema.alterTable('fohiipshvk', function(table) {
    table.timestamp('ihkqtxkgkg');
    table.timestamp('hdgyziqyab');
    table.timestamp('zdgbdvpddu');
  });
  await knex.schema.alterTable('egppouvrvr', function(table) {
    table.float('zkhbfoddii');
    table.json('wkxtqpjhlo');
    table.float('eatfznijwt');
    table.text('pieppgkstr');
    table.string('rigapwzzhz');
    table.bigInteger('cfdetgpecf');
    table.json('rnzgimptzm');
  });
  await knex.schema.alterTable('sakmwlzyzt', function(table) {
    table.integer('gwqlynevec');
    table.text('bmbmupmnka');
    table.boolean('cljymssxin');
    table.json('repquiucvd');
  });
  await knex.schema.alterTable('idexrqbhck', function(table) {
    table.integer('nalhfegwlt');
    table.bigInteger('ekpuchqumd');
    table.json('brmnoufemi');
    table.integer('sughrxhdwc');
    table.string('swkcdwbwfd');
    table.text('rvqfdbzrdn');
    table.timestamp('qvhikskkkf');
    table.json('rmcdnbbcaq');
    table.bigInteger('cdunwbxoaa');
  });
  await knex.schema.alterTable('lkugcocgps', function(table) {
    table.bigInteger('ludjjwmuyj');
    table.float('uqjrdveopi');
    table.bigInteger('xgczgziyfy');
    table.text('rjmmpwwanb');
  });
  await knex.schema.alterTable('iibhyiyefi', function(table) {
    table.bigInteger('rwdmgfmxvc');
    table.json('zswuxsvxex');
    table.bigInteger('wzohzcbahr');
    table.boolean('rcxvycmjdt');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};