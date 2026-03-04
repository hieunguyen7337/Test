'use strict';

/**
 * Migration: 20241002204739_lespupauumaxpwy
 * Description: Fix typo in column name
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('qzjzedbvme', function(table) {
    table.timestamp('mezqhnikql');
    table.boolean('vmklunsbaz');
    table.timestamp('ynhgzukcqq');
    table.boolean('qopdiaqwjc');
    table.integer('lubkiwqlhq');
    table.string('sfkyqyggdh');
  });
  await knex.schema.alterTable('arqkjzxvpv', function(table) {
    table.integer('edpmlpwdqf');
    table.text('ckovhbaroz');
    table.boolean('tslgdklpyr');
    table.text('hlslztcrck');
    table.integer('uwsrqivrxu');
    table.json('mmscnrlaek');
    table.json('yiexighyql');
    table.float('zybhucqffv');
    table.text('eokjrrnbun');
  });
  await knex.schema.alterTable('vmwneuqrhz', function(table) {
    table.boolean('scxvyrihzj');
    table.string('qaurmqoqxp');
    table.float('myasrqhjrj');
    table.string('wnuyymdwxg');
  });
  await knex.schema.alterTable('xbkxtapsln', function(table) {
    table.boolean('jqlldrwwax');
    table.boolean('qbksadedsf');
    table.text('wjapkatjyq');
    table.bigInteger('bpyjlpiksm');
    table.json('kkonsbvpom');
    table.integer('czducktrbq');
    table.boolean('ttbjtkwtjh');
  });
  await knex.schema.alterTable('bbbxfcrpyk', function(table) {
    table.boolean('enayedlanj');
    table.string('nmazhkxydt');
    table.boolean('aebecudnmn');
    table.timestamp('pzxwwlfaft');
    table.bigInteger('seffudtyjd');
    table.boolean('ogwsbvaxvl');
    table.bigInteger('qkkvzcxdko');
  });
  await knex.schema.alterTable('knecypvliu', function(table) {
    table.float('vzgxqamjkt');
    table.json('fibjsoodsb');
    table.json('lbvpnthcqy');
    table.integer('mmqipbpezt');
    table.integer('ymnfncrpsh');
  });
  await knex.schema.alterTable('dmeziltsef', function(table) {
    table.text('tdhylewcpi');
    table.string('pnmjdpmamp');
    table.integer('ozfppinzwv');
    table.json('baouagwurp');
    table.bigInteger('bztyvesaka');
    table.json('iuarbuvgwf');
  });
  await knex.schema.alterTable('qyonfczwri', function(table) {
    table.json('javleemnpj');
    table.timestamp('abuaszwrld');
    table.bigInteger('cgjpjmjfly');
    table.timestamp('jfdvvqxcmf');
    table.text('yzdjbwscth');
    table.float('jfmiufetgo');
    table.timestamp('hhvrunbexx');
    table.text('tqtokjholb');
  });
  await knex.schema.alterTable('gbwyvtduuq', function(table) {
    table.string('ojwzxvavqx');
    table.json('pxnxodkqpe');
    table.integer('slknselnat');
    table.timestamp('gvqwhgzhtg');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};