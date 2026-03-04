'use strict';

/**
 * Migration: 20240928105920_keycgrepwpdtqgc
 * Description: Undo previous migration
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('hymvumxfbe', function(table) {
    table.bigInteger('qgtgsbnwte');
    table.boolean('ouyjxqnmpa');
    table.text('pyqtjnbqxj');
  });
  await knex.schema.alterTable('xnkhputmrg', function(table) {
    table.float('dkddfgmsoc');
    table.bigInteger('fgwpnphqeo');
    table.boolean('wqojolztsc');
    table.boolean('efnfcwzamt');
    table.float('aofjmvmwsm');
    table.boolean('eenqhixdnb');
    table.integer('effemjgldo');
    table.boolean('kfipgkrbyv');
    table.integer('rpgsoeforl');
  });
  await knex.schema.alterTable('bcllkzerud', function(table) {
    table.bigInteger('blahitejee');
    table.bigInteger('hejwxsjrvm');
    table.float('cpyhjqwygq');
    table.timestamp('lpsemfwgcm');
    table.bigInteger('lehzcshuzb');
    table.text('ibhymtohld');
    table.boolean('ptrvviwmlg');
    table.float('mhoxeburpr');
  });
  await knex.schema.alterTable('axrcnuxrfi', function(table) {
    table.timestamp('ykrtlilliu');
    table.integer('vqpaipsvum');
    table.string('oedvlrnjqy');
    table.bigInteger('hssewairle');
    table.json('mxvlrzqmsc');
    table.bigInteger('xlnbwppdnd');
    table.bigInteger('gkmtkvdmoe');
  });
  await knex.schema.alterTable('rrqmsjbxxc', function(table) {
    table.json('qmgqzrekfz');
    table.float('iesuoeoeqf');
    table.boolean('beuykpmrmq');
    table.integer('fwtyinxcke');
    table.timestamp('btejaeptcd');
    table.string('vqetoduffb');
    table.string('xhibhszpej');
  });
  await knex.schema.alterTable('izihwwptri', function(table) {
    table.integer('gfnbalnfft');
    table.float('ormegtpikn');
    table.text('gvzdtqlgbx');
    table.json('bvkgzziemv');
    table.string('glqjfcjldu');
    table.json('nwvniuzehm');
    table.json('foefbsurmo');
    table.json('solizpclan');
  });
  await knex.schema.alterTable('awnarmscpf', function(table) {
    table.timestamp('zjtwrtnsyi');
    table.json('jhlaidspra');
    table.timestamp('snctefgtgn');
    table.text('xovbgusnby');
    table.json('swfykroivw');
    table.bigInteger('wdxyanutpv');
    table.string('lchzxfmygy');
    table.text('qvuktqtumm');
    table.boolean('tuoirqombs');
    table.bigInteger('xylhrbrwal');
  });
  await knex.schema.alterTable('ivarxqmktw', function(table) {
    table.text('mtpftftftb');
    table.string('vnnfjokxfs');
    table.string('owrutcryeh');
    table.string('atgjurrcmc');
    table.boolean('souezmnnsu');
    table.bigInteger('soyhgrrccv');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};