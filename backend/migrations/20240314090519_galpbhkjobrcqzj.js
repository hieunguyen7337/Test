'use strict';

/**
 * Migration: 20240314090519_galpbhkjobrcqzj
 * Description: Add index
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('cfyyivuccj', function(table) {
    table.bigInteger('hfghyaojdj');
    table.float('cszfsxobar');
    table.float('buysocbxxk');
    table.bigInteger('lnvmirhsrr');
    table.float('mwjxutxnwl');
    table.string('zbudczents');
    table.json('wrbfzxvwrz');
    table.json('ycpofbuigu');
    table.integer('ihqzpnllbf');
  });
  await knex.schema.alterTable('jdltkjuzxp', function(table) {
    table.json('pwpjgxkycp');
    table.string('zpdigvzxzb');
    table.bigInteger('budtqkkzwd');
    table.bigInteger('xizoqnqcud');
    table.json('bqpubxlner');
  });
  await knex.schema.alterTable('adcbmzwuki', function(table) {
    table.text('inwdzuclvw');
    table.float('qqyxltqguw');
    table.json('wndfkeoapx');
    table.timestamp('rkvisjkgkw');
    table.text('drdfvyhytr');
    table.json('yniyimfffc');
    table.string('hiecujoniu');
    table.string('odgxwbrkrz');
    table.timestamp('dovcepcpmn');
    table.json('fwudpfgjed');
  });
  await knex.schema.alterTable('vpbfsbaqzh', function(table) {
    table.timestamp('xpcpqztwml');
    table.integer('sjpkobyaoz');
    table.timestamp('iylbkhvyif');
    table.timestamp('rqumxdpduq');
    table.float('pedwbqnuek');
    table.json('hwamddjxlw');
    table.float('inpjaqpdmm');
    table.integer('vkkcqcodbv');
    table.text('uexffrokuj');
  });
  await knex.schema.alterTable('iykdmvuyga', function(table) {
    table.json('lkwuebrkhw');
    table.json('bdtybwjqon');
    table.bigInteger('juimctojvv');
    table.float('skqdrzkwqa');
    table.float('upqwhichmi');
    table.boolean('jehogrnzlf');
    table.bigInteger('rsbjbwswpy');
    table.integer('tywomuygsk');
    table.json('fcswlkjfts');
  });
  await knex.schema.alterTable('xuquvpatmo', function(table) {
    table.boolean('fowyyrjxxm');
    table.string('kemmauhrqg');
    table.boolean('hmzihclqmz');
    table.boolean('pbzhlvdbwk');
    table.boolean('lmqacxrdmd');
    table.text('tgysrjqkek');
    table.timestamp('ackzizejir');
    table.bigInteger('qgginjeajk');
    table.bigInteger('lgrurvishc');
    table.boolean('czzxouwmkt');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};