'use strict';

/**
 * Migration: 20240614155055_gqazlrsvdpijoge
 * Description: Remove column
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('oywzuaxpuj', function(table) {
    table.text('adonijmgku');
    table.text('qfstikxqqn');
    table.json('fwtkvtlaew');
  });
  await knex.schema.alterTable('gjvkurfvly', function(table) {
    table.timestamp('wokrmubjfj');
    table.integer('ckrmwytedm');
    table.bigInteger('cpsktrqepr');
    table.text('feoxastubc');
    table.json('houtesloaf');
    table.float('vixshpwqay');
    table.float('gcsyzkovch');
    table.integer('fetpqxuney');
    table.integer('jloqhojjzy');
  });
  await knex.schema.alterTable('qfcclztjkl', function(table) {
    table.float('rexwyumemf');
    table.bigInteger('msqinquzvo');
    table.json('hleibjwomi');
    table.integer('pvnzjouzjg');
    table.text('ldjpkjluit');
    table.json('xvddkqefvk');
    table.integer('oinietljjz');
    table.text('datwrqiwuj');
    table.text('smebyzvdkc');
    table.boolean('pgmsylxuck');
  });
  await knex.schema.alterTable('iumpmllbwd', function(table) {
    table.boolean('yipyurfeus');
    table.integer('ebrovzutni');
    table.bigInteger('gyxdaqnodg');
    table.boolean('bjipikktfi');
  });
  await knex.schema.alterTable('opzwkrxbpx', function(table) {
    table.bigInteger('ajirgqzxti');
    table.timestamp('ywnnxcnwgs');
    table.boolean('clqedulyxw');
    table.text('icwnkzgosg');
    table.string('zdroofeqps');
    table.timestamp('jdcrajmsld');
  });
  await knex.schema.alterTable('wshqnctkkw', function(table) {
    table.text('qgycyxewov');
    table.timestamp('taldsljldr');
    table.json('albnpuopmy');
    table.text('xkfxtpszme');
    table.timestamp('yhfufomkdn');
    table.timestamp('kfubfgacsf');
    table.boolean('paqdvdqkpp');
    table.json('yocjwxsofk');
    table.bigInteger('pdjmupfxsh');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};