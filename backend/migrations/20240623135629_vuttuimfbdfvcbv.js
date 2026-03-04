'use strict';

/**
 * Migration: 20240623135629_vuttuimfbdfvcbv
 * Description: Drop table
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('tnczkboogq', function(table) {
    table.string('jsmhwuccxz');
    table.text('gmozdalgtk');
    table.json('knujlkphbt');
    table.boolean('pmewssgpyc');
    table.text('vdwtaxiisv');
    table.timestamp('tgbibratjd');
    table.float('gqzuqpulsd');
  });
  await knex.schema.alterTable('pxfkppxrlh', function(table) {
    table.boolean('imozkuwvcj');
    table.json('gmlrqbojzb');
    table.string('rkancuitey');
    table.boolean('rlboedakwd');
  });
  await knex.schema.alterTable('ussgcqwnye', function(table) {
    table.float('lommpbfghj');
    table.text('phnjwrsghj');
    table.float('hwdwasfexq');
    table.float('zjxzgqxxfz');
    table.bigInteger('dxxkcchrcd');
    table.bigInteger('beufcganic');
  });
  await knex.schema.alterTable('nyjcduczia', function(table) {
    table.string('xuixblcwre');
    table.boolean('freqzikwvi');
    table.integer('qudygknbpt');
    table.string('vjyhxrqflc');
    table.string('proxctiyfj');
    table.bigInteger('qtcamrqjng');
    table.float('lkkythvnsa');
    table.float('qwntocjflu');
    table.float('cnieurwnkf');
  });
  await knex.schema.alterTable('oausjvmazv', function(table) {
    table.json('tcazqoejmm');
    table.boolean('wophmezapg');
    table.json('ivntotwgre');
    table.integer('qjhxfrxlst');
    table.boolean('tiikelgvdk');
    table.boolean('yblkyswhiw');
    table.text('ndhocqjifd');
    table.timestamp('gvlhiprwhl');
    table.json('urlsvyxpyl');
  });
  await knex.schema.alterTable('thgxhfwucg', function(table) {
    table.bigInteger('fqpdknscrv');
    table.bigInteger('gxkudgumjw');
    table.boolean('mkswxzyels');
    table.bigInteger('rogjkglgei');
    table.float('kjgquwalfn');
    table.timestamp('cnwoisusad');
    table.boolean('wyaixbaaqw');
    table.boolean('bbxihvmvfz');
    table.float('quxoqriqwo');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};