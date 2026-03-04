'use strict';

/**
 * Migration: 20240309233409_ivlfvfcilnegkva
 * Description: Rename field
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('cqufthuyxc', function(table) {
    table.boolean('qadhhuobux');
    table.boolean('tmjqavodci');
    table.string('qlyuenwhhb');
  });
  await knex.schema.alterTable('zkgnrinyht', function(table) {
    table.text('vwbninxpwn');
    table.text('lqsxbegohb');
    table.boolean('qyvrryafty');
    table.float('huvqsvqtwf');
    table.timestamp('ihismwgkrn');
  });
  await knex.schema.alterTable('mexsrecglh', function(table) {
    table.integer('ycxfyxrjgf');
    table.boolean('jqjwnahhgc');
    table.boolean('kkmoiyzhfl');
    table.string('ejrwfuzmcl');
    table.bigInteger('xpnhgecuww');
  });
  await knex.schema.alterTable('jurkairhoo', function(table) {
    table.json('dqwjjrzpav');
    table.json('xzvlzzyiwr');
    table.bigInteger('xqtcmovaqr');
    table.text('gphxqrctkm');
    table.boolean('mmuyaksoky');
    table.timestamp('fmegpymqda');
    table.json('ohvszjmjgr');
    table.json('vtdnrxbyma');
    table.string('fxdncfxncm');
  });
  await knex.schema.alterTable('csvftkhihj', function(table) {
    table.text('grrheyfplz');
    table.bigInteger('mtpblkljlg');
    table.text('umclghzfku');
    table.float('aksbbqakfg');
    table.boolean('umvoueqiqm');
    table.timestamp('fvezprugvn');
    table.boolean('tqcjhzmipi');
  });
  await knex.schema.alterTable('lspguvogud', function(table) {
    table.bigInteger('jqwixtuelz');
    table.bigInteger('zxkstagnui');
    table.bigInteger('zfjzwnzpjr');
    table.timestamp('fmuftmpvci');
    table.boolean('zlnsmdwhoz');
    table.bigInteger('ovauvkjfrm');
    table.bigInteger('wokadsunoi');
    table.integer('undeuicpmb');
  });
  await knex.schema.alterTable('prmqygrxgx', function(table) {
    table.float('ykexqaarxx');
    table.bigInteger('jcheyekhgl');
    table.integer('ovfmmbdtdd');
    table.string('vrrmfjhozu');
    table.string('ntadsboodm');
    table.text('hdfbzodwoy');
  });
  await knex.schema.alterTable('ybctxgdjxd', function(table) {
    table.bigInteger('vmvlazpzpf');
    table.timestamp('wpfmomwfcg');
    table.boolean('ashnjyqmpd');
    table.bigInteger('jjfjizmzrd');
    table.text('nnqrxrqmyv');
    table.boolean('unrsxbfocj');
    table.json('meemefffdz');
    table.json('gbuqgkvxiu');
  });
  await knex.schema.alterTable('zntvjnpxgy', function(table) {
    table.timestamp('hmymxamdfl');
    table.string('vyivyjqasf');
    table.integer('gnzrmmyjei');
    table.float('jxiiesntic');
    table.timestamp('jafrnylpuo');
    table.text('oeisqnrwio');
  });
  await knex.schema.alterTable('ioabgnjxwr', function(table) {
    table.integer('ejukxkkqgw');
    table.json('ezsdgaqbgi');
    table.integer('ooxbmtxxkt');
  });
  await knex.schema.alterTable('wpzxzahgno', function(table) {
    table.timestamp('kxjrezayng');
    table.integer('eqrztiafeq');
    table.json('buricrydpj');
    table.text('vlsfdfduqu');
    table.integer('yvkiwcezda');
    table.text('phaknvyfbw');
    table.float('jszvzjydam');
    table.text('qnaunwbehi');
    table.boolean('glfesqgbjy');
  });
  await knex.schema.alterTable('pgpiltlcln', function(table) {
    table.bigInteger('cgacmrjmac');
    table.string('ueaivrpxtl');
    table.boolean('fgipytnxey');
    table.bigInteger('axbladgfxi');
    table.boolean('ayknwkifgg');
    table.timestamp('dyhezmmrhy');
    table.text('fsubimuesk');
  });
  await knex.schema.alterTable('iysrojdnnh', function(table) {
    table.boolean('awhdufbyzq');
    table.integer('vhthwaalcs');
    table.timestamp('psrutufyci');
    table.timestamp('rufjpdnamg');
    table.timestamp('wdtqrjuenh');
    table.text('hoxvhdmwpx');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};