'use strict';

/**
 * Migration: 20240606131622_onkoxsgkjndlzck
 * Description: Please work this time
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('yqefmawxgx', function(table) {
    table.text('fiocaqmecm');
    table.integer('hxyexkende');
    table.timestamp('nmcgiggykt');
    table.float('kpsjsbflwd');
  });
  await knex.schema.alterTable('pmlfrffpxw', function(table) {
    table.text('zvkfvewkrd');
    table.bigInteger('jxycxnbulv');
    table.bigInteger('phvbeeosyj');
  });
  await knex.schema.alterTable('zynzmshizo', function(table) {
    table.json('totwaxfmvd');
    table.boolean('wwjeqnepjj');
    table.timestamp('mjgqwzakhc');
    table.json('nkluiznvin');
    table.integer('idlfabfdnu');
    table.boolean('dpszmjsyfo');
    table.json('pzzzvunqvd');
    table.boolean('uqkbyyehhy');
    table.boolean('ilmiigzbrc');
  });
  await knex.schema.alterTable('jtxbbgajda', function(table) {
    table.bigInteger('laegvylqlx');
    table.boolean('jhaqnrvvgy');
    table.timestamp('fgrxiexzxy');
    table.integer('xkowcvxeje');
  });
  await knex.schema.alterTable('xgeqnwqfpl', function(table) {
    table.integer('aqiyzotuah');
    table.string('tgdegzbnoh');
    table.bigInteger('hhothouayn');
    table.json('jejwcmflwf');
    table.bigInteger('uaygcgxubi');
  });
  await knex.schema.alterTable('ssbmnsyfrg', function(table) {
    table.json('ratyvebwbh');
    table.text('iwmjhjjbuu');
    table.bigInteger('itsumadzik');
    table.timestamp('mtncjdxsjb');
    table.integer('ncuervvyxh');
    table.integer('phkadirxqy');
    table.integer('mvslzpadqq');
    table.boolean('jxfsmyuhey');
    table.json('swpirnwkvq');
  });
  await knex.schema.alterTable('nemlkitmcb', function(table) {
    table.bigInteger('uuxrncolds');
    table.bigInteger('pnoyncybns');
    table.boolean('ajwmfiunvj');
    table.json('oxwplrtfkf');
    table.string('guhvenlsmp');
  });
  await knex.schema.alterTable('zuejfuxpam', function(table) {
    table.text('vxzflgexyg');
    table.boolean('emhfjuwjvd');
    table.text('xuwscprpxl');
    table.string('jagxikwrpd');
    table.timestamp('hxzexaemkk');
    table.string('uvpcgncqid');
    table.bigInteger('ybhdktnfur');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};