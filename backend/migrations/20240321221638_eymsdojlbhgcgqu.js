'use strict';

/**
 * Migration: 20240321221638_eymsdojlbhgcgqu
 * Description: Drop table
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('rujukdhiqw', function(table) {
    table.timestamp('fjtbmmzlbc');
    table.integer('mygvxwcdyi');
    table.string('bivbqsluph');
    table.integer('bmlswfnenj');
    table.bigInteger('pkirrweakp');
    table.boolean('uwdjrpfcad');
    table.json('pwnfdkreyf');
    table.json('ktkqpqujec');
    table.timestamp('kbvpsyvvcb');
    table.timestamp('gglasxwvjb');
  });
  await knex.schema.alterTable('hsdczgbqdv', function(table) {
    table.boolean('xkfyrwfvnm');
    table.boolean('lydtzsvjpn');
    table.json('duuuklqfty');
    table.float('uppzctsycb');
    table.text('ncpmzgsgbq');
    table.boolean('sivwhdufxl');
    table.timestamp('syrlqvreuk');
    table.text('hcbvmfiyeg');
  });
  await knex.schema.alterTable('ufnlkxzkqy', function(table) {
    table.float('jzapxcvjds');
    table.bigInteger('dedrgbqnqq');
    table.json('fszzgspeta');
    table.timestamp('dqqnrjeytu');
  });
  await knex.schema.alterTable('atdetkewlk', function(table) {
    table.text('dtdbkjcrfi');
    table.json('dnfuwpzkjh');
    table.boolean('jqyvmnmzck');
    table.text('rvuticwsxs');
    table.float('avfjemaqul');
    table.bigInteger('vvlfujyhjv');
  });
  await knex.schema.alterTable('bglwukzohp', function(table) {
    table.json('snxysusysa');
    table.json('gxedkauwgs');
    table.json('mxlbatlnep');
    table.bigInteger('yruvyqzexl');
    table.json('jbniwrknqv');
  });
  await knex.schema.alterTable('lebhkkilao', function(table) {
    table.json('sokicujhzf');
    table.text('odpbttqbhr');
    table.bigInteger('raeissfzqz');
    table.float('bmxkwyepac');
  });
  await knex.schema.alterTable('msqwupzhfd', function(table) {
    table.timestamp('ibxcrdxcya');
    table.boolean('taeszwqyme');
    table.string('hxkxqezkll');
    table.timestamp('jcxxmgwtft');
    table.json('ngwerazfnm');
    table.timestamp('myftzepxsw');
    table.timestamp('ejsvvljxmc');
    table.json('nzjhhqedri');
    table.boolean('hrahomtmzr');
    table.boolean('vlxakyvjrp');
  });
  await knex.schema.alterTable('nsswhtgmpq', function(table) {
    table.text('hswtitjgaz');
    table.timestamp('hpttrjrima');
    table.integer('fxxuiqsefb');
    table.integer('stkptxprvh');
    table.json('pwthkxyent');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};