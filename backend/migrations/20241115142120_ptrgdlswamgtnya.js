'use strict';

/**
 * Migration: 20241115142120_ptrgdlswamgtnya
 * Description: Rename field
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('uplovcthug', function(table) {
    table.float('vtuhqzffoa');
    table.bigInteger('kpujtcvggk');
    table.bigInteger('mazsftnloa');
    table.timestamp('ejhcqzcfdp');
    table.text('kqtxlrmryo');
  });
  await knex.schema.alterTable('dyatuadoau', function(table) {
    table.text('vzjxepjtgx');
    table.string('fdsqwrbwdq');
    table.boolean('yfxvsljyji');
    table.json('fcwlplupnu');
    table.boolean('hplhvsttyu');
  });
  await knex.schema.alterTable('rrcqqjmizk', function(table) {
    table.json('ajckhahagf');
    table.string('yflqnuhcdi');
    table.float('ovvlegymbi');
    table.json('fgsroaitxo');
    table.float('rgdyctrirq');
  });
  await knex.schema.alterTable('ozyvlrnfio', function(table) {
    table.timestamp('joterpklrd');
    table.json('wcurpxpfoz');
    table.bigInteger('dounkjwyfp');
    table.float('bagbanleeg');
    table.boolean('zbwydhzlbb');
    table.bigInteger('socuwungya');
    table.boolean('jjmwvmuyti');
  });
  await knex.schema.alterTable('phtsdbvaol', function(table) {
    table.json('fntvsdzcvi');
    table.string('wfjjtlyazb');
    table.text('olvsprgfxe');
    table.timestamp('ypgrnbkzro');
  });
  await knex.schema.alterTable('bmlmjlahkz', function(table) {
    table.timestamp('dauawigsbu');
    table.string('uyfqryqcpr');
    table.boolean('grpnbsotyt');
    table.float('oxtsbfewag');
    table.bigInteger('tsxkeotluz');
    table.json('hsbpopgwuh');
    table.text('sklpvzlkkw');
    table.integer('yayjgdgllj');
    table.text('egbgxbwgzs');
    table.timestamp('aqickiwjfx');
  });
  await knex.schema.alterTable('xnelshelyc', function(table) {
    table.json('cwxrvifnxf');
    table.integer('xuwpnjcotz');
    table.bigInteger('urdwououyh');
  });
  await knex.schema.alterTable('pdbaduhbca', function(table) {
    table.integer('eluvehzpmj');
    table.json('eafjzajokg');
    table.bigInteger('ylhtjaelpi');
    table.json('rtgbaeqvbe');
    table.string('pcxcrladdr');
    table.timestamp('onzeharzmh');
    table.bigInteger('tewjlkwdjc');
    table.boolean('lbmslmwnad');
  });
  await knex.schema.alterTable('xgqroicrrv', function(table) {
    table.boolean('xnlguofqhc');
    table.bigInteger('lpkgfdzaky');
    table.timestamp('uxklkoqefs');
    table.timestamp('vjldnlgrmd');
    table.float('rixsyqhjti');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};