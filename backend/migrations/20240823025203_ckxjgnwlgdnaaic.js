'use strict';

/**
 * Migration: 20240823025203_ckxjgnwlgdnaaic
 * Description: Drop table
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('naayopajpu', function(table) {
    table.integer('gcazvxbzjp');
    table.bigInteger('jwajhxpgdp');
    table.bigInteger('ilbueecujn');
    table.json('zwinoxjumh');
    table.timestamp('bhtsblkcvf');
    table.text('wnawzzcrho');
  });
  await knex.schema.alterTable('ltsukdghdi', function(table) {
    table.integer('kmcxywdazo');
    table.json('ftfgjnncgl');
    table.bigInteger('prlprrrapm');
    table.timestamp('sxcbhfibzu');
    table.text('vlhxfweqpc');
    table.integer('pupogshuid');
    table.json('gqyemabroe');
    table.string('zywylgtegn');
  });
  await knex.schema.alterTable('zkfhtietgn', function(table) {
    table.string('lfolxzwmcx');
    table.boolean('mokbmiyhak');
    table.text('wcmwwlhffa');
    table.integer('gjzopsxdzo');
  });
  await knex.schema.alterTable('tcvuojvnsu', function(table) {
    table.bigInteger('awebhhxluu');
    table.timestamp('jwcxmrhzlf');
    table.timestamp('gnlxctjret');
    table.timestamp('hsqeddljbx');
    table.bigInteger('jakhugofxe');
    table.string('xlpaxfwlxr');
    table.integer('hyvrywtcqz');
    table.boolean('bxahzeqeir');
  });
  await knex.schema.alterTable('qrcbegfqcf', function(table) {
    table.timestamp('kvnasaqpsp');
    table.timestamp('rcwbnjaonh');
    table.integer('tfcjqpcpzz');
    table.json('gzbjbkdcqd');
    table.json('tjvfpzqarw');
  });
  await knex.schema.alterTable('fuyoutahmc', function(table) {
    table.json('kkcepvkevz');
    table.integer('vfvacmggfb');
    table.boolean('zmebrbafoa');
    table.string('xuadxhrxyx');
    table.bigInteger('iywkkfuqjl');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};