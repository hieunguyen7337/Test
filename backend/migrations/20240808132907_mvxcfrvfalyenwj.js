'use strict';

/**
 * Migration: 20240808132907_mvxcfrvfalyenwj
 * Description: Redo the undo
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('drlghujxji', function(table) {
    table.timestamp('faqgokdqwa');
    table.string('gglnbhjztd');
    table.string('ewdbtgwunq');
    table.timestamp('vegarcyjry');
  });
  await knex.schema.alterTable('qlpnfxfmeg', function(table) {
    table.timestamp('qizsdpplkd');
    table.boolean('ghqthwezqg');
    table.timestamp('nfdsrqquvn');
    table.string('ujxvvdqcsi');
    table.json('liopegzfcr');
    table.json('jlnkznxgtp');
  });
  await knex.schema.alterTable('vrselvpubj', function(table) {
    table.bigInteger('hljgxypaoc');
    table.bigInteger('sophxsrktx');
    table.timestamp('chbqryokwc');
  });
  await knex.schema.alterTable('tjudepqoyt', function(table) {
    table.bigInteger('ffrksigbsd');
    table.float('oherlbpthe');
    table.json('rxwrnzqgua');
  });
  await knex.schema.alterTable('lduevfuttq', function(table) {
    table.string('mmmuxpmaoo');
    table.boolean('cqrxjjvukv');
    table.json('ojgjvbjuhn');
    table.json('khnfmsnrwh');
    table.bigInteger('xurmlctldp');
    table.string('tgxifznopc');
    table.text('tiiptrskev');
    table.json('dzfqawdaxo');
    table.integer('kfsftjwyti');
    table.string('oxgsopfhpb');
  });
  await knex.schema.alterTable('wmfnraggkx', function(table) {
    table.string('xyrgzactlt');
    table.boolean('bafwocctzy');
    table.bigInteger('lmaocbptnp');
    table.timestamp('beighpmwhf');
    table.timestamp('kneetysbgc');
    table.integer('qondljpchp');
  });
  await knex.schema.alterTable('hxnadwtcph', function(table) {
    table.integer('nptsmrumlr');
    table.integer('vtodicjugv');
    table.bigInteger('lzudvpuxza');
    table.integer('bcncmywvce');
    table.json('saxngdpdix');
    table.timestamp('hhysxqxdei');
    table.json('vfzmhthjgu');
    table.json('rgkymevxvo');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};