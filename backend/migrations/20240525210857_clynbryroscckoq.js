'use strict';

/**
 * Migration: 20240525210857_clynbryroscckoq
 * Description: Redo the undo
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('iefziaxczv', function(table) {
    table.boolean('rqjkgpkime');
    table.boolean('cmqqtthsfr');
    table.bigInteger('ebkgrigbzs');
    table.bigInteger('isngvwobze');
    table.integer('kejxlnqrrz');
    table.timestamp('vukhxsdnng');
    table.bigInteger('psbgsftfvm');
    table.timestamp('dmdqqeffrs');
    table.float('ybdxgrkkbz');
    table.timestamp('ktttrsoxpe');
  });
  await knex.schema.alterTable('qwrnbwnoxz', function(table) {
    table.json('pdxjzlugvl');
    table.timestamp('blhofmnunq');
    table.boolean('zljsjhwvxy');
    table.integer('ojkebyszbn');
    table.timestamp('yxfxwypubi');
    table.string('bmsksnthaj');
  });
  await knex.schema.alterTable('wuxxgrmypv', function(table) {
    table.string('nouluubiyt');
    table.float('usluftvewe');
    table.json('xqxsgljwaf');
    table.timestamp('vtanqwrsqm');
    table.timestamp('knyckyuibp');
    table.json('vgswjikdri');
    table.boolean('utsdttjkcn');
    table.timestamp('aujcywvfic');
    table.json('fxxyaxxaxu');
  });
  await knex.schema.alterTable('daamzxruqv', function(table) {
    table.bigInteger('axlpeoknrt');
    table.float('vnoonoepjt');
    table.boolean('yxtzffngwq');
    table.json('hzgjbganpi');
    table.timestamp('rqzhtsdivo');
  });
  await knex.schema.alterTable('ieyoeuqhmt', function(table) {
    table.integer('vfzdmtgggb');
    table.integer('pwnzbbkzmu');
    table.string('ydoliilspe');
    table.string('edqpurqtya');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};