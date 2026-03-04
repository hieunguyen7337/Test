'use strict';

/**
 * Migration: 20240614100957_leyqjfqlpqfsdrg
 * Description: Add column
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('yravuibpea', function(table) {
    table.json('ehwlbcwrjw');
    table.json('xokrfalihl');
    table.json('fhgpdyuhzd');
    table.json('vduontgict');
    table.boolean('xxckncaecz');
    table.boolean('ypvvqcuvdf');
    table.bigInteger('yjmzhisfau');
  });
  await knex.schema.alterTable('kiibboymxr', function(table) {
    table.bigInteger('zxrgebjozo');
    table.string('oljezutvlt');
    table.boolean('qzshieohvi');
    table.timestamp('cicxjugydi');
    table.json('zpkyjvuekh');
  });
  await knex.schema.alterTable('ubesolewyo', function(table) {
    table.timestamp('jcpvhqyghw');
    table.boolean('cvfpivyskk');
    table.text('amoppupqht');
    table.string('qhmmttoxpf');
    table.float('vmzkygybgy');
    table.bigInteger('gjdrtzyxom');
    table.string('subsxbekye');
    table.text('rsqhxldwlr');
    table.integer('aekynqdulw');
    table.integer('qfyfeviust');
  });
  await knex.schema.alterTable('fkaxwajfcs', function(table) {
    table.timestamp('vtkazgurfp');
    table.timestamp('fnylzihijz');
    table.integer('wipbrhfgpl');
    table.boolean('zjdyrwycfr');
  });
  await knex.schema.alterTable('kgjomtnita', function(table) {
    table.float('hvnkebjyco');
    table.boolean('xvjskytpin');
    table.json('tmwdngtwuq');
    table.text('bfdfoxuuej');
    table.json('cdfdwlfloh');
    table.json('zrecathjov');
    table.boolean('nfmnkqxkex');
    table.boolean('qthsiezttd');
    table.json('kkkzokjbdw');
    table.integer('jnvorphjnm');
  });
  await knex.schema.alterTable('jqcquohsqa', function(table) {
    table.integer('oqurhrhoyu');
    table.string('tpwaamqdeu');
    table.float('bnofeozftt');
    table.string('brryinjisu');
    table.string('oxstlvvxcc');
    table.string('uasiydtyul');
  });
  await knex.schema.alterTable('fvokooshim', function(table) {
    table.text('vjhaqcitqk');
    table.json('metampdagh');
    table.bigInteger('radowismng');
    table.float('jbgenifinq');
    table.json('bfdtiiduvd');
    table.string('vqqhjdisfe');
    table.float('ciwvberlkw');
  });
  await knex.schema.alterTable('fdqmfhbohw', function(table) {
    table.bigInteger('pkjbwoomdj');
    table.text('kqccrynitg');
    table.bigInteger('bnadeohzmu');
    table.json('rsgnqpgyet');
    table.boolean('irjeqgojyl');
  });
  await knex.schema.alterTable('lhnzlojfpm', function(table) {
    table.string('ahrefoilyk');
    table.boolean('atydahxozk');
    table.integer('opkeqmtxer');
    table.boolean('eubktijsqi');
    table.float('zkexkzyluw');
    table.text('zaftoerjnl');
  });
  await knex.schema.alterTable('wwfbdbngoh', function(table) {
    table.float('txafyhdmvu');
    table.text('rnykrfcudf');
    table.float('ewhaestdtl');
    table.integer('wlskvawomg');
    table.integer('fbdrffpuqt');
  });
  await knex.schema.alterTable('pkmjaomqyq', function(table) {
    table.timestamp('exvctaigaa');
    table.float('gpjvxtidlr');
    table.text('pbrkhfzsaq');
    table.json('tjtszpyxgl');
  });
  await knex.schema.alterTable('apkimrbwtb', function(table) {
    table.float('nbomkmdwie');
    table.json('zybsfjqpys');
    table.bigInteger('rpzetygzjc');
    table.string('flecwwxeyo');
    table.string('pkdkjxqbvv');
    table.string('fwokhkaaud');
    table.string('nspiohodcl');
    table.timestamp('amnfoteges');
    table.json('rxtkhgcbgt');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};