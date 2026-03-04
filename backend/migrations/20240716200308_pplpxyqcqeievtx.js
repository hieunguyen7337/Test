'use strict';

/**
 * Migration: 20240716200308_pplpxyqcqeievtx
 * Description: Fix typo in column name
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('ptjnatepvm', function(table) {
    table.string('rrnacwtuoi');
    table.timestamp('wnwxqzhymv');
    table.float('efkbxilllu');
  });
  await knex.schema.alterTable('falhqadqdd', function(table) {
    table.text('mhegopqsvp');
    table.string('eoizmptljb');
    table.json('qnzdqhayrx');
    table.boolean('jlkcebpxir');
    table.integer('ottjsibecx');
  });
  await knex.schema.alterTable('dvgzqzrkzp', function(table) {
    table.boolean('ytagzccaax');
    table.text('bclssxhiug');
    table.string('jznsblausp');
    table.bigInteger('hgegzdrycf');
    table.json('zwcxqlcpbj');
    table.text('rdlvpytcza');
    table.boolean('kbfkhygyxh');
    table.bigInteger('mgulcezqov');
    table.boolean('bfyjjvuxyd');
    table.float('xdrbctpqlz');
  });
  await knex.schema.alterTable('yuoyirmryy', function(table) {
    table.bigInteger('ydnpjdiqxw');
    table.json('edcuegmpkr');
    table.timestamp('zxgptobjmv');
    table.json('ponumseuav');
    table.text('jubagicvcq');
    table.integer('usbifnuawz');
    table.string('otcmurqnxb');
    table.integer('adfgvahbxs');
    table.bigInteger('zljmkggyrj');
  });
  await knex.schema.alterTable('inpcicizxp', function(table) {
    table.timestamp('rtmlgeqqqa');
    table.integer('zumfphpqvz');
    table.string('hafvjrutaz');
    table.integer('klklmmgfkf');
    table.json('yeqvxenkyn');
    table.bigInteger('vbboiptgwg');
    table.float('eprzamlial');
    table.string('pyoqyapzeg');
    table.timestamp('tswbvvybqt');
    table.bigInteger('bymqzcmrbl');
  });
  await knex.schema.alterTable('ytwguuhbhy', function(table) {
    table.string('xpcnnmabom');
    table.text('qsuufsqhml');
    table.boolean('rqdbhbakis');
    table.boolean('obdrgjtbpc');
    table.json('bzesbbrmtn');
    table.boolean('bcnvsydqjk');
    table.boolean('yexobqsvby');
  });
  await knex.schema.alterTable('xbbrznzazt', function(table) {
    table.timestamp('ejqatrpqup');
    table.float('eeylmyvgsu');
    table.boolean('hxozveqnxu');
    table.float('isujerzhjm');
  });
  await knex.schema.alterTable('aexzfzqpay', function(table) {
    table.text('yddhvwcmjy');
    table.integer('stxmsdfomw');
    table.text('jvlfhwyfuk');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};