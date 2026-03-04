'use strict';

/**
 * Migration: 20241124120212_idbrolkhjuoiyep
 * Description: Undo previous migration
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('uqjhvfaenx', function(table) {
    table.json('czfzmflszt');
    table.float('nwjjdgjage');
    table.string('rlqhgjdktm');
    table.float('rkonanspeg');
    table.text('kxnxvrkxqn');
    table.json('lvkrfrnuus');
  });
  await knex.schema.alterTable('scrfegjzaf', function(table) {
    table.float('gjedzhpscw');
    table.float('edyvkqjgqi');
    table.string('bstdystpdp');
    table.text('nlqclicsnu');
  });
  await knex.schema.alterTable('ixuhjzyuer', function(table) {
    table.text('rzizovvfbf');
    table.float('oxlyhxbclc');
    table.string('lmftawwhhf');
    table.string('xnqjjtgzrp');
    table.float('cicparamyg');
    table.bigInteger('dgbfibjwtu');
  });
  await knex.schema.alterTable('qzgslhhhgb', function(table) {
    table.float('ubecjsxoep');
    table.bigInteger('igbdlygnyu');
    table.timestamp('xictufwuom');
    table.boolean('wlytomizsu');
    table.boolean('hvtepwersi');
    table.bigInteger('rooegwulnh');
  });
  await knex.schema.alterTable('lsokvuyjrj', function(table) {
    table.text('zxkuojmaof');
    table.json('waogkggwoq');
    table.text('djdvffjezi');
    table.string('wjurvscxlm');
    table.timestamp('uubhtbytps');
    table.timestamp('hzeodecday');
    table.integer('ruwqsqspww');
    table.integer('gelvhjcgji');
  });
  await knex.schema.alterTable('drwgwqcgaf', function(table) {
    table.integer('vejltojquz');
    table.json('ajylhpottz');
    table.integer('ehclcpsmfm');
    table.text('artasygvrx');
    table.text('hapefzticc');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};