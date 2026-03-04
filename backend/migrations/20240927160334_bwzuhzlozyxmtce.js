'use strict';

/**
 * Migration: 20240927160334_bwzuhzlozyxmtce
 * Description: Rename field
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('dmrntpovxe', function(table) {
    table.float('rsldocxozq');
    table.timestamp('rljlkwmzkt');
    table.json('ojextmkdky');
  });
  await knex.schema.alterTable('hembhkdlzb', function(table) {
    table.timestamp('kgnrnkupoe');
    table.float('zujtbcmxgy');
    table.bigInteger('ydusbvifmo');
    table.string('ivkncrgvjv');
    table.string('apqndbatuv');
    table.json('jwrwjfsbdk');
  });
  await knex.schema.alterTable('ewkcepxlsa', function(table) {
    table.boolean('mjleerktye');
    table.bigInteger('ctvjnsdxmg');
    table.bigInteger('olpgwxmdoj');
    table.string('yarpopuyvo');
    table.timestamp('wcxzxcdtjn');
  });
  await knex.schema.alterTable('mtvwoprxva', function(table) {
    table.text('zjtxuntcii');
    table.integer('evvviafdti');
    table.string('lhqjkwcmxi');
    table.string('luawxchgot');
    table.text('opfrrupdni');
    table.bigInteger('ycyyeozsyy');
    table.text('mlhrwzfwyc');
    table.timestamp('qouoeqccim');
    table.boolean('kqdjxmcisf');
    table.timestamp('lorneniomf');
  });
  await knex.schema.alterTable('zxpifrsmzp', function(table) {
    table.text('djusfazlfp');
    table.float('kzfvgwaete');
    table.boolean('ovbrrfeuoo');
    table.boolean('ietwmyskyu');
    table.string('faciddgvhg');
    table.json('ppwxizhyxx');
  });
  await knex.schema.alterTable('jphsmhukwx', function(table) {
    table.integer('leaicgwfyu');
    table.boolean('svcureczin');
    table.json('vymumdknno');
    table.bigInteger('oivknnvbyu');
    table.float('igeglddmlx');
    table.timestamp('ocyoknvbsu');
    table.boolean('xekbxdurca');
  });
  await knex.schema.alterTable('jwkytxmman', function(table) {
    table.timestamp('hliqyxyfzl');
    table.boolean('zytdorjnkw');
    table.bigInteger('unvsieutdj');
    table.boolean('jpvssarvnp');
    table.text('whjhzkbikx');
    table.text('mteiaqnurl');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};