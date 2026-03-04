'use strict';

/**
 * Migration: 20240312072710_yzkgrvjuopkfmrm
 * Description: Please work this time
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('aqqmzygidr', function(table) {
    table.integer('xduiigogjl');
    table.float('qtaggflhbv');
    table.text('kfbvigfakc');
    table.bigInteger('qicvppmziy');
    table.json('hkzsnmhuka');
    table.float('ozffytavkq');
    table.bigInteger('imxnkdnhth');
    table.integer('zqlbznvnku');
  });
  await knex.schema.alterTable('zpezbsyctg', function(table) {
    table.bigInteger('rynvuozgjz');
    table.float('swhkucrxha');
    table.integer('balpnjliay');
    table.boolean('zrmnxxjpqi');
    table.text('kxphzcnche');
  });
  await knex.schema.alterTable('isfdlxktyx', function(table) {
    table.text('zdosjorouk');
    table.json('hybnoqabvd');
    table.integer('ucihdbsvht');
    table.json('pmlgonulyg');
    table.integer('qiplxrbrxb');
    table.float('bbajxmzgsn');
  });
  await knex.schema.alterTable('aahuwpskvm', function(table) {
    table.timestamp('texfldgbub');
    table.timestamp('xrpdlroqvh');
    table.boolean('lhvfgegbxv');
  });
  await knex.schema.alterTable('nannchmccb', function(table) {
    table.float('iygzofyizj');
    table.integer('kqognkjkme');
    table.float('fqlvyiqkwq');
    table.integer('fndnlclsxh');
    table.float('drbgaopodr');
    table.bigInteger('vrvzbsoexk');
    table.text('gmypwzdncv');
    table.bigInteger('xiactinalr');
    table.boolean('czebchergw');
    table.text('pyznlzvssl');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};