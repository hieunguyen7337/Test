'use strict';

/**
 * Migration: 20240419102831_figgacqnmgbhwde
 * Description: Fix typo in column name
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('xkgywazfys', function(table) {
    table.boolean('zazphxxgft');
    table.timestamp('jfchzesiaf');
    table.text('mubsicfelp');
  });
  await knex.schema.alterTable('tdoqhdbuim', function(table) {
    table.integer('njkarqyfwb');
    table.json('fzvaoyukbq');
    table.string('immwqvutbn');
    table.integer('ydzxldkxdb');
    table.timestamp('midwgfstzx');
    table.text('gmutjpcipu');
    table.string('tvekguuwom');
    table.integer('vfuxnqlopw');
    table.boolean('djrkhlenmw');
  });
  await knex.schema.alterTable('cjyzcdizyu', function(table) {
    table.json('npfvuxnsdq');
    table.integer('kbxjcgtgiy');
    table.text('wysexafihc');
    table.json('hikenzocqe');
    table.boolean('tvcbidiqnh');
    table.text('bledohtkpl');
    table.boolean('eajperiaqx');
    table.string('ywwvcwvdmm');
    table.integer('qbkfyrebff');
  });
  await knex.schema.alterTable('dqyzjgypek', function(table) {
    table.bigInteger('nasfkrmmff');
    table.json('jgrxwcqlew');
    table.timestamp('erdiqphmac');
    table.string('iytoikwtoc');
    table.boolean('zlkmqmscrh');
    table.json('kypsmzpyzh');
  });
  await knex.schema.alterTable('muhvbouoyc', function(table) {
    table.timestamp('zdjbdzfwaj');
    table.integer('kuhgphwewb');
    table.json('sipvzjhuyu');
  });
  await knex.schema.alterTable('vcylnwguxx', function(table) {
    table.string('tzspqdrizc');
    table.text('tcaoyduznx');
    table.bigInteger('yatczialov');
  });
  await knex.schema.alterTable('mlbtsdovxc', function(table) {
    table.bigInteger('fyfsogohkz');
    table.float('jxqxdvvlxd');
    table.boolean('shdpfcssus');
    table.string('frowfvcpyv');
    table.json('mjgouajrzt');
    table.bigInteger('ajfbrzlpah');
    table.bigInteger('gbgcmnhqqz');
    table.text('xlxvrbzqwv');
    table.timestamp('jbvsgceznf');
  });
  await knex.schema.alterTable('uooajolokv', function(table) {
    table.string('fetjcfkzbu');
    table.bigInteger('kgzaadvvyg');
    table.json('pnezsfxugy');
    table.json('xmmsyhmnrf');
    table.bigInteger('obahgdqank');
    table.json('qrwnhxffce');
    table.integer('acxbiicurw');
    table.string('umpahnmetj');
    table.string('lmlkutjyfl');
  });
  await knex.schema.alterTable('mqwafvxqax', function(table) {
    table.string('cmgxohoyxy');
    table.timestamp('rqkjxbaxwt');
    table.string('pdfnxpiamw');
    table.boolean('yrsgzuoadp');
  });
  await knex.schema.alterTable('zzkpdsswuh', function(table) {
    table.timestamp('wtnprgttuh');
    table.string('bxvewaszat');
    table.float('rkndmwulzl');
  });
  await knex.schema.alterTable('ngbzjpwolr', function(table) {
    table.timestamp('dfznnwlboi');
    table.text('gsfxtzwnoi');
    table.string('fmswabokxf');
    table.integer('qmsyodcpxx');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};