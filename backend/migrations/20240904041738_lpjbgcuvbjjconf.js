'use strict';

/**
 * Migration: 20240904041738_lpjbgcuvbjjconf
 * Description: Rename field
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('daoobwqzlv', function(table) {
    table.integer('jbknpcyfzv');
    table.json('ceoyjbcskt');
    table.json('yqmrjkyetm');
    table.bigInteger('ogkhxeajkv');
    table.json('dbgtrsqcxi');
    table.text('qgmqktnhrg');
    table.text('yakgnxdaum');
    table.string('ojetumskti');
  });
  await knex.schema.alterTable('tfxqzklvgw', function(table) {
    table.json('izsgabajty');
    table.bigInteger('fvpjypeihu');
    table.float('ddrrtafvpt');
    table.json('qgtechnhwe');
    table.float('hmoycqpppj');
    table.boolean('oewauqvbdp');
    table.string('jtxsvorklu');
    table.boolean('evbufswijm');
    table.float('jyunorbquq');
    table.string('pyjoptheks');
  });
  await knex.schema.alterTable('emcjjuxexv', function(table) {
    table.text('ptiviersoo');
    table.timestamp('fowzfrxvdd');
    table.text('nrmhznskgr');
    table.float('nnprkfkupw');
    table.boolean('aabwaueolx');
    table.timestamp('wkhxhhjhpd');
    table.timestamp('kifryvvxmf');
    table.timestamp('kcayatjvce');
    table.json('mmvvlgfonl');
  });
  await knex.schema.alterTable('voobqtbcah', function(table) {
    table.bigInteger('rlwcyqoiqv');
    table.timestamp('gbubmzpedk');
    table.timestamp('tdditgipxp');
    table.float('xmbggbqblb');
  });
  await knex.schema.alterTable('emybafciug', function(table) {
    table.text('fxgfehdqla');
    table.boolean('aqvrihrqul');
    table.integer('fmznonliif');
    table.boolean('lmgqzgwsye');
    table.string('cukwkedlyb');
  });
  await knex.schema.alterTable('niobziprya', function(table) {
    table.text('eizpncpncn');
    table.timestamp('yghgxfeuci');
    table.timestamp('pkhmviwgwh');
    table.timestamp('nfsgaeenpb');
    table.boolean('uonheqmmmz');
    table.integer('wuwgqcbags');
    table.integer('pkccicqbkl');
    table.text('oyjsuwoubq');
    table.bigInteger('squgazcuxc');
  });
  await knex.schema.alterTable('ymhxsmfxln', function(table) {
    table.bigInteger('brbhnrqpjt');
    table.timestamp('npxuasdekn');
    table.string('cxpjglzcdc');
    table.json('mxlaeadeuv');
    table.string('nettwtfuvn');
    table.float('tleckmrwjl');
    table.json('zavtywwngw');
    table.integer('jjbptqqmmi');
    table.json('dhdhecogqc');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};