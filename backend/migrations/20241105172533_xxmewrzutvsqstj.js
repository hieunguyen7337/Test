'use strict';

/**
 * Migration: 20241105172533_xxmewrzutvsqstj
 * Description: Add column
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('nekykoyubo', function(table) {
    table.integer('gduncaxuou');
    table.text('qglplulqhy');
    table.bigInteger('bynscuurar');
    table.float('tzwpbrmrrm');
    table.string('maqbokqurw');
    table.integer('rcfcxnhqvj');
  });
  await knex.schema.alterTable('aupatfslhz', function(table) {
    table.float('fiysxhevad');
    table.boolean('doiudrddni');
    table.json('ndgkzhywvv');
    table.string('xvkrjrdaay');
    table.boolean('utxyielcit');
    table.timestamp('diizbkggai');
    table.json('lhmkykhnos');
    table.bigInteger('pgkmahxzlh');
  });
  await knex.schema.alterTable('oopjvrzffi', function(table) {
    table.timestamp('yjjwjzyzni');
    table.json('onashtwqua');
    table.bigInteger('mhjlcetlfb');
    table.float('tqwsqciisq');
    table.string('yuwvemfxtx');
    table.string('twwclgwfyl');
    table.boolean('otroeptqyb');
    table.json('dxkuepciah');
    table.boolean('pbpvbhufea');
  });
  await knex.schema.alterTable('hqgjclkxdy', function(table) {
    table.text('dbfclwrgcn');
    table.json('jmufxibeud');
    table.json('bjvzdvtybu');
    table.string('dwnerujvig');
    table.float('kzchcapfom');
  });
  await knex.schema.alterTable('uxhyvneqav', function(table) {
    table.json('qaoyrgrrdc');
    table.float('mtbgdgroha');
    table.text('szbfyijqst');
    table.integer('ijeiyzcxou');
    table.json('tobyjowlsl');
    table.timestamp('nyotwnuduv');
    table.boolean('nukattlkya');
    table.bigInteger('xkehmtnvqw');
    table.text('sloqvxemah');
  });
  await knex.schema.alterTable('cgfymszfsi', function(table) {
    table.timestamp('yygutotawk');
    table.text('vyjsbtlvmc');
    table.json('timaoiawgv');
    table.integer('jyboomwird');
    table.integer('wlqvethlpp');
    table.integer('ziywvqjbsf');
    table.boolean('wqbhdwoqic');
  });
  await knex.schema.alterTable('gjyusjmbtz', function(table) {
    table.timestamp('qxglbtyuxy');
    table.float('xgzsuhvpjp');
    table.integer('zmqqdaswis');
    table.json('ekanyuiotf');
    table.json('waaxwuqbsh');
    table.boolean('bhpnewylpm');
    table.json('blwraakcha');
    table.json('lntoyafnxa');
    table.json('uiaonnvdvf');
    table.float('gvxvuzqvxj');
  });
  await knex.schema.alterTable('nprlulgetl', function(table) {
    table.bigInteger('tpfzfifstr');
    table.string('zehoxkpzxo');
    table.string('wbtlzybdnv');
    table.bigInteger('phmabssyfx');
    table.json('rkwmffvggz');
    table.boolean('zfdguqxljq');
    table.integer('rrckggxnsm');
  });
  await knex.schema.alterTable('zjnyeylcop', function(table) {
    table.float('deuthaakjy');
    table.text('lfzyxuxyzv');
    table.integer('tdeypgkvnk');
    table.boolean('gachtshzqa');
    table.text('ltituabmqt');
    table.boolean('jjyzyysoil');
  });
  await knex.schema.alterTable('iffijzsrwl', function(table) {
    table.text('sryntgtpmo');
    table.float('yiaffxikol');
    table.float('pnqshvraxj');
  });
  await knex.schema.alterTable('ztqrjunboj', function(table) {
    table.timestamp('qhnpoyghkq');
    table.timestamp('ilhtphtzuf');
    table.boolean('czsywozpkh');
    table.text('mustnvvybg');
    table.bigInteger('zbwyihzqap');
    table.json('ogflhdaerc');
    table.bigInteger('abcwzklxfp');
    table.boolean('ngvhrdsckt');
    table.timestamp('mkbgmgetkf');
  });
  await knex.schema.alterTable('kslqndpmxy', function(table) {
    table.timestamp('jauoidwxrc');
    table.json('vbypumbzyr');
    table.string('jdsdqoltkj');
    table.integer('tgqdzhpana');
    table.string('zualqdvvci');
    table.bigInteger('howotbzipi');
    table.float('bifrxynsbp');
    table.float('oabqtzecsp');
    table.text('ggatxoimyk');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};