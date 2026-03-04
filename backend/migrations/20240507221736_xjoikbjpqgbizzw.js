'use strict';

/**
 * Migration: 20240507221736_xjoikbjpqgbizzw
 * Description: Please work this time
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('amqbtajxly', function(table) {
    table.text('tgvaaernlr');
    table.json('btnataqvbd');
    table.json('gkmhrgvehh');
    table.text('buxcdpiqbf');
    table.json('jtcxkxzsyf');
  });
  await knex.schema.alterTable('wqbcknmcsm', function(table) {
    table.string('vavjwfllnm');
    table.float('mvoxwhrqxp');
    table.boolean('ebbuzdwnld');
    table.string('apeddnajbn');
    table.json('plkcojtdqk');
    table.boolean('xxymtffjbd');
    table.integer('rternzdcpn');
  });
  await knex.schema.alterTable('tgsyveolfb', function(table) {
    table.string('sakzajhiml');
    table.boolean('tvhtkojoao');
    table.json('sowtxfmyju');
    table.string('mfmbeapnok');
    table.text('mxuimmukji');
  });
  await knex.schema.alterTable('ymkphkiuol', function(table) {
    table.integer('baqbmxswfr');
    table.bigInteger('ugqwrygeti');
    table.json('fgwwhvckvs');
  });
  await knex.schema.alterTable('cpbncjdnpm', function(table) {
    table.timestamp('pvrttnhdzz');
    table.string('zbywmmnubb');
    table.text('svmtbhsofa');
    table.integer('qxydutrilt');
    table.bigInteger('fvxtwswxag');
    table.timestamp('thsldbxyxy');
    table.bigInteger('umaftzqlxj');
    table.json('vwudsfhmxo');
    table.timestamp('udlqnvbisi');
    table.integer('sbwdgolmbt');
  });
  await knex.schema.alterTable('jqpfljuhge', function(table) {
    table.float('vcjrgcwejs');
    table.timestamp('ealdkrdaju');
    table.boolean('kgqarfmfor');
    table.integer('tiljbmfuja');
    table.integer('fisojpzbky');
    table.string('nocvjiwhnh');
    table.json('gdrjyuifyb');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};