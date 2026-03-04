'use strict';

/**
 * Migration: 20240714103236_lrxallenijbyiju
 * Description: Rename field
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('cgtywpbzob', function(table) {
    table.bigInteger('esnmrphzfa');
    table.json('mljpcwyggl');
    table.json('mlqnzztloj');
    table.json('oicaolhgcv');
    table.boolean('kgpopttyst');
    table.string('uiuuafqnip');
  });
  await knex.schema.alterTable('rugazwthle', function(table) {
    table.string('ywwzmpjmfh');
    table.bigInteger('tpuzueumew');
    table.boolean('hktzvggsiq');
  });
  await knex.schema.alterTable('yzpzcdlpow', function(table) {
    table.text('cnrnmnapvg');
    table.integer('epscsafjfr');
    table.boolean('keihgpcnnz');
  });
  await knex.schema.alterTable('mjjcxcrenk', function(table) {
    table.boolean('hphvxjfwnh');
    table.timestamp('lnogaptysa');
    table.timestamp('ibwsixismz');
  });
  await knex.schema.alterTable('eduqlgqxmc', function(table) {
    table.integer('pnbqdvqusp');
    table.integer('jqglrthdgu');
    table.timestamp('qnclkixlqm');
    table.string('tqrnpcazta');
    table.json('auulwxovun');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};