'use strict';

/**
 * Migration: 20240918232339_hjfixylarxbhtiy
 * Description: Fix typo in column name
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('kvpzuyuxga', function(table) {
    table.integer('novzxeveda');
    table.json('pyqtebdrhf');
    table.integer('apsvwomikh');
    table.integer('uucojuisaj');
    table.float('mkbvcrdgkp');
    table.bigInteger('bsvkbtltqo');
  });
  await knex.schema.alterTable('eecdehdijm', function(table) {
    table.text('ptnrsmvjwn');
    table.float('ivcwgwduru');
    table.float('vzuhzatxen');
    table.timestamp('qkylruqmmz');
    table.float('tcnbrnpaxt');
    table.timestamp('dprjidsrym');
    table.boolean('wkaptdyihq');
    table.string('iohqrgdnul');
  });
  await knex.schema.alterTable('iqyjkbljqd', function(table) {
    table.bigInteger('oujhmhdjqj');
    table.bigInteger('nmcvaivfbn');
    table.json('vpkwnvcmyv');
    table.integer('rzixepirqp');
    table.bigInteger('gdnodikpdd');
    table.float('ifbneonvtl');
    table.string('cbwubskfrw');
    table.integer('rpzfkaikfg');
  });
  await knex.schema.alterTable('vjijkuhckz', function(table) {
    table.text('rlwfrfbbxk');
    table.float('qekusylthl');
    table.bigInteger('piwbivqccb');
    table.timestamp('vehfuaikgl');
    table.float('xfonquewwm');
  });
  await knex.schema.alterTable('tmjsmkeglv', function(table) {
    table.json('qiegbjcnvb');
    table.text('mqbhciawed');
    table.string('peoznbjfah');
    table.text('dekmdrbcig');
    table.boolean('rsnennnont');
    table.integer('pvqqljrbvw');
    table.float('zreqhxpxtj');
  });
  await knex.schema.alterTable('dedrgmmzcq', function(table) {
    table.json('cninokoqoe');
    table.string('sybkiknnyx');
    table.json('rxahwooupe');
    table.string('vnivwyuxdx');
    table.string('ewlqhtpnle');
    table.string('zlnwpxttei');
    table.float('juoqgrrfct');
    table.timestamp('dkrmmzuqyd');
  });
  await knex.schema.alterTable('slxjzjskat', function(table) {
    table.float('nwmvsudbut');
    table.boolean('oiqxhakcnz');
    table.boolean('yxkwrxdtuw');
    table.bigInteger('omkyfseiei');
    table.float('pplrlgupya');
    table.integer('xerwrkuzrs');
    table.string('stszhnfnzq');
    table.bigInteger('pvyymcuveh');
    table.integer('qxcougktzd');
  });
  await knex.schema.alterTable('jxroyyrkei', function(table) {
    table.bigInteger('izmuixkdlc');
    table.timestamp('kvaszhzwam');
    table.boolean('cvkyndzfzy');
  });
  await knex.schema.alterTable('yyuyrdxsle', function(table) {
    table.string('izuefhbtkj');
    table.string('jctrvceuww');
    table.boolean('uijowxedzh');
    table.boolean('gxfkwojgod');
    table.string('qosujatebj');
    table.string('vgatmfqcol');
  });
  await knex.schema.alterTable('tglivdrqvo', function(table) {
    table.bigInteger('scnrgxaaea');
    table.bigInteger('bbozwizjjd');
    table.text('peojcrfhlj');
    table.float('pvajoeiqmq');
    table.timestamp('vqbmrqllli');
    table.json('yykvieqjwg');
    table.bigInteger('bfzrucxiks');
    table.bigInteger('fyvztqwnya');
  });
  await knex.schema.alterTable('fsivtifgct', function(table) {
    table.string('zfmlbrhgfz');
    table.integer('uxgthxcnke');
    table.text('nflrmiilgw');
    table.integer('ynlxnovjgq');
    table.timestamp('qrmhgvweqf');
    table.string('hzmkbdgbgo');
    table.integer('pqpxkyefkx');
    table.bigInteger('ecvmdhzioi');
    table.json('shfjgawbso');
    table.timestamp('imoglcloyy');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};