'use strict';

/**
 * Migration: 20240420142526_cvhaxarjcxzartq
 * Description: Create table
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('ppuvungrxf', function(table) {
    table.integer('ebmeynlimm');
    table.boolean('gmymujrbdb');
    table.string('xjqvkeywen');
    table.float('xymkmfihvk');
    table.json('esgceytflt');
  });
  await knex.schema.alterTable('jrvonomgnt', function(table) {
    table.float('xymsnvdbeh');
    table.string('wuqrqiiixh');
    table.json('dvumxfuiag');
    table.float('mrwsypfobb');
    table.json('rcxvhjomfc');
    table.timestamp('bxhitqwdgz');
    table.text('elwcslwzdl');
  });
  await knex.schema.alterTable('vzfibbzbix', function(table) {
    table.integer('puysohgdey');
    table.text('flpoumeccw');
    table.float('wyjdxffwyz');
    table.string('ytmrdeyvyz');
    table.float('haywrgwlsm');
    table.float('podhcshmdu');
    table.timestamp('txjgnawplb');
  });
  await knex.schema.alterTable('mquldgvysd', function(table) {
    table.bigInteger('dxyzzqajlz');
    table.boolean('kyiznsklvg');
    table.float('lnkfuveqdz');
    table.float('injkgjgxzn');
    table.text('qzbnruecxx');
  });
  await knex.schema.alterTable('tzxywymrcn', function(table) {
    table.integer('wzhgkrrxyy');
    table.json('vovscmvmqz');
    table.timestamp('jfaszzgtkh');
    table.string('rmyvvfrpue');
    table.bigInteger('ifbihliyqc');
    table.bigInteger('yigtieiepd');
    table.integer('sbbolkuzyk');
    table.integer('qvqxgdzxvc');
    table.integer('dexfkrwnau');
  });
  await knex.schema.alterTable('hkfdtozqqf', function(table) {
    table.json('cgldwidblw');
    table.timestamp('zwqlkffhhp');
    table.bigInteger('dbiadlvnsp');
    table.string('rcwqlepugy');
    table.float('xcirjbegvn');
    table.json('wvekpuadsd');
    table.integer('bsvfsmwqxu');
    table.boolean('latddywwtf');
  });
  await knex.schema.alterTable('prluzdedqf', function(table) {
    table.string('zmuuvzgvhc');
    table.bigInteger('nbztmqfbjp');
    table.integer('kxqoxjrhzc');
    table.json('ugtskpcodn');
  });
  await knex.schema.alterTable('bwolmjfuki', function(table) {
    table.text('waazyxfanp');
    table.string('poyqffdkhq');
    table.string('smqpmqtnpm');
    table.integer('psjjsuyfeu');
    table.bigInteger('kecrevhjfd');
  });
  await knex.schema.alterTable('kgcdlhdcdk', function(table) {
    table.string('xhmfognoub');
    table.float('dcyscutcku');
    table.timestamp('gjdkacmgub');
    table.string('kbqkqlntcp');
    table.bigInteger('xrgkluykcb');
    table.boolean('dfimqzdcvy');
    table.string('oqvtjtybpt');
  });
  await knex.schema.alterTable('jxdxheqjxd', function(table) {
    table.float('wfvaynxzmx');
    table.bigInteger('igccafuape');
    table.integer('qqnvsmdygh');
    table.float('sllbdezdkm');
  });
  await knex.schema.alterTable('czvinrxrda', function(table) {
    table.json('tskybpwiin');
    table.timestamp('hnkjumljba');
    table.integer('anvmojmzyv');
    table.string('gkonxbllnq');
    table.float('mkxrqsgtax');
    table.bigInteger('joxklctcup');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};