'use strict';

/**
 * Migration: 20241010213415_xnzjhvhlwdfjpit
 * Description: Rename field
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('wibrcclmra', function(table) {
    table.string('amjqzxpxhm');
    table.timestamp('adchvpvnej');
    table.boolean('ttbinartvv');
    table.json('zalrfsheqi');
    table.bigInteger('qeylhlqibd');
    table.text('olmpbawurw');
    table.json('pfquzjozsb');
    table.boolean('lzdudvgmgw');
    table.json('uhapggeyhr');
  });
  await knex.schema.alterTable('nofwlciigh', function(table) {
    table.json('ashhqyjjcf');
    table.boolean('zbutrniyqo');
    table.float('ajknhmcvof');
    table.bigInteger('rkotakfngf');
    table.float('ubpwnlfsdc');
    table.integer('surufbpdvp');
    table.json('wopplxtqiz');
    table.timestamp('yrawpdhcpw');
    table.integer('wlznirelay');
  });
  await knex.schema.alterTable('vnuodyknla', function(table) {
    table.text('cjfgpctggc');
    table.json('cbeprumlct');
    table.boolean('vkilnxxljd');
    table.integer('uzcidmwvyb');
    table.boolean('aobpixbspp');
    table.string('wvkublfrlp');
    table.text('salfpogyur');
    table.text('xntyaklmjs');
  });
  await knex.schema.alterTable('asuvlsnxop', function(table) {
    table.string('lgvipgqhsv');
    table.string('eucpmcarsn');
    table.float('gsvcakcfbl');
    table.timestamp('euaxsumcmd');
  });
  await knex.schema.alterTable('srycetcbgt', function(table) {
    table.text('shklffkjuf');
    table.bigInteger('pzqltbuqre');
    table.json('kdtgjusqzw');
  });
  await knex.schema.alterTable('qqiyaremju', function(table) {
    table.float('gxarjiecrs');
    table.bigInteger('bloeiejsye');
    table.float('uemjhzofun');
    table.text('dvmmufnlpq');
    table.string('opgsaaswmh');
    table.string('aanhnxutpu');
  });
  await knex.schema.alterTable('hkkdqpsumm', function(table) {
    table.integer('mtfqljgtgy');
    table.bigInteger('jknuiupxwz');
    table.text('gllfqjflpo');
    table.boolean('rjczthprrc');
    table.integer('pyszensmvh');
    table.bigInteger('ulqyakrobd');
    table.timestamp('tqjvapaqor');
    table.boolean('phrzoytcpq');
    table.boolean('zbayhmoxww');
  });
  await knex.schema.alterTable('qctqmrorde', function(table) {
    table.timestamp('qkecsxskpj');
    table.bigInteger('lecktujgtj');
    table.float('wmqeiskinb');
    table.integer('yecfvsabse');
    table.float('eixascqqhq');
    table.timestamp('vtkapyrjat');
    table.bigInteger('fljirzewrt');
    table.timestamp('momfpknfsb');
    table.timestamp('vxporbzool');
    table.json('ltmantgnke');
  });
  await knex.schema.alterTable('nzselxfgtv', function(table) {
    table.string('lxxqlfsdrc');
    table.float('cbwfkebaeq');
    table.text('wauauqqham');
    table.timestamp('msrvozkzon');
    table.string('zadlfvotde');
    table.text('yudgxwldmt');
    table.timestamp('mtkwktjtwj');
    table.float('abqqqgqmvv');
  });
  await knex.schema.alterTable('gfezshixdn', function(table) {
    table.string('zjcxvznlyb');
    table.string('gymihsixlc');
    table.timestamp('pnhaftzyso');
    table.float('grjmctgahh');
  });
  await knex.schema.alterTable('cdvjsyatzf', function(table) {
    table.timestamp('edapmostyf');
    table.integer('jwjsanfclf');
    table.timestamp('eubqltxqqo');
  });
  await knex.schema.alterTable('kkshdpxicw', function(table) {
    table.string('vqajjrwrkl');
    table.bigInteger('hkhodnaiov');
    table.timestamp('rnvyvqznib');
    table.bigInteger('olucktakta');
    table.string('epltapfngg');
    table.timestamp('yrwzrlocby');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};