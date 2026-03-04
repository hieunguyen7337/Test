'use strict';

/**
 * Migration: 20240522023803_qvobkcykgovetjh
 * Description: Redo the undo
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('ntorptxoqw', function(table) {
    table.boolean('azinamwpxx');
    table.boolean('oyannyvwsg');
    table.string('ehhdzidplj');
    table.text('ljcuvqmfvd');
    table.boolean('yaxexnkgmb');
    table.text('gpqacrzurn');
    table.bigInteger('ydjovbmmko');
    table.string('huvzkwjxyf');
    table.json('qfbvdxpesr');
  });
  await knex.schema.alterTable('mfqcfbalka', function(table) {
    table.bigInteger('ydkplvpaxv');
    table.float('xxjldrxeeq');
    table.float('mtsnimxacb');
    table.timestamp('hlrdkzuakd');
    table.text('wljqpgembl');
    table.integer('kyccizlpvq');
    table.text('obizetsxri');
    table.float('iwwyawcwjy');
  });
  await knex.schema.alterTable('vgpuitcvpr', function(table) {
    table.bigInteger('fcmgqbbxxz');
    table.timestamp('erjmiobogo');
    table.integer('dzxvffiook');
    table.timestamp('stzvsdrtlv');
    table.bigInteger('kplcqzocvm');
    table.timestamp('jofnefvkuq');
    table.json('acfuhsckzo');
  });
  await knex.schema.alterTable('oogvzotjtw', function(table) {
    table.boolean('jyruzfzyxv');
    table.timestamp('wjcsuyuzep');
    table.string('cqvvxnbyup');
    table.string('wrrudbhlfc');
    table.float('yqxftfizqk');
    table.json('fhgojqbctr');
    table.integer('kgihgbucoz');
    table.integer('sdjjmfsmcj');
    table.string('bwwuaessig');
  });
  await knex.schema.alterTable('itrirwlxif', function(table) {
    table.text('dmrqsopcde');
    table.boolean('mbxuhgodfp');
    table.timestamp('kacborhlhj');
  });
  await knex.schema.alterTable('zkosjydbiu', function(table) {
    table.timestamp('tkcajwfpog');
    table.bigInteger('oiitljhffv');
    table.boolean('hjmonrxkgz');
    table.float('ktoyhccezs');
    table.timestamp('yvvhannupe');
    table.integer('xoxoxdijmh');
    table.text('xpieksqiuf');
  });
  await knex.schema.alterTable('fwuyfjuwjb', function(table) {
    table.text('ztmqeaqjmu');
    table.bigInteger('phqfpzzpes');
    table.float('mcumarcgvt');
    table.integer('ukvojpbmtw');
    table.float('lvihuevexw');
    table.bigInteger('jphackwdxz');
    table.timestamp('cbdihhkuec');
  });
  await knex.schema.alterTable('yrvsxolnol', function(table) {
    table.float('jcoaomxfzx');
    table.bigInteger('rajcjibzwz');
    table.bigInteger('jlrxbynowv');
    table.text('jhonroexru');
  });
  await knex.schema.alterTable('djinborxew', function(table) {
    table.boolean('hwbgmifmab');
    table.boolean('zwnuuhohrx');
    table.timestamp('hdvxkuklxm');
    table.boolean('mfhtdzaahs');
    table.text('aeiaolasgn');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};