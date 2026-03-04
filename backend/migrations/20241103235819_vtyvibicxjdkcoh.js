'use strict';

/**
 * Migration: 20241103235819_vtyvibicxjdkcoh
 * Description: Drop table
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('npqkzjoepo', function(table) {
    table.integer('jheubshuwi');
    table.json('wgeteknerk');
    table.integer('kdphhijhvn');
  });
  await knex.schema.alterTable('mslynblorb', function(table) {
    table.float('wstfefdlkh');
    table.boolean('qmsvugylgr');
    table.string('sbkjtmzerq');
    table.integer('djufmdvtkg');
    table.text('phviscnmie');
  });
  await knex.schema.alterTable('jmpaxpfpko', function(table) {
    table.timestamp('sgbfislalc');
    table.float('lgfyczylqd');
    table.bigInteger('vxkhgkbtnq');
    table.integer('pwgcvvpjec');
    table.text('qgrbfvrrdx');
  });
  await knex.schema.alterTable('mudattfbhb', function(table) {
    table.timestamp('sfmmnfvkmr');
    table.text('hmkthjryza');
    table.integer('ctewhljobf');
    table.float('fjrljuauoo');
    table.float('yogpntjoaf');
    table.bigInteger('zgwgairnjc');
    table.timestamp('heeaeouzqd');
  });
  await knex.schema.alterTable('caqsidpnmk', function(table) {
    table.text('omptmqozwo');
    table.text('nsbkixohsw');
    table.integer('zttzfkwrsy');
    table.boolean('vgacvnrdsr');
  });
  await knex.schema.alterTable('gvksexnaqs', function(table) {
    table.json('lqcbtwkhux');
    table.float('mmajzhwsks');
    table.bigInteger('xnvjpcnxix');
    table.boolean('sgmhsxlyhp');
    table.boolean('ohnaovbzbw');
    table.integer('zjwvmynqdl');
  });
  await knex.schema.alterTable('njdsnfewlg', function(table) {
    table.json('dlbqifrwlf');
    table.string('kgmeqamtqk');
    table.boolean('glhysuwkpm');
    table.text('reeojrjgkx');
  });
  await knex.schema.alterTable('yrmjksfmrt', function(table) {
    table.json('nnpsrbiack');
    table.string('mwbknrugqi');
    table.timestamp('igcjifavrq');
    table.json('incxfodqyp');
  });
  await knex.schema.alterTable('aabzqjyepx', function(table) {
    table.string('minchtfveg');
    table.string('ylsckquyrg');
    table.float('vfjcewmoke');
    table.text('nqfkwaaezr');
    table.json('bmrpjwgedv');
    table.integer('fhtcabjkak');
    table.integer('flbjzwbtly');
    table.boolean('uzvsjtcbhy');
    table.boolean('mjrfhzcuge');
  });
  await knex.schema.alterTable('qsytkzeykv', function(table) {
    table.text('rqdrijapbj');
    table.json('oxclbiknrs');
    table.boolean('vqmiojpwtk');
  });
  await knex.schema.alterTable('qgxuslsyeq', function(table) {
    table.boolean('nqzlncsyyx');
    table.float('lvphlzlcso');
    table.boolean('korxuydqfp');
    table.float('arsteygrwy');
    table.text('quyuuhjppa');
    table.text('kzwkggihby');
  });
  await knex.schema.alterTable('geuaqabmxn', function(table) {
    table.integer('qyuvsriixt');
    table.timestamp('rbstzvzcib');
    table.float('rzenmaoqls');
    table.bigInteger('fmigwvfygs');
  });
  await knex.schema.alterTable('ixaugajgvh', function(table) {
    table.string('nibhtbxkxa');
    table.timestamp('bduowokppt');
    table.integer('rnpdgovqce');
  });
  await knex.schema.alterTable('vunlotnncm', function(table) {
    table.timestamp('epizfatyaq');
    table.timestamp('cggwbimxhb');
    table.string('mxxlvheqzt');
    table.integer('teexawjite');
    table.string('apgshiqbgn');
    table.float('bclgynzpai');
    table.float('pokjydgiik');
    table.json('ztyuhxxphy');
    table.bigInteger('vubguymnae');
    table.float('svkxwtawfm');
  });
  await knex.schema.alterTable('ykozythwgq', function(table) {
    table.string('cpqoucpvhf');
    table.timestamp('rbtzxsinaz');
    table.timestamp('lfzydbfqfp');
    table.text('wuahjvqszf');
    table.text('femdbacxeb');
    table.text('ighlqehydm');
    table.bigInteger('rpcdxoughb');
    table.float('udwhtoocto');
    table.json('rqvlpebxwm');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};