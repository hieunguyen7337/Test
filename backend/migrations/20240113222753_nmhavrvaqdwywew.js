'use strict';

/**
 * Migration: 20240113222753_nmhavrvaqdwywew
 * Description: Please work this time
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('kjiipsfqky', function(table) {
    table.timestamp('xjqjxftttl');
    table.text('fizpateboa');
    table.json('iebgyfbxub');
    table.timestamp('ifkzdgbomc');
    table.string('eanvrmocaa');
    table.json('ioptyzbiuq');
    table.string('cfwnuxvbqd');
    table.float('ntcpgpveiw');
  });
  await knex.schema.alterTable('yatxhepmwf', function(table) {
    table.text('pfnvwtombx');
    table.boolean('hbdhqfflzy');
    table.timestamp('kdoxfzfnaf');
    table.bigInteger('juanlckglx');
    table.integer('zqbbdbmckx');
    table.text('xopbcicoya');
    table.boolean('gnvsxkfqqz');
  });
  await knex.schema.alterTable('pclipoffoa', function(table) {
    table.bigInteger('aljzaiqddt');
    table.boolean('mvqltfsqxv');
    table.string('ikhdubljfv');
    table.json('vkfjqcofld');
    table.float('ngoraxuhqh');
    table.bigInteger('dsrcutxruo');
    table.integer('vpukzwqvmg');
  });
  await knex.schema.alterTable('sodtsshggm', function(table) {
    table.timestamp('krgzfkezxx');
    table.timestamp('dixdtmekng');
    table.float('vggqnydely');
    table.json('zysppagxaj');
    table.text('hdwsnxpoil');
    table.bigInteger('shhnkcovvb');
    table.text('sesfmaynfg');
  });
  await knex.schema.alterTable('swvgrrqaxm', function(table) {
    table.text('rhgbnchjlt');
    table.json('onydpmtfxo');
    table.boolean('wehqkojjkr');
    table.integer('cqnrhbdowh');
    table.boolean('qymcsrbsxp');
    table.timestamp('lffshmzunj');
    table.json('wygjggemqq');
    table.integer('ojnrvxwnem');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};