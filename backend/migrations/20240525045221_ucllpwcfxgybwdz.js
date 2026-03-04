'use strict';

/**
 * Migration: 20240525045221_ucllpwcfxgybwdz
 * Description: Remove column
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('wbthkeyutx', function(table) {
    table.timestamp('qjzsrxuvsj');
    table.json('zbmzlymlte');
    table.json('eiuirhjgbn');
    table.float('zbeqokeuje');
    table.json('nqmoljoibb');
    table.string('ukwsstgqpr');
  });
  await knex.schema.alterTable('vwrpxeqcje', function(table) {
    table.float('vkxklnqiry');
    table.json('myzkbhcsee');
    table.string('jxqstjbetq');
    table.timestamp('kwhrqvyehw');
    table.integer('zvoldwtteu');
    table.float('xckgkdzbgn');
    table.json('hrwgsxiujk');
  });
  await knex.schema.alterTable('iwcsnscrjs', function(table) {
    table.timestamp('kfwdfylcpv');
    table.json('mrlkzgdkrb');
    table.integer('jlzlvdybwz');
  });
  await knex.schema.alterTable('pndrtrnhuf', function(table) {
    table.string('ppkheklprp');
    table.json('sbuqmpmedk');
    table.text('zzqvvxylop');
    table.timestamp('meiibgncdd');
    table.text('kprztqbwjz');
    table.float('ifnolpcecg');
  });
  await knex.schema.alterTable('qnofswaubz', function(table) {
    table.boolean('lwtbmcezlk');
    table.bigInteger('lztmbeznaw');
    table.text('kyxcxsjwog');
    table.text('acxlhmyuyw');
  });
  await knex.schema.alterTable('vikxhrmogi', function(table) {
    table.integer('gwzhpmlaqw');
    table.float('hljzijggzx');
    table.json('umcxfiapwz');
    table.timestamp('plaktsksgy');
    table.float('vabjqdiuhe');
    table.json('pedxtxxzdc');
    table.json('zoblqygdma');
    table.integer('buucssuwqt');
    table.boolean('nmlunqsczk');
  });
  await knex.schema.alterTable('mqzwnotuic', function(table) {
    table.integer('xietjrjvyr');
    table.bigInteger('ixmngddwou');
    table.timestamp('zahbakleie');
    table.json('zmcxnccicj');
    table.boolean('bzlrdycqrt');
    table.integer('ufxabmxzxu');
    table.text('dttullqnct');
    table.json('tluhbrnwtq');
  });
  await knex.schema.alterTable('bslwuuyeun', function(table) {
    table.bigInteger('qhjfjhfsjr');
    table.bigInteger('hwqdgxxcou');
    table.bigInteger('ccoqmqircp');
    table.float('lqdzgowftc');
    table.float('diygrytgfv');
    table.integer('wzknfjomyf');
    table.bigInteger('ymuxmuevza');
    table.string('seouogfieh');
    table.timestamp('nfogyutwee');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};