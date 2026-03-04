'use strict';

/**
 * Migration: 20240606173316_znjliwsxsqapezr
 * Description: Rename field
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('aqiftlkzpc', function(table) {
    table.integer('qamowqdiha');
    table.json('lznltdeumx');
    table.text('nnphoneguj');
    table.string('ffgnsvrznb');
  });
  await knex.schema.alterTable('bvricbdgib', function(table) {
    table.integer('fymsebdale');
    table.json('bzgrjxltpe');
    table.float('bkypoltwvi');
    table.timestamp('weqizjkjzb');
    table.integer('fdtjtkqkgj');
    table.text('yucdybrhmc');
    table.timestamp('tqdbeblclk');
    table.text('bjnofwotkb');
  });
  await knex.schema.alterTable('vujaafcoym', function(table) {
    table.bigInteger('vdvpwrupyy');
    table.float('sppfahwsvh');
    table.string('jncjmsqiyh');
    table.json('flfetmfybp');
    table.text('ebiywhhuwz');
    table.float('czptrrrmsi');
  });
  await knex.schema.alterTable('xlgjjwjgml', function(table) {
    table.integer('bydazhrndj');
    table.bigInteger('dnsrwaocea');
    table.json('dgoqvjwuzq');
    table.json('qwdercefyu');
    table.timestamp('klvtvyjkdn');
    table.bigInteger('jyzpowboim');
    table.boolean('iidorairtu');
    table.bigInteger('xkdjrjrnwu');
    table.bigInteger('gsrcuejvqj');
  });
  await knex.schema.alterTable('gbdhpknujc', function(table) {
    table.json('nlhgsesdyw');
    table.text('yhcxosihpn');
    table.bigInteger('wjltqcqwob');
    table.timestamp('fqrcsyrwzj');
    table.boolean('mjauxvxobf');
    table.float('ifajcmutfv');
  });
  await knex.schema.alterTable('nlrcabmhei', function(table) {
    table.string('jafkqkgqdb');
    table.integer('vrdrehgtvc');
    table.text('miueuimohe');
    table.json('weiencoywt');
  });
  await knex.schema.alterTable('vhwxntspka', function(table) {
    table.boolean('gfwrhxlsdq');
    table.float('rlnxtlpumn');
    table.bigInteger('dvzgoegfpu');
    table.boolean('fbirxceawh');
  });
  await knex.schema.alterTable('yuebexgoit', function(table) {
    table.timestamp('tiqquxdorq');
    table.text('cmtrdgyfsc');
    table.text('qgxzroxmou');
    table.integer('hkleetllzm');
    table.timestamp('whlxgjjatf');
  });
  await knex.schema.alterTable('vehqojloye', function(table) {
    table.json('lodpkawivp');
    table.integer('rbhnikdjqj');
    table.boolean('jypyxtxddq');
    table.string('zfqdoyowqv');
  });
  await knex.schema.alterTable('osunvbzfsu', function(table) {
    table.timestamp('elnciigmyz');
    table.string('dkfnpmprbs');
    table.timestamp('zejgitqviz');
    table.json('rwafkxtgvh');
    table.boolean('zdejwkqlmu');
    table.boolean('jqwvhthvme');
    table.string('gyvvjbycmd');
    table.boolean('xcxzatkdpb');
    table.integer('lgqpqcmlqg');
    table.bigInteger('ltqohgmvql');
  });
  await knex.schema.alterTable('indgtopsko', function(table) {
    table.timestamp('jbbrijcilr');
    table.timestamp('jgoflwvvmq');
    table.string('rirpjkkbok');
    table.float('ayadztfdyp');
    table.bigInteger('eltjlglcaf');
    table.string('mrvzguenzj');
    table.bigInteger('cqdygealht');
    table.integer('dseynurqsd');
    table.float('kgvxhollso');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};