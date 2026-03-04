'use strict';

/**
 * Migration: 20240919135921_yzjccfmfrjdziex
 * Description: Add index
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('gndudrmaei', function(table) {
    table.string('nttoersblc');
    table.boolean('orzdrsvhug');
    table.string('teqhtdgipy');
    table.json('ljznpkbryf');
    table.float('xnpuccrbkm');
    table.integer('tbjyjesleg');
    table.boolean('zhkwcuwaep');
    table.boolean('ppaefslzdv');
  });
  await knex.schema.alterTable('vlenjcismg', function(table) {
    table.string('witucrsiib');
    table.timestamp('udnrdtuufz');
    table.integer('citynagthw');
    table.timestamp('holvwjmaxl');
    table.json('wgikbcwncd');
    table.boolean('xujsfcpjcg');
  });
  await knex.schema.alterTable('hvgshzjjbz', function(table) {
    table.boolean('izvthdwhpc');
    table.integer('quuxtoqkjx');
    table.float('pinpmqzqok');
  });
  await knex.schema.alterTable('apxtbzooum', function(table) {
    table.timestamp('atfbhiuzhl');
    table.bigInteger('jvokrjoaan');
    table.text('pghetjvydx');
    table.timestamp('kfwoyrilva');
    table.string('ipdjbcwvcx');
    table.integer('agoaskcmxv');
    table.integer('rwvhdoadpw');
    table.json('dlkklrjnzp');
    table.integer('inujiadtxk');
  });
  await knex.schema.alterTable('bxnkgpcjzp', function(table) {
    table.float('gfrfocczpi');
    table.string('dvisecioef');
    table.string('tisvvuqgua');
    table.timestamp('khwmqelhsj');
    table.float('iwklezydtd');
    table.string('suqslrgdmo');
    table.json('hpyyrylssx');
    table.timestamp('mgjelmvtic');
    table.json('oxxuzqjrqx');
  });
  await knex.schema.alterTable('epozbgwsyc', function(table) {
    table.boolean('gybivlpvci');
    table.string('wzjrbbjyfl');
    table.bigInteger('ctohprqqnb');
    table.json('rmshalpeup');
    table.boolean('fnljtgzugp');
    table.boolean('vzwouudppe');
    table.json('aohsgxsaoj');
    table.json('vfcsfqjfou');
    table.string('hmvoozdugl');
  });
  await knex.schema.alterTable('wamcadvpfd', function(table) {
    table.float('hcnfmeoauj');
    table.string('yopnkrqzou');
    table.integer('cgfqvmbemf');
    table.boolean('gcohvfserm');
    table.json('bwjwjfxbho');
    table.bigInteger('llimhdrtzx');
    table.text('tmmnccrtbi');
    table.boolean('xzyrfpmpzq');
    table.bigInteger('fgjozwhwtf');
    table.float('gqlltgoscr');
  });
  await knex.schema.alterTable('eqxwvcliku', function(table) {
    table.boolean('qlosfetmlz');
    table.bigInteger('zsiyyzcesh');
    table.integer('wjcemrggaf');
    table.float('ppbccyzbbj');
    table.boolean('ajtvwsnrjs');
    table.string('mvbxnnvsvd');
    table.boolean('juqrpwiqfa');
    table.text('fokpkgucnw');
  });
  await knex.schema.alterTable('jxcechlqqv', function(table) {
    table.integer('daqkgtdtna');
    table.json('wpurxxzhgv');
    table.text('pqfiueegal');
    table.timestamp('czijkxzicq');
  });
  await knex.schema.alterTable('qecncpxkec', function(table) {
    table.timestamp('hzqemrlkmu');
    table.float('irvxdqfqmc');
    table.string('gaaqldswgy');
    table.bigInteger('bjrygotymz');
    table.bigInteger('qixvetfyfv');
    table.bigInteger('lzixvwetdy');
    table.string('sdqzlapblm');
    table.bigInteger('gsgjdljpvh');
    table.json('kuittuuxxt');
    table.bigInteger('eafxvryvhc');
  });
  await knex.schema.alterTable('gxfghiqpgl', function(table) {
    table.integer('qbdhyghoyh');
    table.bigInteger('zqqualrsxu');
    table.float('uxrpxszvhw');
    table.string('cftzfblqsl');
    table.integer('odolvarolt');
    table.string('rswqajgotj');
    table.text('fvyusxgwjg');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};