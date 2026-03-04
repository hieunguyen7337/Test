'use strict';

/**
 * Migration: 20241007165236_iudnqecxhbhkgpg
 * Description: Add index
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('ctxmmuafnz', function(table) {
    table.bigInteger('oownajzhpe');
    table.integer('obfgtskmpl');
    table.json('xqoffztfop');
    table.json('wwyodtkevg');
    table.string('egciclwxqt');
    table.bigInteger('tahtkegmxb');
    table.string('jheueyewym');
    table.bigInteger('jrysusvmhz');
    table.boolean('cakchokeld');
    table.bigInteger('nvivvjjzql');
  });
  await knex.schema.alterTable('dwvqbzaqvk', function(table) {
    table.string('bsosbtoqlb');
    table.json('ujkkomvcnc');
    table.json('wwlzyycdbz');
    table.float('hdezxibajg');
    table.string('audjvginwl');
    table.timestamp('fawlyfnszx');
    table.timestamp('pswrdpfyzm');
  });
  await knex.schema.alterTable('xycgqagzrg', function(table) {
    table.boolean('hviyabkutf');
    table.float('nnkxwmztsu');
    table.boolean('njmvgnqokt');
    table.string('wsgkcbmtfe');
  });
  await knex.schema.alterTable('worbyipzpk', function(table) {
    table.json('keoibrclwi');
    table.json('vpmzipwnxe');
    table.bigInteger('vtfnmpzsmh');
    table.integer('rsxjqqonqu');
    table.boolean('oeqhawstgf');
    table.text('yrziwramaa');
    table.integer('mdhwauublz');
    table.timestamp('koglcoclki');
    table.timestamp('hspwdqpyco');
  });
  await knex.schema.alterTable('wnamcflrde', function(table) {
    table.text('piezviwjnd');
    table.json('klubpvhczk');
    table.timestamp('pgtyffqymd');
  });
  await knex.schema.alterTable('qjpefnfbcd', function(table) {
    table.float('gudhqtenss');
    table.json('mujaqoslmn');
    table.timestamp('kyxhgkfond');
    table.string('wypgbuuvqg');
    table.float('agoijiipar');
  });
  await knex.schema.alterTable('fsvcmfgezy', function(table) {
    table.bigInteger('epmnyjkqwk');
    table.json('oengvkjdcm');
    table.text('ubobzsfmzb');
    table.boolean('uufcgpvoak');
    table.boolean('ndjtfydnqh');
    table.integer('qslsxglzip');
    table.boolean('fbjfrdswow');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};