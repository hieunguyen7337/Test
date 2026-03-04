'use strict';

/**
 * Migration: 20240621003836_zyapbqzgmxgjagd
 * Description: Undo previous migration
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('kfclbigamf', function(table) {
    table.float('fwffiatpde');
    table.timestamp('cnqvcnmhzd');
    table.string('pmwwukfssj');
    table.bigInteger('oqpituatrx');
    table.float('gfeiuwkhdo');
    table.timestamp('wvezxcexfb');
    table.bigInteger('sjgkqwvgjv');
    table.integer('dlhvmcbhcq');
  });
  await knex.schema.alterTable('eszfgcjrwf', function(table) {
    table.boolean('ftkgiskpup');
    table.boolean('xafehzgbop');
    table.integer('jfbfvzappe');
    table.timestamp('kmwoaxktbv');
    table.text('wuvjhayshv');
    table.json('uohekbwxdj');
    table.string('seeogxqork');
  });
  await knex.schema.alterTable('kqewyrisuz', function(table) {
    table.text('jmgwduvlgp');
    table.boolean('wwlbwweoir');
    table.float('xzfqhjnyrm');
  });
  await knex.schema.alterTable('opeppqikej', function(table) {
    table.integer('degzosbsbi');
    table.integer('fgasdqquaq');
    table.timestamp('drtclzvaor');
    table.timestamp('zyzeefjujy');
    table.string('mbanzystqp');
    table.text('kfmujzcqmo');
  });
  await knex.schema.alterTable('mysihpaytw', function(table) {
    table.string('frlrpmpnkz');
    table.bigInteger('urtslarxcm');
    table.string('abrzhbsfwe');
  });
  await knex.schema.alterTable('nwaukvvpke', function(table) {
    table.string('zhnqlbskva');
    table.string('dqjsbktekm');
    table.json('ovinknmgxq');
    table.boolean('hdmmgfnsla');
    table.float('izpmxfajxe');
    table.text('iqdiipavoi');
    table.timestamp('hbsfbyfoae');
    table.text('kxkxjcbjfa');
  });
  await knex.schema.alterTable('oahgbsxrrf', function(table) {
    table.boolean('ohpnaybxcj');
    table.string('mkelkqbsdi');
    table.timestamp('dvvaqswkda');
    table.timestamp('xggebrnhfm');
    table.boolean('lecnddobur');
    table.string('hfyxqmoxkz');
    table.timestamp('ceboiryjxh');
    table.integer('hyeuxicmls');
    table.boolean('nitfqdnhxa');
  });
  await knex.schema.alterTable('jtuoslgkan', function(table) {
    table.timestamp('egfjkbirjq');
    table.text('levruuqfgx');
    table.float('gotwwifidf');
    table.string('aijjjkslzz');
  });
  await knex.schema.alterTable('ekfldygude', function(table) {
    table.boolean('jfdxepiwne');
    table.boolean('zxumnmgrck');
    table.json('iixpmrlogc');
    table.float('whmolhvhac');
    table.json('nvdbjlnvxa');
    table.timestamp('lejuckkcsl');
    table.string('yzdxkkrgle');
    table.text('uizmqsdjxy');
  });
  await knex.schema.alterTable('eaduspqfco', function(table) {
    table.boolean('yudjmlzqxt');
    table.timestamp('radntcwuit');
    table.json('jzzzffqgyz');
    table.bigInteger('fkooiipsjy');
    table.boolean('owjgiqyrml');
    table.float('akokneebcj');
    table.bigInteger('evxhlzykht');
    table.bigInteger('gdnzzqokpd');
    table.integer('zpmrbrgmps');
  });
  await knex.schema.alterTable('ipouatwbwt', function(table) {
    table.timestamp('qxbzttoiua');
    table.string('gnxxysxhlj');
    table.integer('brmrkouenr');
    table.integer('zjwhwulajt');
  });
  await knex.schema.alterTable('ecffouaofh', function(table) {
    table.json('ddtydikskl');
    table.bigInteger('pevqstbisn');
    table.text('bistjjnnfv');
    table.boolean('ghxrcjuvyj');
    table.json('gqtvzqiyya');
    table.float('tmhmkhsmhj');
    table.bigInteger('phdelpdrhn');
    table.json('hectatafla');
  });
  await knex.schema.alterTable('ffijtbcjyl', function(table) {
    table.timestamp('almfppavze');
    table.string('qplbdahcdq');
    table.json('vpxkzqxjpx');
    table.string('bgxlixfwpg');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};