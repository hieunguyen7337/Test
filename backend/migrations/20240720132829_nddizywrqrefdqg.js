'use strict';

/**
 * Migration: 20240720132829_nddizywrqrefdqg
 * Description: Add column
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('mxefyxlyub', function(table) {
    table.text('jailugijen');
    table.timestamp('ndqyqxhmsw');
    table.boolean('kpvjiawwfk');
    table.string('ttzocmdycu');
  });
  await knex.schema.alterTable('gvdoualjli', function(table) {
    table.string('cymviyqpgu');
    table.boolean('jzujwqdktn');
    table.boolean('qbsdbbzhnm');
    table.json('tvarnqxwnu');
    table.float('ylqpmyrzie');
    table.timestamp('inrkcgxnve');
  });
  await knex.schema.alterTable('ivtvyptzqw', function(table) {
    table.bigInteger('niilytmmss');
    table.string('ljheqcjjuv');
    table.string('mkddmdxrif');
    table.float('qnneybyixa');
    table.json('bqiqteeaph');
  });
  await knex.schema.alterTable('tgudkyowka', function(table) {
    table.float('nbbutvfqjd');
    table.integer('rhxmcmydpu');
    table.json('ytrrzsqgjw');
  });
  await knex.schema.alterTable('oxmpvclsbu', function(table) {
    table.float('epaugqotml');
    table.string('kvbclwjtij');
    table.json('litdvwoaqb');
    table.text('ddgnywfftm');
    table.json('leumvkksbp');
  });
  await knex.schema.alterTable('vosmbkaewk', function(table) {
    table.timestamp('rhyuabqqqg');
    table.boolean('zieqakscuo');
    table.boolean('ehmmmpeqvm');
    table.json('dahvftjanb');
    table.integer('qkuwglxawm');
    table.text('omyvqycpxm');
  });
  await knex.schema.alterTable('pafczzgrhy', function(table) {
    table.boolean('ujqowmduor');
    table.boolean('xhhtowcbds');
    table.string('hszucxrdkh');
    table.string('pbaujbmzwr');
    table.bigInteger('ffnzdvyydj');
    table.float('gbmsgwtlzf');
    table.boolean('aipkpflfbv');
  });
  await knex.schema.alterTable('vtbsenqqwx', function(table) {
    table.float('pvckucsqbv');
    table.boolean('ytuthjuviw');
    table.boolean('dusojzvmpa');
    table.text('qecrnxtpru');
    table.timestamp('zfvgqulpfj');
    table.json('anjddzydqp');
  });
  await knex.schema.alterTable('jxdrtiojsi', function(table) {
    table.float('udnlbixeoi');
    table.bigInteger('yvqluorrfn');
    table.json('tryadrlyif');
    table.boolean('tdphzoyoxa');
    table.bigInteger('vvkqmsjyqq');
    table.float('pocgyctlmp');
    table.float('rzkmkghvqs');
    table.boolean('ysktkkgfbt');
    table.text('kbsccaptry');
  });
  await knex.schema.alterTable('tmybhqufpw', function(table) {
    table.json('lqsyxxephx');
    table.json('nwwtyiskcx');
    table.integer('nnnrplyvpy');
    table.json('mcofyucmgj');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};