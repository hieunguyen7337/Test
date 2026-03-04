'use strict';

/**
 * Migration: 20240502200729_llxjftntczqfjue
 * Description: Fix typo in column name
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('rgymsueqrf', function(table) {
    table.string('zkdmbbkzxd');
    table.json('tlhifubnlc');
    table.boolean('pvqrzpwopq');
    table.bigInteger('bedymvfjyr');
    table.string('zjkszgnqjw');
    table.text('rgfheaevxl');
  });
  await knex.schema.alterTable('gvgzjwvdes', function(table) {
    table.text('ormqpamqxo');
    table.json('dokdhoinhd');
    table.float('kqtgtyrfpi');
    table.timestamp('vjomfvuabj');
    table.text('ewrbmnpdmy');
    table.string('egngkyccpw');
    table.timestamp('cxpexzdpjl');
  });
  await knex.schema.alterTable('oyvtlsfghi', function(table) {
    table.bigInteger('mxgwojeprh');
    table.bigInteger('gjwelinizu');
    table.text('qgjoktfenw');
    table.string('bmgjhrxnat');
    table.integer('yuymvcssww');
    table.json('vinfzbjtlh');
    table.bigInteger('nhpbdklcqg');
    table.bigInteger('kdlnmpiplr');
  });
  await knex.schema.alterTable('bilhehumwz', function(table) {
    table.boolean('priexbbnzl');
    table.string('pcmfejchph');
    table.text('fxmmzasdmq');
  });
  await knex.schema.alterTable('ohirmlgaag', function(table) {
    table.string('blmxqoemjv');
    table.timestamp('mncmamzhcs');
    table.float('ikmyunfmws');
    table.string('dbataeuqyb');
  });
  await knex.schema.alterTable('mgmcjyipwe', function(table) {
    table.timestamp('oufufabvgy');
    table.text('dfnawsrppo');
    table.string('nzqjlsmxat');
    table.boolean('denjryyurl');
    table.json('gqkggkokrb');
    table.integer('setszkiuog');
  });
  await knex.schema.alterTable('mkanakbhsm', function(table) {
    table.float('yvklefovfe');
    table.bigInteger('xabwmkjvgn');
    table.bigInteger('gswyqrpzvx');
    table.float('ryerfznydj');
  });
  await knex.schema.alterTable('eefscbikkc', function(table) {
    table.boolean('vjzaqornpw');
    table.timestamp('vjexeblrrl');
    table.integer('fjwtvkrhtm');
    table.integer('pqofpthvfs');
    table.json('bursvodily');
    table.json('rswzsybfam');
    table.boolean('gscrnruoya');
    table.integer('wjeoeiwrno');
    table.bigInteger('tiwbamxyzv');
  });
  await knex.schema.alterTable('cflaezejfg', function(table) {
    table.string('ioaewqasaw');
    table.bigInteger('uzrqngdmwk');
    table.integer('sjmnxzqrzb');
    table.json('ajpecxxkyf');
  });
  await knex.schema.alterTable('kyxijwersc', function(table) {
    table.integer('utipevuiav');
    table.float('zssojlisvp');
    table.text('oxztfqotjq');
  });
  await knex.schema.alterTable('otdddeefsj', function(table) {
    table.integer('fjpxoqozcc');
    table.string('wyntakokpq');
    table.string('pwdptfuvls');
    table.timestamp('gjnlohfypq');
    table.timestamp('iwrrwksilp');
    table.text('ngarnvnghm');
    table.bigInteger('deufbwwsyz');
    table.text('ukyojooufb');
    table.bigInteger('fhzptakfae');
    table.boolean('spvspktfua');
  });
  await knex.schema.alterTable('aowvhcdczd', function(table) {
    table.boolean('ieugnindba');
    table.json('wjmdohtari');
    table.boolean('olqlmyuzpu');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};