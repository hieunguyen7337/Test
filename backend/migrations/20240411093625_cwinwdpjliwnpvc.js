'use strict';

/**
 * Migration: 20240411093625_cwinwdpjliwnpvc
 * Description: Create table
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('jvhokehxqr', function(table) {
    table.boolean('yulybwbbwp');
    table.string('adzzjxymnq');
    table.integer('cpxkqfoodi');
    table.boolean('jzkvqmyzle');
    table.string('zkhumqtiah');
    table.timestamp('fyitrrsokc');
  });
  await knex.schema.alterTable('ntymanlqjm', function(table) {
    table.json('wwpvhbpvdq');
    table.boolean('lyvvlcwwdu');
    table.timestamp('hokburlzzg');
    table.integer('jywedeozhi');
    table.text('jlnjimathc');
  });
  await knex.schema.alterTable('zfdvbckzav', function(table) {
    table.text('ssozefmroz');
    table.boolean('kimzvvvemk');
    table.bigInteger('dwsddagcdj');
  });
  await knex.schema.alterTable('leropakjix', function(table) {
    table.timestamp('psgzbayqgd');
    table.text('piqkntszic');
    table.json('bfcankvcmf');
    table.json('hzalasazdz');
    table.bigInteger('yddicsdhpw');
    table.json('vstixzcgsf');
    table.bigInteger('dkpfmpoefc');
    table.string('doubmyjpak');
    table.json('ujocumiivb');
  });
  await knex.schema.alterTable('ziklvvghkz', function(table) {
    table.text('vlbbbgqsdy');
    table.timestamp('fmjkonpdbf');
    table.bigInteger('xyuozdcdrj');
    table.integer('nhqlsvstss');
    table.bigInteger('vdyecalngq');
    table.timestamp('kffagvzpbq');
    table.text('lutfhrispq');
    table.string('xqvqbwxabj');
    table.integer('udwhhunjfp');
    table.float('aiswmlivvx');
  });
  await knex.schema.alterTable('izjsojpspq', function(table) {
    table.float('ytotblgwfp');
    table.string('qlkhzsoofd');
    table.text('wbsrhummyg');
    table.boolean('vlnyaqdjfa');
    table.timestamp('tfqkflluco');
    table.float('xnliquyhlh');
    table.boolean('jergazcysa');
    table.float('aphkbpdekz');
    table.bigInteger('lcjswsdwgg');
    table.bigInteger('majprvvekk');
  });
  await knex.schema.alterTable('bvmybtsmww', function(table) {
    table.bigInteger('rhwxndwgdv');
    table.float('lvluohmpnb');
    table.float('vtlftpffbl');
  });
  await knex.schema.alterTable('qkyzmbtspq', function(table) {
    table.integer('aijykblytq');
    table.timestamp('yswybvcpal');
    table.boolean('xuiclthiul');
    table.float('ummtkbhzjw');
    table.boolean('ntzakciasg');
    table.timestamp('ncovfryltu');
    table.float('teqtpuwmwk');
    table.text('majqjphozo');
    table.integer('xrgtvyrqek');
    table.json('xesthmldva');
  });
  await knex.schema.alterTable('ovoaczlegc', function(table) {
    table.float('jyuynqfyar');
    table.text('gailtnlwmv');
    table.text('feaqmtalda');
    table.json('cmtkcmnlqu');
    table.json('fqdtmcedeh');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};