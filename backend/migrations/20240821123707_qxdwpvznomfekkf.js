'use strict';

/**
 * Migration: 20240821123707_qxdwpvznomfekkf
 * Description: Drop table
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('tinwrptrjs', function(table) {
    table.bigInteger('mvsyfczyon');
    table.float('bwndhrxkhg');
    table.integer('hunejmqmos');
  });
  await knex.schema.alterTable('yiqulmjbsi', function(table) {
    table.json('yrwictggoy');
    table.boolean('bxpcytovfx');
    table.text('rowvypsjpl');
    table.float('dsbkapvpmu');
  });
  await knex.schema.alterTable('txwuljzvll', function(table) {
    table.json('uuzvnplfgj');
    table.string('acoeioxiya');
    table.boolean('eumqagxjsf');
  });
  await knex.schema.alterTable('vcfdsqjnds', function(table) {
    table.text('dsazhyokny');
    table.boolean('wixzhdulsj');
    table.bigInteger('vqspfnfdro');
    table.text('tvskkaawub');
    table.json('ncgafxxddd');
    table.string('gcuudngjpo');
    table.string('rrljxgjlhs');
  });
  await knex.schema.alterTable('cosjokoymu', function(table) {
    table.float('ayalmplfzy');
    table.boolean('rkpurksmai');
    table.bigInteger('niwufpeoyo');
    table.json('yjgizkebcb');
  });
  await knex.schema.alterTable('huubniityy', function(table) {
    table.string('uarywmlnnj');
    table.bigInteger('waqdjtzyel');
    table.float('obcgjftinm');
    table.integer('frohepbowt');
    table.timestamp('wmpusrqvhz');
    table.bigInteger('uwrisgcojk');
    table.string('atqerdtuev');
    table.string('osmzlnwfst');
    table.string('tyxuokjbsf');
    table.bigInteger('citqpuyjdr');
  });
  await knex.schema.alterTable('xeaufcrltg', function(table) {
    table.float('tkgkdmmsvx');
    table.float('syrrqhzshp');
    table.string('syqxtqjixg');
    table.string('mmnizljnnx');
    table.timestamp('tyrsfvbbpc');
  });
  await knex.schema.alterTable('buyoafbitz', function(table) {
    table.timestamp('isvmwezcsx');
    table.integer('dkzvlirash');
    table.boolean('nqozehlmvi');
    table.boolean('eppsuoenjj');
    table.json('zoxqyshcdm');
    table.text('qztyzmgjlr');
    table.timestamp('yhvjowsdsc');
    table.boolean('vuixmhmken');
    table.integer('stfcciqqru');
  });
  await knex.schema.alterTable('pflhpwmdnq', function(table) {
    table.integer('tcqfzeidne');
    table.text('wbluvddjxa');
    table.bigInteger('wvlyrnrfkw');
    table.float('pvospditxr');
    table.integer('pdpsnbksie');
    table.timestamp('ghhxshgiug');
    table.integer('orduxechri');
  });
  await knex.schema.alterTable('gxsvotnzcu', function(table) {
    table.bigInteger('ezxnabjzrg');
    table.text('tfhqoczpwf');
    table.text('mvcryovrzv');
  });
  await knex.schema.alterTable('jeeeebwcfw', function(table) {
    table.string('hxljrtswgx');
    table.timestamp('rwiqdahxiu');
    table.string('xwswfrfepr');
    table.bigInteger('vzvmeqihrh');
    table.float('zzpjnsnvjr');
    table.timestamp('whxxacixiv');
    table.json('wtjavtlryz');
    table.timestamp('pzjcnfkdjq');
    table.string('qzsxupniqj');
    table.timestamp('zhkfbcqxbb');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};