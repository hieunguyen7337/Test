'use strict';

/**
 * Migration: 20241223065805_rfukrygabnwiwtv
 * Description: Remove column
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('cfxanactzy', function(table) {
    table.string('spsbgipbpj');
    table.string('hhtxjqlqdu');
    table.timestamp('kturdodtja');
    table.text('pklgjhbxna');
    table.integer('zxxaypuajx');
    table.integer('jvmvgaylyr');
  });
  await knex.schema.alterTable('kvqkvfzyke', function(table) {
    table.float('jvztgggokg');
    table.text('iexnafsbsu');
    table.text('meebnrtgjp');
    table.string('bvosvtyeig');
    table.timestamp('zrhuuwzwqc');
    table.text('ixyrnvopjm');
    table.json('ifmvklptob');
    table.timestamp('vmbhvprnnn');
  });
  await knex.schema.alterTable('opcnnlveng', function(table) {
    table.timestamp('ochvxkjhro');
    table.text('vcxhkdixki');
    table.integer('lbrgyzwdtm');
    table.boolean('zrrpevqjvb');
  });
  await knex.schema.alterTable('gdwsbwxsjl', function(table) {
    table.text('srvcojcvqq');
    table.integer('iligiezzpl');
    table.float('vxmrdskspd');
  });
  await knex.schema.alterTable('ctyfqacqso', function(table) {
    table.boolean('houtbmoons');
    table.text('jmpfgdfxos');
    table.integer('ltcirotexg');
    table.timestamp('fophxvskqg');
    table.boolean('jnrlfjaetc');
    table.text('qosujgfsez');
    table.float('hrmimotyey');
  });
  await knex.schema.alterTable('usxumiknzk', function(table) {
    table.string('qwegesjtxn');
    table.integer('ujrovhgflx');
    table.boolean('fgkukhjmmx');
    table.timestamp('mktjqslurj');
    table.text('xxfsoyrbdm');
    table.boolean('heawvavwiu');
    table.json('wedhijfqpb');
    table.string('bzubnfvrsg');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};