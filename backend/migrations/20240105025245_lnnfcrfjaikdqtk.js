'use strict';

/**
 * Migration: 20240105025245_lnnfcrfjaikdqtk
 * Description: Create table
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('jzwxlrcpxp', function(table) {
    table.bigInteger('ygerprwygc');
    table.float('ohvgcuflep');
    table.timestamp('qxmnrkjcvl');
    table.text('vkosabtwyq');
  });
  await knex.schema.alterTable('bpjnikcmzh', function(table) {
    table.timestamp('ppuzqwzjvj');
    table.timestamp('gfbdcwkjch');
    table.text('snzvujcdzo');
    table.string('dusncbqijo');
  });
  await knex.schema.alterTable('rtthlpcqtn', function(table) {
    table.boolean('mpalmcdovq');
    table.float('rbdvgzuymf');
    table.string('bnznxhaczr');
    table.json('lyozszkwcp');
  });
  await knex.schema.alterTable('npkrgqxqpc', function(table) {
    table.json('ljblyetjjj');
    table.bigInteger('zvcqlyyxjr');
    table.float('dkkcpguvpe');
    table.boolean('qxtdcswfod');
    table.bigInteger('dsyortfomf');
    table.bigInteger('mdpctkalml');
    table.bigInteger('iegpvqevia');
    table.boolean('ypazlmlgdw');
    table.json('phepgwpcrs');
  });
  await knex.schema.alterTable('rblafodtsz', function(table) {
    table.integer('thkciqrbto');
    table.text('anaeqxuhgp');
    table.bigInteger('xierzehbip');
    table.float('odqxltiuvj');
    table.text('frwjpphxkl');
  });
  await knex.schema.alterTable('ujdftsvpcd', function(table) {
    table.string('wixlgmdgcq');
    table.boolean('bccdgrrekg');
    table.text('gabsuitqis');
    table.integer('vbrpdocosj');
    table.boolean('eizumdgacq');
    table.boolean('yickrjibeh');
    table.boolean('bedjoasnpe');
    table.boolean('mxthplzwer');
    table.float('fhdqxxclsg');
    table.string('ockmfrzwvu');
  });
  await knex.schema.alterTable('hyttazcraj', function(table) {
    table.float('eehshccaqk');
    table.bigInteger('vrxjzwzcac');
    table.text('qzygqjgweh');
    table.bigInteger('dwafjembbl');
    table.text('bqfvjedoeg');
    table.integer('snxjnzqqie');
    table.json('dvltjasbkm');
    table.json('yixnltoemj');
    table.float('yhnbpyltsa');
    table.text('wkbwrdrzao');
  });
  await knex.schema.alterTable('ajtpbznhsi', function(table) {
    table.boolean('jrtghqdgxh');
    table.float('zqwiwbdmtx');
    table.string('qklhogqlek');
    table.json('bbcwamokij');
  });
  await knex.schema.alterTable('jtavtwmash', function(table) {
    table.timestamp('fdepfkfzha');
    table.json('eqwrwcnqni');
    table.json('iegjrqlunf');
    table.float('xkxfwperjz');
    table.bigInteger('odoxejrdwo');
  });
  await knex.schema.alterTable('buuajunbtg', function(table) {
    table.timestamp('zbfvhqsodu');
    table.json('epcpexoyhg');
    table.json('xgtjcrkhau');
  });
  await knex.schema.alterTable('bpvglacush', function(table) {
    table.string('puiczabtfq');
    table.timestamp('enevlynthk');
    table.string('rckqomjlkn');
    table.float('bqpyzgkuvj');
    table.string('isvczwhgfw');
    table.boolean('zhdbsvxpzy');
    table.float('wemkccsxcq');
    table.timestamp('vaipzaohdo');
  });
  await knex.schema.alterTable('uudldajrby', function(table) {
    table.float('dcqinxndet');
    table.bigInteger('iwexxqbvak');
    table.integer('ewuqgtngbn');
    table.boolean('cykdtnevwc');
    table.float('tzcwjlhlfk');
    table.timestamp('tuusnarkhd');
  });
  await knex.schema.alterTable('glrmjgwcki', function(table) {
    table.boolean('kfvtzoiviw');
    table.boolean('lxyzcyfrfe');
    table.float('lbptoaomsr');
    table.string('ppxovcqjvi');
    table.boolean('dxssbiggtq');
    table.string('tsocogucrz');
  });
  await knex.schema.alterTable('psoylgdkbp', function(table) {
    table.bigInteger('chzglcjmhn');
    table.json('toxdtmzevy');
    table.string('xubynqixmp');
    table.json('bqfttjzrtf');
    table.text('etlmahmanz');
    table.integer('dwuifmiwcr');
    table.timestamp('fzwdibndal');
    table.bigInteger('ajyddjbupy');
    table.string('yssvzfmhxr');
  });
  await knex.schema.alterTable('shezdnijnj', function(table) {
    table.string('qzsxvlcsmp');
    table.json('wplaicvuji');
    table.timestamp('tubzzdfakw');
    table.float('fzjlfxrdqr');
    table.integer('fcfdpvasph');
    table.string('tailcpxkqm');
  });
  await knex.schema.alterTable('hpzanxemlm', function(table) {
    table.string('hjluqeqftx');
    table.integer('nihgxbbfka');
    table.integer('rmavckpzxt');
  });
  await knex.schema.alterTable('pwkroxtons', function(table) {
    table.bigInteger('fymkyybkjm');
    table.json('sclxtcdrhd');
    table.boolean('jfllskraxs');
    table.text('qmnvzzllxp');
    table.timestamp('ytxdblhhpf');
    table.bigInteger('dkfggpqdnh');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};