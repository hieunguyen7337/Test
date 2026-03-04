'use strict';

/**
 * Migration: 20240215012859_kvitsfasvoxpgzy
 * Description: Drop table
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('azhxlutphc', function(table) {
    table.float('tyxpdqatxy');
    table.integer('lyqlmioedy');
    table.float('wtsppafxlh');
    table.text('ykhodtupuj');
    table.bigInteger('rjqcwfgpff');
    table.text('tylgdaotmw');
  });
  await knex.schema.alterTable('addbifohxi', function(table) {
    table.bigInteger('qslowxmnux');
    table.json('xssuvyukoj');
    table.text('wpcqkdrekb');
    table.float('gjjmahngjf');
    table.bigInteger('zftpaggyxx');
    table.boolean('wphpowsrmz');
    table.boolean('femopdjulu');
  });
  await knex.schema.alterTable('qviaktfltp', function(table) {
    table.integer('stxapdpqsf');
    table.text('qsquwfnbtt');
    table.bigInteger('ynfhpvizey');
    table.json('lovbippobe');
  });
  await knex.schema.alterTable('puuhdkdeap', function(table) {
    table.timestamp('ujdjahseiy');
    table.integer('cunumthwbe');
    table.integer('afpymmfscp');
    table.boolean('xtxzrkjode');
    table.integer('ueuhvcjqxn');
    table.string('napzlukdmd');
    table.float('sbcizlqtep');
    table.timestamp('ifqgalyhss');
  });
  await knex.schema.alterTable('vvhluityqn', function(table) {
    table.bigInteger('igqlxmgxbp');
    table.bigInteger('bhfdmiuhzf');
    table.float('rnbnhnrtyg');
    table.string('bxlbcawqzg');
    table.float('fsbzeknaai');
    table.text('umtkqozuej');
    table.text('tdkmrelbsd');
  });
  await knex.schema.alterTable('yyvifemgbo', function(table) {
    table.json('dadeceilap');
    table.integer('fwviwjffrf');
    table.float('hktkoptsti');
    table.float('jpywirycbm');
    table.boolean('xjsezllhnu');
    table.float('gyicoczbkg');
  });
  await knex.schema.alterTable('uaucxmmuio', function(table) {
    table.json('rowvsodwfe');
    table.timestamp('byzthszkqq');
    table.json('ohjuhxxmhu');
    table.bigInteger('jxsytapcri');
    table.timestamp('kjalpevist');
  });
  await knex.schema.alterTable('mwsapohoop', function(table) {
    table.json('xkaazdlsyq');
    table.text('qgpoyylfrj');
    table.float('avuuzjvvlj');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};