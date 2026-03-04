'use strict';

/**
 * Migration: 20241218205848_dmpopybhnjjhlhl
 * Description: Remove column
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('imwcwsbkjc', function(table) {
    table.boolean('qswyzehwrg');
    table.text('rlwxtgstpt');
    table.bigInteger('kaljklkvzt');
    table.bigInteger('ewejpzwkuq');
  });
  await knex.schema.alterTable('jujelczvrr', function(table) {
    table.string('drstyizzlg');
    table.boolean('zgipsvzgjt');
    table.bigInteger('rfnwsvdtvm');
    table.float('egwwpkmzii');
    table.text('fmgoadwwsg');
    table.boolean('yfmrypvtfd');
    table.timestamp('bsubmuyzaq');
    table.integer('mlyltqqljr');
  });
  await knex.schema.alterTable('glghnnbrdp', function(table) {
    table.json('qsepmyzxmo');
    table.integer('ipqnurxjxo');
    table.timestamp('vdfvzkgmwv');
    table.bigInteger('tlxpvjcdyk');
    table.boolean('xshijmuasd');
    table.bigInteger('pgadyzmyxe');
    table.boolean('logwcpqhyt');
  });
  await knex.schema.alterTable('lyqpetblzn', function(table) {
    table.json('jtiicvimrz');
    table.boolean('pmjyrskmgp');
    table.json('ooiursteik');
  });
  await knex.schema.alterTable('pvhqahoovr', function(table) {
    table.integer('exhxfkxzgf');
    table.timestamp('gegbvseueo');
    table.boolean('ngqecjisnu');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};