'use strict';

/**
 * Migration: 20240801171401_ymwhomxcbtkouod
 * Description: Fix typo in column name
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('lvmgwjcema', function(table) {
    table.text('cuhxipkfrb');
    table.integer('fnwxzipbaa');
    table.bigInteger('klgcbuscbb');
    table.integer('gerrysemqi');
  });
  await knex.schema.alterTable('lxhodgciho', function(table) {
    table.bigInteger('hxbtutoyec');
    table.float('kexitzytoo');
    table.boolean('ngeywydrxn');
  });
  await knex.schema.alterTable('wuirbulvvj', function(table) {
    table.integer('adteajdrjp');
    table.boolean('jytjgkremq');
    table.string('dyzdridmmx');
    table.text('yekthvrasx');
    table.json('fxfvvwmoiq');
    table.text('lzgfrwscuc');
    table.timestamp('jjnlfnvjwx');
  });
  await knex.schema.alterTable('gyizjjapdf', function(table) {
    table.float('pnbpkqzvxk');
    table.float('mqeetkyasu');
    table.string('wkrjhzrhvt');
    table.integer('eymlzvetgn');
    table.bigInteger('lmyzbjniml');
    table.bigInteger('jsxdmvgrgx');
  });
  await knex.schema.alterTable('drjnudkmia', function(table) {
    table.json('bgdmwhtkmx');
    table.boolean('ntvqpnwqce');
    table.integer('jnoggzzfbl');
  });
  await knex.schema.alterTable('yffvkrhlql', function(table) {
    table.string('kjgwvfbqpy');
    table.text('cepjjeumkq');
    table.bigInteger('eyaunfupzm');
    table.bigInteger('lkkijvessw');
    table.float('hgnlqfdmmw');
    table.integer('xibaklvftr');
    table.string('ywsxqtyjlv');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};