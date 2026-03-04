'use strict';

/**
 * Migration: 20240906180915_jggsuxwpyuncsvk
 * Description: Drop table
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('uyrwdqrggb', function(table) {
    table.text('ygievesclr');
    table.string('lnhhdpzldh');
    table.integer('vzrsbhmubw');
    table.bigInteger('scuindsici');
    table.integer('akiutgmnss');
    table.timestamp('ogyvnmzbfr');
    table.boolean('ohkegyiuqz');
    table.bigInteger('btjngqabft');
    table.bigInteger('lgxgndqvoz');
    table.timestamp('lokqeycsqz');
  });
  await knex.schema.alterTable('fkevjjjlhv', function(table) {
    table.integer('lnspennmpu');
    table.bigInteger('lhaathjtle');
    table.float('ifcfazgokq');
    table.string('lxijnquint');
    table.json('zaqmrmzzdb');
    table.bigInteger('klfnaqpkhq');
    table.text('kzscdlioma');
    table.text('jcfselndpm');
    table.bigInteger('hnhxqistak');
  });
  await knex.schema.alterTable('ymbonmypgs', function(table) {
    table.string('ugtvcchpaz');
    table.text('ulcgccokqz');
    table.bigInteger('figddzdsys');
    table.float('ehkbacvibt');
    table.text('lbjmngbysz');
    table.text('sjxqamgbvr');
    table.bigInteger('cdptlrohdp');
  });
  await knex.schema.alterTable('buuivqhuey', function(table) {
    table.boolean('pnuibzsouv');
    table.timestamp('hnniiworkr');
    table.text('aiqcpmnbpd');
    table.text('wbzimrwgxr');
    table.integer('gsllqdmjlb');
    table.float('jhqlngjtic');
  });
  await knex.schema.alterTable('ovscvkrvxu', function(table) {
    table.json('hknuoidnzy');
    table.json('merjdywpjs');
    table.json('gvupcdcdjs');
    table.float('yibtiboxnz');
    table.timestamp('utqpxuqgpy');
    table.text('ciepoxdkco');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};