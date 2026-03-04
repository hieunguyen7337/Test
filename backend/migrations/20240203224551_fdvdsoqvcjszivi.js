'use strict';

/**
 * Migration: 20240203224551_fdvdsoqvcjszivi
 * Description: Add column
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('dighvntqkz', function(table) {
    table.string('oktzjcwczy');
    table.json('kcnqzeqplj');
    table.boolean('cdnatimkrs');
    table.json('mjazzcldkx');
    table.integer('akzlfqjbcv');
    table.float('pijncfvzut');
  });
  await knex.schema.alterTable('jsaeerjiue', function(table) {
    table.string('eedcdplxvo');
    table.boolean('jjrdsfjmqb');
    table.integer('kjndfjybpt');
    table.timestamp('ylkmlzsrdj');
    table.boolean('utwlpwyxnu');
    table.float('aedybhfklx');
    table.string('vpjdykalju');
    table.string('nikzxobohg');
    table.integer('rymqynabyz');
    table.float('swrxesyvnl');
  });
  await knex.schema.alterTable('rcdiipskgm', function(table) {
    table.string('cxdqpsxdhr');
    table.timestamp('nkygqslxrc');
    table.json('guvxuffyom');
    table.float('udbyklpxne');
    table.boolean('btufyzzhma');
    table.boolean('qjavakhoaj');
    table.bigInteger('bbuevfzxyb');
    table.json('gbttqcfilk');
  });
  await knex.schema.alterTable('ovioazqhah', function(table) {
    table.boolean('ijmxthovik');
    table.float('odggdtcqpk');
    table.boolean('sqyxiwzykk');
    table.string('jobokibkhq');
    table.timestamp('tghcvileto');
    table.boolean('phnjomvxit');
    table.bigInteger('cazsxysilg');
    table.float('aljbxyqbhl');
    table.integer('cylbfizjvb');
    table.json('zpbjxnewit');
  });
  await knex.schema.alterTable('vpudhivoyr', function(table) {
    table.float('mdywaflwnl');
    table.boolean('ebairxtdrc');
    table.integer('bcvfqnnllo');
    table.bigInteger('dmtrjjkcet');
    table.timestamp('pcobqmayhy');
    table.text('tduqzsgqzp');
    table.boolean('gdomwlljti');
    table.timestamp('srwcfjlrrd');
  });
  await knex.schema.alterTable('egqsjigulp', function(table) {
    table.float('wygooywbaf');
    table.text('ftvuyigbne');
    table.json('bxejqwbzox');
    table.text('rxaahohgth');
    table.timestamp('iospxabgci');
    table.bigInteger('qzhuhthcck');
    table.text('fuedidtfgt');
    table.json('jneyzmtwcf');
    table.string('ozoxxejqpl');
  });
  await knex.schema.alterTable('brqypwqdlx', function(table) {
    table.boolean('nowprxbrlq');
    table.timestamp('smakuhjrtf');
    table.integer('wdiybnemuc');
    table.timestamp('ljkwurnzbg');
    table.bigInteger('odinbbugla');
    table.bigInteger('nqsbarqrng');
    table.float('sjknzypnhc');
    table.json('ohjxxcvbfs');
    table.float('qhvlpfnhan');
    table.timestamp('qxacljqmuv');
  });
  await knex.schema.alterTable('ucnernkluw', function(table) {
    table.float('jqbghhdpms');
    table.bigInteger('dwijdeqxcd');
    table.text('pfvccazerm');
    table.integer('xcgufkgisf');
    table.timestamp('fwxhtikhpi');
  });
  await knex.schema.alterTable('ncaouhctzm', function(table) {
    table.text('dodlboxgbq');
    table.string('skltqtoswv');
    table.timestamp('ggqgxqhpbx');
    table.timestamp('ipfqjyvswf');
  });
  await knex.schema.alterTable('dqhzqanbvs', function(table) {
    table.bigInteger('mpzmolcoip');
    table.bigInteger('mgjlwoblfq');
    table.float('tmgdlnrldt');
    table.bigInteger('gmmrgqupew');
    table.timestamp('tkgwryoxrk');
    table.string('njpbcgczws');
    table.json('bajhvhwicf');
    table.bigInteger('mnhojdstve');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};