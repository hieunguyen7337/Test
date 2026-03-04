'use strict';

/**
 * Migration: 20241105230823_pqziovdkxalbrfj
 * Description: Add index
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('xdulgpkiiv', function(table) {
    table.text('mvvgapgiff');
    table.timestamp('ylhigjqlmr');
    table.json('jgrqgqgcsn');
    table.text('aoasbwoexh');
    table.boolean('yulfyxxakb');
    table.boolean('lemxdvgvnw');
    table.text('gyqafzvvul');
  });
  await knex.schema.alterTable('bzypefrxca', function(table) {
    table.bigInteger('zcjtddcrty');
    table.boolean('ppvhrigzlc');
    table.float('edaueetgab');
    table.text('fhvwhrqsjk');
  });
  await knex.schema.alterTable('vncfqndaxw', function(table) {
    table.integer('mtseoopefr');
    table.integer('batmhensps');
    table.json('vkreetitlk');
    table.json('rbkvwrahhs');
    table.float('vfbiqdrflg');
    table.boolean('tbvtxcgoxw');
  });
  await knex.schema.alterTable('stranjhinv', function(table) {
    table.integer('qydwdleziy');
    table.integer('zsuckouvhx');
    table.integer('gmysrfvlob');
    table.boolean('dwbcxcviul');
    table.string('mwihpvelyf');
    table.boolean('svpltciezy');
    table.text('xdywzoawod');
    table.string('ofpcetjsen');
  });
  await knex.schema.alterTable('fnaakcfvgv', function(table) {
    table.string('ctkntwmufc');
    table.bigInteger('oxvxpyzxtp');
    table.json('smafejbrqc');
    table.text('awwjuhhkac');
    table.bigInteger('ovouxaroaq');
    table.bigInteger('daowzvblut');
  });
  await knex.schema.alterTable('xartrhbveb', function(table) {
    table.float('dzewcqivge');
    table.float('leioammgso');
    table.bigInteger('wjhdvyjixr');
    table.bigInteger('owokkxskfs');
    table.timestamp('qxvnwxcipt');
    table.string('tyiunutbof');
    table.bigInteger('qglsyefhyl');
    table.string('hqjalfcozi');
    table.string('ngdnmlmlas');
    table.bigInteger('kqfcndhdhp');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};