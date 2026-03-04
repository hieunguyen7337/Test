'use strict';

/**
 * Migration: 20240412063005_cvyvqbhsicjamqt
 * Description: Rename field
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('ioxruwgohp', function(table) {
    table.text('ndrfgbcqmw');
    table.json('ojvaazuijw');
    table.string('nzcbeizjek');
    table.json('nvtqeilfop');
    table.float('dplsnjopax');
    table.text('rssshmndoh');
    table.boolean('ociitaogvz');
    table.integer('zikypjrhbi');
    table.bigInteger('cjdejyqbhj');
    table.boolean('mukikqupsu');
  });
  await knex.schema.alterTable('fauvalnqzf', function(table) {
    table.float('fxamcpzpsw');
    table.json('reiionorsp');
    table.bigInteger('pgafxrgzty');
    table.string('pgylpcmubc');
    table.text('ahfnqohpjf');
    table.bigInteger('zygyusvrrk');
  });
  await knex.schema.alterTable('jlkkqwfhso', function(table) {
    table.bigInteger('stcxeysjbw');
    table.string('jovpwgsysc');
    table.text('oefijjjuen');
    table.boolean('qokmmquzms');
    table.bigInteger('eweexdbpee');
    table.integer('aqtdfasosm');
    table.bigInteger('xwblbzhkya');
    table.integer('stqzdmpgdi');
    table.integer('apvwxgjidn');
  });
  await knex.schema.alterTable('obakpkhtbe', function(table) {
    table.timestamp('fnuzoqevdq');
    table.float('gzqypzqgge');
    table.integer('kwdyfyztgf');
    table.boolean('yjitcghmod');
    table.integer('cycxetmbzr');
  });
  await knex.schema.alterTable('iatuvasjyz', function(table) {
    table.integer('zyuokfbcqd');
    table.string('ighywjtarv');
    table.string('ahzflkkaes');
    table.integer('gzavqqmatm');
    table.json('ddlqnetsta');
    table.string('zdfitjhgyo');
    table.integer('ayxdbugylr');
    table.timestamp('wnepdeyvtq');
    table.timestamp('crduejjhup');
  });
  await knex.schema.alterTable('iqptpyinsk', function(table) {
    table.bigInteger('qnslswuked');
    table.float('ygvxjnyrfm');
    table.integer('uqoaioecuz');
    table.integer('otilepoexs');
    table.text('hhufwtadxa');
    table.float('ooftkmamww');
    table.text('iridmoqwaq');
    table.boolean('iwvmtbezro');
  });
  await knex.schema.alterTable('dlsgrdnzgy', function(table) {
    table.integer('ctftlbuovn');
    table.float('auxgerwyte');
    table.boolean('svrzutvsyp');
  });
  await knex.schema.alterTable('zztqjvxyro', function(table) {
    table.float('qlgvtrndrl');
    table.integer('nqiubonsmw');
    table.json('sjyezieayj');
    table.bigInteger('tjltfbwpth');
    table.bigInteger('wbizixxphs');
    table.float('pyzkjkafis');
    table.timestamp('rfpldcfbyd');
    table.integer('qrurjeeioq');
  });
  await knex.schema.alterTable('rbysjoqgkp', function(table) {
    table.bigInteger('aczallxaph');
    table.json('agdnpkmhct');
    table.boolean('pvyzjqyssm');
    table.integer('zeertehvtn');
  });
  await knex.schema.alterTable('qbeosgzkcg', function(table) {
    table.integer('phbmcrylrn');
    table.text('yntmvbbojy');
    table.string('hljztqmnhr');
    table.float('tkfkcwszky');
    table.float('wjfgeogbvf');
    table.text('gntzblojpc');
    table.json('nemzjsgsub');
    table.integer('iedhblwimd');
    table.text('hkpmgjghaf');
    table.string('imfnyiwakm');
  });
  await knex.schema.alterTable('hcxxwuoqcg', function(table) {
    table.float('reknxhpahq');
    table.text('gyallkxgcy');
    table.integer('iynpnlgrnc');
    table.text('zjbdamnqhz');
    table.bigInteger('gpshnxomyb');
    table.float('oibwknlwpr');
    table.string('fkjfteyxbv');
    table.float('qpdiygnfwx');
    table.text('xzukxktxfl');
  });
  await knex.schema.alterTable('lhzoxghnay', function(table) {
    table.float('eqexdylwva');
    table.timestamp('nlomwinjps');
    table.string('jzpazvkrdw');
    table.float('afxqesqcmq');
    table.bigInteger('dbupvezvfq');
  });
  await knex.schema.alterTable('zitqirfhro', function(table) {
    table.boolean('pzxxpxtbkq');
    table.text('ckwqasvouh');
    table.string('kvzmnupzze');
    table.boolean('jotqszuhdt');
    table.integer('xqldfvluqa');
    table.json('ngzrfzruag');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};