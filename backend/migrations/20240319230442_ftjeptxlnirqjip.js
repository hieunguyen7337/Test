'use strict';

/**
 * Migration: 20240319230442_ftjeptxlnirqjip
 * Description: Please work this time
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('qmornjseqv', function(table) {
    table.float('ildenovtvs');
    table.json('yagzfsvwxs');
    table.integer('ezbdsfalko');
    table.string('qxivslwxxn');
    table.float('rnprvppobj');
    table.timestamp('olgxnphtpk');
    table.integer('rmrhoxnhoy');
  });
  await knex.schema.alterTable('erzjpaqfvh', function(table) {
    table.float('tzaebsttfi');
    table.boolean('hlmpbaqhzw');
    table.json('lgqoyanrms');
    table.text('xorefzvosf');
    table.bigInteger('ycheqtpgwi');
    table.boolean('sskroqopau');
    table.json('wxaovysiae');
    table.json('apqoyahnmx');
  });
  await knex.schema.alterTable('jollrefalt', function(table) {
    table.text('vnclmmqvpu');
    table.timestamp('dluxdvvqcz');
    table.bigInteger('cepejgyuiw');
  });
  await knex.schema.alterTable('jlbhhcmnsm', function(table) {
    table.integer('hueypblgbg');
    table.string('gspuykkels');
    table.boolean('dmxwydyghv');
  });
  await knex.schema.alterTable('bjuxxwiudr', function(table) {
    table.boolean('qptelibgcb');
    table.json('rhafacuyhy');
    table.text('mirgmyzqzz');
    table.float('gvhhvayskl');
    table.json('fdpsozodfa');
  });
  await knex.schema.alterTable('ifxsdsqexe', function(table) {
    table.boolean('dklvasxmuf');
    table.text('zvtspctytj');
    table.json('raexnovtvg');
    table.float('nkavnlhenb');
    table.timestamp('lonnvyrwtw');
    table.boolean('ocwtfsrkdm');
  });
  await knex.schema.alterTable('jppxjwwnwf', function(table) {
    table.boolean('cunhazaial');
    table.bigInteger('zpfarwdnrm');
    table.bigInteger('ljdprcmahc');
    table.bigInteger('kaqgderwuk');
    table.json('qndqkfnfss');
    table.bigInteger('zybhkexkrh');
    table.timestamp('xamisisfti');
    table.json('tfqasxosnr');
    table.string('nkouvemcxr');
  });
  await knex.schema.alterTable('gkxvbspowe', function(table) {
    table.timestamp('saokfpsqla');
    table.float('pudxqatxvo');
    table.integer('hrvaswwzqb');
    table.boolean('uofksavgxf');
    table.boolean('yrkfowhqlq');
    table.string('ucbcyciata');
    table.json('wxsqtouoxh');
    table.float('trvjdxjmrx');
    table.bigInteger('zrsnkgqodo');
    table.integer('knhgpnkfkg');
  });
  await knex.schema.alterTable('wjbhmzomul', function(table) {
    table.text('bkbhrmacce');
    table.timestamp('xxesmmsnrm');
    table.integer('duictgdbbv');
    table.timestamp('kagblbqbnm');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};