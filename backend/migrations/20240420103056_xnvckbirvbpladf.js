'use strict';

/**
 * Migration: 20240420103056_xnvckbirvbpladf
 * Description: Drop table
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('nccsaoplsv', function(table) {
    table.string('qnewlfmfps');
    table.text('rtibqbasgh');
    table.bigInteger('vwnjwthigm');
    table.string('lrmmnjvixo');
    table.text('jokyaerujv');
    table.json('kbtchfmsir');
    table.text('grjtsnznrn');
    table.float('trfpgmvjry');
  });
  await knex.schema.alterTable('bkowxppjod', function(table) {
    table.timestamp('sabzbxcpvm');
    table.integer('acfqwrlvbp');
    table.text('nekdxaehkl');
    table.text('oepqystjqu');
    table.text('okkclhdcvb');
    table.integer('pfatqjazgx');
  });
  await knex.schema.alterTable('zdufwffqfp', function(table) {
    table.integer('iskkdwggbu');
    table.timestamp('juhghqibtu');
    table.text('guxjlswysz');
    table.integer('fmjcgxsbbg');
    table.string('lqnqkjiehm');
    table.string('wuevtzdyyn');
    table.timestamp('mdmckuvcid');
    table.string('nqoyitnedz');
    table.boolean('aevbadjeuh');
    table.json('addrtpeiyp');
  });
  await knex.schema.alterTable('nrrcsafkol', function(table) {
    table.string('hoeyysruzh');
    table.json('eatwyqelwb');
    table.float('ayyhmzplqw');
    table.text('ehitfsjraa');
    table.json('bfrlqfpcfv');
    table.bigInteger('kcqvkfjpaq');
    table.boolean('duktmbknko');
    table.json('sncfeeccas');
    table.json('taixinigul');
    table.integer('iuigdhtqpv');
  });
  await knex.schema.alterTable('calsgptgyu', function(table) {
    table.timestamp('oinnnivfwk');
    table.float('npoqkmoyiy');
    table.json('vsgfmkffxp');
    table.boolean('ocezjbsohg');
    table.text('xkrvgqozfu');
    table.string('xzqjhkgllw');
  });
  await knex.schema.alterTable('xqucewxfxr', function(table) {
    table.float('asdsmvptbw');
    table.bigInteger('piyrxozkvw');
    table.integer('epenuxsonm');
    table.json('jpdvpiwydn');
    table.text('ahysaynxit');
    table.json('luurdmrgfv');
    table.integer('ixgqkvxqxb');
    table.integer('moazdyclaj');
  });
  await knex.schema.alterTable('jxhjmyheiv', function(table) {
    table.float('jvfexvjzke');
    table.json('pwnbangobi');
    table.bigInteger('hkzwvdoedw');
    table.integer('bdcxedlthk');
    table.bigInteger('qsrzgatrhs');
    table.float('lrcswkxhdw');
    table.text('mukpchvpaf');
    table.string('rpntdxqgcc');
    table.text('roecrryxvz');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};