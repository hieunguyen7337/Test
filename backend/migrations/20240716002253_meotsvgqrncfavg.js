'use strict';

/**
 * Migration: 20240716002253_meotsvgqrncfavg
 * Description: Remove column
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('llbgbgxavo', function(table) {
    table.bigInteger('vdjezgyhil');
    table.text('gqhxqurzir');
    table.integer('lfnctcshqc');
    table.string('pknsbmzesd');
    table.string('tbotfmoykw');
    table.bigInteger('qpnqxhmsbu');
    table.boolean('vtbvsksuwl');
    table.string('uphhvnwozl');
    table.timestamp('fkwkhlbdwj');
    table.float('lptzkiktmo');
  });
  await knex.schema.alterTable('xokzuiiskr', function(table) {
    table.json('ytotvsvhgw');
    table.string('dvkvejmcay');
    table.integer('fwkzaxywgp');
    table.string('fkknoxlaeq');
    table.json('qkcwpdzpkp');
    table.integer('nyvequzcrg');
  });
  await knex.schema.alterTable('lsopyiuayw', function(table) {
    table.bigInteger('axwwnsxiso');
    table.boolean('lkietabrml');
    table.string('rhyfeqkfkt');
    table.string('tehejmmhou');
    table.bigInteger('udjlcbpyqk');
    table.text('iyvhurxntj');
  });
  await knex.schema.alterTable('atzqbqusoy', function(table) {
    table.bigInteger('rqyecvjhiq');
    table.integer('zaumsmusru');
    table.integer('bkzbiwbtvr');
    table.integer('vkvudoebho');
    table.boolean('swhcjvmuin');
    table.timestamp('ahscczagii');
    table.boolean('klrgeucqag');
  });
  await knex.schema.alterTable('kzswuwxhbm', function(table) {
    table.string('yjlcdnjbkj');
    table.string('ghovqyporg');
    table.float('hluvgmgdtc');
  });
  await knex.schema.alterTable('wkqhlatrmw', function(table) {
    table.float('wwwhkcfmxk');
    table.boolean('ctynvbyooi');
    table.text('srzhzdkxsg');
    table.integer('hgfrtnlsxl');
  });
  await knex.schema.alterTable('uncogklsxx', function(table) {
    table.text('yqwlcfbnwz');
    table.float('qcrwaktkyw');
    table.float('ncaccsydsg');
    table.json('gcusmwzopb');
    table.text('mlfedeoeon');
    table.timestamp('rdykekxafg');
  });
  await knex.schema.alterTable('nztmkvfime', function(table) {
    table.text('xdbygajlzr');
    table.json('rjihmeikyh');
    table.text('nuupjifctf');
    table.boolean('xwvpffytny');
    table.boolean('obandbirbo');
    table.boolean('nwvggyfnzq');
    table.boolean('znbdniooxe');
    table.json('icumnazrrq');
  });
  await knex.schema.alterTable('yjndcgffxh', function(table) {
    table.float('viudfzxqck');
    table.float('geipxjpgmb');
    table.text('owmotsjvgh');
  });
  await knex.schema.alterTable('bebvzintbo', function(table) {
    table.integer('omnkuzvoeh');
    table.text('ggouiwkrgv');
    table.integer('tinkzbvoii');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};