'use strict';

/**
 * Migration: 20240519151521_aravpptllzrniex
 * Description: Please work this time
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('ycevmwopma', function(table) {
    table.bigInteger('gyuhmzzvdm');
    table.bigInteger('buumemoynq');
    table.integer('cuidcwpozk');
    table.bigInteger('ucgrndpvad');
  });
  await knex.schema.alterTable('ucckjiakgc', function(table) {
    table.float('tidcahkvsn');
    table.string('mdzpaywgik');
    table.boolean('srdslpgmlw');
    table.timestamp('fcgimqojko');
    table.boolean('wtorhxmghj');
  });
  await knex.schema.alterTable('mmnnmmxpkj', function(table) {
    table.float('vfoxreyrde');
    table.float('dtqqobyuiz');
    table.text('extztbmfxg');
    table.json('bofapaanhe');
    table.string('jnndalylkg');
  });
  await knex.schema.alterTable('lvvmgmrzpo', function(table) {
    table.boolean('nwmtburupy');
    table.json('ysnedtslok');
    table.float('xdujbazxqv');
  });
  await knex.schema.alterTable('lqyidryxmk', function(table) {
    table.integer('gprryzzytd');
    table.float('dcjegkkklq');
    table.text('onuclnwvrc');
  });
  await knex.schema.alterTable('odqddtwezr', function(table) {
    table.text('mupdkneesb');
    table.float('ntwdaljdbt');
    table.timestamp('eboieulsqq');
    table.json('rhdfytymrc');
    table.float('aezueniqdk');
    table.bigInteger('aydebszrwb');
    table.json('tkcrxdcfkt');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};