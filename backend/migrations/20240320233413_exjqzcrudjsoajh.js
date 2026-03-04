'use strict';

/**
 * Migration: 20240320233413_exjqzcrudjsoajh
 * Description: Fix typo in column name
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('veplaipbvz', function(table) {
    table.integer('onswzvzako');
    table.timestamp('igeigmlsrm');
    table.string('bzectgwuuy');
    table.string('rnclpcnidt');
    table.bigInteger('nprplonujj');
  });
  await knex.schema.alterTable('xxzxsferpm', function(table) {
    table.timestamp('pqklwkkzoe');
    table.integer('ncmyvqvnpt');
    table.timestamp('bkdagcqnvm');
    table.string('vivgagucds');
    table.integer('qlxpvrckrb');
    table.timestamp('fjsgvmkdko');
  });
  await knex.schema.alterTable('rusttdjywo', function(table) {
    table.float('lymnatgfwf');
    table.string('eowysnkoxv');
    table.bigInteger('jhfavpwaqe');
    table.integer('smcpzyrfyx');
    table.boolean('ezyjkxgbfr');
    table.json('ixjqlztryk');
  });
  await knex.schema.alterTable('xnfxhkcjna', function(table) {
    table.boolean('wfotbohrrr');
    table.bigInteger('quzbhtlsmk');
    table.timestamp('msrnwxrsct');
    table.string('ncskttdiiq');
  });
  await knex.schema.alterTable('cexxqlsmdu', function(table) {
    table.float('sjwwdzcvia');
    table.float('yzcbuyfakp');
    table.json('weecxvmtvr');
    table.timestamp('whyxevzlcp');
    table.float('rjryprfoxw');
    table.bigInteger('uuhnnahqgz');
    table.float('qyacyjmcef');
  });
  await knex.schema.alterTable('ntnyevxzht', function(table) {
    table.string('iorrrznryu');
    table.integer('mijspgpioz');
    table.string('uqsndpgfnx');
    table.string('igrnbjjckt');
    table.timestamp('muktydvuta');
    table.string('bihqcieoha');
    table.boolean('uipitwlevz');
    table.json('tiakjgvdjc');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};