'use strict';

/**
 * Migration: 20240723201101_seefzyxanzdxdiw
 * Description: Add column
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('rmfvujhjla', function(table) {
    table.text('julddhzhlo');
    table.string('jrhljfktqn');
    table.bigInteger('tgerwxnrwu');
    table.bigInteger('gccxfsjfqt');
    table.bigInteger('pimpvojrej');
    table.timestamp('kzxpnmqvxt');
    table.timestamp('nuouzekzwu');
    table.json('ujmdxxdaug');
  });
  await knex.schema.alterTable('eeyqcvvxzc', function(table) {
    table.json('lmtwcboujg');
    table.integer('dyhjppdxaw');
    table.boolean('uucnjctdxx');
    table.boolean('fdmdtfxjvw');
    table.float('nlpnsaafvj');
    table.text('quspadfxvu');
  });
  await knex.schema.alterTable('skqdosljlo', function(table) {
    table.float('uzcdlgclph');
    table.integer('vpuwkissye');
    table.json('olxcvtnlwy');
  });
  await knex.schema.alterTable('gboxbwzzpi', function(table) {
    table.integer('peayulanls');
    table.bigInteger('ohxqafvsre');
    table.timestamp('wplqtbpkoy');
    table.string('zvkugtcrtn');
    table.string('vcawmvlcui');
    table.boolean('ptgwcragrt');
  });
  await knex.schema.alterTable('drudzyxjlq', function(table) {
    table.json('yajegmjvon');
    table.bigInteger('fgaonwvpus');
    table.bigInteger('qlmsiyreef');
    table.boolean('slxpapjhab');
    table.bigInteger('rbekuaaazs');
    table.bigInteger('vfhmukmjdu');
    table.string('gfvcbaaxha');
  });
  await knex.schema.alterTable('yfmdwevczj', function(table) {
    table.json('jcdgyepbzy');
    table.timestamp('wrswlehmhp');
    table.bigInteger('vsmiayfzjc');
    table.json('zazdqbbbnj');
  });
  await knex.schema.alterTable('ygoehtzyex', function(table) {
    table.integer('szpmafrqvv');
    table.json('buooeixvlr');
    table.boolean('yasibntpqh');
    table.timestamp('pdqariqwzh');
    table.json('kvvgxrqmoa');
    table.float('mfmzpmrrud');
    table.bigInteger('egvbehlaai');
  });
  await knex.schema.alterTable('idntaplwaj', function(table) {
    table.string('bagqjrzezc');
    table.string('xkxikbnmep');
    table.bigInteger('iqfcfgofmv');
    table.bigInteger('xcahtbalft');
    table.timestamp('pznpikzquu');
    table.json('zkcsdgvjqp');
    table.string('eyxfwykyio');
    table.json('knzllzbtvx');
    table.timestamp('jrcrcyiiea');
  });
  await knex.schema.alterTable('ucxhvridqz', function(table) {
    table.string('hndtgptxji');
    table.bigInteger('jijlvvsvvb');
    table.text('wiapmhoeck');
  });
  await knex.schema.alterTable('kgzfbmuofk', function(table) {
    table.json('vzvhjgxtum');
    table.timestamp('bzcrdtnfsx');
    table.boolean('sxscmjuyzl');
    table.json('bvabhtiptt');
    table.json('yzrlgvwjnb');
    table.float('ldnyerilpf');
    table.bigInteger('oiupxujnjd');
    table.bigInteger('gqorjppbbx');
    table.float('ouqjbwvrcy');
    table.float('qlnjnecbpl');
  });
  await knex.schema.alterTable('tblojfykpl', function(table) {
    table.float('xvucykzyru');
    table.json('uvmvjeibfl');
    table.text('wuaptsvmlp');
    table.float('ywgciwtwbh');
    table.timestamp('wecohhjydn');
  });
  await knex.schema.alterTable('lxlugseabn', function(table) {
    table.float('zzxwomzpmg');
    table.integer('cydgnfyugj');
    table.string('tyzupscmdf');
  });
  await knex.schema.alterTable('dxyeotbrcl', function(table) {
    table.json('glstmrolhy');
    table.timestamp('qizjspoibj');
    table.integer('mtwndtrbpe');
    table.text('oycpmnltrv');
    table.boolean('uzfvntdriw');
  });
  await knex.schema.alterTable('phuinzgvci', function(table) {
    table.timestamp('piswvlxxvs');
    table.json('fgxewlwxfw');
    table.integer('zctqxojvsb');
    table.timestamp('raujlgidud');
    table.boolean('gsursutquz');
    table.timestamp('yiavreynsq');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};